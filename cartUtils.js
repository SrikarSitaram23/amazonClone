// Sample product data
const products = [
    { id: 1, title: "Sofas & Sectionals", price: 129899 },
    { id: 2, title: "Coffee Tables", price: 34900 },
    { id: 3, title: "Bookshelves", price: 7999 },
    { id: 4, title: "Shoe Racks", price: 999 },
    { id: 5, title: "Beds (King, Queen, Single)", price: 69999 },
    { id: 6, title: "Wardrobes", price: 29699 },
    { id: 7, title: "Dining Chairs", price: 16860 },
    { id: 8, title: "Computer Desks", price: 12690 },
    { id: 9, title: "Face Cream", price: 299 },
    { id: 10, title: "Matte Lipstick Set (6 Shades)", price: 499 },
    { id: 11, title: "Waterproof Liquid Eyeliner", price: 199 },
    { id: 12, title: "Daily Moisturizer (100ml)", price: 249 },
    { id: 13, title: "Vitamin C Face Serum", price: 699 },
    { id: 14, title: "Herbal Nourishing Shampoo (250ml)", price: 189 },
    { id: 15, title: "Nail Paint Combo (Set of 5)", price: 349 },
    { id: 16, title: "Oil Control Compact Powder", price: 259 },
    { id: 17, title: "Gentle Face Wash (150ml)", price: 179 },
    { id: 18, title: "Micellar Makeup Remover (100ml)", price: 229 },
    { id: 19, title: "Men's T-shirts (Pack of 4)", price: 1299 },
    { id: 20, title: "Trousers (2 Pc)", price: 3499 },
    { id: 21, title: "Jackets & Coats", price: 4999 },
    { id: 22, title: "Ethnic Wear", price: 6969 },
    { id: 23, title: "Leggings & Palazzos(Pack of 3)", price: 899 },
    { id: 24, title: "School Uniforms", price: 2125 },
    { id: 25, title: "Seasonal Wear", price: 1650 },
    { id: 26, title: "Casual Shoes", price: 1550 },
    { id: 27, title: "Sandals", price: 650 },
    { id: 28, title: "Sneakers", price: 4250 },
    { id: 29, title: "Caps and Hats", price: 220 },
    { id: 30, title: "Smartphones (Android, iPhone)", price: 29899 },
    { id: 31, title: "Tablets & iPads", price: 49900 },
    { id: 32, title: "Smartwatches", price: 7999 },
    { id: 33, title: "Laptops & Desktops", price: 99999 },
    { id: 34, title: "Keyboards & Mice", price: 69999 },
    { id: 35, title: "External Hard Drives & SSDs", price: 6699 },
    { id: 36, title: "USB Hubs & Cables", price: 16860 },
    { id: 37, title: "Webcams", price: 2690 },
    { id: 38, title: "Laptop Bags", price: 1690 },
    { id: 39, title: "Bluetooth Speakers", price:  10690},
    { id: 40, title: "Smart TVs", price: 92699 },
    { id: 41, title: "Streaming Devices", price: 15690 },
    { id: 42, title: "Action Cameras (GoPro)", price: 125690 },
    { id: 43, title: "Gaming Controllers", price: 7690 },
    { id: 44, title: "VR Headsets", price: 18690 },
    { id: 45, title: "Hair Dryers", price: 2690 },
    { id: 46, title: "Electric Kettles", price: 1199 },
    { id: 47, title: "Trimmers & Shavers", price: 1599 },
    { id: 48, title: "Women's Floral Dress", price: 2499 },
    { id: 49, title: "Men's Slim Fit Shirt", price: 999 },
    { id: 50, title: "Women's Jumpsuit", price: 1799 },
    { id: 51, title: "Men's Casual Jeans", price: 1299 },
    { id: 52, title: "Women's A-Line Skirt", price: 899 },
    { id: 53, title: "Men's Graphic T-shirt", price: 799 },
    { id: 54, title: "Women's Silk Scarf", price: 649 },
    { id: 55, title: "Men's Stylish Sunglasses", price: 1299 },
    { id: 56, title: "Men's Stylish Watces", price: 6299 },
    { id: 57, title: "Medicines (Pack of 4)", price: 129 },
    { id: 58, title: "Supplements (1 Pc)", price: 349 },
    { id: 59, title: "Wellness Devices", price: 999 },
    { id: 60, title: "Personal Hygiene", price: 99 },
    { id: 61, title: "Sanitizers & Disinfectants", price: 69 },
    { id: 62, title: "Eye Drops & Eye Wash", price: 225 },
    { id: 63, title: "Pain Relief Products", price:160  },
    { id: 64, title: "Face Masks Relief Products", price: 160 },
    { id: 65, title: "Digital Thermometers", price: 799 },
    { id: 66, title: "Glucometers", price: 1600 },
    { id: 67, title: "Oximeters", price: 1300 },
    { id: 68, title: "Weighing Scales", price: 1990 },
    { id: 69, title: "Knee Caps & Wrist Supports", price: 500 },
    { id: 70, title: "Back Braces", price: 460 },
    { id: 71, title: "Nebulizers", price: 1660 },
    { id: 72, title: "Rechargeable Remote Control Car", price: 1250 },
    { id: 73, title: "Lego Creative Building Blocks (500 Pc)", price: 2199 },
    { id: 74, title: "Fashion Doll Set with Accessories", price: 850 },
    { id: 75, title: "Wooden Puzzle Board for Kids", price: 599 },
    { id: 76, title: "Plush Soft Toys Combo (Pack of 3)", price: 999 },
    { id: 77, title: "Kids Educational Tablet Toy", price: 1399 },
    { id: 78, title: "Mini Kitchen Cooking Set for Kids", price: 1150 },
    { id: 79, title: "Interactive Robot Toy with Lights & Sounds", price: 1899 },
    { id: 80, title: "Premium Dry Dog Food (10kg)", price: 1899 },
    { id: 81, title: "Natural Clumping Cat Litter (5kg)", price: 749 },
    { id: 82, title: "Aloe Vera Pet Shampoo", price:299  },
    { id: 83, title: "Interactive Pet Toys Set (5 Pc)", price: 599 },
    { id: 84, title: "Soft Round Pet Bed (Medium)", price: 1150 },
    { id: 85, title: "Cage (Medium)", price: 7150 },
    { id: 86, title: "Collar and Leash", price: 950 },
    { id: 87, title: "Grooming Supplies", price: 680 },
    { id: 88, title: "Cat Toys", price: 2359 },
  ];
  
  // Add product to cart
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
  
    let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    const existingProductIndex = cart.findIndex(item => item.id === productId);
  
    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
  
    sessionStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
  }
  // Update the cart count display in the navbar
  function updateCartCount() {
    const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
      cartCountElement.textContent = count;
    }
  }
  
  // Add event listeners to all Add to Cart buttons
  function attachAddToCartListeners() {
    document.querySelectorAll('.add-cart').forEach(button => {
      button.addEventListener('click', () => {
        const productId = parseInt(button.getAttribute('data-id'));
        addToCart(productId);
      });
    });
  }
  