// Main assets module - consolidates common assets
import aboutMeJournalPng from './journal.PNG';
import aboutMeJournalWebp800 from './journal.PNG';
import aboutMeJournalWebp400 from './journal.PNG';
// Add your profile images here
import profile1 from './profile1.jpg';
import profile2 from './profile2.jpg';
import profile3 from './profile3.jpg';
import profile4 from './profile4.jpeg';
import profile5 from './profile5.jpeg';
import profile6 from './profile6.jpeg';
import profile7 from './profile7.jpeg';

import comingSoon from './coming_soon.png';
import dividerPng from './divider.PNG';
import dividerWebp from './divider-original.webp';
import divider from './divider-original.webp';

// For backward compatibility
const aboutMeJournal = aboutMeJournalPng;

// Re-export all asset modules
export * from './stars';
export * from './stickers';
export * from './project_icons';
export * from './techstack';

// Export main assets
export const mainAssets = {
  aboutMeJournal,
  aboutMeJournalPng,
  aboutMeJournalWebp800,
  aboutMeJournalWebp400,
  profile1,
  profile2,
  profile3,
  profile4,
  profile5,
  profile6,
  profile7,
  comingSoon,
  divider,
  dividerPng,
  dividerWebp,
};

export {
  aboutMeJournal,
  aboutMeJournalPng,
  aboutMeJournalWebp800,
  aboutMeJournalWebp400,
  profile1,
  profile2,
  profile3,
  profile4,
  profile5,
  profile6,
  profile7,
  comingSoon,
  divider,
  dividerPng,
  dividerWebp,
};

export default {
  mainAssets,
};
