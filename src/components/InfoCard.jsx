import * as React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function InfoCard({ title, body, children }) {
  return (
    <Card sx={{ maxWidth: 275, height: '210px' }}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>

        <Typography variant="body2">{body}</Typography>
      </CardContent>
      <CardActions>
        {children}
      </CardActions>
    </Card>
  );
}
