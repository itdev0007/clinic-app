import { useState } from 'react'
import { 
  MagnifyingGlassIcon, 
  PlusIcon, 
  EyeIcon, 
  PencilIcon, 
  PhoneIcon,
  EnvelopeIcon,
  CalendarIcon,
  UserIcon
} from '@heroicons/react/24/outline'

const Patients = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('all')

  const patients = [
    {
      id: 1,
      name: 'John Doe',
      age: 35,
      gender: 'Male',
      phone: '+1 (555) 123-4567',
      email: 'john.doe@email.com',
      lastVisit: '2024-01-15',
      status: 'Active',
      condition: 'Hypertension',
      doctor: 'Dr. Smith'
    },
    {
      id: 2,
      name: 'Jane Smith',
      age: 28,
      gender: 'Female',
      phone: '+1 (555) 987-6543',
      email: 'jane.smith@email.com',
      lastVisit: '2024-01-20',
      status: 'Active',
      condition: 'Diabetes',
      doctor: 'Dr. Johnson'
    },
    {
      id: 3,
      name: 'Mike Wilson',
      age: 42,
      gender: 'Male',
      phone: '+1 (555) 456-7890',
      email: 'mike.wilson@email.com',
      lastVisit: '2024-01-10',
      status: 'Inactive',
      condition: 'Asthma',
      doctor: 'Dr. Brown'
    },
    {
      id: 4,
      name: 'Sarah Davis',
      age: 31,
      gender: 'Female',
      phone: '+1 (555) 321-0987',
      email: 'sarah.davis@email.com',
      lastVisit: '2024-01-22',
      status: 'Active',
      condition: 'Migraine',
      doctor: 'Dr. Wilson'
    },
    {
      id: 5,
      name: 'Robert Johnson',
      age: 55,
      gender: 'Male',
      phone: '+1 (555) 654-3210',
      email: 'robert.johnson@email.com',
      lastVisit: '2024-01-18',
      status: 'Active',
      condition: 'Arthritis',
      doctor: 'Dr. Smith'
    }
  ]

  const filteredPatients = patients.filter(patient => {
    const matchesSearch = patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         patient.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         patient.phone.includes(searchTerm)
    
    const matchesFilter = selectedFilter === 'all' || 
                         patient.status.toLowerCase() === selectedFilter.toLowerCase()
    
    return matchesSearch && matchesFilter
  })

  const handleViewPatient = (patientId) => {
    console.log('View patient:', patientId)
    // Add navigation logic here
  }

  const handleEditPatient = (patientId) => {
    console.log('Edit patient:', patientId)
    // Add navigation logic here
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Patients</h1>
          <p className="text-gray-600">Manage your clinic's patient records</p>
        </div>
        <button className="btn-primary flex items-center">
          <PlusIcon className="h-5 w-5 mr-2" />
          Add New Patient
        </button>
      </div>

      {/* Search and Filter */}
      <div className="card">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search patients by name, email, or phone..."
                className="input-field pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="sm:w-48">
            <select
              className="input-field"
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
            >
              <option value="all">All Patients</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>
      </div>

      {/* Patients List */}
      <div className="card">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-medium text-gray-900">
            Patient List ({filteredPatients.length})
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Patient
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Visit
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Doctor
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
              {filteredPatients.map((patient) => (
                <tr key={patient.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
                        <UserIcon className="h-6 w-6 text-primary-600" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{patient.name}</div>
                        <div className="text-sm text-gray-500">{patient.age} years, {patient.gender}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 flex items-center">
                      <PhoneIcon className="h-4 w-4 mr-1 text-gray-400" />
                      {patient.phone}
                    </div>
                    <div className="text-sm text-gray-500 flex items-center mt-1">
                      <EnvelopeIcon className="h-4 w-4 mr-1 text-gray-400" />
                      {patient.email}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-1 text-gray-400" />
                      {patient.lastVisit}
                    </div>
                    <div className="text-sm text-gray-500">{patient.condition}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {patient.doctor}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      patient.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {patient.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleViewPatient(patient.id)}
                        className="text-primary-600 hover:text-primary-900 p-1 rounded-full hover:bg-primary-50"
                        title="View Patient"
                      >
                        <EyeIcon className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleEditPatient(patient.id)}
                        className="text-gray-600 hover:text-gray-900 p-1 rounded-full hover:bg-gray-50"
                        title="Edit Patient"
                      >
                        <PencilIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredPatients.length === 0 && (
          <div className="text-center py-12">
            <UserIcon className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No patients found</h3>
            <p className="mt-1 text-sm text-gray-500">
              Try adjusting your search criteria or add a new patient.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Patients