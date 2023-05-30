import React, { useEffect, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

import { Badge, Button } from 'react-bootstrap';

import Nav from 'react-bootstrap/Nav' 
import Menu from '@mui/material/Menu';

import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/esm/Table';
import { DLT } from '../redux/actions/actions';
import { REMOVE } from '../redux/actions/actions';
import { ADD } from '../redux/actions/actions';
import { fontSize } from '@mui/system';
import { isCompositeComponent } from 'react-dom/test-utils';
const Header = () => {
    

    const [price,setPrice] = useState(0);
    // console.log(price);

        const getdata = useSelector((state)=> state.cartreducer.carts);
        // console.log(getdata);

        const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
   
     
    const plusone=(ele)=>{
        ele.qnty +=1
    }
    const minusone=(ele)=>{
        ele.qnty -=1 &&  ele.qnty != 0
    }
    
    const dlt = (id)=>{
        dispatch(DLT(id))
    }
    const address =()=>{
        window.location.href='address'
    }

    
   
    const total = ()=>{
        let price = 0;
        getdata.map((ele,k)=>{
            price = ele.price * ele.qnty + price
        });
        setPrice(price);
    };
    

    useEffect(()=>{
        total();
    },[total])

    return (
        <>
            < Navbar bg="primary"  style={{ height: "80px" }}>
                <Container>
            

                    <NavLink to="/MAIN" className="text-decoration-none text-light mx-3 "><i class="fa-solid fa-house"></i> HOME</NavLink>
                    <Nav className="me-auto">
                    <NavLink to="/carousel" className="text-decoration-none text-light px-2">carousel</NavLink>
                        <NavLink to="/cards" className="text-decoration-none text-light px-2">MENU</NavLink>
                        <NavLink to="/beverages" className="text-decoration-none text-light px-2">Beverages</NavLink>
                    
                    <NavLink to="/address" className="text-decoration-none text-light px-2">Address</NavLink>
                
                    <NavLink to="/payment" className="text-decoration-none text-light px-3">Payment</NavLink>
                    
                    </Nav>
                    {/* <NavLink to="/payment" className="text-decoration-none text-light">payment</NavLink> */}
                    

                    <Badge badgeContent={getdata.length} color="danger"
                        id="basic-button"
                      
                        onClick={handleClick}
                    >
                        <i class="fa-solid fa-cart-shopping text-light" style={{ fontSize: 40, cursor: "pointer" }}></i>
                        <span style={{ fontSize: 20}}>{getdata.length}</span>
                    </Badge>

                </Container>

 
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >

                    {
                        getdata.length ? 
                        <div className='card_details' style={{width:"24rem",padding:10}}>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Photo</th>
                                        <th>Restaurant Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        getdata.map((e)=>{
                                            return (
                                                <>
                                                    <tr>
                                                        <td>
                                                        <NavLink to={`/cart/${e.id}`}   onClick={handleClose}>
                                                        <img src={e.imgdata} style={{width:"5rem",height:"5rem"}} alt="" />
                                                        </NavLink>   
                                                        </td>
                                                        <td>
                                                            <p>{e.rname}</p>
                                                            <p>Price : ₹{e.price}</p>
                                                            <p>Quantity : {e.qnty}</p>
                                                            
                                                            <p style={{color:"red",fontSize:20,cursor:"pointer"}} onClick={()=>dlt(e.id)}>
                                                                <i className='fas fa-trash smalltrash'></i>
                                                            </p>
                                                        </td>

                                                        <td className='mt-5'style={{color:"red",fontSize:20,cursor:"pointer"}}  onClick={()=>dlt(e.id)}>
                                                        <i className='fas fa-trash largetrash'></i>
                                                        </td>
                                                    </tr>
                                                </>
                                            )
                                        })
                                    }
                                    <div><p className='text-center'>Total :₹ {price }</p></div>
                                    <Button onClick={()=>address()}>Address</Button>
                                </tbody>
                            </Table>
                        </div>:
                        
                   <div className='card_details d-flex justify-content-center align-items-center' style={{width:"24rem",padding:10,position:"relative"}}>
                    <i className='fas fa-close smallclose'
                    onClick={handleClose}
                     style={{position:"absolute",top:2,right:20,fontSize:23,cursor:"pointer"}}></i>
                    <p style={{fontSize:22}}>Your carts is empty</p>
                    <img src="./cart.gif" alt="" className='emptycart_img' style={{width:"5rem",padding:10}} />
                   </div>
                    }

                </Menu>
            </Navbar>
        </>
    )
}

export default Header
