import React from "react";
import { Box, Typography, Button, Card, CardContent } from "@mui/material";

interface HeaderProps {
  name: string;
  mainImage: string;
  price: number;
}

const Header: React.FC<HeaderProps> = ({ name, mainImage, price }) => {
  return (
    <Card sx={{ display: 'flex', alignItems: 'center', p: 2, mb: 3 }}>
      <img src={mainImage} alt={name} style={{ width: 120, height: 120, marginRight: 16, objectFit: 'cover', borderRadius: 8 }} />
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="subtitle1">Monto a invertir: ${price}</Typography>
      </CardContent>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Button variant="contained" color="primary">Invertir</Button>
        <Button variant="outlined" color="secondary">LINK BSC</Button>
      </Box>
    </Card>
  );
};

export default Header;
