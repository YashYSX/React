import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const handleClick = ()=>{
  const  [count,setCount] = useState(10);
  console.log("button click");
};

const ImageCard = (props)=> {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.imgurl} />
      <Card.Body>
        {props.id}
        <Card.Title>{ props.title}</Card.Title>
        <Card.Text>
        {props.desc}
        </Card.Text>
        <Button onClick={handleClick} variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    </div>
  )
}

export default ImageCard