import { BookingTrendsChart, RentalDurationChart, RevenueChart, VehicleStatusChart } from "../components/Charts";
import RecentBookings from "../components/RecentBookings";
import StatsCard from "../components/StatsCard";

const Dashboard = () => {
  return (
    <div className="p-2 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-3 dark:text-gray-50">Dashboard</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="Total Revenue" 
          value="Rs.2,459"
          change="+12.5%"
          isPositive={true} 
          icon="💰"
        />
        <StatsCard 
          title="Active Rentals" 
          value="48" 
          change="+4.2%" 
          isPositive={true}
          icon="🚗"
        />
        <StatsCard 
          title="Active Vehicles" 
          value="32"
          change="-2.3%" 
          isPositive= {false}
          icon="🅿️"
        />
        <StatsCard 
          title="Requests" 
          value="18"
          change="+15.8%" 
          isPositive={true}
          icon="📅"
        />
      </div>

      {/* Main Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-600 p-6 rounded-xl shadow-sm">
          <h2 className="text-xl dark:text-gray-200 font-semibold text-gray-700 mb-4">Revenue Overview</h2>
          <RevenueChart />
        </div>
        <div className="bg-white dark:bg-gray-600 p-6 items-center rounded-xl shadow-sm">
          <h2 className="text-xl dark:text-gray-200 font-semibold text-gray-700 mb-4">Vehicle Status</h2>
          <div className="h-[300px] w-full pl-12">
                    <VehicleStatusChart />
        </div>
        </div>
        
      </div>

      {/* Secondary Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-600 p-6 rounded-xl shadow-sm">
          <h2 className="text-xl dark:text-gray-200 font-semibold text-gray-700 mb-4">Booking Trends</h2>
          <BookingTrendsChart />
        </div>
        <div className="bg-white dark:bg-gray-600 p-6 rounded-xl shadow-sm">
          <h2 className="text-xl dark:text-gray-200 font-semibold text-gray-700 mb-4">Rental Duration</h2>
          <RentalDurationChart/>
        </div>
      </div>

      {/* Recent Bookings Table */}
      <div className="bg-white dark:bg-gray-600 p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">Recent Bookings</h2>
        <RecentBookings />
      </div>
    </div>
  );
};

export default Dashboard;