import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';

function Header() {
  
  // to access the state use the useselector hook
  const wishlist = useSelector((state)=>state.wishlistReducer) // here the state represent the store
  const cart = useSelector((state)=>state.cartReducer)
  
  //console.log(wishlist);

  return (
    <Navbar expand="lg" className="bg-primary position-fixed top-0 w-100" style={{zIndex:'1'}} >
    <Container>
      <Navbar.Brand ><Link style={{textDecoration:'none', color:'white'}} to={'/'}><i style={{color:"orange"}} class="fa-solid fa-cart-shopping fa-bounce"></i> E-KART</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">

          <Nav.Link className='btn border rounded me-5 mt-1'><Link style={{textDecoration:'none', color:'white'}} to={'/Wishlist'}><i class="fa-solid fa-heart" style={{color:'red'}}></i> Wishlist <Badge bg="secondary">{wishlist.length}</Badge></Link></Nav.Link>

          <Nav.Link className='btn border rounded me-5 mt-1'><Link style={{textDecoration:'none', color:'white'}} to={'/Cart'}><i class="fa-solid fa-cart-shopping" style={{color:'yellow'}}></i>Cart <Badge bg="secondary">{cart.length}</Badge></Link></Nav.Link>
        
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header