import { useState } from 'react'
import { 
  ClipboardDocumentListIcon, 
  PlusIcon, 
  CalendarIcon, 
  ClockIcon,
  UserIcon,
  CurrencyDollarIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  XCircleIcon,
  EyeIcon,
  PencilIcon
} from '@heroicons/react/24/outline'

const Services = () => {
  const [selectedView, setSelectedView] = useState('appointments')
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0])
  const [statusFilter, setStatusFilter] = useState('all')

  const services = [
    {
      id: 1,
      name: 'General Consultation',
      description: 'Basic medical examination and consultation',
      duration: '30 minutes',
      price: '$150',
      category: 'General Medicine'
    },
    {
      id: 2,
      name: 'Cardiology Consultation',
      description: 'Heart and cardiovascular system examination',
      duration: '45 minutes',
      price: '$250',
      category: 'Cardiology'
    },
    {
      id: 3,
      name: 'Pediatric Consultation',
      description: 'Medical care for children and adolescents',
      duration: '30 minutes',
      price: '$180',
      category: 'Pediatrics'
    },
    {
      id: 4,
      name: 'Dermatology Consultation',
      description: 'Skin, hair, and nail examination',
      duration: '30 minutes',
      price: '$200',
      category: 'Dermatology'
    },
    {
      id: 5,
      name: 'Physical Therapy',
      description: 'Rehabilitation and movement therapy',
      duration: '60 minutes',
      price: '$120',
      category: 'Therapy'
    }
  ]

  const appointments = [
    {
      id: 1,
      patientName: 'John Doe',
      doctorName: 'Dr. Smith',
      service: 'General Consultation',
      date: '2024-01-25',
      time: '09:00',
      duration: '30 min',
      status: 'Confirmed',
      price: '$150'
    },
    {
      id: 2,
      patientName: 'Jane Smith',
      doctorName: 'Dr. Johnson',
      service: 'Pediatric Consultation',
      date: '2024-01-25',
      time: '10:30',
      duration: '30 min',
      status: 'In Progress',
      price: '$180'
    },
    {
      id: 3,
      patientName: 'Mike Wilson',
      doctorName: 'Dr. Brown',
      service: 'Physical Therapy',
      date: '2024-01-25',
      time: '11:00',
      duration: '60 min',
      status: 'Waiting',
      price: '$120'
    },
    {
      id: 4,
      patientName: 'Sarah Davis',
      doctorName: 'Dr. Wilson',
      service: 'Dermatology Consultation',
      date: '2024-01-25',
      time: '14:00',
      duration: '30 min',
      status: 'Confirmed',
      price: '$200'
    },
    {
      id: 5,
      patientName: 'Robert Johnson',
      doctorName: 'Dr. Smith',
      service: 'Cardiology Consultation',
      date: '2024-01-25',
      time: '15:30',
      duration: '45 min',
      status: 'Cancelled',
      price: '$250'
    }
  ]

  const filteredAppointments = appointments.filter(appointment => {
    const matchesDate = appointment.date === selectedDate
    const matchesStatus = statusFilter === 'all' || appointment.status.toLowerCase() === statusFilter.toLowerCase()
    return matchesDate && matchesStatus
  })

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Confirmed':
        return <CheckCircleIcon className="h-5 w-5 text-green-500" />
      case 'In Progress':
        return <ClockIcon className="h-5 w-5 text-blue-500" />
      case 'Waiting':
        return <ExclamationCircleIcon className="h-5 w-5 text-yellow-500" />
      case 'Cancelled':
        return <XCircleIcon className="h-5 w-5 text-red-500" />
      default:
        return <ClockIcon className="h-5 w-5 text-gray-500" />
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Confirmed':
        return 'bg-green-100 text-green-800'
      case 'In Progress':
        return 'bg-blue-100 text-blue-800'
      case 'Waiting':
        return 'bg-yellow-100 text-yellow-800'
      case 'Cancelled':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Services & Appointments</h1>
          <p className="text-gray-600">Manage clinic services and patient appointments</p>
        </div>
        <div className="flex space-x-3">
          <button className="btn-secondary flex items-center">
            <ClipboardDocumentListIcon className="h-5 w-5 mr-2" />
            Add Service
          </button>
          <button className="btn-primary flex items-center">
            <PlusIcon className="h-5 w-5 mr-2" />
            New Appointment
          </button>
        </div>
      </div>

      {/* View Toggle */}
      <div className="card">
        <div className="flex space-x-2">
          <button
            onClick={() => setSelectedView('appointments')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedView === 'appointments'
                ? 'bg-primary-100 text-primary-700'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Appointments
          </button>
          <button
            onClick={() => setSelectedView('services')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedView === 'services'
                ? 'bg-primary-100 text-primary-700'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Service List
          </button>
        </div>
      </div>

      {/* Appointments View */}
      {selectedView === 'appointments' && (
        <>
          {/* Filters */}
          <div className="card">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status
                </label>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="input-field"
                >
                  <option value="all">All Status</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="in progress">In Progress</option>
                  <option value="waiting">Waiting</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
              <div className="flex items-end">
                <div className="text-sm text-gray-600">
                  <span className="font-medium">{filteredAppointments.length}</span> appointments found
                </div>
              </div>
            </div>
          </div>

          {/* Appointments List */}
          <div className="card">
            <h3 className="text-lg font-medium text-gray-900 mb-6">
              Appointments for {new Date(selectedDate).toLocaleDateString()}
            </h3>
            
            <div className="space-y-4">
              {filteredAppointments.map((appointment) => (
                <div key={appointment.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        {getStatusIcon(appointment.status)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-4">
                          <div>
                            <h4 className="text-sm font-medium text-gray-900">{appointment.patientName}</h4>
                            <p className="text-sm text-gray-500">{appointment.service}</p>
                          </div>
                          <div className="text-sm text-gray-600">
                            <div className="flex items-center">
                              <UserIcon className="h-4 w-4 mr-1" />
                              {appointment.doctorName}
                            </div>
                          </div>
                          <div className="text-sm text-gray-600">
                            <div className="flex items-center">
                              <ClockIcon className="h-4 w-4 mr-1" />
                              {appointment.time} ({appointment.duration})
                            </div>
                          </div>
                          <div className="text-sm text-gray-600">
                            <div className="flex items-center">
                              <CurrencyDollarIcon className="h-4 w-4 mr-1" />
                              {appointment.price}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
                        {appointment.status}
                      </span>
                      <div className="flex space-x-2">
                        <button className="text-primary-600 hover:text-primary-900 p-1 rounded-full hover:bg-primary-50">
                          <EyeIcon className="h-4 w-4" />
                        </button>
                        <button className="text-gray-600 hover:text-gray-900 p-1 rounded-full hover:bg-gray-50">
                          <PencilIcon className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {filteredAppointments.length === 0 && (
                <div className="text-center py-12">
                  <CalendarIcon className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-medium text-gray-900">No appointments found</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    No appointments scheduled for the selected date and status.
                  </p>
                </div>
              )}
            </div>
          </div>
        </>
      )}

      {/* Services View */}
      {selectedView === 'services' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900">{service.name}</h3>
                  <p className="text-sm text-primary-600 font-medium">{service.category}</p>
                  <p className="text-sm text-gray-500 mt-2">{service.description}</p>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Duration:</span>
                  <span className="font-medium">{service.duration}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Price:</span>
                  <span className="font-medium text-green-600">{service.price}</span>
                </div>
              </div>

              <div className="mt-4 flex justify-between items-center">
                <button className="btn-primary text-sm">
                  Schedule
                </button>
                <div className="flex space-x-2">
                  <button className="text-primary-600 hover:text-primary-900 p-1 rounded-full hover:bg-primary-50">
                    <EyeIcon className="h-4 w-4" />
                  </button>
                  <button className="text-gray-600 hover:text-gray-900 p-1 rounded-full hover:bg-gray-50">
                    <PencilIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Services