const ThemeToggle = () => {
  const handleToggle = () => {
    const root = document.documentElement;
    const isDark = root.style.getPropertyValue('--bg-color') === '#1a1a1a';

    if (isDark) {
      // Switch to light mode
      root.style.setProperty('--bg-color', '#ffffff');
      root.style.setProperty('--text-color', '#000000');
    } else {
      // Switch to dark mode
      root.style.setProperty('--bg-color', '#1a1a1a');
      root.style.setProperty('--text-color', '#f5f5f5');
    }
  };

  return <button onClick={handleToggle}>Toggle Theme</button>;
};

export default ThemeToggle;


//css
/* index.css or App.css */
// :root {
//   --bg-color: #ffffff;
//   --text-color: #000000;
// }

// body {
//   background-color: var(--bg-color);
//   color: var(--text-color);
// }

// body {
//   transition: background-color 0.3s, color 0.3s;
// }


// useEffect(() => {
//   const saved = localStorage.getItem('theme');
//   if (saved === 'dark') {
//     document.documentElement.style.setProperty('--bg-color', '#1a1a1a');
//     document.documentElement.style.setProperty('--text-color', '#f5f5f5');
//   }
// }, []);


// localStorage.setItem('theme', isDark ? 'light' : 'dark');
