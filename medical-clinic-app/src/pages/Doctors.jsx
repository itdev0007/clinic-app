import { useState } from 'react'
import { 
  UserIcon, 
  PlusIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  CalendarIcon,
  ClockIcon,
  StarIcon,
  EyeIcon,
  PencilIcon
} from '@heroicons/react/24/outline'

const Doctors = () => {
  const [selectedView, setSelectedView] = useState('list')
  const [searchTerm, setSearchTerm] = useState('')

  const doctors = [
    {
      id: 1,
      name: 'Dr. John Smith',
      specialty: 'Cardiology',
      experience: '15 years',
      phone: '+1 (555) 123-4567',
      email: 'j.smith@clinic.com',
      rating: 4.8,
      patientsToday: 12,
      schedule: 'Mon-Fri 9:00-17:00',
      status: 'Available',
      location: 'Room 101',
      education: 'MD - Harvard Medical School',
      languages: ['English', 'Spanish']
    },
    {
      id: 2,
      name: 'Dr. Sarah Johnson',
      specialty: 'Pediatrics',
      experience: '12 years',
      phone: '+1 (555) 987-6543',
      email: 's.johnson@clinic.com',
      rating: 4.9,
      patientsToday: 8,
      schedule: 'Mon-Thu 8:00-16:00',
      status: 'In Consultation',
      location: 'Room 205',
      education: 'MD - Johns Hopkins',
      languages: ['English', 'French']
    },
    {
      id: 3,
      name: 'Dr. Michael Brown',
      specialty: 'Orthopedics',
      experience: '20 years',
      phone: '+1 (555) 456-7890',
      email: 'm.brown@clinic.com',
      rating: 4.7,
      patientsToday: 6,
      schedule: 'Tue-Sat 10:00-18:00',
      status: 'On Break',
      location: 'Room 303',
      education: 'MD - Stanford University',
      languages: ['English']
    },
    {
      id: 4,
      name: 'Dr. Emily Wilson',
      specialty: 'Dermatology',
      experience: '8 years',
      phone: '+1 (555) 321-0987',
      email: 'e.wilson@clinic.com',
      rating: 4.6,
      patientsToday: 10,
      schedule: 'Mon-Wed-Fri 9:00-15:00',
      status: 'Available',
      location: 'Room 150',
      education: 'MD - UCLA Medical School',
      languages: ['English', 'Mandarin']
    }
  ]

  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getStatusColor = (status) => {
    switch (status) {
      case 'Available':
        return 'bg-green-100 text-green-800'
      case 'In Consultation':
        return 'bg-blue-100 text-blue-800'
      case 'On Break':
        return 'bg-yellow-100 text-yellow-800'
      case 'Off Duty':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Doctors</h1>
          <p className="text-gray-600">Manage your clinic's medical staff</p>
        </div>
        <button className="btn-primary flex items-center">
          <PlusIcon className="h-5 w-5 mr-2" />
          Add New Doctor
        </button>
      </div>

      {/* Controls */}
      <div className="card">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex space-x-2">
            <button
              onClick={() => setSelectedView('list')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedView === 'list'
                  ? 'bg-primary-100 text-primary-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              List View
            </button>
            <button
              onClick={() => setSelectedView('schedule')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedView === 'schedule'
                  ? 'bg-primary-100 text-primary-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Schedule View
            </button>
          </div>
          
          <div className="w-full sm:w-80">
            <input
              type="text"
              placeholder="Search doctors by name or specialty..."
              className="input-field"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Doctors List */}
      {selectedView === 'list' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredDoctors.map((doctor) => (
            <div key={doctor.id} className="card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <div className="h-16 w-16 rounded-full bg-primary-100 flex items-center justify-center">
                    <UserIcon className="h-8 w-8 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900">{doctor.name}</h3>
                    <p className="text-primary-600 font-medium">{doctor.specialty}</p>
                    <p className="text-sm text-gray-500">{doctor.experience} experience</p>
                    <div className="flex items-center mt-1">
                      <StarIcon className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="text-sm text-gray-600">{doctor.rating}</span>
                    </div>
                  </div>
                </div>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(doctor.status)}`}>
                  {doctor.status}
                </span>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <PhoneIcon className="h-4 w-4 mr-2" />
                  {doctor.phone}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <EnvelopeIcon className="h-4 w-4 mr-2" />
                  {doctor.email}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  {doctor.schedule}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <ClockIcon className="h-4 w-4 mr-2" />
                  {doctor.patientsToday} patients today
                </div>
              </div>

              <div className="mt-4 flex justify-between items-center">
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Location:</span> {doctor.location}
                </div>
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

      {/* Schedule View */}
      {selectedView === 'schedule' && (
        <div className="card">
          <h3 className="text-lg font-medium text-gray-900 mb-6">Doctor Schedules</h3>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Doctor
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Mon
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tue
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Wed
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Thu
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Fri
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Sat
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredDoctors.map((doctor) => (
                  <tr key={doctor.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                          <UserIcon className="h-5 w-5 text-primary-600" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{doctor.name}</div>
                          <div className="text-sm text-gray-500">{doctor.specialty}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                        9:00-17:00
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                        9:00-17:00
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                        9:00-17:00
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                        9:00-17:00
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                        9:00-17:00
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Off
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {filteredDoctors.length === 0 && (
        <div className="text-center py-12">
          <UserIcon className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No doctors found</h3>
          <p className="mt-1 text-sm text-gray-500">
            Try adjusting your search criteria or add a new doctor.
          </p>
        </div>
      )}
    </div>
  )
}

export default Doctors