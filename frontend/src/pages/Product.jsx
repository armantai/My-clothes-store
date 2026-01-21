import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Typography, Box } from '@mui/material';

export default function Product(){
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(()=>{
    axios.get('/api/products/' + id).then(r => setProduct(r.data)).catch(()=>{});
  },[id]);
  if(!product) return <div>Loading...</div>;
  return (
    <Box>
      <img src={product.image || 'https://via.placeholder.com/600x400'} alt={product.title} style={{maxWidth:'100%'}} />
      <Typography variant="h4">{product.title}</Typography>
      <Typography variant="h6">${product.price}</Typography>
      <Typography sx={{mt:2}}>{product.description || 'No description'}</Typography>
    </Box>
  );
}