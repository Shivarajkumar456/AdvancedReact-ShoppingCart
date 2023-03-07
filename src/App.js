import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { Fragment, useEffect } from 'react';
import { uiAction } from './store/uiSlice';
import Notification from './components/UI/Notification';

let initial = true;

function App() {
  const showCart = useSelector(state=>state.ui.cartIsVisible);
  const cart = useSelector(state=>state.cart);
  const dispatch = useDispatch();
  const notification = useSelector(state=>state.ui.notification);

  useEffect(()=>{
    const addData = async ()=>{
      dispatch(uiAction.showNotification({
        status: 'Sending',
        title: 'Sending...',
        message:'Sending data..'
      }));
      const res = await fetch('https://react-http-83ec6-default-rtdb.firebaseio.com/cart.json', {
      method:'PUT',
      body:JSON.stringify(cart)
    });
    if(!res.ok){
      throw new Error('Sending data failed');
    }
    dispatch(uiAction.showNotification({
      status: 'success',
      title: 'Success!',
      message:'Data sent Successfully!'
    }));
    }

    if(initial){
      initial=false;
      return;
    }
    addData().catch(()=>{
      dispatch(uiAction.showNotification({
        status: 'error',
        title: 'Error!',
        message:'sending data failed!'
      }));
    })
  },[cart, dispatch]);
  return (
    <Fragment>
    {notification && <Notification 
      title={notification.title}
      status={notification.status}
      message={notification.message}
    />}
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;
