import React, { useContext } from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import CartItem from './CartItem/CartItem';
import useStyles from './styles';
import { ProductContext } from '../../context';

const Cart = () => {
  const classes = useStyles();

  const {products,  addToCart, reduceFromCart, removeFromCart ,} = useContext(ProductContext);

  const EmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your shopping cart,{' '}
      <Link to="/" className={classes.link}>
        start adding some!
      </Link>
    </Typography>
  );

  const FilledCart = ({cart_items}) => (
    <>
      <Grid container spacing={3}>
        {cart_items.map((product) => (
          <Grid item xs={12} sm={4} key={product.id}>
            <CartItem product={product} handleRemoveFromCart={removeFromCart} 
              addToCart={addToCart} reduceFromCart={reduceFromCart}/>
          </Grid>
        ))}
      </Grid>
    </>
  );

  const cart_items = products.filter((product)=>{
    if(product['cart'] && product['cart']>0) return true;
    return false;
  });

  return (
    <Container>
      <div className={classes.toobar} />
      <Typography className={classes.title} variant="h4" gutterBottom>
        Your Shopping Cart
      </Typography>
      {cart_items.length> 0 ? <FilledCart cart_items={cart_items}/> : <EmptyCart /> }
    </Container>
  );
};

export default Cart;
