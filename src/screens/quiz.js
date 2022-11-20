import React, { useEffect, useState } from 'react'
import { Container, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import MyTextField from '../components/textfield';
import sendData from '../config/firebasemethods';
import Button from '@mui/material/Button';

export default function Quiz() {
  let [module, setModule] = useState({});
  let [btnDisabled, setBtnDisabled] = useState(false);

  let fillModule = (key, val) => {
    module[key] = val;
    setModule({ ...module })
    console.log(module)
  }
  let sendStdData = () => {
    console.log(module)

    sendData({
      quiz: module,
      // time: new Date(),
      // userId: userId
    },
      `Quiz/`)
      .then((StudentInfo => { console.log(StudentInfo) }))
      .catch((err => { console.log(err) }))
  }
  return (
    <>
      <Container sx={{backgroundColor: "white", padding: "15px", borderRadius: "5px", width: { xs: "100%", md: "100%" } }}>
        <Grid container spacing={2}>

          <Grid item xs={12} sm={12} md={12}>
            <Typography variant='h5' sx={{ fontWeight: "bold" }}>Create Quiz</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} sx={{display:"flex"}}>
            <MyTextField
              // -------------------------------------> first Name
              label={"Question"}
              required={true}
              type={"text"}
              variant='standard'
              onChange={(e) => { fillModule("Question 1", e.target.value) }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} sx={{display:"flex", justifyContent:"space-between"}}>
            <MyTextField
              // -------------------------------------> last Name
              label={"Option 1"}
              required={false}
              type={"text"}
              variant='standard'
              onChange={(e) => { fillModule("option 1", e.target.value) }}
            />
            <MyTextField
              // -------------------------------------> Contact
              label={"Option 2"}
              required={true}
              type={"text"}
              variant='standard'
              onChange={(e) => { fillModule("option 2", e.target.value) }}
            />
            <MyTextField
              // -------------------------------------> CNIC
              label={"Option 3"}
              required={true}
              type={"text"}
              variant='standard'
              onChange={(e) => { fillModule("option 3", e.target.value) }}
            />
          
            <MyTextField
              // -------------------------------------> Father Name
              label={"Option 4"}
              required={true}
              type={"text"}
              variant='standard'
              onChange={(e) => { fillModule("option 4", e.target.value) }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Button variant="contained"  disabled={btnDisabled} onClick={sendStdData}>Submit Form</Button>
          </Grid>
        </Grid>
      </Container></>
  )
}
