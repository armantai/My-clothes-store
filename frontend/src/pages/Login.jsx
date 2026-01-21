import React, {useState} from 'react';
import axios from 'axios';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Login(){
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const nav = useNavigate();
  async function submit(e){
    e.preventDefault();
    try{
      await axios.post('/api/auth/login',{email,password});
      nav('/');
    }catch(err){
      alert('Login failed');
    }
  }
  return (
    <Box component="form" onSubmit={submit} sx={{maxWidth:400}}>
      <Typography variant="h5">Login</Typography>
      <TextField fullWidth label="Email" value={email} onChange={e=>setEmail(e.target.value)} sx={{my:2}} />
      <TextField fullWidth label="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} sx={{mb:2}} />
      <Button variant="contained" type="submit">Login</Button>
      <Button variant="outlined" href="/auth/github" sx={{ml:2}}>
        Sign in with GitHub
      </Button>
    </Box>
  );
}