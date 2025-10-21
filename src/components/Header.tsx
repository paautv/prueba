import React from "react";
import { Box, Typography, Button, Card, CardContent } from "@mui/material";

interface HeaderProps {
  name: string;
  mainImage: string;
  price: number;
}

const Header: React.FC<HeaderProps> = ({ name, mainImage, price }) => {
  return (
    <Card sx={{ display: 'flex', mb: 6, minHeight: 250, border: 'none', boxShadow: 'none' }}>
      {/* Contenido izquierdo */}
      <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', p: 3 }}>
        <Typography variant="h3" gutterBottom>{name}</Typography>
        <Typography variant="h5">Monto a invertir:</Typography>
        <Typography variant="subtitle1" sx={{ mb: 4 }}>${price}</Typography>
        <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
          <Button variant="contained" color="primary">Invertir</Button>
          <Button variant="outlined" color="primary">LINK BSC</Button>
        </Box>
      </CardContent>

      {/* Contenido derecha */}
      <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img
          src={`https://api.crowmie.com/api/v1/assets/content/${mainImage}`}
          alt={name}
          style={{
            width: '100%',
            height: '100%',
            maxHeight: 350,
            objectFit: 'contain',
          }}
        />
      </Box>
    </Card>
  );
};

export default Header;
