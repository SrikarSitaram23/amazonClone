const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const Order = require('./models/Order');
const nodemailer = require('nodemailer');
const otpStore = new Map(); 

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
/*console.log("About to use users route...");*/
app.use(cors());
//console.log("About to use users route...");
app.use(bodyParser.json());
//console.log("About to use users route...");
app.use(express.static(path.join(__dirname, '..', 'frontend'))); // Serve static frontend
app.use(express.json());


// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/amazonClone', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log('MongoDB connection error:', err));

// Routes

// User Registration Route
app.post('/api/register', async (req, res) => {
const { email, username, phone, password, gender, age } = req.body;

try {
const existingUser = await User.findOne({ email });
if (existingUser) return res.status(400).json({ error: 'Email already registered' });

const newUser = new User({ email, username, phone, password, gender, age });
await newUser.save();
res.status(201).json({ message: 'User registered successfully!' });


} catch (error) {
console.error('Registration error:', error);
res.status(500).json({ error: 'Registration failed' });
}
});

// User Login Route
app.post('/api/login', async (req, res) => {
const { email, password } = req.body;

try {
const user = await User.findOne({ email });
if (!user) return res.status(401).json({ error: 'Invalid email or password' });

const isMatch = await bcrypt.compare(password, user.password);
if (!isMatch) return res.status(401).json({ error: 'Invalid email or password' });

res.json({ message: 'Login successful', userId: user._id, username: user.username });


} catch (error) {
console.error('Login error:', error);
res.status(500).json({ error: 'Login failed' });
}
});

// Order Submission Route
app.post('/api/submit-order', async (req, res) => {
  const { name, address, contact } = req.body;

  if (!name || !address || !contact) {
    return res.status(400).json({ message: 'Missing fields' });
  }

  try {
    // Save to DB (replace with actual save logic)
    await Order.create({ name, address, contact });

    res.status(200).json({ message: 'Order submitted successfully!' });
  } catch (error) {
    console.error('Order submission error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});


// Fallback to index.html for frontend routing
app.get('/', (req, res) => {
console.log('Fallback route hit');
res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
}

// Send OTP
app.post('/api/send-otp', async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: 'Email is required' });
  const otp = generateOTP();
  const expires = Date.now() + 5 * 60 * 1000; // OTP expires in 5 minutes
  otpStore.set(email, { otp, expires }); // Store OTP in memory for validation

  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'ksrikarsitaram@gmail.com',
        pass: 'waef vgmw nisd bdmu'
      },
      debug: true, // Enable debugging
      logger: true
    });
    

    await transporter.sendMail({
      from: 'ksrikarsitaram@gmail.com',
      to: email,
      subject: 'Your OTP for Signup',
      text: `Your OTP is: ${otp}`
    });

    res.status(200).json({ message: 'OTP sent' });
  } catch (err) {
    console.log('Error is', err); // Log detailed error
    res.status(500).json({ error: 'Failed to send OTP' });
  }
});

// Verify OTP'Error sending OTP:', err)
app.post('/api/verify-otp', (req, res) => {
  const { email, otp } = req.body;
  const record = otpStore.get(email);
  if (!record) return res.status(400).json({ error: 'No OTP sent for this email' });

  if (Date.now() > record.expires) {
    otpStore.delete(email);
    return res.status(400).json({ error: 'OTP expired' });
  }

  if (record.otp !== otp) return res.status(400).json({ error: 'Invalid OTP' });

  otpStore.delete(email);
  res.json({ message: 'OTP verified successfully' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);

});