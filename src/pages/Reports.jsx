import React, { useState } from 'react'
import { Calendar, Download, Filter, TrendingUp, Users, DollarSign, Activity, FileText } from 'lucide-react'

const Reports = () => {
  const [selectedReport, setSelectedReport] = useState('overview')
  const [dateRange, setDateRange] = useState('last30days')

  const reportTypes = [
    { id: 'overview', name: 'Overview', icon: TrendingUp },
    { id: 'patients', name: 'Patient Reports', icon: Users },
    { id: 'financial', name: 'Financial Reports', icon: DollarSign },
    { id: 'services', name: 'Service Reports', icon: Activity }
  ]

  // Mock data for demonstration
  const monthlyStats = [
    { month: 'Jan', patients: 120, revenue: 18000, appointments: 145 },
    { month: 'Feb', patients: 135, revenue: 21500, appointments: 160 },
    { month: 'Mar', patients: 150, revenue: 24000, appointments: 185 },
    { month: 'Apr', patients: 142, revenue: 22800, appointments: 172 },
    { month: 'May', patients: 168, revenue: 26400, appointments: 198 },
    { month: 'Jun', patients: 175, revenue: 28000, appointments: 205 }
  ]

  const patientDemographics = {
    ageGroups: [
      { group: '0-18', count: 85, percentage: 15 },
      { group: '19-35', count: 170, percentage: 30 },
      { group: '36-50', count: 142, percentage: 25 },
      { group: '51-65', count: 113, percentage: 20 },
      { group: '65+', count: 57, percentage: 10 }
    ],
    gender: [
      { type: 'Female', count: 320, percentage: 56 },
      { type: 'Male', count: 247, percentage: 44 }
    ]
  }

  const topServices = [
    { name: 'General Consultation', count: 245, revenue: 36750 },
    { name: 'Blood Test', count: 189, revenue: 22680 },
    { name: 'X-Ray', count: 156, revenue: 12480 },
    { name: 'ECG', count: 134, revenue: 13400 },
    { name: 'Vaccination', count: 98, revenue: 3430 }
  ]

  const recentReports = [
    { id: 1, name: 'Monthly Patient Summary', date: '2024-01-15', type: 'PDF', size: '2.4 MB' },
    { id: 2, name: 'Financial Report Q1', date: '2024-01-10', type: 'Excel', size: '1.8 MB' },
    { id: 3, name: 'Service Performance', date: '2024-01-08', type: 'PDF', size: '1.2 MB' },
    { id: 4, name: 'Doctor Utilization', date: '2024-01-05', type: 'PDF', size: '0.9 MB' }
  ]

  const StatCard = ({ title, value, change, changeType, icon: Icon, color }) => (
    <div className="card p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          <p className={`text-sm ${changeType === 'increase' ? 'text-green-600' : 'text-red-600'}`}>
            {change} from last period
          </p>
        </div>
        <div className={`p-3 rounded-full ${color} bg-opacity-10`}>
          <Icon className={`h-6 w-6 ${color.replace('bg-', 'text-')}`} />
        </div>
      </div>
    </div>
  )

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Reports & Analytics</h1>
        <div className="flex space-x-2">
          <select
            className="form-input"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
          >
            <option value="last7days">Last 7 Days</option>
            <option value="last30days">Last 30 Days</option>
            <option value="last3months">Last 3 Months</option>
            <option value="last6months">Last 6 Months</option>
            <option value="lastyear">Last Year</option>
          </select>
          <button className="btn btn-primary flex items-center">
            <Download className="h-4 w-4 mr-2" />
            Export
          </button>
        </div>
      </div>

      {/* Report Type Tabs */}
      <div className="card">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {reportTypes.map(report => (
              <button
                key={report.id}
                onClick={() => setSelectedReport(report.id)}
                className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm ${
                  selectedReport === report.id
                    ? 'border-medical-500 text-medical-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <report.icon className="h-5 w-5 mr-2" />
                {report.name}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {/* Overview Report */}
          {selectedReport === 'overview' && (
            <div className="space-y-6">
              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                  title="Total Patients"
                  value="1,247"
                  change="+12%"
                  changeType="increase"
                  icon={Users}
                  color="bg-blue-500"
                />
                <StatCard
                  title="Monthly Revenue"
                  value="$28,000"
                  change="+8%"
                  changeType="increase"
                  icon={DollarSign}
                  color="bg-green-500"
                />
                <StatCard
                  title="Appointments"
                  value="205"
                  change="+15%"
                  changeType="increase"
                  icon={Calendar}
                  color="bg-purple-500"
                />
                <StatCard
                  title="Services Provided"
                  value="822"
                  change="+6%"
                  changeType="increase"
                  icon={Activity}
                  color="bg-medical-500"
                />
              </div>

              {/* Monthly Trends Chart (Mock) */}
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Trends</h3>
                <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Chart visualization would go here</p>
                    <p className="text-sm text-gray-400">Integration with charting library needed</p>
                  </div>
                </div>
              </div>

              {/* Top Services */}
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Services</h3>
                <div className="space-y-3">
                  {topServices.map((service, index) => (
                    <div key={service.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <span className="text-sm font-medium text-gray-500 w-6">#{index + 1}</span>
                        <span className="font-medium text-gray-900 ml-3">{service.name}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-900">{service.count} procedures</div>
                        <div className="text-sm text-gray-600">${service.revenue.toLocaleString()}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Patient Reports */}
          {selectedReport === 'patients' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Age Demographics */}
                <div className="card p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Age Demographics</h3>
                  <div className="space-y-3">
                    {patientDemographics.ageGroups.map(group => (
                      <div key={group.group} className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">{group.group} years</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-medical-500 h-2 rounded-full"
                              style={{ width: `${group.percentage}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium text-gray-900">{group.count}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Gender Distribution */}
                <div className="card p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Gender Distribution</h3>
                  <div className="space-y-4">
                    {patientDemographics.gender.map(gender => (
                      <div key={gender.type} className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">{gender.type}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-24 bg-gray-200 rounded-full h-3">
                            <div
                              className={`h-3 rounded-full ${
                                gender.type === 'Female' ? 'bg-pink-500' : 'bg-blue-500'
                              }`}
                              style={{ width: `${gender.percentage}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium text-gray-900">
                            {gender.count} ({gender.percentage}%)
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Patient Growth */}
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Patient Growth</h3>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                  {monthlyStats.map(stat => (
                    <div key={stat.month} className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-lg font-bold text-gray-900">{stat.patients}</div>
                      <div className="text-sm text-gray-600">{stat.month}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Financial Reports */}
          {selectedReport === 'financial' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard
                  title="Total Revenue"
                  value="$140,700"
                  change="+12%"
                  changeType="increase"
                  icon={DollarSign}
                  color="bg-green-500"
                />
                <StatCard
                  title="Average Per Patient"
                  value="$113"
                  change="+5%"
                  changeType="increase"
                  icon={TrendingUp}
                  color="bg-blue-500"
                />
                <StatCard
                  title="Outstanding Payments"
                  value="$8,450"
                  change="-8%"
                  changeType="decrease"
                  icon={FileText}
                  color="bg-yellow-500"
                />
              </div>

              {/* Monthly Revenue */}
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Revenue</h3>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                  {monthlyStats.map(stat => (
                    <div key={stat.month} className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-lg font-bold text-green-600">
                        ${stat.revenue.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-600">{stat.month}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Revenue by Service */}
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue by Service</h3>
                <div className="space-y-3">
                  {topServices.map(service => (
                    <div key={service.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-900">{service.name}</span>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-600">
                          ${service.revenue.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-600">{service.count} procedures</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Service Reports */}
          {selectedReport === 'services' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard
                  title="Total Services"
                  value="822"
                  change="+15%"
                  changeType="increase"
                  icon={Activity}
                  color="bg-purple-500"
                />
                <StatCard
                  title="Most Popular"
                  value="Consultation"
                  change="245 times"
                  changeType="increase"
                  icon={TrendingUp}
                  color="bg-blue-500"
                />
                <StatCard
                  title="Service Categories"
                  value="7"
                  change="Active"
                  changeType="increase"
                  icon={FileText}
                  color="bg-medical-500"
                />
              </div>

              {/* Service Performance */}
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Performance</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Service</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Count</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Revenue</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Avg Price</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {topServices.map(service => (
                        <tr key={service.name}>
                          <td className="px-4 py-4 text-sm font-medium text-gray-900">{service.name}</td>
                          <td className="px-4 py-4 text-sm text-gray-600">{service.count}</td>
                          <td className="px-4 py-4 text-sm text-gray-600">${service.revenue.toLocaleString()}</td>
                          <td className="px-4 py-4 text-sm text-gray-600">
                            ${Math.round(service.revenue / service.count)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Recent Reports */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Reports</h2>
        <div className="space-y-3">
          {recentReports.map(report => (
            <div key={report.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <FileText className="h-5 w-5 text-gray-400" />
                <div>
                  <div className="font-medium text-gray-900">{report.name}</div>
                  <div className="text-sm text-gray-600">{report.date} • {report.type} • {report.size}</div>
                </div>
              </div>
              <button className="btn btn-secondary text-sm">
                <Download className="h-4 w-4 mr-1" />
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Reports