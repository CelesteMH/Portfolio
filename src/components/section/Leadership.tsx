import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Calendar, MapPin } from 'lucide-react';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';

const Leadership = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  const roles = [
    {
      title: "Chapter Founder and President",
      organization: "Hispanics in STEM Societies (HISS/SHPE)",
      location: "San Francisco, California",
      period: "August 2025 - Present",
      description: [
        "Founded USF chapter; oversee operations, planning, finances, task delegation, and documentation ",
        "Coordinate with national SHPE and plan academic, professional, and cultural events ",
      ]
    },
    {
      title: "Chapter CoFounder and President",
      organization: "Society of Women Engineers (SWE)",
      location: "San Francisco, California",
      period: "August 2023 - May 2025",
      description: [
        "Co-founded chapter and supported member recruitment",
        "Build connections with mentors, affiliates, and grant partners ",
        "Plan and promote events; manage budgeting and fundraising for WE23–25 attendance for 30+ students",
      ]
    },

    {
      title: "Events Coordinator",
      organization: "Women in Physics",
      location: "San Francisco, California",
      period: "January 2024 - May 2026",
      description: [
        "Assist in planning internal events and collaborations",
        "Manage social media updates and outreach",
        "Handle event reservations, scheduling, and notices",
      ]
    }
  ];

  return (
    <section id="leadership" className="py-8 relative" style={{
      background: themeColors.background.sections?.skills || themeColors.background.gradient,
      transition: 'background 0.3s ease-in-out'
    }}>
      <div className="container mx-auto px-6 relative" style={{ zIndex: 2 }}>
        <h2 className="text-4xl font-bold text-center mb-6" style={{ color: isDarkMode ? themeColors.colors.white : themeColors.colors.pink[500] }}>Leadership</h2>

        <div className="max-w-4xl mx-auto space-y-4">
          {roles.map((role, index) => (
            <Card key={index} className="border-2 border-pink-100 dark:border-gray-700 hover:border-pink-200 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-lg bg-white/95 dark:bg-gray-800/95">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl" style={{ color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[400] }}>{role.title}</CardTitle>
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-400 mt-1">{role.organization}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-1">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{role.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{role.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-2">
                <ul className="space-y-1">
                  {role.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2" style={{ color: themeColors.primary }}>•</span>
                      <span className="text-sm" style={{ color: isDarkMode ? themeColors.colors.dark[200] : themeColors.colors.dark[600] }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;