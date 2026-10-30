import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { DarkModeProvider, useDarkMode } from './contexts/DarkModeContext'
import { useThemeColors } from './hooks/useThemeColors'
import { colors } from './styles/colors'
import Navigation from './components/section/Navigation'
import About from './components/section/About'
// import { divider } from './assets'
import './App.css'

// Lazy load project pages - add your project page imports here
// Example: const MyProject = lazy(() => import('./pages/projects/MyProject'))
const Contact = lazy(() => import('./pages/Contact'))

// Lazy load below-the-fold components for better initial load
const Projects = lazy(() => import('./components/section/Projects'))
const Experience = lazy(() => import('./components/section/Experience'))
const Leadership = lazy(() => import('./components/section/Leadership'))
// const Certifications = lazy(() => import('./components/section/Certifications'))
const Footer = lazy(() => import('./components/Footer'))

const Single_Photon_Quantum_Optics = lazy(() => import('./pages/Projects/Single_Photon_Quantum_Optics.tsx'))
const Reusable_Concrete_and_COB_Molds = lazy(() => import('./pages/Projects/Reusable_Concrete_and_COB_Molds.tsx'))
const Sustainable_Water_Monitoring_System = lazy(() => import('./pages/Projects/Sustainable_Water_Monitoring_System.tsx'))
const TanninFuranic_Rigid_Foam_Insulation_Research_Project = lazy(() => import('./pages/Projects/TanninFuranic_Rigid_Foam_Insulation_Research_Project.tsx'))
const DualSided_Rotor_EV_Engine_Research_Project = lazy(() => import('./pages/Projects/DualSided_Rotor_EV_Engine_Research_Project.tsx'))
const Historical_Project_HydroElectric_Power_in_Brazil = lazy(() => import('./pages/Projects/Historical_Project_HydroElectric_Power_in_Brazil.tsx'))

// ...

const dividerArt = `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠀⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡀⠀⠀⠀⠉⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠠⠤⠤⠤⠤⠤⠤⠤⠤⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠆⠀⠀⠀⠀⠀⠰⢾⡷⠆⠀⠀⠀⠤⠶⣾⣿⣷⠶⠦⠀⠀⠀⠠⢾⣷⠦⠀⠀⠀⠀⠀⠰⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠦⠤⠤⠤⠤⠤⠄
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠚⠀⠀⠀⠀⠘⠃⠀⠀⠀⠀⠀⠀⠈⣿⠁⠀⠀⠀⠀⠀⠀⠀⠇⠀⠀⠀⠀⣠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠀⠀⠀⠘⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`;

function HomePage() {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  return (
    <>
      <About />
      <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
        <Projects />
      </Suspense>
      <Suspense fallback={<div className="h-64 flex items-center justify-center">Loading...</div>}>
        <Experience />
      </Suspense>
      {/* Divider with gradient transitions */}
      <div className="w-full py-8 relative" style={{
        background: isDarkMode ? themeColors.background.gradientEnd : colors.white,
        transition: 'background 0.3s ease-in-out'
      }}>
        {/* Top gradient overlay to blend with Experience section */}
        <div
          className="absolute top-0 left-0 right-0 pointer-events-none"
          style={{
            height: '60px',
            background: isDarkMode
              ? `linear-gradient(180deg, ${themeColors.background.gradientEnd} 0%, transparent 100%)`
              : `linear-gradient(180deg, ${colors.white} 0%, transparent 100%)`,
            zIndex: 1
          }}
        />
        {/* Bottom gradient overlay to blend with Skills section */}
        <div 
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            height: '200px',
            background: isDarkMode 
              ? `linear-gradient(180deg, transparent 0%, ${themeColors.background.gradientEnd} 100%)`
              : `linear-gradient(180deg, transparent 0%, ${themeColors.colors.pink[25]} 100%)`,
            zIndex: 1
          }}
        />
                <pre
          aria-hidden="true"
          className="relative select-none overflow-hidden text-center"
          style={{
            zIndex: 2,
            margin: 0,
            lineHeight: 1,
            fontFamily: 'monospace',
            fontSize: 'min(1rem, 1.3vw)',
            whiteSpace: 'pre',
            color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[400]
          }}
        >
{dividerArt}
        </pre>
      </div>
      <Suspense fallback={<div className="h-64 flex items-center justify-center">Loading...</div>}>
        <Leadership />
      </Suspense>
      {/* <Suspense fallback={<div className="h-64 flex items-center justify-center">Loading...</div>}>
        <Certifications />Ks
      </Suspense> */}
    </>
  )
}

function AppContent() {
  const { isDarkMode } = useDarkMode();

  return (
    <>
      <Navigation />
      <div className="app transition-colors duration-300" style={{ backgroundColor: isDarkMode ? '#1A2538' : undefined }}>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <main id="main-content" className="main-content">
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/contact" element={<Contact />} /> 

               <Route path="/projects/Single_Photon_Quantum_Optics" element={<Single_Photon_Quantum_Optics />} />
               <Route path="/projects/Reusable_Concrete_and_COB_Molds" element={<Reusable_Concrete_and_COB_Molds />} />
               <Route path="/projects/Sustainable_Water_Monitoring_System" element={<Sustainable_Water_Monitoring_System />} />
               <Route path="/projects/TanninFuranic_Rigid_Foam_Insulation_Research_Project" element={<TanninFuranic_Rigid_Foam_Insulation_Research_Project />} />
               <Route path="/projects/DualSided_Rotor_EV_Engine_Research_Project" element={<DualSided_Rotor_EV_Engine_Research_Project />} />
               <Route path="/projects/Historical_Project_HydroElectric_Power_in_Brazil" element={<Historical_Project_HydroElectric_Power_in_Brazil />} />


              {/* Add your project routes here */}
              {/* Example: <Route path="/projects/my-project" element={<MyProject />} /> */}
            </Routes>
          </Suspense>
        </main>
        <Suspense fallback={<div className="h-32 flex items-center justify-center">Loading...</div>}>
          <Footer />
        </Suspense>
      </div>
    </>
  )
}

function App() {
  return (
    <DarkModeProvider>
      <AppContent />
    </DarkModeProvider>
  )
}

export default App