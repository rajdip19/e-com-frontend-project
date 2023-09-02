import React, { useContext, useState } from 'react';
import { Chip, Grid, IconButton, InputAdornment, TextField } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';
import { ProductContext } from '../../context';
import { CloseOutlined, Search } from '@material-ui/icons';

const Products = () => {
  const {products,  addToCart, reduceFromCart, removeFromCart} = useContext(ProductContext);
  const [category, setCategory] = useState();
  const [search, setSearch] = useState('');
  const classes = useStyles();
  
  const category_obj = {};

  products.forEach(({category})=>{
    category_obj[category] = true;
  });

  const categories = Object.keys(category_obj);

  let filtered_list = products.filter((product)=>{
    if(search === '') return true;
    const name = product['name'].toLowerCase();
    if(name.includes(search.toLowerCase())) return true;
    else return false;
  })

  filtered_list = filtered_list.filter((product)=>{
      if(!category) return true;
      else{
        return product['category'] === category;
      }
  });



  return (
    <main className={classes.content}>
      <TextField id="outlined-basic" value={search} onChange={(e)=>{setSearch(e.target.value)}} placeholder='search...' variant='outlined' style={{backgroundColor: 'Background', marginTop: '28px'}} fullWidth 
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search style={{color: 'GrayText'}}/>
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="start">
            {search.length>0?<IconButton onClick={()=>{setSearch('')}}><CloseOutlined/></IconButton>:<></>}
          </InputAdornment>
        )
      }}/>
      <div style={{display: 'flex', gap: 12, paddingTop: '12px', paddingBottom: '10px', overflow: 'auto'}}>{
        categories.map((item)=>{
          return(<Chip color={item === category?'secondary': 'primary'} label={item} key={item} onClick={()=>{
            if(category === item){
              setCategory(undefined)
            }else{
              setCategory(item)
            }
          }} />)
        })
      }
      </div>
      {
        filtered_list.length>0?<Grid container spacing={4} justifyContent='center'>
        {filtered_list.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddtoCart={addToCart} onReduceFromCart={reduceFromCart} removeFromCart={removeFromCart}/>
          </Grid>
        ))}
      </Grid>:<h2>Sorry!! No items found</h2>
      }
      
    </main>
  );
};

export default Products;
