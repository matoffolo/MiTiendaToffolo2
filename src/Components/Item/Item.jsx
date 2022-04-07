import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount/ItemCount';

export default function Item({product}) {
  return (
    <div className='product'>
    <Card sx={{ maxWidth: 300}}>
      <CardMedia
        component="img"
        height="250"
        image={product.image}
        alt=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
         <ItemCount/>
    </Card>
    </div>
  );
}
