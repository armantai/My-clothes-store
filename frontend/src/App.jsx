import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Container, AppBar, Toolbar, Typography, Button } from '@mui/material';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Product from './pages/Product';

export default function App(){
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }} variant="h6">Clothes Store</Typography>
          <Button color="inherit" component={Link} to="/login">Login</Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/product/:id" element={<Product/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </Container>
    </>
  );
}