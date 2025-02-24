import './App.css';
import { Routes, Route } from "react-router-dom";
import Dashboard from './Pages/Dashboard/Dashboard';
import Navbar from './CommonComponent/Navbar/Navbar';
import Layout from './Layout/Layout';
import { DropdownProvider } from './Service/DropdownProvider';
function App() {



  const routes = [
    { path: "/", element: <Dashboard /> },  
  ];

  return (
    <div className="App">
         <DropdownProvider>
      <Routes>
      
      <Route path="/" element={<Layout />}>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Route>

      </Routes>
      </DropdownProvider>
  
    </div>
  );
}

export default App;
