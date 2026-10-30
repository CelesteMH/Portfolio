import React from 'react';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';
import BackButton from '../../components/BackButton';

export default function Sustainable_Water_Monitoring_System() {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const headingColor = isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[600];
  const bodyColor = themeColors.text.primary;

//   const equation = {
//     textAlign: 'center' as const,
//     fontStyle: 'italic',
//     margin: '1.5rem 0',
//     fontSize: '1.1rem'
//   };

  return (
    <main
      className="min-h-screen"
      style={{ backgroundColor: themeColors.background.primary, color: bodyColor }}
    >
      <div className="max-w-3xl mx-auto p-8 pt-24">
        <BackButton to="/" scrollToId="projects" label="Back to Projects" ariaLabel="Back to projects" />

        <h1 className="text-4xl font-bold mb-8" style={{ color: headingColor }}>
          Reusable Concrete and COB Molds
        </h1>

        <h2 className="text-2xl font-bold mb-3" style={{ color: headingColor }}>Introduction</h2>
        <p className="mb-8 leading-relaxed">
Collecting data on local waterways and rivers within San Francisco Bay with partners such as SCVURPPP has helped municipalities improve the health and quality of their waters and manage stormwater pollution more effectively. By tracking long-term trends in the condition of aquatic life in creeks, they can monitor health indicators and report on collaborative efforts. However, at the local level for farms and water storage, bioassessment protocols are not available on site for direct data collection and analysis. These regional monitoring activities for farms pumping water for storage are vital for locally sourced farming and management without negatively impacting the complex natural habitats and rivers they draw from.
       </p>

        <p className="mb-6 leading-relaxed">
Our partner, Star Route Farms, has a mission to ensure top-quality produce as the oldest continuously certified organic row crop farm in California. Having adopted technology such as precision planters and hydro-cooling equipment, they are now looking for on-site water sensor systems that can measure changing flow rates, water temperatures, and moving water volumes to maximize water conservation without connecting to the power grid. In past attempts to meet this requirement, they have not found a system that can withstand their high spring flooding while meeting their modeling and data-collection needs.
        </p>

        <p className="mb-6 leading-relaxed">
Our team proposes a solution that collects data remotely and models water-volume movement, powered remotely by algae-assisted microbial fuel cells (MFCs).
        </p>

        <h2 className="text-xl font-semibold mb-2" style={{ color: headingColor }}> This Project is ongoing. Please contact me for more information.</h2>

      </div>
    </main>
  );
}