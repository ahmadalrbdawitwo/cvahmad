import './App.css';
import Sidebar from './Sidebar';
import Secation from './Secation';
import About from './ab/About';
import Aboutme from './ab/Aboutme';
import { Route, Routes , BrowserRouter } from 'react-router-dom';
import Myproject from './Myproject';
function App() {
  return (
    <div className="App">
        <Sidebar/>  
          
      <div className='bg-slate-50 sm:ml-64 m-auto'>
        <BrowserRouter basename='/cv'>
        <Routes> 

          <Route path="/ahmad" element={
            <>
       <Secation/> 

            </>
          }  />


<Route path='/about' element={
            <>
<Aboutme/>
      <About/>


            </>
          }  />
          <Route path='/project' element={
            <>
      <Myproject/>


            </>
          }  />
    
         
        </Routes>
 

        </BrowserRouter>
   
      
      </div>

    </div>
  );
}

export default App;
