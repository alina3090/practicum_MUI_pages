import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'; 
import structures from '../../data'; 
import BuildCard from './BuildCard';

const cardData = [structures[0], structures[1], structures[2], 
                 structures[3], structures[4], structures[9]]; //Выбираем что будет отображаться

function Content() {
    return (
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 3, md: 6 }}>
          {cardData.map((item, index) => (
            <Grid key={index} size={{ xs: 12, md: 6 }} >
              <BuildCard building={item} index={index} /> 
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }
  
  export default Content;