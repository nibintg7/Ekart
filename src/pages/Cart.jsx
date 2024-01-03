import React from 'react'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removefromcart } from '../slices/cartSlice';


function Cart() {

  const cartArray = useSelector((state)=>state.cartReducer)
  console.log(cartArray);

  const dispatch = useDispatch()

  return (
    <div style={{marginTop:'150px'}}>
   <div className='row w-100'>

    {
    cartArray?.length>0? 
    <div className='col-lg-6 m-5'>
        <table className='table shadow border'>
          <thead>
            <tr>
              <th>#</th>
              <th>product</th>
              <th>image</th>
              <th>price</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {cartArray?.map((item,index)=>(
               <tr>
               <td>{index+1}</td>
               <td>{item.title}</td>
               <td><img style={{height:'100px', width:'100px'}} src={item.thumbnail} alt='no image'/></td>
               <td>{item.price}</td>
               <td><Button onClick={()=>dispatch(removefromcart(item.id))} variant="outline-danger"><i class="fa-solid fa-trash"></i></Button></td>
             </tr>

            ))
             }
          </tbody>
        </table>
     </div>:<div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center flex-column'>
          <img src="https://i.pinimg.com/originals/66/22/ab/6622ab37c6db6ac166dfec760a2f2939.gif" style={{width:'400px'}}></img>
          <h3 style={{color:'black'}}>Your cart is empty</h3>
          <Link to={'/'}  style={{marginBottom:'200px'}} className='mt-4 btn btn-success'><i class="fa-solid fa-arrow-left me-2"></i>Back to home</Link>
       </div> }

   </div>
    </div>
  )
}

export default Cart