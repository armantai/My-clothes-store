import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Grid } from '@mui/material';
import ProductCard from '../shared/ProductCard';

export default function Home(){
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    axios.get('/api/products').then(r => setProducts(r.data)).catch(()=>{});
  },[]);
  return (
    <Grid container spacing={2}>
      {products.map(p => (
        <Grid item xs={12} sm={6} md={4} key={p._id}>
          <ProductCard product={p} />
        </Grid>
      ))}
    </Grid>
  );
}