import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from 'react-bootstrap';

import { Link } from 'react-router-dom';


export default function Item({product}) {

 
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
        <Link to={`/Item/${product.id}`}><Button>DETALLE</Button></Link>
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}
