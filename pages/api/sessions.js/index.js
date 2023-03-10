import Session from "../../../models/Product";
import db from "../../../utils/db"

const handler = async (req, res) => {
    await db.connect();
    const session = await Session.find({});
    // find all documents named john and at least 18
// await MyModel.find({ name: 'john', age: { $gte: 18 } }).exec();
    await db.disconnect();
    res.send(session);
}

export default handler;
