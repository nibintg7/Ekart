import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlist } from '../slices/wishlistSlice';
import { Link } from 'react-router-dom';
import { addToCart } from '../slices/cartSlice';

function Wishlist() {

  const wishlistArray = useSelector((state)=> state.wishlistReducer)
  console.log(wishlistArray);

  const dispatch = useDispatch()

  const handlewishlist = (item)=>{

    dispatch(addToCart(item))
    dispatch(removeFromWishlist(item.id))
  }

  return (
    <div style={{marginTop:'150px'}}>
      <Row className='ms-5 me-3' style={{marginTop:'100px'}}>
      { 
      wishlistArray?.length>0?
      wishlistArray?.map((item)=>(<Col className='mb-5' sm={12} md={6} lg={4} xl={3} >
      <Card style={{ width: '18rem' , boxShadow: '5px 10px #888888' }}>
      <Card.Img variant="top" src={item.thumbnail} style={{height:'200px'}} />
      <Card.Body>
        <Card.Title>{item.title.slice(0,40)}...</Card.Title>
        <Card.Text>
         <p>{item.description.slice(0,40)}... </p>
         <p>price:${item.price}</p>
        </Card.Text>
       <div className='d-flex align-items-center justify-content-between'>
          <Button onClick={()=>dispatch(removeFromWishlist(item.id))} variant="outline-danger"><i class="fa-solid fa-trash"></i></Button>
          <Button onClick={()=>handlewishlist(item)} variant="outline-success"><i class="fa-solid fa-cart-shopping"></i></Button>
       </div>
      </Card.Body>
    </Card>

      </Col>))

      :<div style={{height:'100vh'}} className='d-flex align-items-center justify-content-center flex-column'>
        <img style={{height:'100vh', width:'400px'}} src='https://purepng.com/public/uploads/large/purepng.com-shopping-cartshoppingcarttrolleycarriagebuggysupermarkets-1421526532323sy0um.png'alt='no image'/>
        <h3>Your Cart Is Empty</h3>
        <Link to={'/'}  style={{marginBottom:'200px'}} className='mt-4 btn btn-success'><i class="fa-solid fa-arrow-left me-2"></i>Back to home</Link>
        
      </div>}
      </Row>
    
    </div>
  )
}

export default Wishlist