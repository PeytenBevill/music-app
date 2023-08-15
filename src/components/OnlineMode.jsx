

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';


export default function OnlineMode(props) {
  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography variant=''>
          Online Mode
        </Typography>
        
        <Typography variant="body2">
          Is this application connected to the internet?
        </Typography>
      </CardContent>
      <CardActions>
      <Switch onChange={() => props.setIsOnline(!props.isOnline)} label='Online Mode' defaultChecked />
      </CardActions>
    </Card>
  );
}