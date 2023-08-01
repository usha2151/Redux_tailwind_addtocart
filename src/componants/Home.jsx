import React, { useEffect, useState } from 'react';
import pic1 from "./images/pic1.jpeg";
import { services } from './Cardata';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { ADD, DLT, REMOVE } from '../redux/actions/action';


const Home = () => {

const getdata = useSelector((state)=> state.cartreducer.carts);
console.log(getdata);

const dispatch = useDispatch();

const [data, setData] = useState(services);
const [prise,setPrise] = useState(0);

const send = (e)=> {
  dispatch(ADD(e));
}

const dlt = (id) => {
  dispatch(DLT(id));
}

const remove = (item) => {
  dispatch(REMOVE(item))
}

const total = ()=>{
  let prise = 0;
  getdata.map((ele,k)=>{
      prise = ele.prise + prise
  });
  setPrise(prise);
};

useEffect(()=>{
  total();
},[total])

  return (
  <div className=' py-12 mx-auto'>
    <p className='text-center text-5xl pb-8 font-sans font-bolder'>Shop Now</p>
  <div className="grid grid-cols-12">

  <div class="col-span-8">
  <div className="grid grid-cols-2 gap-4 px-48">
  {data.map((service,id) => {
    return (
      <>
      <div className=" max-w-sm shadow bg-gray-200  shadow-lg shadow-gray-400/50  rounded-lg "  key={service.id} >
      <img src={service.image} alt="" class="w-full h-52 object-cover rounded-t-lg"/>
      <p className='text-xl font-semibold font-sans ml-4 pt-4'>Fruit Name: {service.name}</p>
      <div className="grid grid-cols-2 px-4 pt-3 pb-4">
        <p className='text-lg font-semibold'>Prise: {service.prise} Rs.</p>
        <button class="bg-gradient-to-r  from-blue-400 to-indigo-400 hover:from-indigo-400 hover:to-blue-400   text-white font-semibold py-2 px-4 rounded" onClick={()=> send(service)}>Add to Cart</button>
      </div>
     </div>
     </>
        )
    })
}
      
  </div>   
  </div>


  <div class="col-span-4">
  <p className='text-start text-2xl mb-4 font-sans font-bolder'>Save cart</p>
  {
    getdata.length == 0 ? "No data found" : 
    
      getdata.map((e)=>{
        return (
          <>
            <div className="max-w-sm shadow  bg-gray-200  shadow-md rounded-lg mb-4">
       <img src={e.image} alt="" class="w-full h-52 object-cover rounded-t-lg"/>
       <p className='text-xl font-semibold font-sans ml-4 pt-4'>Fruit Name: {e.name}</p>
        <div className="grid grid-cols-2 px-4 pt-3 pb-4">
          <p className='text-lg font-semibold'>Prise: {e.prise * e.qnty} Rs.</p>
          <button class="bg-rose-600 hover:bg-rose-500   text-white font-semibold py-2 px-4 rounded" onClick={()=>dlt(e.id)}>Remove Cart</button>
        </div>
        </div>
  
        <div className='max-w-sm shadow  bg-gray-200  shadow-md rounded-lg mt-4'>
  <div className="grid grid-cols-2 px-4 pt-3 pb-4">
    <p className='text-lg font-semibold'>Total items:</p>
    <p className='text-lg font-semibold text-end'>{e.qnty}</p>
    <p className='text-lg font-semibold'>You saved:</p>
    <p className='text-lg font-semibold text-end'>Rs.50</p>
    <p className='text-lg font-semibold'>Sub total price:</p>
    <p className='text-lg font-semibold text-end'>Rs. {e.prise * e.qnty}</p>
  </div>
  </div>
  
  <div className='w-24 shadow  bg-gray-200  shadow-md rounded-lg mt-4 mb-4 ml-72'>
  <div className="grid grid-cols-3 px-4 pt-3 pb-4">
    <p className='text-lg font-semibold' onClick={e.qnty <=1 ? ()=>dlt(e.id) : ()=>remove(e)}>-</p>
    <p className='text-lg font-semibold'>{e.qnty}</p>
    <p className='text-lg font-semibold' onClick={()=>send(e)}>+</p>
  </div>
  </div>
          </>
        )
      })
    }
  


<div className='max-w-sm shadow  bg-gray-200  shadow-md rounded-lg mt-4'>


<div className="grid grid-cols-2 px-4 pt-3 pb-4">
  <p className='text-lg font-semibold'>Apply coupon</p>
  <p className='text-lg font-semibold text-end'>xdfc354</p>
</div>



<div className="grid grid-cols-2 px-4 pt-3 pb-4">
  <p className='text-lg font-semibold'>Payable amount</p>
  <p className='text-lg font-semibold text-end'>Rs. {prise}</p>
</div>


<button class="bg-gradient-to-r mt-5 ml-64 mb-6 from-blue-400 to-indigo-400 hover:from-indigo-400 hover:to-blue-400   text-white font-semibold py-2 px-4 rounded">Buy Now</button>

</div>
  </div>


      </div>
    </div>
  )
}

export default Home
