import React, { useState } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import FullCalendar from '@fullcalendar/react';
import daygrid from '@fullcalendar/daygrid';
import interaction from '@fullcalendar/interaction';
import db from '../utils/db';
import Session from '../models/Session';
import Pagination from '../components/Pagination';

export default function SessionsScreen({sessions, calendarSessions})  {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const onPageChange = (page) => {
    setCurrentPage(page)
  }
    console.log(sessions)
  const order = []

  
    const handleDateClick = (args) => {
      alert(args.dateStr)
    }
  return (
    <Layout>
      <FullCalendar plugins={[daygrid, interaction]}
      height={500}
      initialView="dayGridMonth"
      weekends={true}
      events={
        calendarSessions
      }
     
      dateClick= {handleDateClick}/>
      <div className="overflow-x-auto p-3 border-2 mt-2">
        <table className="min-w-full">
          <thead className="border-b">
            <tr>
              <th className="px-5 text-left">Student</th>
              <th className="px-5 text-left">Date of Class</th>
              <th className="px-5 text-left">Subject</th>
              <th className="px-5 text-left">Attended</th>
              <th className="px-5 text-left">Paid</th>
            </tr>
          </thead>

          <tbody>

            
            {sessions.map((session) => (
              <tr key={order._id} className="border-b">
                <td className="p-5">{session.student}</td>
                <td className="p-5">{session.date.substring(0, 10)}</td>
                <td className="p-5">{session.subject}</td>
                <td className="p-5">
                  {session.attended ?
                  'Attended' :
                  'Not attended'}
                </td>
                <td className="p-5">
                  {session.isPaid
                    ? 'paid'
                    : 'not paid'}
                </td>
                <td className="p-5">
                  {/* This will open a modal */}
                  <Link href="/">Details</Link>
                  {/* <Link href={`/order/${order._id}`} passHref>
                    Details
                  </Link> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
       items={sessions.length} // 100
       currentPage={currentPage} // 1
       pageSize={pageSize} // 10
       onPageChange={onPageChange}
        />
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const calendarSessions = []
  
  await db.connect();
  const sessions = await Session.find({}).lean();
  for (var i = 0; i < sessions.length; i++) {

    let newDateFormat = new Date(sessions[i].date).toISOString();
    let sessionObj = {
      title: sessions[i].student,
      date: newDateFormat
    }
    calendarSessions.push(sessionObj);
  }
  return {
    props: {
      sessions: sessions.map(db.convertDocToObj),
      calendarSessions
    },
  };
}
