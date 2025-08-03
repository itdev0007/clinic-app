import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  UserGroupIcon, 
  UserPlusIcon, 
  UserIcon, 
  ClipboardDocumentListIcon,
  CogIcon,
  ChartBarIcon,
  HomeIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline'

const Layout = ({ children }) => {
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  const navigation = [
    {
      name: 'Dashboard',
      href: '/',
      icon: HomeIcon,
      current: location.pathname === '/'
    },
    {
      name: 'Patients',
      icon: UserGroupIcon,
      current: location.pathname.startsWith('/patients'),
      dropdown: [
        { name: 'Patient List', href: '/patients' },
        { name: 'Add Patient', href: '/patients/add' },
        { name: 'Patient History', href: '/patients/history' }
      ]
    },
    {
      name: 'Doctors',
      href: '/doctors',
      icon: UserIcon,
      current: location.pathname === '/doctors',
      dropdown: [
        { name: 'Doctor List', href: '/doctors' },
        { name: 'Add Doctor', href: '/doctors/add' },
        { name: 'Schedules', href: '/doctors/schedules' }
      ]
    },
    {
      name: 'Patient Register',
      href: '/patient-register',
      icon: UserPlusIcon,
      current: location.pathname === '/patient-register'
    },
    {
      name: 'Services',
      icon: ClipboardDocumentListIcon,
      current: location.pathname.startsWith('/services'),
      dropdown: [
        { name: 'Service List', href: '/services' },
        { name: 'Appointments', href: '/services/appointments' },
        { name: 'Add Service', href: '/services/add' }
      ]
    },
    {
      name: 'Settings',
      href: '/settings',
      icon: CogIcon,
      current: location.pathname === '/settings'
    },
    {
      name: 'Reports',
      icon: ChartBarIcon,
      current: location.pathname.startsWith('/reports'),
      dropdown: [
        { name: 'Patient Reports', href: '/reports/patients' },
        { name: 'Financial Reports', href: '/reports/financial' },
        { name: 'Analytics', href: '/reports' }
      ]
    }
  ]

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index)
  }

  const closeDropdown = () => {
    setActiveDropdown(null)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-xl font-bold text-primary-600">
                  MediClinic Pro
                </h1>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-1">
              {navigation.map((item, index) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(index)}
                        className={`${
                          item.current
                            ? 'bg-primary-100 text-primary-700'
                            : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                        } group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-150`}
                      >
                        <item.icon
                          className="mr-2 h-4 w-4"
                          aria-hidden="true"
                        />
                        {item.name}
                        <ChevronDownIcon
                          className={`ml-1 h-4 w-4 transition-transform duration-150 ${
                            activeDropdown === index ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {activeDropdown === index && (
                        <div className="nav-dropdown">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="nav-dropdown-item"
                              onClick={closeDropdown}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`${
                        item.current
                          ? 'bg-primary-100 text-primary-700'
                          : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                      } group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-150`}
                      onClick={closeDropdown}
                    >
                      <item.icon
                        className="mr-2 h-4 w-4"
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* User menu */}
            <div className="flex items-center">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-700">Dr. Smith</span>
                <div className="h-8 w-8 rounded-full bg-primary-600 flex items-center justify-center text-white text-sm font-medium">
                  DS
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu overlay */}
        {activeDropdown !== null && (
          <div
            className="fixed inset-0 z-40"
            onClick={closeDropdown}
          />
        )}
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  )
}

export default Layout