// import { Box, Chip, Grid } from '@mui/material'
// import React, { useEffect, useState } from 'react'
// import { getData } from '../config/firebasemethods'

// export default function QuizApp() {
//   const [questions, setQuestions] = useState([])
//   const [indexNumber, setIndexNumber] = useState(0)
//   const [score, setScore] = useState(0)
//   const [result, setResult] = useState(false)
//   const [showQuestions, setShowQuestions] = useState(false)
//   const [disabled, setDisabled] = useState(true)
//   const [name, setName] = useState("")
//   let getQuestions = () => {
//     console.log(module)

//     getData(`Quiz/`)
//       .then((res) => {
//         setQuestions(res)
//         console.log(res)
//       })
//       .catch((err) => {
//         alert(err)
//       })
//   }
//   let checkQuestion = (a, b) => {
//     if (a == b) {
//       setScore(score + 1)
//     }
//     if (indexNumber + 1 == questions.length) {
//       setResult(true)
//     }
//     else {
//       setIndexNumber(indexNumber + 1)
//     }
//   };
//   useEffect(() => { getQuestions() }, [])
//   return (
//     <>
//       <Box>
//         <Grid container sx={{ display: "flex", justifyContent: "center", flexDirection: "column", margin: "5px 0px" }}>
//           {questions[indexNumber].map((e, i) => (
//             <Grid item key={i} md={12}>
//               <Chip className="chip" sx={{
//                 width: "100%", margin: "5px 0px", fontSize: "16px"
//               }} onClick={() => checkQuestion(e, questions[indexNumber].correctAns)} label={e} />
//             </Grid>))}
//         </Grid>
//       </Box></>
//   )
// }
