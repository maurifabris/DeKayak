import React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Link } from "react-router-dom"

let seAgregoAlcarrito = 0 
const ItemDetail = ({ picture, name, description, stock }) => {


  const [add, setAdd] = useState(0)

  //se que esta mal pero no se me ocurre como hacerlo, tengo que leer, pense en suar add == useState pero no entienod como funciona
 
  let addToCart = () => {
    seAgregoAlcarrito ++ 
  }

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

        {
          seAgregoAlcarrito > 1 ?
          <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button onClick={HandleAdd}>+</Button>
            <Button onClick={HandleRemove}>-</Button>
            <Button on Clieck={addToCart}>Agregar {add} al carrito</Button>
          </ButtonGroup> :
        <Link to="/Cart"><Button>Agregado</Button></Link>
        }


      </div>
    </div>
  );
}

export default ItemDetail