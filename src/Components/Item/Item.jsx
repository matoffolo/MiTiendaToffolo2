import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from 'react-bootstrap';

import { Link } from 'react-router-dom';


export default function Item({product}) {

 
  return (
    <div className='product'>
    <Card sx={{ maxWidth: 375, minHeight:650, margin:5, border: 10
    }}>
      <CardMedia
        component="img"
        height="350"
        image={product.img}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div"  >
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <Link to={`/Item/${product.id}`}><Button>DETALLE</Button></Link>
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}
