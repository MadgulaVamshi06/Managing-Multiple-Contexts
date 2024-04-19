Implementation of Multiple Contexts:

By creating separate contexts for theme and user data (ThemeContext and UserContext),
the application’s state is organized according to its purpose. 

This separation makes it easier to manage and understand different pieces of state within the application.

The ThemeProvider and UserProvider components act as context providers. 
They encapsulate the state and the functions to manipulate that state, 
making them available to any nested components that need access to these values.

The useContext hook is used within the MyComponent to consume the contexts. 
This hook provides a clean and straightforward way to access the context values without the need for prop drilling.

Both contexts provide not only the state values (theme, isLoggedIn, userData) but also the functions to update the state (toggleTheme, login, logout). 
This pattern is useful for passing down both data and behavior to components.
