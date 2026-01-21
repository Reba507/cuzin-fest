# Fauna - React + Vite Template

A modern, responsive React template built with Vite, React Router, and Tailwind CSS. This template provides a complete foundation for building professional web applications with pre-built pages and components.

## Features

- ⚡️ **Vite** - Lightning fast development server and build tool
- ⚛️ **React 19** - Latest React version with improved performance
- 🎨 **Tailwind CSS v4** - Utility-first CSS framework with Vite integration
- 🚀 **React Router v7** - Client-side routing for single-page applications
- 📱 **Responsive Design** - Mobile-first approach with responsive layouts
- 📄 **Pre-built Pages** - Ready-to-use page templates
- 🧩 **Component Library** - Reusable UI components
- 📁 **Organized Structure** - Clean project architecture with features-based organization

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. Clone or download this template
2. Navigate to the project directory:
   ```bash
   cd fauna
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Building for Production

Create an optimized production build:
```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
fauna/
├── public/              # Static assets
│   ├── favicon.png     # Site favicon
│   └── images/         # Image assets
├── src/
│   ├── app/            # Application core
│   │   ├── app.jsx     # Main app component
│   │   ├── provider.jsx # Context providers
│   │   ├── router.jsx  # Route configuration
│   │   └── routes/     # Page components
│   │       ├── home.jsx
│   │       ├── about.jsx
│   │       ├── blog.jsx
│   │       ├── blog-single.jsx
│   │       ├── contact.jsx
│   │       ├── pricing.jsx
│   │       ├── login.jsx
│   │       └── register.jsx
│   ├── components/     # Reusable UI components
│   ├── config/         # Configuration files
│   ├── data/           # Static data and content
│   ├── features/       # Feature-specific modules
│   ├── index.css       # Global styles
│   └── main.jsx        # Application entry point
├── index.html          # HTML entry point
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
└── eslint.config.js    # ESLint configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## Available Pages

The template includes the following pre-built pages:

- **Home** - Landing page with hero section and features
- **About** - Company/project information page
- **Blog** - Blog listing page
- **Blog Single** - Individual blog post page
- **Contact** - Contact form and information
- **Pricing** - Pricing plans and features
- **Login** - User authentication page
- **Register** - User registration page

## Customization

### Styling

The template uses Tailwind CSS v4 with Vite integration. You can customize the design by:

1. Modifying Tailwind classes directly in components
2. Updating the global styles in `src/index.css`
3. Extending Tailwind configuration if needed

### Adding New Pages

1. Create a new component in `src/app/routes/`
2. Add the route in `src/app/router.jsx`
3. Update navigation components as needed

### Data Management

Static data is stored in `src/data/` directory. You can:
- Modify existing JSON files for content updates
- Add new data files for additional content
- Integrate with APIs for dynamic data

