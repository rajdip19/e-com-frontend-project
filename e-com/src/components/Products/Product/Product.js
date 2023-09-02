import React from 'react';

import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Button,
} from '@material-ui/core';
import { AddShoppingCart, ShoppingBasket } from '@material-ui/icons';
import useStyles from './styles';

const Product = (props) => {
  const { name, description, price, media, id, cart, category } = props.product;

  const { onAddtoCart, onReduceFromCart, removeFromCart } = props;
  const classes = useStyles();
  
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={media.source}
        style={{ backgroundSize: '50%' }}
        title={name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" component="h2" style={{fontWeight: 'bold', minHeight: '64px'}} gutterBottom>
            {name.substr(0, 30)}{name.length>30?<>...</>:<></>}
          </Typography>
          <Typography variant="h6" component="h6" style={{fontWeight: '700', color: 'GrayText'}} gutterBottom>
            {price.formatted}
          </Typography>
        </div>
        <Typography
          dangerouslySetInnerHTML={{ __html: description.substr(0, 50) + '...' }}
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.desc}
        />
      </CardContent>
      <div style={{padding: '8px'}}>
      <Button color={cart>0?'primary': 'secondary'} variant={cart>0?'outlined': 'contained'} fullWidth onClick={()=>{
          if(cart>0) {removeFromCart(id);} else{onAddtoCart(id)}
        }} startIcon={<ShoppingBasket/>}>{cart>0?"remove from cart" : "add to cart"}</Button>
    
      </div>
    </Card>
  );
};

export default Product;

        