import  { useContext, useState } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import { UserContext } from './contexts/UserContext';

function MyComponent() {
  // Consume ThemeContext
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Consume UserContext
  const { isLoggedIn, userData, login, logout } = useContext(UserContext);

  // State to manage the selected theme
  const [selectedTheme, setSelectedTheme] = useState(theme);

  // Function to handle theme change
  const handleThemeChange = (e) => {
    setSelectedTheme(e.target.value);
    toggleTheme(); // Toggle the theme when theme is changed
  };

  // Determine background color based on selected theme
  let containerBackgroundColor;
  if (selectedTheme === 'light') {
    containerBackgroundColor = 'white';
  } else {
    containerBackgroundColor = 'black';
  }

  // Set text color to white for all elements in dark theme
  if (selectedTheme === 'dark') {
    document.body.style.color = 'white';
  } else {
    document.body.style.color = 'initial';
  }

  return (
    <div style={{ backgroundColor: containerBackgroundColor }} className={theme === 'light' ? 'light-theme' : 'dark-theme'}>
      <h1>Multiple Contexts</h1>
      <p>Theme: {theme}</p>
      <label htmlFor="theme">Select Theme:</label>
      <select id="theme" value={selectedTheme} onChange={handleThemeChange}>
        <option value="light">Light Theme</option>
        <option value="dark">Dark Theme</option>
      </select>

      {isLoggedIn ? (
        <div>
          <p>Welcome, {userData.username}!</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please login to continue.</p>
          <button onClick={() => login({ username: 'Vamshi' })}>Login</button>
        </div>
      )}
    </div>
  );
}

export default MyComponent;
