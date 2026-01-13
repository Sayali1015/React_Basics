import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Team from './Pages/Team';
import Contact from './Pages/Contact';
import Product from './Pages/Product';
import Course_Detail from './Pages/Course_Detail';
// import UseEffect from "./components/UseEffect";
import  Movies from "./MovieZone/Movies";
// import Fetch_Data_API from "./components/Fetch_Data_API";
// import Form from "./components/Form";
// import Multiple_Input_Handling from "./components/Multiple_Input_Handling";
import Meal from "./Food_Recipe/Meal";

const App = () => {
  
  
  return (
  <>
<Router>
  <Routes>
    <Route  path = "/" element={<Home />}/>
    <Route  path = "/about" element={<About />}/>
    <Route  path = "/team" element={<Team />}/>
    <Route  path = "/contact" element={<Contact />}/>
    <Route  path = "/courses" element={<Product />}/>
    <Route  path = "/courses/:id" element={<Course_Detail />}/> 

    <Route  path = "/movies" element={<Movies />}/>
    <Route  path = "/meal" element={<Meal />}/>

    

  </Routes>
</Router>
  {/* <Movies/> */}
  {/* <UseEffect/> */}
  {/* <Fetch_Data_API/> */}
  {/* <Form/> */}
  {/* <Multiple_Input_Handling/> */}
  {/* <Meal/> */}

  </>
  );
};

export default App
