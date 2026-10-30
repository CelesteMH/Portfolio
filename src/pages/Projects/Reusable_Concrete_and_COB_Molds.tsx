import React from 'react';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';
import BackButton from '../../components/BackButton';

export default function Reusable_Concrete_and_COB_Mold() {
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
        This project looks at the development of reusable concrete and cob molds for specimen fabrication. Existing molds are single use, create unnecessary waste, and can be challenging to remove. With the current mold, pressurized air is often used for removal, if the pressurized air is unable to remove the concrete specimen, the whole mold would need to be cut open. Likewise, with cob, the mold would be needed to be cut open every time. There were many approaches that we took in this project, push-up molds, 3D molds, wood and cardboard molds. Testing focused on ease of removal, functionality, how water tight molds were based on need of the specimen, and if the molds could be reused again. Results showed that the reusable molds have high potential as alternatives to regular single use molds. However, there needs to be more tests done to show that the molds along with liners could be used long term.
       </p>

        <h2 className="text-2xl font-bold mb-3" style={{ color: headingColor }}>Project Overview and Results</h2>

        <p className="mb-6 leading-relaxed">
            This project is divided into two designs: concrete and cob-specific. Each meets the constraints set by our client, Hana Mori. The designs create reusable, accessible mold systems using adaptable liners, modular molds, and low-waste materials. We addressed the unique curing processes of each material while maintaining quality, reducing waste, and ensuring ease of reuse and user accessibility.      
        </p>

        <p className="mb-6 leading-relaxed">
            For the COB molds, the push-up mechanism, combined with removable and washable fabric liners, creates a simple, affordable, and consistent design that requires minimal maintenance and allows for the preservation of the materials. By testing different fabric combinations and ventilation patterns, we optimized the design and identified the best prototype with a felt lining and diagonal ventilation holes, which best preserve specimen consistency and geometry while achieving the fastest curing period.        
        </p>

         <p className="mb-6 leading-relaxed">
            For the concrete molds, we tested sustainable materials and additional liners that can be added to existing systems to improve demolding ease compared to single-use traditional molds. The modular 3D-printed mold provided an adaptable, watertight structure that could accommodate multiple liner materials while maintaining a simple, consistent assembly process. Through qualitative analysis of the different liners, polypropylene performed best overall, maintaining specimen quality with the simplest cleaning process across additional iterations. Additionally, the wood-supported clay formwork demonstrated further potential for low-waste fabrication by using natural materials to form and cure concrete.        
        </p>       

        {/* <img
          src="/single-photon/figure1.png"
          alt="Figure 1"
          className="rounded mb-8"
          style={{ maxWidth: '100%' }}
        /> */}

        <h2 className="text-xl font-semibold mb-2" style={{ color: headingColor }}>Documents</h2>
        <ul className="list-disc pl-6">
          <li>
            <a
              href="/single-photon/Reusable_Concrete_and_COB_Molds.pdf"
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