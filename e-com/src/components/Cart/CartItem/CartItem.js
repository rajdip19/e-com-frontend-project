import React from 'react';
import { Typography, Button, Card, CardContent, CardMedia } from '@material-ui/core';
import useStyles from './styles';
import { Delete } from '@material-ui/icons';

const CartItem = ({ product, addToCart, reduceFromCart, handleRemoveFromCart }) => {
  const classes = useStyles();
  return (
    <Card>
      <CardMedia image={product.media.source} alt={product.name} className={classes.media} style={{ backgroundSize: '50%' }}/>
      <CardContent className={classes.cardContent} style={{display: 'block'}}>
          <Typography variant="h5" component="h2" style={{fontWeight: 'bold', minHeight: '64px'}} gutterBottom>
            {product.name.substr(0, 30)}{product.name.length>30?<>...</>:<></>}
          </Typography>
          <Typography variant="h6" component="h6" style={{fontWeight: '700', color: 'GrayText'}} gutterBottom>
            {product.price.formatted}
          </Typography>
        
      </CardContent>

      <div style={{padding: '8px'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '4px'}}>
          <Button type="button" size="large" onClick={() => reduceFromCart(product.id)}>-</Button>
          <Typography>{product.cart}</Typography>
          <Button type="button" size="large" onClick={() => addToCart(product.id)}>+</Button>
        </div>
        <Button variant="outlined" type="button" color="secondary" fullWidth startIcon={<Delete/>} onClick={() => handleRemoveFromCart(product.id)}>Remove</Button>
      </div>
    </Card>
  );
};

export default CartItem;
