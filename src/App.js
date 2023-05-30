import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CardsDetails from './components/CardsDetails';
import Cards from './components/Cards';
import { Routes, Route, Router } from "react-router-dom";
import MainPage from './components/mainpage';
import Payment from './components/Payment';
import Address from './components/Address';
import ThankYou from './components/Last';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import Protected from './components/Protected';
import Login from './components/Login';
import Beverages from './components/Beverages';
import Beverage from './components/Beverage';
import { Carousel } from 'react-bootstrap';


// function App() {
//   return (
//   <>

//    <Header />
//    <Routes>
//    <Route path='/' element={<MainPage />} />
//      <Route path='/cards' element={<Cards />} />

//      <Route path='/cart/:id' element={<CardsDetails />} />
//      <Route path='/address' element={<Address />} />
//      <Route path='/payment' element={<Payment />} />
//      <Route path='/thankyou' element={<ThankYou />} />
//    </Routes>
//   </>
//   );
// }
function App() {
   const [isLoggedIn, setisLoggedIn] = useState(null);
  const logIn = () => {
    setisLoggedIn(true);
    localStorage.setItem("key","true")
    
  };
  const logOut = () => {
    setisLoggedIn(false);
    localStorage.setItem("key","false")
  };
  return (
    <BrowserRouter>
      <div>
        <Header />
        
        
        <Routes>
        
      
              <Route path='/login' element={<Login />} />
    
          <Route path='/MAIN'
            element={
              
                <MainPage />
                
              
            }
          />
          <Route path='/carousel'
            element={
              
                <Carousel />
                
              
            }
          />
          <Route path='/cards'
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <Cards />
                
              </Protected>
            }
          />
           <Route path='/beverages'
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <Beverage />
                
              </Protected>
            }
          />
            <Route path='/cart/:id'
            element={
              
                <CardsDetails />
            }
              
          />
            <Route path='/address'
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <Address />
                
              </Protected>
            }
          />
            <Route path='/payment'
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <Payment />
                
              </Protected>
            }
          />
           <Route path='/thankyou'
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <ThankYou />
                
              </Protected>
            }
          />
        

          </Routes>
          <center>
          {isLoggedIn ? (
          <button onClick={logOut}>Logout</button>
        ) : (
          <button onClick={logIn}>Login</button>
        )}
          </center>
          </div>
          
       </BrowserRouter>
  )
           {/* /* { isLoggedIn ? (<>
              <Route path='/' element={<Login />} />
         
        </>):(<>
            <Route path='/MAIN'
            element={
            <Protected isLoggedIn={isLoggedIn}>
            <MainPage/>
          </Protected>
          }
            
            />
          <Route path='/cards' element={<Cards />} />
          <Route path='/cart/:id' element={<CardsDetails />} />
          <Route path='/address' element={<Address />} />
         <Route path='/payment' element={<Payment />} />
        <Route path='/thankyou' element={<ThankYou />} />
            </>)
} */} 
        
{/*             
        <center>
        (
          <button onClick={logOut}>Logout</button>
        )
        : 
        (
           <button onClick={logIn}>logIn</button>
        ) 
        
        
        </center> */}
   
  

      }
export default App;