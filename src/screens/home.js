import { Button, Container } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './navbar'


export default function Home() {
    let navigate = useNavigate()
    return (
        <Container >

            <Navbar/>


            <h1 sx={{textAlign:'center'}}>HOME PAGE</h1>
            {/* <Button variant='contained' className='btn' sx={{color:"white", mx:1}} onClick={()=>{navigate("/registration")}}>Registration</Button>
            <Button variant='contained' sx={{color:"white"}} onClick={()=>{navigate("/adminLogin")}}>Admin Login</Button> */}
            {/* <Button sx={{color:"black"}} onClick={()=>{navigate("/quiz")}}>Quiz</Button> */}
        </Container>
    )
}
