import React from 'react'
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkIcon from '@mui/icons-material/Work';

const Detail = () => {
  return (
    <div className='container mt-3'>
       <h1 style={{fontweight:400}}>Welcome Laxmidhar Das</h1>

       <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <div className='left_view'>
        <img src='/profile.png' style={{width:50}} alt="profile" />
        <h3 className='mt-3'>Name: <span>Laxmidhar Das</span></h3>
        <h3 className='mt-3'>Age: <span>21</span></h3>
        <p><MailOutlineIcon />Email: <span>ld@mail.com</span></p>
        <p><WorkIcon />Occupation: <span>Webdeveloper</span></p>
        </div>
        <div className='right_view'>

        </div>
      </CardContent>
      </Card>
    </div>
  )
}

export default Detail