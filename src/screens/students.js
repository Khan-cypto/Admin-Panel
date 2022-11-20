import React, { useEffect, useState } from 'react'
import { CircularProgress, Container, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import MyTextField from '../components/textfield';
import sendData, { getData } from '../config/firebasemethods';
import Button from '@mui/material/Button'
import DenseTable from '../components/table';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export default function Students() {
    let [module, setModule] = useState({});
    let [stdData, setStdData] = useState([])
    let sendStdData = () => {
        console.log(module)

        getData(`studentsRecord/`)
            .then((res) => {
                setStdData(res)
                console.log(res)
            })
            .catch((err) => {
                alert(err)
            })
    }
    useEffect(() => { sendStdData() }, [])
    return (
        <>
            <Container sx={{ backgroundColor: "white", padding: "15px", borderRadius: "5px", width: { xs: "100%", md: "100%" }}}>
                <Grid container spacing={2}>

                    <Grid item xs={12} sm={12} md={12}>
                        <Typography variant='h5' sx={{ fontWeight: "bold" }}>Enrolled Students</Typography>
                    </Grid>


                    <Grid item xs={12} sm={12} md={12} sx={{overflow:"hidden",width:{xs:"300px",md:"100%",lg:"100%"}}}>

                        <TableContainer component={Paper}>
                            <Table sx={{minWidth:650}} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Full Name</TableCell>
                                        <TableCell align="right">Father</TableCell>
                                        <TableCell align="right">Contact</TableCell>
                                        <TableCell align="right">Course</TableCell>
                                        <TableCell align="right">Section</TableCell>
                                        <TableCell align="right">CNIC</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {stdData.length > 0 ? stdData.map((row,i) => (
                                        <TableRow
                                            key={i}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {`${row.firstName} ${row.lastName}`}
                                            </TableCell>
                                            <TableCell align="right">{row.fatherName}</TableCell>
                                            <TableCell align="right">{row.contact}</TableCell>
                                            <TableCell align="right">{row.course}</TableCell>
                                            <TableCell align="right">{row.section}</TableCell>
                                            <TableCell align="right">{row.cnic}</TableCell>
                                        </TableRow>
                                    )) :(
                                        <TableRow>
                                            <TableCell align="right"><CircularProgress /></TableCell>
                                            <TableCell align="right"><CircularProgress /></TableCell>
                                            <TableCell align="right"><CircularProgress /></TableCell>
                                            <TableCell align="right"><CircularProgress /></TableCell>
                                            <TableCell align="right"><CircularProgress /></TableCell>
                                            <TableCell align="right"><CircularProgress /></TableCell>
                                        </TableRow>

                                    )

                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>

                    </Grid>
                </Grid>
            </Container></>
    )
}
