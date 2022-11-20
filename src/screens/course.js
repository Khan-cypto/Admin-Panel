import React, { useEffect, useState } from 'react'
import { Container, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import MyTextField from '../components/textfield';
import sendData from '../config/firebasemethods';
import Button from '@mui/material/Button';

export default function Course() {
  let [module, setModule] = useState({});
  let [duration, setDuration] = useState([
    { duration: "8" },
    { duration: "16" },
  ]
  );
  let [noOfQuiz, setNoOfQuiz] = useState(
    [{ noOfQuiz: "1" }, { noOfQuiz: "2" }, { noOfQuiz: "3" }, { noOfQuiz: "4" }]
  );
  // let [assistent, setAssistent] = useState([]);
  let [btnDisabled, setBtnDisabled] = useState(false);

  let fillModule = (key, val) => {
    module[key] = val;
    setModule({ ...module })
    // console.log(module)
  }
  let sendStdData = () => {
    console.log(module)

    sendData({
      course: module,
      // time: new Date(),
      // userId: userId
    },
      `course/`)
      .then((StudentInfo => { console.log(StudentInfo) }))
      .catch((err => { console.log(err) }))
  }
  // let addAssistent=(e)=>{
  //   setAssistent( assistent.concat(e.target.value))
  //   console.log(assistent)
  // }
  return (
    <>
      <Container sx={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;", backgroundColor: "white", padding: "15px", borderRadius: "5px", width: { xs: "100%", md: "100%" } }}>
        <Grid container spacing={2}>

          <Grid item xs={12} sm={12} md={12}>
            <Typography variant='h5' sx={{ fontWeight: "bold" }}>Create Course</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <MyTextField
              // -------------------------------------> Course Name
              label={"Course Name"}
              required={true}
              type={"text"}
              variant='standard'
              onChange={(e) => { fillModule("courseName", e.target.value) }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Course Duration</InputLabel>
              <Select
                // -------------------------------------> Course 
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={co}
                label="Course Duration"
                variant='standard'
                onChange={(e) => { fillModule("duration", e.target.value) }}
              >
                {duration.map((x, i) => {
                  return <MenuItem key={i} value={x.duration}>{x.duration}</MenuItem>

                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">noOfQuiz</InputLabel>
              <Select
                // -------------------------------------> No Of Quiz
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={noOfQuiz}
                label="No Of Quiz"
                variant='standard'
                onChange={(e) => { fillModule("noOfQuiz", e.target.value) }}
              >
                {noOfQuiz.map((x, i) => {
                  return <MenuItem value={x.noOfQuiz}>{x.noOfQuiz}</MenuItem>
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <MyTextField
              // -------------------------------------> Open/Close
              label={"Form Open: Y/N"}
              required={true}
              type={"text"}
              variant='standard'
              onChange={(e) => { fillModule("isFormOpen", e.target.value) }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <MyTextField
              // -------------------------------------> fees
              label={"Fees in Rupee"}
              required={true}
              type={"text"}
              variant='standard'
              onChange={(e) => { fillModule("fees", `${e.target.value} RS`) }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <MyTextField
              // -------------------------------------> Trainer Id 
              label={"Trainer Id"}
              required={true}
              type={"text"}
              variant='standard'
              onChange={(e) => { fillModule("trainerId", e.target.value) }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <MyTextField
              // -------------------------------------> Father CNIC
              label={"Assistent Trainers"}
              required={true}
              type={"text"}
              variant='standard'
              
              onChange={(e) => { fillModule("assitentTrainer", (e.target.value)) }}
            />
            {/* <Button onClick={}>Add Assistent</Button> */}
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Button variant="contained"  disabled={btnDisabled} onClick={sendStdData}>Submit Form</Button>
          </Grid>
        </Grid>
      </Container></>
  )
}
