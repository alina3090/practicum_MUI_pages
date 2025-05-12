import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { styled } from '@mui/material/styles';


interface ComponentProps {
  building: {
    img: string, 
    title: string, 
    description: string[],
  };
  index: number; // Добавлен props для номера карточки
}

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textAlign: 'justify',
  '&:not(:last-child)': {
    marginBottom: '16px'
  }
}));

function BuildCard({ building, index} : ComponentProps) {
    return (
      <Card sx={{  display: 'flex', 
                   flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' 
                }}>
        <CardMedia
            component="img"
            alt={ building.title }
            image={ building.img }
        />
        <Box>
          <CardContent>
            <Typography gutterBottom variant="h5" >
              { building.title }
            </Typography>
            {building.description.map((item, ind) => (
              <StyledTypography key={ind} variant="body2">    
                {item}
              </StyledTypography>
            ))}
          </CardContent>
          <CardActions sx={{ justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start'}} >
            <Button size="small">Подробнее</Button>
          </CardActions>
        </Box>
      </Card>
    )
}

export default BuildCard;