import React from 'react';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';
import BackButton from '../../components/BackButton';

export default function Single_Photon_Quantum_Optics() {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const headingColor = isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[600];
  const bodyColor = themeColors.text.primary;

  const equation = {
    textAlign: 'center' as const,
    fontStyle: 'italic',
    margin: '1.5rem 0',
    fontSize: '1.1rem'
  };

  return (
    <main
      className="min-h-screen"
      style={{ backgroundColor: themeColors.background.primary, color: bodyColor }}
    >
      <div className="max-w-3xl mx-auto p-8 pt-24">
        <BackButton to="/" scrollToId="projects" label="Back to Projects" ariaLabel="Back to projects" />

        <h1 className="text-4xl font-bold mb-8" style={{ color: headingColor }}>
          Single Photon Quantum Optics
        </h1>

        <h2 className="text-2xl font-bold mb-3" style={{ color: headingColor }}>Abstract</h2>
        <p className="mb-8 leading-relaxed">
          This experiment investigates the quantum nature of light through single-photon interference and coincidence measurements. Spontaneous parametric down-conversion (SPDC) generates pairs of entangled photons by splitting a single high-energy photon into two lower-energy photons. These photon pairs are then directed through a beam splitter and a polarization interferometer. The detection setup consists of either two detectors monitoring the idler photons for coincidences or three detectors: one measuring the signal photon and two measuring the idler photon. This allows us to determine whether light exhibits wave-like, particle-like, or both behaviors. The three-detector measurements show antibunching and anticorrelation in the intensity correlation function, supporting the quantum theory of light as indivisible photons. In contrast, two-detector measurements align with classical behavior for a coherent wave or classical light. Together, these results provide experimental evidence for wave-particle duality and highlight the importance of measurement in quantum optical systems.
        </p>

        <h2 className="text-2xl font-bold mb-3" style={{ color: headingColor }}>Project Overview and Results</h2>

        <p className="mb-6 leading-relaxed">
          We sought to address a fundamental question: does light behave as a particle, a wave, or both? We were able to determine how individual photons behave when incident on a beam splitter and how measurement influences their observed properties.
        </p>

        <p className="mb-6 leading-relaxed">
          The nature of quantum theory implies that a particle incident upon a beamsplitter may be registered at exactly one detector following it. This defines the particle as an indivisible entity with a probability of 1⁄2 of taking each negatively anticorrelated path. Classical fields, on the other hand, treat it as a classical wave under a function of space and time, where we can predict some coincidences at both ends as light propagates. In this case, with single-photon light incident on a beamsplitter, the electric fields in the upper and lower paths have equal magnitudes, but differ by a multiplicative phase; classical theory then predicts a positive correlation between the two detectors.
        </p>

        <p className="mb-6 leading-relaxed">
          The experimental concept for the Grangier-Roger-Aspect experiment examined correlations between photodetections at a beamsplitter. Our modern interpretation provides evidence for both the quantum and classical nature of light, underscoring its significance for understanding light's fundamental properties.
        </p>

        <p className="mb-6 leading-relaxed">
          In the three-detector configuration, we observed a strong anticorrelation in the normalized intensity with a degree of second-order coherence value at <i>g</i><sup>(2)</sup>(0) = 0.175913, which was found to be 300.16 deviations below 1, the classical requirement. This strong deviation proves that our data does not align with classical theory.
        </p>

        <p className="mb-2 leading-relaxed">
          For the two-detector measurements, we first needed to determine the error in Δ<i>t</i>, so we used the relation Δ<i>t</i> = <i>τ</i> · <i>N</i><sub>TR</sub> / (<i>N</i><sub>T</sub> · <i>N</i><sub>R</sub>) to find the percent error to be 0.099227. From there, we incorporated this into our overall error propagation to obtain:
        </p>

        <div style={equation}>
          √[ (<i>σ</i><sub><i>g</i>(2)</sub> / ⟨<i>g</i><sup>(2)</sup>⟩)² + (<i>σ</i><sub><i>t</i></sub> / ⟨<i>t</i>⟩)² ] = 0.1041234 ≈ 10%
        </div>
        <div style={equation}>
          <i>σ</i><sub><i>ḡ</i></sub> = <i>σ</i><sub><i>g</i></sub> / √<i>n</i> = 0.013463
        </div>

        <p className="mb-6 leading-relaxed">
          Our result of <i>g</i><sup>(2)</sup>(0) = 0.99317 is 0.507 deviations from the mean and 0.066 standard deviations away from the classical <i>g</i>(0) = 1. This demonstrates a strong alignment with classical theory.
        </p>

        <p className="mb-6 leading-relaxed">
          To further demonstrate the wave-particle duality of light, we added a polarization interferometer along the idler photon path to control the relative phase and polarization of photons passing through. As single photons passed through the interferometer, interference fringes appear only when the which-path information of the idler photons is unknown. Despite our normalized intensity correlation approaching zero, indicating classical behavior, our data showed quantum particle detection paths along wavelike interference paths combining characteristics of both theories.
        </p>

        <img
          src="/single-photon/figure1.png"
          alt="Figure 1"
          className="rounded mb-8"
          style={{ maxWidth: '100%' }}
        />

        <h2 className="text-xl font-semibold mb-2" style={{ color: headingColor }}>Documents</h2>
        <ul className="list-disc pl-6">
          <li>
            <a
              href="/single-photon/Single_Photon_Quantum_Optics.pdf"
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