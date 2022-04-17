import React, {useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';


export default function Item({product, }) {

 const [counter, setCounter] = useState (0)

 const stock = 20
  
 function incrementar () {
     if (counter<stock){
         setCounter (counter+1)
     }
 }
 function decrementar() {
     if(counter>0){
         setCounter(counter-1)
     }
 }
 function onAdd() {
   alert('Agregaste '+ (counter) +' productos' )
   
 }
 
  return (
    <div className='product'>
    <Card sx={{ maxWidth: 375, minHeight:750, margin:5
    }}>
      <CardMedia
        component="img"
        height="450"
        image={product.image}
        alt={product.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <Link to={`/Item/${product.id}`}>DETALLE</Link>
        </Typography>
      </CardContent>
      <ItemCount incrementar={incrementar} decrementar={decrementar} onAdd={onAdd} counter={counter}/>
    </Card>
    </div>
  );
}
