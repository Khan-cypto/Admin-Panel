import React from 'react'
import TextField from '@mui/material/TextField';


function MyTextField(props) {
    const { required, label, variant,onChange, defaultValue, type } = props
    return (
        <TextField
            fullWidth
            required={required}
            id="outlined-required"
            label={label}
            variant={variant}
            defaultValue={defaultValue}
            onChange={onChange}
            sx={{margin:"0px 2px "}}

            type={type}
        />
    )
}
export default MyTextField; 