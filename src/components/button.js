import React from 'react'
import Button from '@mui/material/Button';

 function Button(props) {
    let {label,onClick}=props;
    return (
        <Button variant="contained" sx={{ backgroundImage: "linear-gradient( 109.6deg, rgb(107 155 227) 11.2%, rgba(110,123,251,1) 91.1% );" }} disabled={btnDisabled} onClick={onClick}>{label}</Button>
    )
}
export default Button