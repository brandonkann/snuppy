import bcyrpt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Brandon',
      email: 'admin@example.com',
      password: bcyrpt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'claire',
      email: 'claire@example.com',
      password: bcyrpt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Math 8-10',
      slug: 'math8-10',
      category: 'Math',
      image: '/images/grade8.jpg',
      price: 35,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: 'Grade 8 Math to Grade 10 Math',
      isFeatured: true,
      banner: '/images/banner1.png'
    },
    {
      name: 'Grade 11-12',
      slug: 'math11-12',
      category: 'Math',
      image: '/images/grade11.jpg',
      price: 40,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: 'A popular shirt',
      isFeatured: true,
      banner: '/images/banner2.png'
    },
    {
      name: 'New Coder',
      slug: 'new-coder',
      category: 'shirts',
      image: '/images/novice.jpg',
      price: 40,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: 'A popular shirt',
   
    },
    {
      name: 'Intermediate Coder',
      slug: 'intermediate-coder',
      category: 'shirts',
      image: '/images/intermediate.jpg',
      price: 45,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: 'An intermediate coder course',
    },

  ],
};

export default data;
