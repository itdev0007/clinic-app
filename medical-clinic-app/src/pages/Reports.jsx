import { useState } from 'react'
import { 
  ChartBarIcon, 
  CalendarIcon, 
  CurrencyDollarIcon, 
  UserGroupIcon,
  DocumentArrowDownIcon,
  ClockIcon,
  TrendingUpIcon,
  TrendingDownIcon
} from '@heroicons/react/24/outline'

const Reports = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month')
  const [selectedReport, setSelectedReport] = useState('overview')

  const periods = [
    { value: 'week', label: 'This Week' },
    { value: 'month', label: 'This Month' },
    { value: 'quarter', label: 'This Quarter' },
    { value: 'year', label: 'This Year' }
  ]

  const reportTypes = [
    { id: 'overview', name: 'Overview', icon: ChartBarIcon },
    { id: 'financial', name: 'Financial', icon: CurrencyDollarIcon },
    { id: 'patients', name: 'Patients', icon: UserGroupIcon },
    { id: 'appointments', name: 'Appointments', icon: CalendarIcon }
  ]

  const overviewStats = [
    {
      name: 'Total Revenue',
      value: '$89,400',
      change: '+18%',
      changeType: 'increase',
      icon: CurrencyDollarIcon
    },
    {
      name: 'New Patients',
      value: '284',
      change: '+12%',
      changeType: 'increase',
      icon: UserGroupIcon
    },
    {
      name: 'Appointments',
      value: '1,247',
      change: '+8%',
      changeType: 'increase',
      icon: CalendarIcon
    },
    {
      name: 'Avg. Wait Time',
      value: '12 min',
      change: '-3%',
      changeType: 'decrease',
      icon: ClockIcon
    }
  ]

  const revenueData = [
    { month: 'Jan', revenue: 65000, appointments: 180 },
    { month: 'Feb', revenue: 72000, appointments: 195 },
    { month: 'Mar', revenue: 68000, appointments: 175 },
    { month: 'Apr', revenue: 78000, appointments: 210 },
    { month: 'May', revenue: 85000, appointments: 230 },
    { month: 'Jun', revenue: 89400, appointments: 247 }
  ]

  const topServices = [
    { name: 'General Consultation', count: 456, revenue: '$68,400' },
    { name: 'Cardiology', count: 198, revenue: '$49,500' },
    { name: 'Pediatrics', count: 234, revenue: '$42,120' },
    { name: 'Dermatology', count: 167, revenue: '$33,400' },
    { name: 'Physical Therapy', count: 145, revenue: '$17,400' }
  ]

  const patientDemographics = [
    { ageGroup: '0-18', count: 245, percentage: 28 },
    { ageGroup: '19-35', count: 198, percentage: 23 },
    { ageGroup: '36-50', count: 234, percentage: 27 },
    { ageGroup: '51-65', count: 134, percentage: 15 },
    { ageGroup: '65+', count: 67, percentage: 7 }
  ]

  const appointmentsByStatus = [
    { status: 'Completed', count: 1047, percentage: 84 },
    { status: 'Cancelled', count: 124, percentage: 10 },
    { status: 'No Show', count: 76, percentage: 6 }
  ]

  const exportReport = (type) => {
    console.log(`Exporting ${type} report for ${selectedPeriod}`)
    // Simulate report export
    alert(`${type} report exported successfully!`)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reports & Analytics</h1>
          <p className="text-gray-600">Track your clinic's performance and insights</p>
        </div>
        <div className="flex space-x-3">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="input-field"
          >
            {periods.map((period) => (
              <option key={period.value} value={period.value}>
                {period.label}
              </option>
            ))}
          </select>
          <button
            onClick={() => exportReport('comprehensive')}
            className="btn-primary flex items-center"
          >
            <DocumentArrowDownIcon className="h-5 w-5 mr-2" />
            Export Report
          </button>
        </div>
      </div>

      {/* Report Type Tabs */}
      <div className="card">
        <div className="flex space-x-2">
          {reportTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedReport(type.id)}
              className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedReport === type.id
                  ? 'bg-primary-100 text-primary-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <type.icon className="h-4 w-4 mr-2" />
              {type.name}
            </button>
          ))}
        </div>
      </div>

      {/* Overview Report */}
      {selectedReport === 'overview' && (
        <>
          {/* Key Metrics */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {overviewStats.map((item) => (
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
                          {item.changeType === 'increase' ? (
                            <TrendingUpIcon className="h-4 w-4 mr-1" />
                          ) : (
                            <TrendingDownIcon className="h-4 w-4 mr-1" />
                          )}
                          {item.change}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Revenue Chart */}
          <div className="card">
            <h3 className="text-lg font-medium text-gray-900 mb-6">Revenue Trend</h3>
            <div className="h-64 flex items-end justify-between space-x-2">
              {revenueData.map((data, index) => (
                <div key={data.month} className="flex-1 flex flex-col items-center">
                  <div
                    className="w-full bg-primary-500 rounded-t"
                    style={{ height: `${(data.revenue / 100000) * 100}%` }}
                  />
                  <div className="mt-2 text-sm text-gray-600">{data.month}</div>
                  <div className="text-xs text-gray-500">${(data.revenue / 1000).toFixed(0)}k</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Top Services */}
            <div className="card">
              <h3 className="text-lg font-medium text-gray-900 mb-6">Top Services</h3>
              <div className="space-y-4">
                {topServices.map((service, index) => (
                  <div key={service.name} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 text-sm font-medium mr-3">
                        {index + 1}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{service.name}</p>
                        <p className="text-sm text-gray-500">{service.count} appointments</p>
                      </div>
                    </div>
                    <div className="text-sm font-medium text-green-600">{service.revenue}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Patient Demographics */}
            <div className="card">
              <h3 className="text-lg font-medium text-gray-900 mb-6">Patient Demographics</h3>
              <div className="space-y-4">
                {patientDemographics.map((demo) => (
                  <div key={demo.ageGroup} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-900 w-16">{demo.ageGroup}</span>
                      <div className="ml-4 flex-1 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-primary-500 h-2 rounded-full"
                          style={{ width: `${demo.percentage}%` }}
                        />
                      </div>
                    </div>
                    <div className="ml-4 text-sm text-gray-600">
                      {demo.count} ({demo.percentage}%)
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {/* Financial Report */}
      {selectedReport === 'financial' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-lg font-medium text-gray-900 mb-6">Revenue by Month</h3>
            <div className="space-y-4">
              {revenueData.map((data) => (
                <div key={data.month} className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">{data.month}</span>
                  <span className="text-sm text-gray-600">${data.revenue.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h3 className="text-lg font-medium text-gray-900 mb-6">Payment Methods</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Insurance</span>
                <span className="text-sm font-medium text-gray-900">65%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Cash</span>
                <span className="text-sm font-medium text-gray-900">20%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Credit Card</span>
                <span className="text-sm font-medium text-gray-900">15%</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Patients Report */}
      {selectedReport === 'patients' && (
        <div className="card">
          <h3 className="text-lg font-medium text-gray-900 mb-6">Patient Statistics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">2,847</div>
              <div className="text-sm text-gray-500">Total Patients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">284</div>
              <div className="text-sm text-gray-500">New This Month</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">95%</div>
              <div className="text-sm text-gray-500">Retention Rate</div>
            </div>
          </div>
        </div>
      )}

      {/* Appointments Report */}
      {selectedReport === 'appointments' && (
        <div className="card">
          <h3 className="text-lg font-medium text-gray-900 mb-6">Appointment Analytics</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="text-md font-medium text-gray-900 mb-4">Appointments by Status</h4>
              <div className="space-y-3">
                {appointmentsByStatus.map((item) => (
                  <div key={item.status} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full mr-3 ${
                        item.status === 'Completed' ? 'bg-green-500' :
                        item.status === 'Cancelled' ? 'bg-red-500' : 'bg-yellow-500'
                      }`} />
                      <span className="text-sm text-gray-600">{item.status}</span>
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      {item.count} ({item.percentage}%)
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-md font-medium text-gray-900 mb-4">Peak Hours</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">9:00 - 11:00 AM</span>
                  <span className="text-sm font-medium text-gray-900">45%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">2:00 - 4:00 PM</span>
                  <span className="text-sm font-medium text-gray-900">35%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">11:00 AM - 1:00 PM</span>
                  <span className="text-sm font-medium text-gray-900">20%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Reports