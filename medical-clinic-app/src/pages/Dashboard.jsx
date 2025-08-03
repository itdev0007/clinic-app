import { 
  UserGroupIcon, 
  UserIcon, 
  CalendarIcon, 
  CurrencyDollarIcon,
  ChartBarIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

const Dashboard = () => {
  const stats = [
    { 
      name: 'Total Patients', 
      value: '2,847', 
      icon: UserGroupIcon, 
      change: '+12%', 
      changeType: 'increase' 
    },
    { 
      name: 'Active Doctors', 
      value: '24', 
      icon: UserIcon, 
      change: '+2', 
      changeType: 'increase' 
    },
    { 
      name: 'Today\'s Appointments', 
      value: '68', 
      icon: CalendarIcon, 
      change: '+5%', 
      changeType: 'increase' 
    },
    { 
      name: 'Monthly Revenue', 
      value: '$89,400', 
      icon: CurrencyDollarIcon, 
      change: '+18%', 
      changeType: 'increase' 
    },
  ]

  const recentAppointments = [
    { id: 1, patient: 'John Doe', doctor: 'Dr. Smith', time: '09:00 AM', status: 'Confirmed' },
    { id: 2, patient: 'Jane Smith', doctor: 'Dr. Johnson', time: '10:30 AM', status: 'In Progress' },
    { id: 3, patient: 'Mike Wilson', doctor: 'Dr. Brown', time: '11:15 AM', status: 'Waiting' },
    { id: 4, patient: 'Sarah Davis', doctor: 'Dr. Wilson', time: '02:00 PM', status: 'Confirmed' },
  ]

  const quickActions = [
    { name: 'Register New Patient', href: '/patient-register', icon: UserGroupIcon, color: 'bg-blue-500' },
    { name: 'Schedule Appointment', href: '/services/appointments', icon: CalendarIcon, color: 'bg-green-500' },
    { name: 'View Reports', href: '/reports', icon: ChartBarIcon, color: 'bg-purple-500' },
    { name: 'Manage Doctors', href: '/doctors', icon: UserIcon, color: 'bg-orange-500' },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening at your clinic today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div key={item.name} className="card">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <item.icon className="h-8 w-8 text-primary-600" aria-hidden="true" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">{item.value}</div>
                    <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                      item.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {item.change}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <div className="card">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            {quickActions.map((action) => (
              <a
                key={action.name}
                href={action.href}
                className="group relative rounded-lg p-6 bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200"
              >
                <div>
                  <span className={`rounded-lg inline-flex p-3 ${action.color} text-white`}>
                    <action.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-4">
                  <h3 className="text-sm font-medium text-gray-900 group-hover:text-primary-600">
                    {action.name}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Recent Appointments */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Today's Appointments</h3>
            <ClockIcon className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-3">
            {recentAppointments.map((appointment) => (
              <div key={appointment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{appointment.patient}</p>
                  <p className="text-sm text-gray-500">{appointment.doctor}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-gray-500">{appointment.time}</span>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    appointment.status === 'Confirmed' ? 'bg-green-100 text-green-800' :
                    appointment.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {appointment.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard