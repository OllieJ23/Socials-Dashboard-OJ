// ColorSettings.js

import { useDarkMode } from '../DarkModeContext';

const ColorSettings = () => {
  const { isDarkMode } = useDarkMode();

  const colors = isDarkMode
    ? {
        primary: {
          stroke: '#65bef6',
          fill: 'var(--twitter)',
        },
        secondary: { stroke: '#9ad5c4', fill: 'var(--lime-green)' },
        text: 'var(--veryDark-blue-text)',
        background: 'var(--bg)',
      }
    : {
        primary: { stroke: '#65bef6', fill: 'var(--twitter)' },
        secondary: { stroke: '#9ad5c4', fill: 'var(--lime-green)' },
        text: 'var(--veryDark-blue-text)',
        background: 'var(--veryDark-blue-text)',
      };

  return colors;
};

export default ColorSettings;
