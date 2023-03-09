import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

export default function SessionsScreen() {
    const orders = [

    ]
  return (
    <Layout>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="border-b">
            <tr>
              <th className="px-5 text-left">ID</th>
              <th className="px-5 text-left">Date</th>
              <th className="px-5 text-left">Total</th>
              <th className="px-5 text-left">Paid</th>
              <th className="px-5 text-left">Delivered</th>
              <th className="px-5 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order._id} className="border-b">
                <td className="p-5">{order._id.substring(20, 24)}</td>
                <td className="p-5">{order.createdAt.substring(0, 10)}</td>
                <td className="p-5">${order.totalPrice}</td>
                <td className="p-5">
                  {order.isPaid
                    ? `${order.paidAt.substring(0, 10)}`
                    : 'not paid'}
                </td>
                <td className="p-5">
                  {order.isDelivered
                    ? `${order.deliveredAt.substring(0, 10)}`
                    : 'not delivered'}
                </td>
                <td className="p-5">
                  <Link href={`/order/${order._id}`} passHref>
                    Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
