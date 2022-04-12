import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';



function ItemDetail({product}) {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="500"
          image={product.image}
          alt={product.title}
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
        </CardContent>
      </CardActionArea>
      <CardActions>
       
      </CardActions>
    </Card>
    </div>
  );
}

export default ItemDetail;