import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';


const EmployeeCard = () => {
  return (
    <div className='eeCard'>
       <Card style={{ width: '40rem' }}>
      <Card.Body>
        <Card.Title>Employee Name</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Position</Card.Subtitle>
        <ListGroup variant="flush">
        <ListGroup.Item>Rate: $24.45</ListGroup.Item>
        <ListGroup.Item>Pay Type: Hourly</ListGroup.Item>
        <ListGroup.Item>Annual Salary: $56,000</ListGroup.Item>
      </ListGroup>
      </Card.Body>
    </Card>
    <div className='buttonSection'>
    <Button variant="primary">Change Rate</Button>{' '}
    <Button variant="primary">Change Pay Type</Button>{' '}
    <Button variant="primary">Change Annual Salary</Button>{' '}
    </div>
    </div>
  )
}

export default EmployeeCard