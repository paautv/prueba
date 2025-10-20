import React from "react";
import { Card, CardContent, Typography, Box, Link } from "@mui/material";

interface Promoter {
  _id: string;
  name: string;
  links: { link: string; type: string }[];
}

interface PromoterListProps {
  promoters: Promoter[];
}

const PromoterList: React.FC<PromoterListProps> = ({ promoters }) => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>Promotores</Typography>
      {promoters.map(p => (
        <Card key={p._id} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="subtitle1">{p.name}</Typography>
            {p.links.map(l => (
              <Link href={l.link} target="_blank" key={l.link} sx={{ mr: 1 }}>
                {l.type}
              </Link>
            ))}
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default PromoterList;
