import React from "react";
import { Card, CardContent, Typography, Box, Link, Button, Avatar } from "@mui/material";

interface Promoter {
  _id: string;
  name: string;
  logo?: string;
  links: { link: string; type: string }[];
}

interface PromoterListProps {
  promoters: Promoter[];
}

const PromoterList: React.FC<PromoterListProps> = ({ promoters }) => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>Promotores</Typography>
      {/* Lista de promotores */}
      {promoters.map(p => (
        <Card key={p._id} sx={{ mb: 2 }}>
          <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {p.logo && (
              <Avatar
                src={`https://api.crowmie.com/api/v1/promoter/content/${p.logo}`}
                alt={p.name}
                sx={{ width: 60, height: 60 }}
              />
            )}
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle1">{p.name}</Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {p.links.map(l => (
                  <Link href={l.link} target="_blank" key={l.link}>
                    {l.type}
                  </Link>
                ))}
              </Box>
            </Box>
          </CardContent>
        </Card>
      ))}
      <Button variant="contained" color="primary" sx={{ mt: 3 }}>Invertir</Button>
    </Box>
  );
};

export default PromoterList;
