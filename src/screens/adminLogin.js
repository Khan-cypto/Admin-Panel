import React, { useState } from 'react'
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../config/firebasemethods';
import CircularProgress from '@mui/material/CircularProgress';

function AdminLogin() {

    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [isloading, setLoader] = useState(false)
    let navigate = useNavigate()
    let Login = async () => {
        setLoader(true)
        await loginUser({ email, password },'Admin')
            .then((success) => {
                navigate(`/adminLogin/${success.id}`)
                setLoader(false)
            })
            .catch((error) => {
                console.log(error);
                setLoader(false)
                // ..
            });

    }
    return (
        <Container >
            <Box sx={{
                width: { sm: "80%", md: "50%", lg: "40%" },
                display: "flex", padding: "20px", backgroundColor: "white", flexDirection: "column", margin: "10px auto", alignItems: "center", justifyContent: "space-between", minHeight: "220px"
            }}>
                <Typography variant="h4" sx={{ fontWeight: "bold", color: "black", fontFamily: "Roboto,Helvetica,Arial,sans-serif" }} >Admin Login</Typography>
                <TextField onChange={(e) => { setEmail(e.target.value) }} sx={{ margin: "8px" }} fullWidth id="outlined-basic" label="Email" variant="standard" type="email" />
                <TextField onChange={(e) => { setPassword(e.target.value) }} sx={{ margin: "8px" }} fullWidth id="outlined-basic" label="Password" variant="standard" type="password" />
                <Button sx={{width:200 , mt:2 }} variant="contained" onClick={Login}>Login</Button>
                
            </Box>
        </Container>
    )
}

export default AdminLogin;