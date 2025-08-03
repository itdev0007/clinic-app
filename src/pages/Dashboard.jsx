import React from 'react'
import { Users, UserCheck, Stethoscope, Calendar, TrendingUp, AlertCircle } from 'lucide-react'

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Patients',
      value: '1,247',
      change: '+12%',
      changeType: 'increase',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      title: 'Today\'s Appointments',
      value: '24',
      change: '+3',
      changeType: 'increase',
      icon: Calendar,
      color: 'bg-green-500'
    },
    {
      title: 'Active Doctors',
      value: '18',
      change: '+2',
      changeType: 'increase',
      icon: Stethoscope,
      color: 'bg-purple-500'
    },
    {
      title: 'Revenue This Month',
      value: '$24,580',
      change: '+8%',
      changeType: 'increase',
      icon: TrendingUp,
      color: 'bg-medical-500'
    }
  ]

  const recentAppointments = [
    { id: 1, patient: 'John Doe', doctor: 'Dr. Smith', time: '09:00 AM', status: 'confirmed' },
    { id: 2, patient: 'Jane Wilson', doctor: 'Dr. Johnson', time: '10:30 AM', status: 'waiting' },
    { id: 3, patient: 'Bob Miller', doctor: 'Dr. Brown', time: '11:15 AM', status: 'in-progress' },
    { id: 4, patient: 'Alice Davis', doctor: 'Dr. Wilson', time: '02:00 PM', status: 'confirmed' },
  ]

  const alerts = [
    { id: 1, message: 'Low inventory: Surgical masks', type: 'warning' },
    { id: 2, message: 'Patient overdue for follow-up: John Smith', type: 'info' },
    { id: 3, message: 'Equipment maintenance due: X-Ray machine', type: 'warning' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <div className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleString()}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.title} className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className={`text-sm ${
                  stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change} from last month
                </p>
              </div>
              <div className={`p-3 rounded-full ${stat.color} bg-opacity-10`}>
                <stat.icon className={`h-6 w-6 ${stat.color.replace('bg-', 'text-')}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Appointments */}
        <div className="card p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Today's Appointments</h2>
          <div className="space-y-3">
            {recentAppointments.map((appointment) => (
              <div key={appointment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{appointment.patient}</p>
                  <p className="text-sm text-gray-600">{appointment.doctor}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{appointment.time}</p>
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                    appointment.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                    appointment.status === 'waiting' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {appointment.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alerts */}
        <div className="card p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Alerts & Notifications</h2>
          <div className="space-y-3">
            {alerts.map((alert) => (
              <div key={alert.id} className={`flex items-start space-x-3 p-3 rounded-lg ${
                alert.type === 'warning' ? 'bg-yellow-50' : 'bg-blue-50'
              }`}>
                <AlertCircle className={`h-5 w-5 mt-0.5 ${
                  alert.type === 'warning' ? 'text-yellow-600' : 'text-blue-600'
                }`} />
                <p className="text-sm text-gray-700">{alert.message}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="btn btn-primary text-center p-4">
            <UserCheck className="h-6 w-6 mx-auto mb-2" />
            Register New Patient
          </button>
          <button className="btn btn-secondary text-center p-4">
            <Calendar className="h-6 w-6 mx-auto mb-2" />
            Schedule Appointment
          </button>
          <button className="btn btn-secondary text-center p-4">
            <TrendingUp className="h-6 w-6 mx-auto mb-2" />
            View Reports
          </button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard