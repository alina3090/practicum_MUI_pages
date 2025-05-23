import { Box, Container, Typography, Breadcrumbs, Link } from '@mui/material';
import Grid from '@mui/material/Grid';
import structures from '../data';
import { useParams, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

export default function Building() {
    const { id } = useParams();
    const building = structures[id ? parseInt(id) : 0];
    const navigate = useNavigate();

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>

            <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 4 }}>
                <Link 
                    underline="hover" 
                    color="inherit" 
                    onClick={() => navigate('/')}
                    sx={{ 
                        display: 'flex', 
                        alignItems: 'center',
                        '&:hover': {
                            color: '#5d8aa8',
                            cursor: 'pointer'
                        }
                    }}
                >
                    <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    Главная
                </Link>
                <Typography color="text.primary">{building.title}</Typography>
            </Breadcrumbs>

            {/* Контент страницы */}
            <Grid container spacing={4}>
                {/* Блок с изображением */}
                <Grid container spacing={{ xs: 12, md: 6 }}>
                    <Box
                        component="img"
                        src={building.img}
                        alt={building.title}
                        sx={{
                            width: '100%',
                            height: 'auto',
                            maxHeight: '500px',
                            objectFit: 'cover',
                            borderRadius: 2,
                            boxShadow: 3
                        }}
                    />
                </Grid>
                
                {/* Блок с текстом */}
                <Grid container spacing={{ xs: 12, md: 6 }}>
                    <Typography 
                        variant="h3" 
                        gutterBottom 
                        sx={{ 
                            fontSize: { xs: '1.8rem', md: '2.5rem' },
                            color: '#5d8aa8',
                            fontWeight: 'bold',
                            mb: 3
                        }}
                    >
                        {building.title}
                    </Typography>
                    
                    <Typography 
                        variant="body1" 
                        paragraph 
                        sx={{
                            fontSize: { xs: '1rem', md: '1.1rem' },
                            lineHeight: 1.8,
                            textAlign: 'justify',
                            color: 'text.primary'
                        }}
                    >
                        {building.description}
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}