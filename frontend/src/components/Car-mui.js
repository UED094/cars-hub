import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

export default function Car() {
  return (
    <Container>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
        sx={{ height: 140 }}
        image="https://www.carscoops.com/wp-content/uploads/2022/02/Ferrari-458-3a-1024x555.jpg"
        title="Ferrari 458"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Ferrari 458
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Hot italian supercar.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
        <CardMedia
        sx={{ height: 140 }}
        image="https://www.carscoops.com/wp-content/uploads/2022/02/Ferrari-458-3a-1024x555.jpg"
        title="Ferrari 458"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Ferrari 458
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Hot italian supercar.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
        <CardMedia
        sx={{ height: 140 }}
        image="https://www.carscoops.com/wp-content/uploads/2022/02/Ferrari-458-3a-1024x555.jpg"
        title="Ferrari 458"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Ferrari 458
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Hot italian supercar.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
      
    </Container>

  );
}