import { Button, Container } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import ResponsiveDrawer from '../components/drawer'

export default function AdminDashboard() {
    let navigate = useNavigate()
    return (
        <>

            <ResponsiveDrawer />
        </>
        // <Container width={"lg"}>
        // </Container>
    )
}
