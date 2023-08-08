import React from 'react'
import logo from "./images/logo.png";

const Navbar = () => {

    function onToggleMenu(s){
        s.menu = s.name === 'menu' ? 'close' : 'menu';
    }

  return (
    <>
      <header className='bg-white'>
        <nav className='flex justify-between items-center w-[92%] mx-auto'>
            <div>
              <img src={logo} alt="" className='w-48 p-2'/>
            </div>
            <div className='md:static md:min-h-fit md:w-auto absolute bg-white min-h-[60vh] left-0 top-[-100%] w-full flex items-center px-5'>
               <ul className='flex md:flex-row flex-col md:item-center md:gap-[4vw] gap-8 font-semibold text-xl'>
                 <li>
                    <a className="hover:text-gray-500" href="#">Products</a>
                 </li>
                 <li>
                    <a className="hover:text-gray-500" href="#">Solutions</a>
                 </li>
                 <li>
                    <a className="hover:text-gray-500" href="#">Resources</a>
                 </li>
                 <li>
                    <a className="hover:text-gray-500" href="#">Orders</a>
                 </li>
                 <li>
                    <a className="hover:text-gray-500" href="#">Pricing</a>
                 </li>
               </ul>
            </div>
            <div className='flex items-center gap-6'>
                <button className='bg-gradient-to-r  from-blue-400 to-indigo-400 hover:from-indigo-400 hover:to-blue-400   text-white font-semibold py-2 px-4 rounded-full'>Sign in</button>
                <ion-icon name="menu" onClick={() => onToggleMenu(this)} className="text-3xl cursor-pointer mx:hidden"></ion-icon>
            </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar
