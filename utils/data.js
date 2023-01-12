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
      name: 'Nice shirt',
      slug: 'free-shirt',
      category: 'shirts',
      image: '/images/shirt1.jpg',
      price: 70,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: 'A popular shirt',
    },
    {
      name: 'Slim shirt',
      slug: 'fit-shirt',
      category: 'shirts',
      image: '/images/shirt2.jpg',
      price: 70,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: 'A popular shirt',
    },
    {
      name: 'Slim plants',
      slug: 'slim-pants',
      category: 'shirts',
      image: '/images/pants1.jpg',
      price: 90,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: 'A popular shirt',
    },
    {
      name: 'Skinny Pants',
      slug: 'skinny-pants',
      category: 'shirts',
      image: '/images/pants2.jpg',
      price: 90,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: 'A popular shirt',
    },
  ],
};

export default data;
