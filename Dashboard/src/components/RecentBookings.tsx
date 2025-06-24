import React from 'react'

interface RecentBookingsProps{
  id: string;
  customer: string;
  vehicle: string;
  pickup: Date;
  return: Date;
  status: string;
  amount: number;
  img: string;
}

const RecentBookings = () => {
    const bookings: RecentBookingsProps[] = [
    {
      id: '#RV-1254',
      customer: 'John Smith',
      vehicle: 'Toyota Camry',
      pickup: new Date("2023-06-18T11:00:00"),
      return: new Date("2023-06-19T11:00:00"),
      status: 'Completed',
      amount: 320,
      img: 'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: '#RV-1253',
      customer: 'Sarah Johnson',
      vehicle: 'Ford Mustang',
      pickup: new Date("2023-06-06T11:00:00"),
      return: new Date("2023-06-12T12:00:00"),
      status: 'Active',
      amount: 450,
      img: 'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: '#RV-1252',
      customer: 'Michael Brown',
      vehicle: 'Honda Civic',
      pickup: new Date("2023-06-18T11:00:00"),
      return: new Date("2023-06-18T11:00:00"),
      status: 'Completed',
      amount: 280,
      img: 'https://t4.ftcdn.net/jpg/06/08/55/73/360_F_608557356_ELcD2pwQO9pduTRL30umabzgJoQn5fnd.jpg'
    },
    {
      id: '#RV-1251',
      customer: 'Emily Davis',
      vehicle: 'Tesla Model 3',
      pickup: new Date("2023-06-18T11:00:00"),
      return: new Date("2023-06-18T11:00:00"),
      status: 'Active',
      amount: 520,
      img: 'https://qph.cf2.quoracdn.net/main-qimg-2b499d1d2c41cfef1e9f98be1172a416-lq'
    },
    {
      id: '#RV-1250',
      customer: 'Robert Wilson',
      vehicle: 'Chevrolet Tahoe',
      pickup: new Date("2023-06-18T11:00:00"),
      return: new Date("2023-06-18T11:00:00"),
      status: 'Completed',
      amount: 680,
      img: 'https://i.pinimg.com/originals/de/72/d1/de72d1c43be3390ce5a29a0b5036b453.jpg'
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'Active':
        return 'bg-blue-100 text-blue-800';
      case 'Cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const timeOptions: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit' };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50 dark:bg-gray-700">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 dark:text-gray-300 uppercase tracking-wider">Customer</th>
            <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 dark:text-gray-300 uppercase tracking-wider">Vehicle</th>
            <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 dark:text-gray-300 uppercase tracking-wider">Pickup Date/Time</th>
            <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 dark:text-gray-300 uppercase tracking-wider">Return Date/Time</th>
            <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 dark:text-gray-300 uppercase tracking-wider">Amount</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-600">
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-500 dark:text-gray-300 hover:underline hover:cursor-pointer">
                <div className='flex items-center'>
                  <img className='rounded-full object-cover w-10 h-10 mr-4' src={booking.img} alt='img'/>
                  {booking.customer}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{booking.vehicle}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{booking.pickup.toLocaleDateString()} {booking.pickup.toLocaleTimeString(undefined, timeOptions)}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{booking.return.toLocaleDateString()} {booking.return.toLocaleTimeString(undefined, timeOptions)}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500 dark:text-gray-300">Rs.{booking.amount}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(booking.status)}`}>
                  {booking.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default RecentBookings
