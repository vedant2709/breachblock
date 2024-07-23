import React from 'react'
import Button from '@mui/material/Button';

function ButtonComponent({btntext,variant,color}) {
  return (
    <Button sx={{backgroundColor:color,marginTop:"25px"}} variant={variant}>{btntext}</Button>
  )
}

export default ButtonComponent