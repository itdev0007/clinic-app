import { useState } from 'react'
import { 
  UserPlusIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  CalendarIcon,
  DocumentTextIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline'

const PatientRegister = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
    medicalHistory: '',
    allergies: '',
    currentMedications: '',
    insuranceProvider: '',
    insuranceNumber: '',
    referringDoctor: '',
    primaryConcern: ''
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    // Required fields validation
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required'
    if (!formData.gender) newErrors.gender = 'Gender is required'
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    if (!formData.address.trim()) newErrors.address = 'Address is required'

    // Email validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Phone validation
    if (formData.phone && !/^\+?[\d\s\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      console.log('Patient registered:', formData)
      alert('Patient registered successfully!')
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        gender: '',
        phone: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        emergencyContactName: '',
        emergencyContactPhone: '',
        medicalHistory: '',
        allergies: '',
        currentMedications: '',
        insuranceProvider: '',
        insuranceNumber: '',
        referringDoctor: '',
        primaryConcern: ''
      })
    } catch (error) {
      console.error('Registration failed:', error)
      alert('Registration failed. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Patient Registration</h1>
        <p className="text-gray-600">Register a new patient in the clinic system</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="card">
          <div className="flex items-center mb-6">
            <UserPlusIcon className="h-6 w-6 text-primary-600 mr-2" />
            <h3 className="text-lg font-medium text-gray-900">Personal Information</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First Name *
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className={`input-field ${errors.firstName ? 'border-red-500' : ''}`}
                placeholder="Enter first name"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <ExclamationTriangleIcon className="h-4 w-4 mr-1" />
                  {errors.firstName}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last Name *
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className={`input-field ${errors.lastName ? 'border-red-500' : ''}`}
                placeholder="Enter last name"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <ExclamationTriangleIcon className="h-4 w-4 mr-1" />
                  {errors.lastName}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date of Birth *
              </label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                className={`input-field ${errors.dateOfBirth ? 'border-red-500' : ''}`}
              />
              {errors.dateOfBirth && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <ExclamationTriangleIcon className="h-4 w-4 mr-1" />
                  {errors.dateOfBirth}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gender *
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className={`input-field ${errors.gender ? 'border-red-500' : ''}`}
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <ExclamationTriangleIcon className="h-4 w-4 mr-1" />
                  {errors.gender}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="card">
          <div className="flex items-center mb-6">
            <PhoneIcon className="h-6 w-6 text-primary-600 mr-2" />
            <h3 className="text-lg font-medium text-gray-900">Contact Information</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`input-field ${errors.phone ? 'border-red-500' : ''}`}
                placeholder="+1 (555) 123-4567"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <ExclamationTriangleIcon className="h-4 w-4 mr-1" />
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                placeholder="patient@email.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <ExclamationTriangleIcon className="h-4 w-4 mr-1" />
                  {errors.email}
                </p>
              )}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address *
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className={`input-field ${errors.address ? 'border-red-500' : ''}`}
                placeholder="123 Main Street"
              />
              {errors.address && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <ExclamationTriangleIcon className="h-4 w-4 mr-1" />
                  {errors.address}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                City
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="input-field"
                placeholder="New York"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                State
              </label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                className="input-field"
                placeholder="NY"
              />
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="card">
          <div className="flex items-center mb-6">
            <ExclamationTriangleIcon className="h-6 w-6 text-primary-600 mr-2" />
            <h3 className="text-lg font-medium text-gray-900">Emergency Contact</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contact Name
              </label>
              <input
                type="text"
                name="emergencyContactName"
                value={formData.emergencyContactName}
                onChange={handleInputChange}
                className="input-field"
                placeholder="Emergency contact name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contact Phone
              </label>
              <input
                type="tel"
                name="emergencyContactPhone"
                value={formData.emergencyContactPhone}
                onChange={handleInputChange}
                className="input-field"
                placeholder="+1 (555) 987-6543"
              />
            </div>
          </div>
        </div>

        {/* Medical Information */}
        <div className="card">
          <div className="flex items-center mb-6">
            <DocumentTextIcon className="h-6 w-6 text-primary-600 mr-2" />
            <h3 className="text-lg font-medium text-gray-900">Medical Information</h3>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Primary Concern
              </label>
              <textarea
                name="primaryConcern"
                value={formData.primaryConcern}
                onChange={handleInputChange}
                rows={3}
                className="input-field"
                placeholder="Describe the main reason for today's visit..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Medical History
              </label>
              <textarea
                name="medicalHistory"
                value={formData.medicalHistory}
                onChange={handleInputChange}
                rows={3}
                className="input-field"
                placeholder="Previous medical conditions, surgeries, etc."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Known Allergies
              </label>
              <textarea
                name="allergies"
                value={formData.allergies}
                onChange={handleInputChange}
                rows={2}
                className="input-field"
                placeholder="List any known allergies (medications, foods, etc.)"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Medications
              </label>
              <textarea
                name="currentMedications"
                value={formData.currentMedications}
                onChange={handleInputChange}
                rows={3}
                className="input-field"
                placeholder="List current medications and dosages"
              />
            </div>
          </div>
        </div>

        {/* Insurance Information */}
        <div className="card">
          <div className="flex items-center mb-6">
            <DocumentTextIcon className="h-6 w-6 text-primary-600 mr-2" />
            <h3 className="text-lg font-medium text-gray-900">Insurance Information</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Insurance Provider
              </label>
              <input
                type="text"
                name="insuranceProvider"
                value={formData.insuranceProvider}
                onChange={handleInputChange}
                className="input-field"
                placeholder="Blue Cross Blue Shield"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Insurance Number
              </label>
              <input
                type="text"
                name="insuranceNumber"
                value={formData.insuranceNumber}
                onChange={handleInputChange}
                className="input-field"
                placeholder="Insurance policy number"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="btn-secondary"
            disabled={isSubmitting}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn-primary flex items-center"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Registering...
              </>
            ) : (
              <>
                <UserPlusIcon className="h-5 w-5 mr-2" />
                Register Patient
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}

export default PatientRegister