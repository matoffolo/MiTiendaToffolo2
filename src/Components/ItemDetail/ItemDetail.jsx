import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import ItemCount from '../ItemCount/ItemCount';



function ItemDetail({product}) {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="500"
          image={product.image}
          al  t={product.title}
        />
        <CardContent>
          <Typography variant="h5" >
          {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {product.description}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
          ${product.price}
          </Typography>
          <ItemCount initial={1}/>  	
        </CardContent>
      </CardActionArea>
      <CardActions>
       
      </CardActions>
    </Card>
    </div>
  );
}

export default ItemDetail;
