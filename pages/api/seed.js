import db from '../../utils/db';
import User from '../../models/User';
import data from '../../utils/data';
import Product from '../../models/Product';
import Session from '../../models/Session';

const handler = async (req, res) => {
  await db.connect();
  await User.deleteMany();
  await Session.deleteMany();
  await Session.insertMany(data.sessions);
  await User.insertMany(data.users);
  await Product.deleteMany();
  await Product.insertMany(data.products);
  await db.disconnect();
  res.send({ message: 'seeded successfuly' });
};

export default handler;
