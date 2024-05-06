// main.jsx
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './redux/store'; // Update the path to your rootReducer

import App from './App';

// Configure the Redux store
const store = configureStore({
  reducer: rootReducer,
  // Define other store configurations if needed
});

// Get the root element
const root = document.getElementById('root');

// Render the application with Redux store provider
createRoot(root).render( // Use createRoot instead of ReactDOM.createRoot
  <Provider store={store}>
    <App />
  </Provider>
);
