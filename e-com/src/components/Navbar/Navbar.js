import React, { useContext } from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import useStyles from './styles';
import { ProductContext } from '../../context';

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();
  const {products} = useContext(ProductContext);
  const cart_count = products.filter((product)=>{
    if(product['cart'] && product['cart']>0) return true;
    return false;
  }).length;


  return (
    <nav>
      <AppBar position="fixed" className={classes.appBar} color="primary">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit">{"Rajdip's Shop"}
          </Typography>
          <div className={classes.grow} />
          {location.pathname === '/' && (
            <div className={classes.button}>
              <IconButton component={Link} to="/cart" aria-label="Show Card Items" color="inherit">
                <Badge badgeContent={cart_count} color="secondary"> <ShoppingCart /></Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </nav>
  );
};

export default Navbar;
