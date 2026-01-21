import React, {useState} from 'react';
import axios from 'axios';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Signup(){
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const nav = useNavigate();
  async function submit(e){
    e.preventDefault();
    try{
      await axios.post('/api/auth/signup',{email,password});
      nav('/');
    }catch(err){
      alert('Signup failed');
    }
  }
  return (
    <Box component="form" onSubmit={submit} sx={{maxWidth:400}}>
      <Typography variant="h5">Sign Up</Typography>
      <TextField fullWidth label="Email" value={email} onChange={e=>setEmail(e.target.value)} sx={{my:2}} />
      <TextField fullWidth label="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} sx={{mb:2}} />
      <Button variant="contained" type="submit">Sign Up</Button>
    </Box>
  );
}