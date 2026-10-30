import React from 'react';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';
import BackButton from '../../components/BackButton';

export default function Historical_Project_HydroElectric_Power_in_Brazil() {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const headingColor = isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[600];
  const bodyColor = themeColors.text.primary;

  // const equation = {
  //   textAlign: 'center' as const,
  //   fontStyle: 'italic',
  //   margin: '1.5rem 0',
  //   fontSize: '1.1rem'
  // };

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

        <h2 className="text-2xl font-bold mb-3" style={{ color: headingColor }}>Abstract</h2>
        <p className="mb-8 leading-relaxed">
​This paper focuses on the newer “green” tannin-furanic rigid foam insulation, comparing it with commercially available alternatives and other bio-based materials. It will cover the extraction process, focusing on traditional liquid/solid extraction and supercritical fluid extraction, and provide an overview of current applications in construction and other markets, such as construction adhesives and the fashion industry. The case study results explain the rigid foam's characteristics:, use, application, ease of production, and testing properties, such as thermal conductivity, porosity, compression, and mechanical strength, showing that tannin-furanic foams perform comparably to market-leading competitors, such as polyurethane. The material is lightweight, easy and quick to prepare, and can be fully adjusted to be up to 100% bio-based materials. These findings underscore the material's promise for advancing sustainable building practices and commercial viability.
       </p>

        <h2 className="text-2xl font-bold mb-3" style={{ color: headingColor }}>Project Overview</h2>

        <p className="mb-6 leading-relaxed">
Construction companies have set forth the image of chemical foam insulation, which has taken over the market. Materials such as polyurethane, polystyrene, or phenolformaldehyde have exceptional properties such as thermal and sound insulation while being lightweight; however, their inherent defects then get overwritten–for example, their high flammability, brittleness, acidity, along with their petroleum-based properties. While modifiers do exist, it is likely at the cost of another carbon-heavy product–such as polylols, which have raised further concerns due to their high toxicity and harmful compounds released in the air upon burning. Such issues have been brought to light in recent years amid this evolving climate in the construction industry. As traditional work technologies shift toward greener options, the insulating properties have become a highly relevant issue.
        </p>

        <p className="mb-6 leading-relaxed">
​	In pursuit of this sustainable design, insulation has become a top priority for climate protection and heat transfer, reducing the need for AC, heating, and other materials with a higher carbon footprint. Most insulation materials are chosen for their ability to reduce heat flow by conduction, keeping energy inside the ventilated home. Though this is often at the hands of advertised multifaceted industry options, leaving petroleum compounds within the walls of our homes. Bio-based alternatives have been tested in market procedures at favorable and equal levels from algae, moss, and tannin-furanic foam types.
        </p>

        <p className="mb-6 leading-relaxed">
Tannin-furanic rigid foams, in particular, have attracted increasing interest thanks to their easy preparation and lightweight construction. The foam product formulation has a 90% minimum biomass content, with self-polymerization enabled by a furfuryl alcohol co-reaction, giving it the “spray foam” expansion type we typically see in most homes. It exhibits properties comparable to those of market counterparts, including lightweight, thermal insulation, and improved flame-retardant performance. There are ongoing research projects to further increase this biomass content and to limit the 10% non-biomass product, thereby reducing the small amounts of Volatile Organic Compounds (VOCs) produced during growth. This means chemical compounds are released into the air, harming the environment and possibly human health. Though most other commercial products share this same downside, it becomes an investment issue, especially when researching a greener alternative.
        </p>

        <p className="mb-6 leading-relaxed">
This research project follows case studies experimentally demonstrating the material strength, production, and optomization of tannin-furanic rigid foam construction. The growing interest in developing sustainable, innovative materials has led to a resurgence of bio-based building materials. Tannin-furanic rigid foams leverage the existing extract market and a widely available resource to become an active competitor to the current insulation leaders – polyurethane foams. Incorporating biocomposite insulations such as tannin-furanic foams represents a significant advancement toward sustainable construction and green building initiatives. Continued optimization and global adoption of these materials will expand access to eco-friendly solutions and promote responsible building practices worldwide.
       </p>     


        <h2 className="text-xl font-semibold mb-2" style={{ color: headingColor }}>Documents</h2>
        <ul className="list-disc pl-6">
          <li>
            <a
              href="/tannin-research/DualSided_Rotor_EV_Engine_Research_Project.pdf"
              target="_blank"
              rel="noreferrer"
              className="underline"
              style={{ color: themeColors.text.accent }}
            >
              Project report (PDF)
            </a>
          </li>
        </ul>

      </div>
    </main>
  );
}