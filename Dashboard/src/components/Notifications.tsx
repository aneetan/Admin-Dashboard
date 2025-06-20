import React, { useState } from 'react';
import { IoNotifications, IoNotificationsOutline } from "react-icons/io5";

interface NotificationProps {
    id: number;
    user: string;
    message: string;
    time: string;
    profile: string;
    read: boolean;
}

const Notifications = () => {
    const [notificationOpen, setNotificationOpen] = useState<boolean>(false);
    const [notifications, setNotifications] = useState<NotificationProps[]>([
        {
            id: 1,
            user: 'John Doe',
            message: 'Liked your post',
            time: '2 mins ago',
            profile: 'https://randomuser.me/api/portraits/men/1.jpg',
            read: false
        },
        {
            id: 2,
            user: 'Jane Smith',
            message: 'Commented on your photo',
            time: '1 hour ago',
            profile: 'https://randomuser.me/api/portraits/women/1.jpg',
            read: false
        },
        {
            id: 3,
            user: 'Mike Johnson',
            message: 'Shared your article',
            time: '3 days ago',
            profile: 'https://randomuser.me/api/portraits/men/2.jpg',
            read: true
        }
    ]);

    const toggleNotifications = () => {
        setNotificationOpen(!notificationOpen);
        if (!notificationOpen) {
            setNotifications(notifications.map(notification => ({
                ...notification,
                read: true
            })));
        }
    };

    const unreadCount = notifications.filter(n => n.read === false).length;

    return (
        <div className="relative">
            <button
                onClick={toggleNotifications}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 cursor-pointer relative"
                aria-label="Notifications"
            >
                    <IoNotifications className="w-6 h-6" />
                
                {unreadCount > 0 && (
                    <div className="absolute top-0 right-0 w-5 h-5 bg-red-500 border-2 border-white dark:border-gray-800 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-white">
                            {unreadCount}
                        </span>
                    </div>
                )}
            </button>

            {notificationOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50 border border-gray-200 dark:border-gray-700">
                    <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                        <h3 className="font-medium text-gray-900 dark:text-white">Notifications</h3>
                        {notifications.length > 0 && (
                            <button 
                                className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
                                onClick={() => setNotifications([])}
                            >
                                Clear all
                            </button>
                        )}
                    </div>

                    {notifications.length > 0 ? (
                        <div className="divide-y divide-gray-200 dark:divide-gray-700 max-h-96 overflow-y-auto">
                            {notifications.map(notification => (
                                <div 
                                    key={notification.id} 
                                    className={`px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 ${!notification.read ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`}
                                >
                                    <div className="flex items-start">
                                        <img 
                                            src={notification.profile} 
                                            alt={notification.user}
                                            className="w-10 h-10 rounded-full mr-3 object-cover"
                                        />
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                                                {notification.user}
                                            </p>
                                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                                {notification.message}
                                            </p>
                                            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                                                {notification.time}
                                            </p>
                                        </div>
                                        {!notification.read && (
                                            <div className="ml-2">
                                                <span className="h-2 w-2 rounded-full bg-blue-500 inline-block"></span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="py-4 text-center">
                            <p className="text-gray-500 dark:text-gray-400">No new notifications</p>
                        </div>
                    )}

                    {notifications.length > 0 && (
                        <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-700 text-center">
                            <a 
                                href="#" 
                                className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                            >
                                View all notifications
                            </a>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Notifications;