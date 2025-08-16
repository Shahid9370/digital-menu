const mockItems = [
  // ---------------- Veg Starters ----------------
  {
    id: 1,
    name: 'Paneer Tikka',
    category: 'Starters',
    price: '₹180',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Panir_Tikka_Indian_cheese_grilled.jpg/250px-Panir_Tikka_Indian_cheese_grilled.jpg',
    description: 'Marinated paneer cubes grilled to perfection.',
    vegetarian: true,
  },
  {
    id: 2,
    name: 'Spring Rolls',
    category: 'Starters',
    price: '₹150',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Spring_Rolls_%283357696061%29.jpg/330px-Spring_Rolls_%283357696061%29.jpg',
    description: 'Crispy rolls stuffed with vegetables, served with dip.',
    vegetarian: true,
  },
  {
    id: 3,
    name: 'Aloo Tikki Chaat',
    category: 'Starters',
    price: '₹90',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Dahi_puri%2C_Doi_phuchka.jpg/960px-Dahi_puri%2C_Doi_phuchka.jpg',
    description: 'Crispy potato patties topped with chutneys and curd.',
    vegetarian: true,
  },

  // ---------------- Non-Veg Starters ----------------
  {
    id: 4,
    name: 'Chicken Tandoori',
    category: 'Starters',
    price: '₹220',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tandoorimumbai.jpg',
    description: 'Juicy chicken pieces roasted in tandoor.',
    vegetarian: false,
  },
  {
    id: 5,
    name: 'Prawn Tempura',
    category: 'Starters',
    price: '₹320',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Sushi_platter.jpg/330px-Sushi_platter.jpg',
    description: 'Japanese style deep-fried prawns.',
    vegetarian: false,
  },

  // ---------------- Indian Mains (Veg) ----------------
  {
    id: 6,
    name: 'Masala Dosa',
    category: 'Mains',
    price: '₹120',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Masala_dosa1.jpg/250px-Masala_dosa1.jpg',
    description: 'Crispy dosa filled with potato masala, served with chutneys.',
    vegetarian: true,
  },
  {
    id: 7,
    name: 'Rajma Chawal',
    category: 'Mains',
    price: '₹150',
    image: 'https://www.secondrecipe.com/wp-content/uploads/2017/08/rajma-chawal-1.jpg',
    description: 'Red kidney beans curry served with rice.',
    vegetarian: true,
  },
  {
    id: 8,
    name: 'Palak Paneer',
    category: 'Mains',
    price: '₹200',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Palakpaneer_Rayagada_Odisha_0009.jpg/800px-Palakpaneer_Rayagada_Odisha_0009.jpg',
    description: 'Spinach puree cooked with cottage cheese cubes.',
    vegetarian: true,
  },

  // ---------------- Indian Mains (Non-Veg) ----------------
  {
    id: 9,
    name: 'Chicken Biryani',
    category: 'Mains',
    price: '₹250',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/%22Hyderabadi_Dum_Biryani%22.jpg/250px-%22Hyderabadi_Dum_Biryani%22.jpg',
    description: 'Fragrant basmati rice with chicken and spices.',
    vegetarian: false,
  },
  {
    id: 10,
    name: 'Butter Chicken',
    category: 'Mains',
    price: '₹280',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Butter_Chicken_%26_Butter_Naan_-_Home_-_Chandigarh_-_India_-_0006.jpg/250px-Butter_Chicken_%26_Butter_Naan_-_Home_-_Chandigarh_-_India_-_0006.jpg',
    description: 'Creamy tomato gravy with tender chicken pieces.',
    vegetarian: false,
  },
  {
    id: 11,
    name: 'Mutton Rogan Josh',
    category: 'Mains',
    price: '₹350',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Rogan_Josh_Kashmiri.jpg/330px-Rogan_Josh_Kashmiri.jpg',
    description: 'Kashmiri style mutton curry with rich spices.',
    vegetarian: false,
  },

  // ---------------- International Mains ----------------
  {
    id: 12,
    name: 'Margherita Pizza',
    category: 'Mains',
    price: '₹300',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Pizza_Margherita_stu_spivack.jpg/250px-Pizza_Margherita_stu_spivack.jpg',
    description: 'Classic Italian pizza with tomato, mozzarella & basil.',
    vegetarian: true,
  },
  {
    id: 13,
    name: 'Spaghetti Bolognese',
    category: 'Mains',
    price: '₹400',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Tagliatelle_al_rag%C3%B9_%28image_modified%29.jpg/250px-Tagliatelle_al_rag%C3%B9_%28image_modified%29.jpg',
    description: 'Italian pasta with minced meat and tomato sauce.',
    vegetarian: false,
  },
  {
    id: 14,
    name: 'Sushi Platter',
    category: 'Mains',
    price: '₹500',
    image: 'data:image/jpeg;base64,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',
    description: 'Assorted Japanese sushi rolls and nigiri.',
    vegetarian: false,
  },

  // ---------------- Desserts ----------------
  {
    id: 15,
    name: 'Gulab Jamun',
    category: 'Desserts',
    price: '₹80',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/KalaJamoon.JPG/800px-KalaJamoon.JPG',
    description: 'Soft milk dumplings soaked in sugar syrup.',
    vegetarian: true,
  },
  {
    id: 16,
    name: 'Rasgulla',
    category: 'Desserts',
    price: '₹90',
    image: 'https://prashantcorner.com/cdn/shop/products/RASGULLA_2457ea2c-400a-4130-b540-b77966e63d07.jpg?v=1673073151',
    description: 'Spongy chhena balls in light syrup.',
    vegetarian: true,
  },
  {
    id: 17,
    name: 'Chocolate Brownie',
    category: 'Desserts',
    price: '₹120',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPdCU736BBZWKi_kaT7lUyvoJNA26HQr__Hw&s',
    description: 'Rich chocolate brownie served with ice cream.',
    vegetarian: true,
  },
  {
    id: 18,
    name: 'Cheesecake',
    category: 'Desserts',
    price: '₹250',
    image: 'https://www.jocooks.com/wp-content/uploads/2018/11/cheesecake-1-22.jpg',
    description: 'Creamy New York style cheesecake.',
    vegetarian: true,
  },

  // ---------------- Beverages ----------------
  {
    id: 19,
    name: 'Masala Chai',
    category: 'Beverages',
    price: '₹40',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVTOSeLTN095SnjjtzjABmQrQ6ve8q-iWaQA&s',
    description: 'Indian spiced tea with milk and herbs.',
    vegetarian: true,
  },
  {
    id: 20,
    name: 'Cold Coffee',
    category: 'Beverages',
    price: '₹90',
    image: 'https://www.milkmaid.in/sites/default/files/2024-05/Cold-Coffee-335x300.jpg',
    description: 'Chilled coffee with milk and ice cream topping.',
    vegetarian: true,
  },
  {
    id: 21,
    name: 'Sweet Lassi',
    category: 'Beverages',
    price: '₹70',
    image: 'https://masalaandchai.com/wp-content/uploads/2022/01/Sweet-Rose-Lassi.jpg',
    description: 'Punjabi yogurt-based sweet drink.',
    vegetarian: true,
  },
  {
    id: 22,
    name: 'Virgin Mojito',
    category: 'Beverages',
    price: '₹150',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8IvQn0N10YwHXL-S_OeAjK-CysTa6xWe6jQ&s',
    description: 'Refreshing mint, lemon and soda mocktail.',
    vegetarian: true,
  },
  {
    id: 23,
    name: 'Beer (Kingfisher)',
    category: 'Beverages',
    price: '₹200',
    image: 'https://assets.thehansindia.com/h-upload/2025/01/08/1513274-kingfisher-beer-off-shelves-in-telangana-as-beer-maker-united-breweries-halts-supply.webp',
    description: 'Chilled Indian lager beer.',
    vegetarian: true,
  },
  {
    id: 24,
    name: 'Red Wine',
    category: 'Beverages',
    price: '₹500',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzfB-E-SR8iXAvLewfj-NMjurcc7oqLSIrUw&s',
    description: 'Classic red wine served chilled.',
    vegetarian: true,
  },
];

export const getItems = async () => {
  console.log('Returning mockItems:', mockItems);
  return mockItems;
};

export const getItemById = async (id) => {
  console.log('Finding item by id:', id);
  return mockItems.find((item) => item.id === id);
};
