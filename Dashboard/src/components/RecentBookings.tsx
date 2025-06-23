import React from 'react'

const RecentBookings = () => {
    const bookings = [
    {
      id: '#RV-1254',
      customer: 'John Smith',
      vehicle: 'Toyota Camry',
      pickup: '2023-06-15',
      return: '2023-06-20',
      status: 'Completed',
      amount: '$320',
    },
    {
      id: '#RV-1253',
      customer: 'Sarah Johnson',
      vehicle: 'Ford Mustang',
      pickup: '2023-06-16',
      return: '2023-06-22',
      status: 'Active',
      amount: '$450',
    },
    {
      id: '#RV-1252',
      customer: 'Michael Brown',
      vehicle: 'Honda Civic',
      pickup: '2023-06-10',
      return: '2023-06-15',
      status: 'Completed',
      amount: '$280',
    },
    {
      id: '#RV-1251',
      customer: 'Emily Davis',
      vehicle: 'Tesla Model 3',
      pickup: '2023-06-18',
      return: '2023-06-25',
      status: 'Active',
      amount: '$520',
    },
    {
      id: '#RV-1250',
      customer: 'Robert Wilson',
      vehicle: 'Chevrolet Tahoe',
      pickup: '2023-06-05',
      return: '2023-06-12',
      status: 'Completed',
      amount: '$680',
    },
  ];

  const getStatusColor = (status) => {
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
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Booking ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehicle</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pickup Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Return Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{booking.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.customer}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.vehicle}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.pickup}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.return}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(booking.status)}`}>
                  {booking.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{booking.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default RecentBookings
