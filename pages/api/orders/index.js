import { getSession } from "next-auth/react";
import db from "../../../utils/db"
import Order from "../../../models/Order";

const handler = async (req, res) => {
    console.log(req.body)
    const session = await getSession({req});
    if (!session) {
        return res.status(401).send('signin required')
    }
    const {user} = session;
    console.log(user._id)
    await db.connect();
    const newOrder = new Order({
        ...req.body,
        user: user._id 
    })
    const order = await newOrder.save();
    res.status(201).send(order);
}

export default handler;
