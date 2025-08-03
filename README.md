# MediClinic - Medical Clinic Management System

A comprehensive medical clinic management application built with React, featuring patient management, doctor scheduling, service tracking, and comprehensive reporting.

## Features

### 🏥 Core Modules

- **Dashboard** - Overview of clinic statistics, appointments, and alerts
- **Patient Management** - Complete patient records with search and filtering
- **Patient Registration** - Comprehensive patient intake forms
- **Doctor Management** - Doctor profiles, specialties, and availability
- **Services Management** - Medical services, procedures, and pricing
- **Settings** - Clinic configuration and user preferences
- **Reports & Analytics** - Detailed reporting with charts and statistics

### 🎨 UI/UX Features

- **Responsive Design** - Works on desktop, tablet, and mobile devices
- **Modern Interface** - Clean, professional medical theme
- **Horizontal Dropdown Navigation** - Easy access to all modules
- **Search & Filter** - Quick access to patient and service data
- **Interactive Forms** - Comprehensive data entry with validation

### 🔧 Technical Features

- Built with React 18 and modern JavaScript
- Responsive design with Tailwind CSS
- Icon library with Lucide React
- Component-based architecture
- Client-side routing with React Router
- Form handling and state management

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the development server**
   ```bash
   npm run dev
   ```

3. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

### Build for Production

```bash
npm run build
```

## Project Structure

```
medical-clinic-app/
├── src/
│   ├── components/
│   │   └── Navigation.jsx      # Main navigation component
│   ├── pages/
│   │   ├── Dashboard.jsx       # Dashboard overview
│   │   ├── Patients.jsx        # Patient management
│   │   ├── PatientRegister.jsx # Patient registration
│   │   ├── Doctors.jsx         # Doctor management
│   │   ├── Services.jsx        # Services management
│   │   ├── Settings.jsx        # Configuration settings
│   │   └── Reports.jsx         # Reports and analytics
│   ├── App.jsx                 # Main application component
│   ├── main.jsx               # Application entry point
│   └── index.css              # Global styles
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Module Overview

### Dashboard
- Key metrics and statistics
- Today's appointments
- System alerts and notifications
- Quick action buttons

### Patient Management
- Complete patient listing with search
- Patient details and medical history
- Status tracking (active/inactive)
- Contact information management

### Patient Registration
- Comprehensive intake forms
- Personal and contact information
- Emergency contact details
- Medical history and allergies
- Insurance information

### Doctor Management
- Doctor profiles and specialties
- Availability and scheduling
- Performance ratings
- Contact information

### Services Management
- Medical services catalog
- Pricing and duration tracking
- Service categories
- Availability status

### Settings
- Clinic information configuration
- User preferences
- Notification settings
- Security configurations

### Reports & Analytics
- Overview statistics
- Patient demographics
- Financial reports
- Service performance analytics

## Customization

### Theming
The application uses Tailwind CSS with custom medical-themed colors defined in `tailwind.config.js`. You can customize:

- Primary colors (medical theme)
- Typography (Inter font)
- Component styles
- Layout spacing

### Adding New Features
1. Create new components in `src/components/`
2. Add new pages in `src/pages/`
3. Update routing in `src/App.jsx`
4. Add navigation items in `src/components/Navigation.jsx`

## Data Integration

Currently, the application uses mock data for demonstration. To integrate with a real backend:

1. Replace mock data with API calls
2. Add authentication and authorization
3. Implement real-time updates
4. Add data validation and error handling

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions, please contact the development team or create an issue in the repository.