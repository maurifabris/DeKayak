import React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button';
import { useState } from 'react';



const ItemDetail = ({ picture, name, description, stock }) => {

  const [add, setAdd] = useState(0)

  let HandleAdd = () => {
    if (stock >= add) {
      setAdd(add + 1)
    }
  }



  let HandleRemove = () => {
    if (add > 1) {
      setAdd(add - 1)
    }
  }
  return (
    <div className="picture-container">
      <div className="picture">
        <img src={picture} alt="Same alt value" />
      </div>
      <div className="picture-info">
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

export default ItemDetail