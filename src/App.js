import { useEffect, useState } from 'react';
import Canva from "./components/canva";
import useWears from "./utils/useWearHook";
import './App.css';

function App() {
  // States 

  const {accessoryList, active, setactive} = useWears()




  return (
     // Main box 
    <main className="App mx-auto">

      {/* Navbar */}
      <nav className="nav-header font-bold ">   
        <div className='p-3 logo-text font-bold'>
          Wearkit VR app   
          {/* Link to twitter account  */}
          <a href='https://twitter.com/Divine_Er' rel="noreferrer" target="_blank" > 
            <span className='float-right'> <i className="fa fa-brands fa-twitter text-gray-400"></i></span>
          </a>
          {/* Link to codebase  */}
          <a href='https://github.com/divinejoshua/wearkit-vr-js' rel="noreferrer" target="_blank" >
            <span className='float-right mr-4'> <i className="fa fa-brands fa-github text-gray-400"></i></span>
          </a>
        </div>
      </nav>

      {/* Camera canva  */}
      <section className='mt-20 p-3'>
        <Canva itemSelected={active}/>
      </section>

      <section className='p-3'>
        <p className='font-bold text-gray-400'>Virtual accessories ({accessoryList.length-1})</p>

        <div className="accessory-list p-2 mt-3">

          {/* List of virtual accessories */}
        {accessoryList.map((item) => (
          <div key={item.id} className={(active === item.id?'test border-blue-500 border-2 test' : ' test border test' ) + "test accessory-item h-20 w-20 mr-3 p-3 cursor-pointer rounded-lg"}
          onClick={()=> setactive(item.id)}>
            <img src={item.name} alt={item.id} />
          </div>
          ))}

        </div>


      </section>

      <section className="about p-3 mb-20">
      <h5 className='font-bold text-gray-400 mb-2'>About</h5>
        <p>Wearkit VR uses machine learning and augamented reality to create a virtual experience for users to put on virtual accessories</p>

        <h5 className='font-bold text-gray-400 mt-3 mb-2'>Use case</h5>
        <p><span className="underline text-blue-700">An online shop</span> can make use of virtual reality (VR) in several ways to enhance the shopping experience for customers.</p>
      </section>

    </main>
  );
}

export default App;
