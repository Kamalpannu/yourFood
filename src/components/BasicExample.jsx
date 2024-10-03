import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import image from 'C:/Users/gkhos/yourFood/src/assets/image.png'; 

function BasicExample() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="Gobi di sabji" 
      />
      <CardContent>
        <Typography variant="h5" component="div">
          Sabji
        </Typography>
        <Typography variant="body2" color="text.secondary">
          gobi di sabji
        </Typography>
        <Button variant="contained" color="primary">
          Go somewhere
        </Button>
      </CardContent>
    </Card>
  );
}

export default BasicExample;
