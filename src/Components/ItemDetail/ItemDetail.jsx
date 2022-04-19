import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

function ItemDetail({ product }) {
  const[number, setNumber] = useState(0)

  const addCart = (cantidad) => {
    setNumber(cantidad);
  };

console.log(number)

  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="500"
            image={product.image}
            al
            t={product.title}
          />
          <CardContent>
            <Typography variant="h5">{product.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description} 
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              ${product.price}
            </Typography>
          </CardContent>
          {number === 0 ? <ItemCount initial={1} stock={10} addCart={addCart} /> : <Link to='/cart' ><button>Ir al carrito</button></Link>
          }
        </CardActionArea>
        <CardActions></CardActions>
      </Card>
    </div>
  );
}

export default ItemDetail;
