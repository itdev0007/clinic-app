# MediClinic Pro - Medical Clinic Management System

A comprehensive medical clinic management application built with React, Vite, and Tailwind CSS.

## Features

### 🏥 **Dashboard**
- Overview statistics and key metrics
- Quick action buttons for common tasks
- Today's appointments overview
- Real-time clinic performance indicators

### 👥 **Patient Management**
- Complete patient list with search and filtering
- Patient registration with comprehensive forms
- Medical history tracking
- Contact information management

### 👨‍⚕️ **Doctor Management**
- Doctor profiles and specializations
- Schedule management and availability
- Real-time status tracking
- List and schedule view options

### 📋 **Services & Appointments**
- Service catalog management
- Appointment scheduling and tracking
- Status management (Confirmed, In Progress, Waiting, Cancelled)
- Date and time filtering

### ⚙️ **Settings**
- Clinic information configuration
- User management system
- Working hours setup
- Notification preferences
- Security settings

### 📊 **Reports & Analytics**
- Revenue tracking and trends
- Patient demographics analysis
- Appointment analytics
- Financial reports
- Export functionality

## Technology Stack

- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Routing**: React Router DOM
- **UI Components**: Headless UI

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd medical-clinic-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
medical-clinic-app/
├── src/
│   ├── components/
│   │   └── Layout.jsx          # Main layout with navigation
│   ├── pages/
│   │   ├── Dashboard.jsx       # Dashboard overview
│   │   ├── Patients.jsx        # Patient management
│   │   ├── PatientRegister.jsx # Patient registration form
│   │   ├── Doctors.jsx         # Doctor management
│   │   ├── Services.jsx        # Services and appointments
│   │   ├── Settings.jsx        # Application settings
│   │   └── Reports.jsx         # Reports and analytics
│   ├── App.jsx                 # Main application component
│   ├── index.css               # Global styles and Tailwind imports
│   └── main.jsx                # Application entry point
├── public/                     # Static assets
├── index.html                  # HTML template
├── package.json                # Dependencies and scripts
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
└── vite.config.js              # Vite configuration
```

## Key Features

### Navigation
- Horizontal dropdown menu system
- Responsive design for mobile and desktop
- Active state indicators
- Intuitive user interface

### Data Management
- Local state management with React hooks
- Form validation and error handling
- Search and filtering capabilities
- Real-time updates

### UI/UX
- Modern, clean interface design
- Consistent color scheme and typography
- Responsive grid layouts
- Interactive components with hover states
- Loading states and feedback

## Customization

### Styling
The application uses Tailwind CSS for styling. Key color schemes are defined in `tailwind.config.js`:

- Primary colors: Blue shades for main branding
- Status colors: Green (success), Red (error), Yellow (warning)
- Neutral colors: Gray shades for text and backgrounds

### Adding New Features
1. Create new page components in `src/pages/`
2. Add routes in `src/App.jsx`
3. Update navigation in `src/components/Layout.jsx`
4. Follow existing patterns for state management and styling

## Demo Data
The application includes sample data for demonstration purposes:
- 5+ sample patients with complete profiles
- 4+ sample doctors with specializations
- Multiple appointment records
- Service catalog
- Analytics data

## Future Enhancements
- Backend API integration
- Database connectivity
- User authentication system
- Email/SMS notification system
- Advanced reporting features
- Mobile app version
- Integration with medical devices
- Prescription management
- Billing and insurance processing

## License
This project is licensed under the MIT License.

## Support
For questions or support, please contact the development team.

---

Built with ❤️ for healthcare professionals
