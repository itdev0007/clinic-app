import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, Transition } from '@headlessui/react'
import { 
  Home, 
  Users, 
  UserPlus, 
  Stethoscope, 
  ClipboardList, 
  Settings, 
  BarChart3, 
  ChevronDown,
  Heart
} from 'lucide-react'

const Navigation = () => {
  const location = useLocation()
  
  const navigationItems = [
    {
      name: 'Dashboard',
      href: '/',
      icon: Home,
      current: location.pathname === '/'
    },
    {
      name: 'Patient Management',
      icon: Users,
      children: [
        { name: 'View Patients', href: '/patients', icon: Users },
        { name: 'Register Patient', href: '/patient-register', icon: UserPlus }
      ]
    },
    {
      name: 'Doctors',
      href: '/doctors',
      icon: Stethoscope,
      current: location.pathname === '/doctors'
    },
    {
      name: 'Services',
      href: '/services',
      icon: ClipboardList,
      current: location.pathname === '/services'
    },
    {
      name: 'Reports',
      href: '/reports',
      icon: BarChart3,
      current: location.pathname === '/reports'
    },
    {
      name: 'Settings',
      href: '/settings',
      icon: Settings,
      current: location.pathname === '/settings'
    }
  ]

  const isActive = (item) => {
    if (item.href) {
      return location.pathname === item.href
    }
    if (item.children) {
      return item.children.some(child => location.pathname === child.href)
    }
    return false
  }

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-medical-600" />
            <span className="text-xl font-bold text-gray-800">MediClinic</span>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => {
              if (item.children) {
                return (
                  <Menu key={item.name} as="div" className="relative">
                    <Menu.Button className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item)
                        ? 'text-medical-700 bg-medical-50'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}>
                      <item.icon className="h-4 w-4 mr-2" />
                      {item.name}
                      <ChevronDown className="h-4 w-4 ml-1" />
                    </Menu.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-in"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-left bg-white rounded-md shadow-lg border border-gray-200 z-50">
                        <div className="py-1">
                          {item.children.map((child) => (
                            <Menu.Item key={child.name}>
                              {({ active }) => (
                                <Link
                                  to={child.href}
                                  className={`flex items-center px-4 py-2 text-sm ${
                                    location.pathname === child.href
                                      ? 'text-medical-700 bg-medical-50'
                                      : active
                                      ? 'text-gray-900 bg-gray-50'
                                      : 'text-gray-700'
                                  }`}
                                >
                                  <child.icon className="h-4 w-4 mr-3" />
                                  {child.name}
                                </Link>
                              )}
                            </Menu.Item>
                          ))}
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                )
              }

              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    item.current
                      ? 'text-medical-700 bg-medical-50'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <item.icon className="h-4 w-4 mr-2" />
                  {item.name}
                </Link>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Menu as="div" className="relative">
              <Menu.Button className="flex items-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Menu.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-in"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right bg-white rounded-md shadow-lg border border-gray-200 z-50">
                  <div className="py-1">
                    {navigationItems.map((item) => {
                      if (item.children) {
                        return item.children.map((child) => (
                          <Menu.Item key={child.name}>
                            {({ active }) => (
                              <Link
                                to={child.href}
                                className={`flex items-center px-4 py-2 text-sm ${
                                  location.pathname === child.href
                                    ? 'text-medical-700 bg-medical-50'
                                    : active
                                    ? 'text-gray-900 bg-gray-50'
                                    : 'text-gray-700'
                                }`}
                              >
                                <child.icon className="h-4 w-4 mr-3" />
                                {child.name}
                              </Link>
                            )}
                          </Menu.Item>
                        ))
                      }

                      return (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <Link
                              to={item.href}
                              className={`flex items-center px-4 py-2 text-sm ${
                                item.current
                                  ? 'text-medical-700 bg-medical-50'
                                  : active
                                  ? 'text-gray-900 bg-gray-50'
                                  : 'text-gray-700'
                              }`}
                            >
                              <item.icon className="h-4 w-4 mr-3" />
                              {item.name}
                            </Link>
                          )}
                        </Menu.Item>
                      )
                    })}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation