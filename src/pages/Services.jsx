import React, { useState } from 'react'
import { Search, Plus, Edit, Eye, DollarSign, Clock, Activity } from 'lucide-react'

const Services = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterCategory, setFilterCategory] = useState('all')

  const services = [
    {
      id: 1,
      name: 'General Consultation',
      category: 'Consultation',
      description: 'Basic medical consultation and examination',
      duration: '30 min',
      price: 150,
      department: 'General Medicine',
      available: true
    },
    {
      id: 2,
      name: 'ECG (Electrocardiogram)',
      category: 'Diagnostic',
      description: 'Heart rhythm and electrical activity monitoring',
      duration: '15 min',
      price: 100,
      department: 'Cardiology',
      available: true
    },
    {
      id: 3,
      name: 'X-Ray Chest',
      category: 'Imaging',
      description: 'Chest X-ray imaging for lung and heart examination',
      duration: '10 min',
      price: 80,
      department: 'Radiology',
      available: true
    },
    {
      id: 4,
      name: 'Blood Test - Complete Panel',
      category: 'Laboratory',
      description: 'Comprehensive blood analysis including CBC, metabolic panel',
      duration: '5 min',
      price: 120,
      department: 'Laboratory',
      available: true
    },
    {
      id: 5,
      name: 'MRI Brain',
      category: 'Imaging',
      description: 'Magnetic resonance imaging of the brain',
      duration: '45 min',
      price: 800,
      department: 'Radiology',
      available: true
    },
    {
      id: 6,
      name: 'Physical Therapy Session',
      category: 'Treatment',
      description: 'Rehabilitation therapy for muscle and joint recovery',
      duration: '60 min',
      price: 90,
      department: 'Physical Therapy',
      available: true
    },
    {
      id: 7,
      name: 'Dental Cleaning',
      category: 'Dental',
      description: 'Professional dental cleaning and oral hygiene',
      duration: '30 min',
      price: 110,
      department: 'Dentistry',
      available: false
    },
    {
      id: 8,
      name: 'Vaccination - Annual Flu',
      category: 'Preventive',
      description: 'Annual influenza vaccination',
      duration: '10 min',
      price: 35,
      department: 'General Medicine',
      available: true
    }
  ]

  const categories = ['all', 'Consultation', 'Diagnostic', 'Imaging', 'Laboratory', 'Treatment', 'Dental', 'Preventive']

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.department.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = filterCategory === 'all' || service.category === filterCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Services Management</h1>
        <button className="btn btn-primary flex items-center">
          <Plus className="h-4 w-4 mr-2" />
          Add New Service
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
                placeholder="Search services by name, description, or department..."
                className="form-input pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <select
              className="form-input"
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <div key={service.id} className="card p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{service.name}</h3>
                <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                  service.category === 'Consultation' ? 'bg-blue-100 text-blue-800' :
                  service.category === 'Diagnostic' ? 'bg-green-100 text-green-800' :
                  service.category === 'Imaging' ? 'bg-purple-100 text-purple-800' :
                  service.category === 'Laboratory' ? 'bg-yellow-100 text-yellow-800' :
                  service.category === 'Treatment' ? 'bg-pink-100 text-pink-800' :
                  service.category === 'Dental' ? 'bg-indigo-100 text-indigo-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {service.category}
                </span>
              </div>
              <div className={`h-3 w-3 rounded-full ${
                service.available ? 'bg-green-400' : 'bg-red-400'
              }`} />
            </div>

            <p className="text-sm text-gray-600 mb-4">{service.description}</p>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center text-gray-600">
                  <Clock className="h-4 w-4 mr-2" />
                  Duration
                </div>
                <span className="font-medium text-gray-900">{service.duration}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center text-gray-600">
                  <DollarSign className="h-4 w-4 mr-2" />
                  Price
                </div>
                <span className="font-medium text-gray-900">${service.price}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center text-gray-600">
                  <Activity className="h-4 w-4 mr-2" />
                  Department
                </div>
                <span className="font-medium text-gray-900">{service.department}</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
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

      {/* Service Categories Overview */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Service Categories Overview</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {categories.slice(1).map(category => {
            const categoryServices = services.filter(s => s.category === category)
            const avgPrice = categoryServices.reduce((acc, s) => acc + s.price, 0) / categoryServices.length
            return (
              <div key={category} className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-lg font-bold text-gray-900">{categoryServices.length}</div>
                <div className="text-sm text-gray-600 mb-1">{category}</div>
                <div className="text-xs text-gray-500">
                  Avg: ${Math.round(avgPrice)}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Service Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="card p-6 text-center">
          <div className="text-2xl font-bold text-medical-600">{services.length}</div>
          <div className="text-sm text-gray-600">Total Services</div>
        </div>
        <div className="card p-6 text-center">
          <div className="text-2xl font-bold text-green-600">
            {services.filter(s => s.available).length}
          </div>
          <div className="text-sm text-gray-600">Available</div>
        </div>
        <div className="card p-6 text-center">
          <div className="text-2xl font-bold text-blue-600">{categories.length - 1}</div>
          <div className="text-sm text-gray-600">Categories</div>
        </div>
        <div className="card p-6 text-center">
          <div className="text-2xl font-bold text-purple-600">
            ${Math.round(services.reduce((acc, s) => acc + s.price, 0) / services.length)}
          </div>
          <div className="text-sm text-gray-600">Avg Price</div>
        </div>
      </div>
    </div>
  )
}

export default Services