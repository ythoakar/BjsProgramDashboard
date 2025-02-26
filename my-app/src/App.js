import './App.css';
import { Routes, Route } from "react-router-dom";
import Dashboard from './Pages/Dashboard/Dashboard';
import Navbar from './CommonComponent/Navbar/Navbar';
import Layout from './Layout/Layout';
import { DropdownProvider } from './Service/DropdownProvider';
import SEC from './Pages/StateExeCouncil/SEC';
import NEC from './Pages/NationalExeCouncil/NEC';
function App() {



  const routes = [
    { path: "/", element: <Dashboard /> }, 
    { path: "SEC", element: <SEC/> },
    { path: "NEC", element: <NEC/> }
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
