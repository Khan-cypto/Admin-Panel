import React, { useEffect, useState } from 'react'
import { Container, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import MyTextField from '../components/textfield';
import sendData from '../config/firebasemethods';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'

export default function StudentForm() {
  let navigate = useNavigate()
  let [module, setModule] = useState({});
  let [course, setCourse] = useState([
    { courseName: "Web and Mobile" },
    { courseName: "Amazon Affliate" },
    { courseName: "Graphic Designing" },
    { courseName: "Digital Marketing" }
  ]
  );
  let [section, setSection] = useState(
    [{ section: "A" }, { section: "B" }, { section: "C" }]
  );
  let [btnDisabled, setBtnDisabled] = useState(false);

  let fillModule = (key, val) => {
    module[key] = val;
    setModule({ ...module })
    // console.log(module)
  }
  let sendStdData = () => {
    console.log(module)

    sendData({
      StudentInfo: module,
      // time: new Date(),
      // id: id
    },

  

      `studentsRecord/`)
      .then((StudentInfo => { console.log(StudentInfo) }))
      .catch((err => { console.log(err) }))
  }
  return (
    <>
      <Container sx={{  backgroundColor: "white", padding: "5px", borderRadius: "5px", width: { xs: "90%", md: "90%" } }}>
        <Grid container spacing={2}>

          <Grid item xs={12} sm={12} md={12}>
            <Typography variant='h4' sx={{ fontWeight: "700" }}>Registeration Form</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <MyTextField
              // -------------------------------------> first Name
              label={"First Name"}
              required={true}
              type={"text"}
              variant='standard'
              onChange={(e) => { fillModule("firstName", e.target.value) }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <MyTextField
              // -------------------------------------> last Name
              label={"Last Name"}
              required={false}
              type={"text"}
              variant='standard'
              onChange={(e) => { fillModule("lastName", e.target.value) }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Course</InputLabel>
              <Select
                // -------------------------------------> Course 
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={co}
                label="Course"
                variant='standard'
                onChange={(e) => { fillModule("course", e.target.value) }}
              >
                {course.map((x, i) => {
                  return <MenuItem key={i} value={x.courseName}>{x.courseName}</MenuItem>

                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Section</InputLabel>
              <Select
                // -------------------------------------> Section
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={section}
                label="Select"
                variant='standard'
                onChange={(e) => { fillModule("section", e.target.value) }}
              >
                {section.map((x, i) => {
                  return <MenuItem value={x.section}>{x.section}</MenuItem>
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <MyTextField
              // -------------------------------------> Contact
              label={"Contact"}
              required={true}
              type={"text"}
              variant='standard'
              onChange={(e) => { fillModule("contact", e.target.value) }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <MyTextField
              // -------------------------------------> CNIC
              label={"CNIC"}
              required={true}
              type={"text"}
              variant='standard'
              onChange={(e) => { fillModule("cnic", e.target.value) }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <MyTextField
              // -------------------------------------> Father Name
              label={"Father Name"}
              required={true}
              type={"text"}
              variant='standard'
              onChange={(e) => { fillModule("FatherName", e.target.value) }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <MyTextField
              // -------------------------------------> Father CNIC
              label={"Father CNIC"}
              required={true}
              type={"text"}
              variant='standard'
              onChange={(e) => { fillModule("fatheCnic", e.target.value) }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <MyTextField
              // -------------------------------------> Father Contact
              label={"Father Contact"}
              required={true}
              type={"text"}
              variant='standard'
              onChange={(e) => { fillModule("FatherContact", e.target.value) }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <MyTextField
              // -------------------------------------> Emergency Contact
              label={"Emergency Contact"}
              required={true}
              type={"text"}
              variant='standard'
              onChange={(e) => { fillModule("emergencyContact", e.target.value) }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Button variant="contained" sx={{width:300}} disabled={btnDisabled} onClick={sendStdData}>Submit Form</Button>
            <Button variant="inherit" sx={{width:100}} disabled={btnDisabled} onClick={(()=>{navigate('/')})}>Go Back</Button>
          </Grid>
        </Grid>
      </Container></>
  )
}
