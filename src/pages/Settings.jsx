import React, { useState } from 'react'
import { Save, Building, Users, Bell, Shield, Clock, Globe } from 'lucide-react'

const Settings = () => {
  const [activeTab, setActiveTab] = useState('clinic')
  
  const [clinicSettings, setClinicSettings] = useState({
    name: 'MediClinic Health Center',
    address: '123 Medical Avenue, Health City, HC 12345',
    phone: '+1 (555) 123-4567',
    email: 'info@mediclinic.com',
    website: 'www.mediclinic.com',
    timezone: 'America/New_York',
    workingHours: {
      start: '08:00',
      end: '18:00'
    },
    emergencyContact: '+1 (555) 911-0000'
  })

  const [userSettings, setUserSettings] = useState({
    defaultLanguage: 'en',
    dateFormat: 'MM/DD/YYYY',
    timeFormat: '12',
    theme: 'light',
    autoSave: true,
    sessionTimeout: 30
  })

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    appointmentReminders: true,
    systemAlerts: true,
    patientUpdates: true,
    dailyReports: false
  })

  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: false,
    passwordExpiry: 90,
    loginAttempts: 5,
    sessionDuration: 8,
    dataBackup: true,
    auditLogs: true
  })

  const tabs = [
    { id: 'clinic', name: 'Clinic Info', icon: Building },
    { id: 'users', name: 'User Preferences', icon: Users },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'security', name: 'Security', icon: Shield }
  ]

  const handleClinicChange = (field, value) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.')
      setClinicSettings(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }))
    } else {
      setClinicSettings(prev => ({
        ...prev,
        [field]: value
      }))
    }
  }

  const handleUserChange = (field, value) => {
    setUserSettings(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleNotificationChange = (field, value) => {
    setNotificationSettings(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSecurityChange = (field, value) => {
    setSecuritySettings(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSave = () => {
    // Here you would save settings to your backend
    alert('Settings saved successfully!')
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <button onClick={handleSave} className="btn btn-primary flex items-center">
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </button>
      </div>

      <div className="card">
        {/* Tabs */}
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-medical-500 text-medical-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="h-5 w-5 mr-2" />
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {/* Clinic Information Tab */}
          {activeTab === 'clinic' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Clinic Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="form-label">Clinic Name</label>
                    <input
                      type="text"
                      className="form-input"
                      value={clinicSettings.name}
                      onChange={(e) => handleClinicChange('name', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      className="form-input"
                      value={clinicSettings.phone}
                      onChange={(e) => handleClinicChange('phone', e.target.value)}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="form-label">Address</label>
                    <input
                      type="text"
                      className="form-input"
                      value={clinicSettings.address}
                      onChange={(e) => handleClinicChange('address', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-input"
                      value={clinicSettings.email}
                      onChange={(e) => handleClinicChange('email', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="form-label">Website</label>
                    <input
                      type="url"
                      className="form-input"
                      value={clinicSettings.website}
                      onChange={(e) => handleClinicChange('website', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="form-label">Timezone</label>
                    <select
                      className="form-input"
                      value={clinicSettings.timezone}
                      onChange={(e) => handleClinicChange('timezone', e.target.value)}
                    >
                      <option value="America/New_York">Eastern Time</option>
                      <option value="America/Chicago">Central Time</option>
                      <option value="America/Denver">Mountain Time</option>
                      <option value="America/Los_Angeles">Pacific Time</option>
                    </select>
                  </div>
                  <div>
                    <label className="form-label">Emergency Contact</label>
                    <input
                      type="tel"
                      className="form-input"
                      value={clinicSettings.emergencyContact}
                      onChange={(e) => handleClinicChange('emergencyContact', e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-md font-medium text-gray-900 mb-4">Working Hours</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="form-label">Start Time</label>
                    <input
                      type="time"
                      className="form-input"
                      value={clinicSettings.workingHours.start}
                      onChange={(e) => handleClinicChange('workingHours.start', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="form-label">End Time</label>
                    <input
                      type="time"
                      className="form-input"
                      value={clinicSettings.workingHours.end}
                      onChange={(e) => handleClinicChange('workingHours.end', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* User Preferences Tab */}
          {activeTab === 'users' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">User Preferences</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="form-label">Default Language</label>
                    <select
                      className="form-input"
                      value={userSettings.defaultLanguage}
                      onChange={(e) => handleUserChange('defaultLanguage', e.target.value)}
                    >
                      <option value="en">English</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                      <option value="de">German</option>
                    </select>
                  </div>
                  <div>
                    <label className="form-label">Date Format</label>
                    <select
                      className="form-input"
                      value={userSettings.dateFormat}
                      onChange={(e) => handleUserChange('dateFormat', e.target.value)}
                    >
                      <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                      <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                      <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                    </select>
                  </div>
                  <div>
                    <label className="form-label">Time Format</label>
                    <select
                      className="form-input"
                      value={userSettings.timeFormat}
                      onChange={(e) => handleUserChange('timeFormat', e.target.value)}
                    >
                      <option value="12">12-hour</option>
                      <option value="24">24-hour</option>
                    </select>
                  </div>
                  <div>
                    <label className="form-label">Theme</label>
                    <select
                      className="form-input"
                      value={userSettings.theme}
                      onChange={(e) => handleUserChange('theme', e.target.value)}
                    >
                      <option value="light">Light</option>
                      <option value="dark">Dark</option>
                      <option value="auto">Auto</option>
                    </select>
                  </div>
                  <div>
                    <label className="form-label">Session Timeout (minutes)</label>
                    <input
                      type="number"
                      className="form-input"
                      value={userSettings.sessionTimeout}
                      onChange={(e) => handleUserChange('sessionTimeout', parseInt(e.target.value))}
                    />
                  </div>
                </div>
                
                <div className="mt-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-medical-600 focus:ring-medical-500"
                      checked={userSettings.autoSave}
                      onChange={(e) => handleUserChange('autoSave', e.target.checked)}
                    />
                    <span className="ml-2 text-sm text-gray-700">Enable auto-save</span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Notifications Tab */}
          {activeTab === 'notifications' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Notification Settings</h3>
                <div className="space-y-4">
                  {Object.entries(notificationSettings).map(([key, value]) => (
                    <label key={key} className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">
                        {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                      </span>
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-medical-600 focus:ring-medical-500"
                        checked={value}
                        onChange={(e) => handleNotificationChange(key, e.target.checked)}
                      />
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Security Tab */}
          {activeTab === 'security' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Security Settings</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="form-label">Password Expiry (days)</label>
                    <input
                      type="number"
                      className="form-input"
                      value={securitySettings.passwordExpiry}
                      onChange={(e) => handleSecurityChange('passwordExpiry', parseInt(e.target.value))}
                    />
                  </div>
                  <div>
                    <label className="form-label">Max Login Attempts</label>
                    <input
                      type="number"
                      className="form-input"
                      value={securitySettings.loginAttempts}
                      onChange={(e) => handleSecurityChange('loginAttempts', parseInt(e.target.value))}
                    />
                  </div>
                  <div>
                    <label className="form-label">Session Duration (hours)</label>
                    <input
                      type="number"
                      className="form-input"
                      value={securitySettings.sessionDuration}
                      onChange={(e) => handleSecurityChange('sessionDuration', parseInt(e.target.value))}
                    />
                  </div>
                </div>
                
                <div className="mt-6 space-y-4">
                  {['twoFactorAuth', 'dataBackup', 'auditLogs'].map(key => (
                    <label key={key} className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">
                        {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                      </span>
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-medical-600 focus:ring-medical-500"
                        checked={securitySettings[key]}
                        onChange={(e) => handleSecurityChange(key, e.target.checked)}
                      />
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Settings