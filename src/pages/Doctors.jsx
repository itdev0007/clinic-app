import React, { useState } from 'react'
import { Search, Plus, Edit, Eye, Phone, Mail, Calendar, Star, MapPin } from 'lucide-react'

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterSpecialty, setFilterSpecialty] = useState('all')

  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Smith',
      specialty: 'Cardiology',
      experience: '15 years',
      phone: '+1 (555) 123-4567',
      email: 'dr.smith@clinic.com',
      rating: 4.9,
      patients: 340,
      available: true,
      schedule: 'Mon-Fri 9:00-17:00',
      location: 'Room 201'
    },
    {
      id: 2,
      name: 'Dr. Michael Johnson',
      specialty: 'Neurology',
      experience: '12 years',
      phone: '+1 (555) 234-5678',
      email: 'dr.johnson@clinic.com',
      rating: 4.8,
      patients: 285,
      available: true,
      schedule: 'Mon-Wed-Fri 8:00-16:00',
      location: 'Room 305'
    },
    {
      id: 3,
      name: 'Dr. Emily Brown',
      specialty: 'Pediatrics',
      experience: '8 years',
      phone: '+1 (555) 345-6789',
      email: 'dr.brown@clinic.com',
      rating: 4.9,
      patients: 420,
      available: false,
      schedule: 'Tue-Thu-Sat 9:00-18:00',
      location: 'Room 102'
    },
    {
      id: 4,
      name: 'Dr. James Wilson',
      specialty: 'Orthopedics',
      experience: '20 years',
      phone: '+1 (555) 456-7890',
      email: 'dr.wilson@clinic.com',
      rating: 4.7,
      patients: 380,
      available: true,
      schedule: 'Mon-Thu 10:00-18:00',
      location: 'Room 403'
    },
    {
      id: 5,
      name: 'Dr. Lisa Davis',
      specialty: 'Dermatology',
      experience: '10 years',
      phone: '+1 (555) 567-8901',
      email: 'dr.davis@clinic.com',
      rating: 4.8,
      patients: 295,
      available: true,
      schedule: 'Mon-Fri 8:30-16:30',
      location: 'Room 208'
    }
  ]

  const specialties = ['all', 'Cardiology', 'Neurology', 'Pediatrics', 'Orthopedics', 'Dermatology']

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSpecialty = filterSpecialty === 'all' || doctor.specialty === filterSpecialty
    return matchesSearch && matchesSpecialty
  })

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Doctors Management</h1>
        <button className="btn btn-primary flex items-center">
          <Plus className="h-4 w-4 mr-2" />
          Add New Doctor
        </button>
      </div>

      {/* Search and Filter */}
      <div className="card p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search doctors by name or specialty..."
                className="form-input pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <select
              className="form-input"
              value={filterSpecialty}
              onChange={(e) => setFilterSpecialty(e.target.value)}
            >
              {specialties.map(specialty => (
                <option key={specialty} value={specialty}>
                  {specialty === 'all' ? 'All Specialties' : specialty}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDoctors.map((doctor) => (
          <div key={doctor.id} className="card p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-medical-100 flex items-center justify-center">
                  <span className="text-lg font-semibold text-medical-700">
                    {doctor.name.split(' ').map(n => n[1]).join('')}
                  </span>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold text-gray-900">{doctor.name}</h3>
                  <p className="text-sm text-gray-600">{doctor.specialty}</p>
                </div>
              </div>
              <div className={`h-3 w-3 rounded-full ${
                doctor.available ? 'bg-green-400' : 'bg-red-400'
              }`} />
            </div>

            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-600">
                <Calendar className="h-4 w-4 mr-2" />
                Experience: {doctor.experience}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Star className="h-4 w-4 mr-2 text-yellow-500" />
                Rating: {doctor.rating}/5.0 ({doctor.patients} patients)
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="h-4 w-4 mr-2" />
                {doctor.location}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Calendar className="h-4 w-4 mr-2" />
                {doctor.schedule}
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-1" />
                  {doctor.phone}
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-600 mb-4">
                <Mail className="h-4 w-4 mr-1" />
                {doctor.email}
              </div>
              
              <div className="flex space-x-2">
                <button className="flex-1 btn btn-secondary text-sm">
                  <Eye className="h-4 w-4 mr-1" />
                  View
                </button>
                <button className="flex-1 btn btn-primary text-sm">
                  <Edit className="h-4 w-4 mr-1" />
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="card p-6 text-center">
          <div className="text-2xl font-bold text-medical-600">{doctors.length}</div>
          <div className="text-sm text-gray-600">Total Doctors</div>
        </div>
        <div className="card p-6 text-center">
          <div className="text-2xl font-bold text-green-600">
            {doctors.filter(d => d.available).length}
          </div>
          <div className="text-sm text-gray-600">Available Now</div>
        </div>
        <div className="card p-6 text-center">
          <div className="text-2xl font-bold text-blue-600">{specialties.length - 1}</div>
          <div className="text-sm text-gray-600">Specialties</div>
        </div>
        <div className="card p-6 text-center">
          <div className="text-2xl font-bold text-purple-600">
            {Math.round(doctors.reduce((acc, d) => acc + d.rating, 0) / doctors.length * 10) / 10}
          </div>
          <div className="text-sm text-gray-600">Avg Rating</div>
        </div>
      </div>
    </div>
  )
}

export default Doctors