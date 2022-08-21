import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.min.js"
import Header from './Header';
import Footers from './Footers';
import Shop from './pages/Shop'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Account from './pages/Account'
import React, {useState} from "react";
import Cart from "./components/cart";
import Wish from './components/Wish'
import Login from './pages/Login'
import Contact from './pages/Contact'
import Detail1 from './detail/Detail1'
import Detail2 from './detail/Detail2'
import Detail3 from './detail/Detail3'
import Detail4 from './detail/Detail4'
import Detail5 from './detail/Detail5'
import Detail6 from './detail/Detail6'
import Detail7 from './detail/Detail7'
import Detail8 from './detail/Detail8'
import Detail9 from './detail/Detail9'
import Detail10 from './detail/Detail10'
import Detail11 from './detail/Detail11'
import Detail12 from './detail/Detail12'
import Detail13 from './detail/Detail13'
import Detail14 from './detail/Detail14'
import Detail15 from './detail/Detail15'
import Detail16 from './detail/Detail16'
import Detail17 from './detail/Detail17'
import Detail18 from './detail/Detail18'
import Detail19 from './detail/Detail19'
import Detail20 from './detail/Detail20'
import "./App.css";



function App() {
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  const [wish, setWish] = useState([]);

  const handleClick2 = (item) => {
    if (wish.indexOf(item) !== -1) return;
    setWish([...wish, item]);
  };

  const handleChange2 = (item, d) => {
    const ind = wish.indexOf(item);
    const arr = wish;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setWish([...arr]);
  };
  

  return (
    <div className="App">
      <Router>
        <Header size={cart.length} sizeWish={wish.length}/>
          <Switch>
            <Route exact path='/'> 
              <Home handleClick={handleClick} handleClick2={handleClick2}/>
            </Route>

            <Route exact path='/login'> 
              <Login />
            </Route>

            <Route path='/shop'>
              <Shop handleClick={handleClick} handleClick2={handleClick2}/>
            </Route>

            <Route path='/account'>
              <Account />
            </Route>

            <Route path='/contact'>
              <Contact />
            </Route>

            <Route path='/wish'>
              <Wish wish={wish} setWish={setWish} handleChange={handleChange2} handleChange2={handleChange2}/>
            </Route>

            <Route path='/cart'>
              <Cart cart={cart} setCart={setCart} handleChange={handleChange} handleChange2={handleChange}/>
            </Route>

            <Route path='/items'>
            <Detail1 handleChange={handleChange} handleChange2={handleChange}
              />
            </Route>

            <Route path="/products/1" >
              <Detail1 handleClick={handleClick} handleClick2={handleClick2}
              />
            </Route>
            <Route path="/products/2">
              <Detail2 handleClick={handleClick} handleClick2={handleClick2}/>
            </Route>
            <Route path="/products/3" >
              <Detail3 handleClick={handleClick} handleClick2={handleClick2}
              />
            </Route>
            <Route path="/products/4">
              <Detail4 handleClick={handleClick} handleClick2={handleClick2}/>
            </Route>
            <Route path="/products/5" >
              <Detail5 handleClick={handleClick} handleClick2={handleClick2}
              />
            </Route>
            <Route path="/products/6">
              <Detail6 handleClick={handleClick} handleClick2={handleClick2}/>
            </Route>
            <Route path="/products/7" >
              <Detail7 handleClick={handleClick} handleClick2={handleClick2}
              />
            </Route>
            <Route path="/products/8">
              <Detail8 handleClick={handleClick} handleClick2={handleClick2}/>
            </Route>
            <Route path="/products/9" >
              <Detail9 handleClick={handleClick} handleClick2={handleClick2}
              />
            </Route>
            <Route path="/products/10">
              <Detail10 handleClick={handleClick} handleClick2={handleClick2}/>
            </Route>
            <Route path="/products/11" >
              <Detail11 handleClick={handleClick} handleClick2={handleClick2}
              />
            </Route>
            <Route path="/products/12">
              <Detail12 handleClick={handleClick} handleClick2={handleClick2}/>
            </Route>
            <Route path="/products/13" >
              <Detail13 handleClick={handleClick} handleClick2={handleClick2}
              />
            </Route>
            <Route path="/products/14">
              <Detail14 handleClick={handleClick} handleClick2={handleClick2}/>
            </Route>
            <Route path="/products/15" >
              <Detail15 handleClick={handleClick} handleClick2={handleClick2}
              />
            </Route>
            <Route path="/products/16">
              <Detail16 handleClick={handleClick} handleClick2={handleClick2}/>
            </Route>
            <Route path="/products/17" >
              <Detail17 handleClick={handleClick} handleClick2={handleClick2}
              />
            </Route>
            <Route path="/products/18">
              <Detail18 handleClick={handleClick} handleClick2={handleClick2}/>
            </Route>
            <Route path="/products/19" >
              <Detail19 handleClick={handleClick} handleClick2={handleClick2}
              />
            </Route>
            <Route path="/products/20">
              <Detail20 handleClick={handleClick} handleClick2={handleClick2}/>
            </Route>
          </Switch> 
        <Footers /> 
      </Router>  
    </div>
  );
}

export default App;


