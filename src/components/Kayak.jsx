import React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button';
import Addcart from './addCart';
import { useState } from 'react';

const Kayak = ({picture, name, description}) =>{
  const [add, setAdd] = useState(0)

  const HandleAdd = () => {
  setAdd(add +1)}
  const HandleRemove = () => {
    setAdd(add -1)}
  return (
    <div className="video-container">
    <div className="video-image">
    <img src={picture} alt="Same alt value" />
    </div>
    <div className="video-info">
    <h3>{name}</h3>
    <p>Descripcion: {description}</p>
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button onClick={HandleAdd}>+</Button>
      <Button onClick={HandleRemove}>-</Button>
      <Button>Agregar {add} al carrito</Button>
    </ButtonGroup>
    </div>
</div>
  );
}

export default Kayak