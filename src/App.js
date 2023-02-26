import './App.css';
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import AboutScreen from './Screens/AboutScreen/AboutScreen';
import ProjectsScreen from './Screens/ProjectsScreen/ProjectsScreen';
import ContactScreen from './Screens/ContactScreen/ContactScreen';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeScreen />,
    },
    {
      path: "/about",
      element: <AboutScreen />,
    },
    {
      path: "/projects",
      element: <ProjectsScreen />,
    },
    {
      path: "/contact",
      element: <ContactScreen />,
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
