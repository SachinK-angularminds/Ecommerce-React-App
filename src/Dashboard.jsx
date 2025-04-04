import React from 'react'
import { Button } from 'react-bootstrap'

const Dashboard = () => {
  return (
    <div className='d-flex justify-content-start mt-3'>
     <Button className='me-5 px-5' variant="dark">Sorting</Button>
     <Button className='me-5 px-5' variant="dark">Filtering</Button>
    </div>
  )
}

export default Dashboard
