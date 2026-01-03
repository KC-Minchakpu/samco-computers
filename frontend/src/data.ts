import { type Product } from './types/Product'

export const sampleProducts: Product[] = [
  {
    name: 'HP EliteBook 840 G7',
    slug: 'HP-EliteBook-840-G7',
    image: '/images/hp-elitebook-840-g7.png',
    category: 'Laptops',
    brand: 'HP',
    price: 1299.99,
    description:
      'Easy to carry from meeting to meeting, the ultrathin and light 14-inch diagonal HP EliteBook 840 G7 Certfified Refrubished PC boasts an 85-percent screen-to-body ratio. It also includes a new keyboard and clickpad that are quiet and comfortable to work on.',
    rating: 4.5,
    numReviews: 120,
    countInStock: 10,
  },
  {
    name: 'Dell Inspiron 15',
    slug: 'Dell-Inspiron-15',
    image: '/images/dell-inspiron-15.avif',
    category: 'Laptops',
    brand: 'Dell',
    price: 1_895_250,
    description:
      'The Dell Inspiron 15 is a versatile, mid-range laptop designed for students, home office workers, and everyday users who need a balance of performance and value. It is widely recognized for its practical design and reliable build quality.',
    rating: 4.2,
    numReviews: 80,
    countInStock: 15,
  },
  {
    name: 'Acer Aspire Intel',
    slug: 'Acer-Aspire-15',
    image: '/images/acer-aspire-15.png',
    category: 'Laptops',
    brand: 'Acer',
    price: 1_895_250,
    description:
      'Embrace versatility with the feature packed Acer Aspire laptops. Powered by up to Intel® Core™ Ultra 7 processors and up to NVIDIA® GeForce RTX™ graphics, they’re well equipped to manage a wide range of tasks with ease.',
    rating: 4.2,
    numReviews: 80,
    countInStock: 15,
  },
  {
    name: 'Apple MacBook Pro 16',
    slug: 'Apple-MacBook-Pro-16',
    image: '/images/macbook-pro-16.png',
    category: 'Laptops',
    brand: 'Apple',
    price: 2499.99,
    description:
      'Experience pro-level performance with the 16-inch MacBook Pro in Space Black. This powerhouse features the Apple M4 Pro chip (14-core CPU, 20-core GPU) and 24GB of unified memory for seamless multitasking and demanding workflows.',
    rating: 4.8,
    numReviews: 200,
    countInStock: 5,
  },
]
