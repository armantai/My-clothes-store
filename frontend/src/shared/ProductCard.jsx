import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ProductCard({product}){
  return (
    <Card>
      <CardMedia component="img" height="240" image={product.image || 'https://via.placeholder.com/600x400'} alt={product.title} />
      <CardContent>
        <Typography variant="h6">{product.title}</Typography>
        <Typography color="text.secondary">${product.price}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={Link} to={`/product/${product._id}`}>View</Button>
      </CardActions>
    </Card>
  );
}