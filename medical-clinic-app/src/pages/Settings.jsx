import { useState } from 'react'
import { 
  CogIcon, 
  BuildingOfficeIcon, 
  UserGroupIcon, 
  BellIcon,
  ShieldCheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  DocumentTextIcon,
  CheckIcon
} from '@heroicons/react/24/outline'

const Settings = () => {
  const [activeTab, setActiveTab] = useState('clinic')
  const [settings, setSettings] = useState({
    clinicName: 'MediClinic Pro',
    clinicAddress: '123 Healthcare Ave, Medical City, MC 12345',
    clinicPhone: '+1 (555) 123-4567',
    clinicEmail: 'info@mediclinicpro.com',
    workingHours: {
      monday: { start: '09:00', end: '17:00', enabled: true },
      tuesday: { start: '09:00', end: '17:00', enabled: true },
      wednesday: { start: '09:00', end: '17:00', enabled: true },
      thursday: { start: '09:00', end: '17:00', enabled: true },
      friday: { start: '09:00', end: '17:00', enabled: true },
      saturday: { start: '09:00', end: '13:00', enabled: true },
      sunday: { start: '09:00', end: '13:00', enabled: false }
    },
    notifications: {
      emailNotifications: true,
      smsNotifications: false,
      appointmentReminders: true,
      paymentReminders: true
    },
    currency: 'USD',
    timezone: 'America/New_York',
    language: 'English'
  })

  const [savedSettings, setSavedSettings] = useState(false)

  const tabs = [
    { id: 'clinic', name: 'Clinic Info', icon: BuildingOfficeIcon },
    { id: 'users', name: 'User Management', icon: UserGroupIcon },
    { id: 'schedule', name: 'Schedule', icon: ClockIcon },
    { id: 'notifications', name: 'Notifications', icon: BellIcon },
    { id: 'billing', name: 'Billing', icon: CurrencyDollarIcon },
    { id: 'security', name: 'Security', icon: ShieldCheckIcon }
  ]

  const handleSettingChange = (category, field, value) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: value
      }
    }))
    setSavedSettings(false)
  }

  const handleDirectSettingChange = (field, value) => {
    setSettings(prev => ({
      ...prev,
      [field]: value
    }))
    setSavedSettings(false)
  }

  const handleSaveSettings = () => {
    // Simulate API call
    setTimeout(() => {
      setSavedSettings(true)
      setTimeout(() => setSavedSettings(false), 3000)
    }, 500)
  }

  const users = [
    { id: 1, name: 'Dr. John Smith', role: 'Doctor', email: 'j.smith@clinic.com', status: 'Active' },
    { id: 2, name: 'Dr. Sarah Johnson', role: 'Doctor', email: 's.johnson@clinic.com', status: 'Active' },
    { id: 3, name: 'Mary Wilson', role: 'Nurse', email: 'm.wilson@clinic.com', status: 'Active' },
    { id: 4, name: 'Alice Brown', role: 'Receptionist', email: 'a.brown@clinic.com', status: 'Active' },
    { id: 5, name: 'Robert Davis', role: 'Admin', email: 'r.davis@clinic.com', status: 'Active' }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600">Manage your clinic configuration and preferences</p>
        </div>
        {savedSettings && (
          <div className="flex items-center text-green-600 bg-green-50 px-3 py-2 rounded-lg">
            <CheckIcon className="h-5 w-5 mr-2" />
            Settings saved successfully!
          </div>
        )}
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <div className="lg:w-64">
          <nav className="space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? 'bg-primary-100 text-primary-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <tab.icon className="h-5 w-5 mr-3" />
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="flex-1">
          {/* Clinic Information */}
          {activeTab === 'clinic' && (
            <div className="card">
              <h3 className="text-lg font-medium text-gray-900 mb-6">Clinic Information</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Clinic Name
                  </label>
                  <input
                    type="text"
                    value={settings.clinicName}
                    onChange={(e) => handleDirectSettingChange('clinicName', e.target.value)}
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address
                  </label>
                  <textarea
                    value={settings.clinicAddress}
                    onChange={(e) => handleDirectSettingChange('clinicAddress', e.target.value)}
                    rows={3}
                    className="input-field"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={settings.clinicPhone}
                      onChange={(e) => handleDirectSettingChange('clinicPhone', e.target.value)}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={settings.clinicEmail}
                      onChange={(e) => handleDirectSettingChange('clinicEmail', e.target.value)}
                      className="input-field"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* User Management */}
          {activeTab === 'users' && (
            <div className="card">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-medium text-gray-900">User Management</h3>
                <button className="btn-primary">Add New User</button>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        User
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Role
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">{user.name}</div>
                            <div className="text-sm text-gray-500">{user.email}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {user.role}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            {user.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button className="text-primary-600 hover:text-primary-900 mr-4">
                            Edit
                          </button>
                          <button className="text-red-600 hover:text-red-900">
                            Deactivate
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Schedule Settings */}
          {activeTab === 'schedule' && (
            <div className="card">
              <h3 className="text-lg font-medium text-gray-900 mb-6">Working Hours</h3>
              <div className="space-y-4">
                {Object.entries(settings.workingHours).map(([day, hours]) => (
                  <div key={day} className="flex items-center justify-between py-3 border-b border-gray-200">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={hours.enabled}
                        onChange={(e) => handleSettingChange('workingHours', day, { ...hours, enabled: e.target.checked })}
                        className="mr-3"
                      />
                      <span className="text-sm font-medium text-gray-900 capitalize w-20">
                        {day}
                      </span>
                    </div>
                    {hours.enabled && (
                      <div className="flex items-center space-x-2">
                        <input
                          type="time"
                          value={hours.start}
                          onChange={(e) => handleSettingChange('workingHours', day, { ...hours, start: e.target.value })}
                          className="input-field text-sm"
                        />
                        <span className="text-gray-500">to</span>
                        <input
                          type="time"
                          value={hours.end}
                          onChange={(e) => handleSettingChange('workingHours', day, { ...hours, end: e.target.value })}
                          className="input-field text-sm"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Notifications */}
          {activeTab === 'notifications' && (
            <div className="card">
              <h3 className="text-lg font-medium text-gray-900 mb-6">Notification Preferences</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Email Notifications</p>
                    <p className="text-sm text-gray-500">Receive notifications via email</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.notifications.emailNotifications}
                    onChange={(e) => handleSettingChange('notifications', 'emailNotifications', e.target.checked)}
                    className="toggle"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">SMS Notifications</p>
                    <p className="text-sm text-gray-500">Receive notifications via SMS</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.notifications.smsNotifications}
                    onChange={(e) => handleSettingChange('notifications', 'smsNotifications', e.target.checked)}
                    className="toggle"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Appointment Reminders</p>
                    <p className="text-sm text-gray-500">Send reminders to patients</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.notifications.appointmentReminders}
                    onChange={(e) => handleSettingChange('notifications', 'appointmentReminders', e.target.checked)}
                    className="toggle"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Other tabs content would be similar... */}
          {(activeTab === 'billing' || activeTab === 'security') && (
            <div className="card">
              <h3 className="text-lg font-medium text-gray-900 mb-6">
                {activeTab === 'billing' ? 'Billing Settings' : 'Security Settings'}
              </h3>
              <div className="text-center py-12">
                <DocumentTextIcon className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">Coming Soon</h3>
                <p className="mt-1 text-sm text-gray-500">
                  This section is under development.
                </p>
              </div>
            </div>
          )}

          {/* Save Button */}
          <div className="flex justify-end mt-6">
            <button
              onClick={handleSaveSettings}
              className="btn-primary"
              disabled={savedSettings}
            >
              {savedSettings ? 'Saved!' : 'Save Settings'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings