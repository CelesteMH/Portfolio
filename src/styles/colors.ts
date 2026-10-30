/**
 * Centralized Color Palette for Portfolio
 *
 * Palette: Slate grey #617891, Tan #D5B893, Saddle brown #6F4D38,
 * Maroon #632024, Space #25344F, Rose blush #D8A48F, Peach blossom #BB8588
 * (The scale is still named "pink" so existing code keeps working.)
 */

export const colors = {
  // Base colors
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',

  // Primary accent scale (rose / peach / maroon)
  pink: {
    25: '#FBF7F3',        // Very light warm transition color (rgb(251 247 243))
    50: '#F7EFE8',
    100: '#F0E2D6',
    200: '#E8D0BE',
    300: '#D8A48F',       // Rose blush
    400: '#BB8588',       // Peach blossom
    500: '#A06A6E',
    600: '#8A4A50',
    700: '#76383D',
    800: '#632024',       // Maroon
    900: '#4A181B',
  },

  // Neutral / dark scale (slate grey to space)
  dark: {
    50: '#F4F6F9',
    100: '#E9EDF2',
    200: '#D3DBE4',
    300: '#B4C0CF',
    400: '#8C9DB1',
    500: '#617891',       // Slate grey
    600: '#4A5F7A',
    700: '#364B68',
    800: '#25344F',       // Space
    900: '#1A2538',
    950: '#111926',
  },

  // Semantic colors
  background: {
    light: {
      primary: '#FFFFFF',
      secondary: '#F7EFE8',
      gradient: 'linear-gradient(180deg, rgb(251 247 243) 0%, rgb(247 239 232) 50%, rgb(243 232 222) 100%)',
      gradientEnd: 'rgb(243 232 222)',
      overlay: 'rgba(255, 255, 255, 0.5)',
      sections: {
        about: 'linear-gradient(180deg, rgb(255 255 255) 0%, rgb(253 250 247) 30%, #FBF7F3 100%)',
        skills: 'linear-gradient(180deg, rgb(251 247 243) 0%, rgb(253 251 249) 30%, rgb(253 251 249) 70%, rgb(255 255 255) 100%)',
        projects: 'linear-gradient(180deg, rgb(251 247 243) 0%, rgb(255 255 255) 15%, rgb(255 255 255) 85%, rgb(251 247 243) 100%)',
        experience: 'linear-gradient(180deg, rgb(251 247 243) 0%, rgb(253 251 249) 25%, rgb(253 251 249) 75%, rgb(251 247 243) 100%)',
        certifications: 'linear-gradient(180deg, rgb(255 255 255) 0%, rgb(255 255 255) 60%, rgb(253 251 249) 100%)',
      },
    },
    dark: {
      primary: '#1A2538',
      secondary: '#25344F',
      gradient: '#1A2538',
      gradientEnd: '#1A2538',
      overlay: 'rgba(0, 0, 0, 0.7)',
      sections: {
        about: '#1A2538',
        skills: '#1A2538',
        projects: '#1A2538',
        experience: '#1A2538',
        certifications: '#1A2538',
      },
    },
  },

  // Text colors
  text: {
    light: {
      primary: '#25344F',     // Space
      secondary: '#6F4D38',   // Saddle brown
      tertiary: '#617891',    // Slate grey
      accent: '#632024',      // Maroon
      pink: '#8A4A50',
    },
    dark: {
      primary: '#FBF7F3',
      secondary: '#E8D0BE',
      tertiary: '#D5B893',    // Tan
      accent: '#D8A48F',      // Rose blush
      pink: '#D8A48F',
    },
  },

  // Interactive elements
  interactive: {
    light: {
      primary: 'rgba(187, 133, 136, 0.1)',
      hover: 'rgba(187, 133, 136, 0.2)',
      active: '#BB8588',
      focus: 'rgba(187, 133, 136, 0.3)',
    },
    dark: {
      primary: 'rgba(216, 164, 143, 0.1)',
      hover: 'rgba(216, 164, 143, 0.2)',
      active: '#D8A48F',
      focus: 'rgba(216, 164, 143, 0.3)',
    },
  },

  // Navigation specific
  navigation: {
    light: {
      background: 'rgba(213, 184, 147, 0.25)',
      backgroundScrolled: 'rgba(213, 184, 147, 0.4)',
      border: 'rgba(187, 133, 136, 0.2)',
      borderScrolled: 'rgba(187, 133, 136, 0.3)',
      shadow: 'rgba(187, 133, 136, 0.08)',
      shadowScrolled: 'rgba(187, 133, 136, 0.12)',
      mobile: 'rgba(251, 247, 243, 0.95)',
    },
    dark: {
      background: 'rgba(26, 37, 56, 0.4)',
      backgroundScrolled: 'rgba(26, 37, 56, 0.6)',
      border: 'rgba(216, 164, 143, 0.12)',
      borderScrolled: 'rgba(216, 164, 143, 0.18)',
      shadow: 'rgba(0, 0, 0, 0.2)',
      shadowScrolled: 'rgba(0, 0, 0, 0.3)',
      mobile: 'rgba(26, 37, 56, 0.95)',
    },
  },

  // Button variants
  button: {
    primary: {
      light: {
        background: '#8A4A50',
        text: '#FFFFFF',
        hover: '#632024',
        shadow: 'rgba(138, 74, 80, 0.3)',
      },
      dark: {
        background: '#D8A48F',
        text: '#1A2538',
        hover: '#E8D0BE',
        shadow: 'rgba(216, 164, 143, 0.4)',
      },
    },
    secondary: {
      light: {
        background: 'rgba(255, 255, 255, 0.8)',
        text: '#25344F',
        border: '#BB8588',
        hover: '#F0E2D6',
      },
      dark: {
        background: 'rgba(37, 52, 79, 0.9)',
        text: '#FBF7F3',
        border: '#617891',
        hover: 'rgba(216, 164, 143, 0.1)',
      },
    },
    outline: {
      light: {
        background: 'transparent',
        text: '#8A4A50',
        border: '#BB8588',
        hover: '#F0E2D6',
      },
      dark: {
        background: '#25344F',
        text: '#D8A48F',
        border: '#BB8588',
        hover: 'rgba(216, 164, 143, 0.1)',
      },
    },
  },

  // Card colors
  card: {
    light: {
      background: '#FFFFFF',
      border: 'rgba(187, 133, 136, 0.3)',
      shadow: 'rgba(37, 52, 79, 0.1)',
    },
    dark: {
      background: '#25344F',
      border: 'rgba(97, 120, 145, 0.3)',
      shadow: 'rgba(0, 0, 0, 0.3)',
    },
  },

  // Special effects
  effects: {
    glow: 'rgba(216, 164, 143, 0.3)',
    dropShadow: 'rgba(187, 133, 136, 0.3)',
    textShadow: 'rgba(0, 0, 0, 0.1)',
    blur: 'rgba(255, 255, 255, 0.1)',
  },

  // Utility colors
  utility: {
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
    neutral: '#6B7280',
  },

  // Special colors
  special: {
    dragMe: '#BB8588',
    aurora: {
      dark: '#D8A48F',
      light: {
        1: '#EBD5C5',
        2: '#E8CBB9',
        3: '#F0E2D6',
      }
    }
  },
} as const;

// Type definitions for better TypeScript support
type ColorTheme = 'light' | 'dark';
type ColorVariant = keyof typeof colors;

export type { ColorTheme, ColorVariant };

// Helper function to get theme-specific colors
export const getThemeColors = (theme: ColorTheme) => ({
  background: colors.background[theme],
  text: colors.text[theme],
  interactive: colors.interactive[theme],
  navigation: colors.navigation[theme],
  button: {
    primary: colors.button.primary[theme],
    secondary: colors.button.secondary[theme],
    outline: colors.button.outline[theme],
  },
  card: colors.card[theme],
});