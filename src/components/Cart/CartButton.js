import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { uiAction } from '../../store/uiSlice';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalqty = useSelector(state => state.cart.totalQty)
  const cartButtonHandler = () =>{
    dispatch(uiAction.toggle());
  }
  return (
    <button onClick={cartButtonHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalqty}</span>
    </button>
  );
};

export default CartButton;
