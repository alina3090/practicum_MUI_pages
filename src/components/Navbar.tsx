import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {Link} from 'react-router-dom';
import React from 'react';

// 1. Добавлен интерфейс для пропса active (задание 3)
interface ComponentProps {
    active: string; // 1 2 3
}

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 0,
    borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
    border: '1px solid',
    borderColor: theme.palette.divider,
    padding: '8px 12px',
}));

// 2. MenuItem с hover-эффектом (задание 2)
const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    '&:hover': {
        backgroundColor: theme.palette.info.light,
        color: theme.palette.info.contrastText,
    }
}));

function Navbar({ active }: ComponentProps) {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    return (
        <AppBar      
            position="static"
            sx={{
                boxShadow: 0,
                bgcolor: 'transparent',
                mt: '28px',
            }}
        >
            <Container maxWidth="xl">
                <StyledToolbar>
                    <Typography variant="h6" sx={{ color: '#5d8aa8' }}>
                        Самые высокие здания и сооружения
                    </Typography>
                    {/* 3. Основное меню - изменены Button с учетом active (задание 3) */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        
                        <Link to="/">
                        <Button 
                            variant={active === "1" ? "contained" : "text"} // если active="1" 
                            color="info" 
                            size="medium"
                        >
                            Главная
                        </Button>
                        </Link>

                        <Link to="/list">
                        <Button 
                            variant={active === "2" ? "contained" : "text"} // если active="2" 
                            color="info" 
                            size="medium"
                        >
                            Список зданий
                        </Button>
                        </Link>

                        <Link to="/building" style={{ textDecoration: 'none', marginLeft: '8px' }}>
                        </Link>

                        <Link to="/chart">
                        <Button 
                            variant={active === "3" ? "contained" : "text"} // если active="3"
                            color="info" 
                            size="medium"
                        >
                            Диаграммы
                        </Button>
                        </Link>
                    </Box>
                    

                    {/* 4. Мобильное меню */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' }}}>    
                        <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>              
                        <Drawer
                            anchor="top"
                            open={open}
                            onClose={toggleDrawer(false)}
                        >
                            <Box>               
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <IconButton onClick={toggleDrawer(false)}>
                                        <CloseRoundedIcon />
                                    </IconButton>
                                </Box>
                                {/* 5. Пункты мобильного меню с учетом active (задания 1, 3) */}
                                <StyledMenuItem 
                                    selected={active === "1"} // выделение если active="1" (задание 1)
                                    sx={{
                                        backgroundColor: active === "1" ? 'primary.main' : 'transparent',
                                        '&.Mui-selected': {
                                            backgroundColor: 'primary.main',
                                            color: 'white',
                                            '&:hover': {
                                                backgroundColor: 'primary.dark'
                                            }
                                        }
                                    }}
                                >
                                    <Link to="/">
                                    Главная
                                    </Link>
                                </StyledMenuItem>
                                <StyledMenuItem 
                                    selected={active === "2"} // выделение если active="2"
                                    sx={{
                                        backgroundColor: active === "2" ? 'primary.main' : 'transparent',
                                        '&.Mui-selected': {
                                            backgroundColor: 'primary.main',
                                            color: 'white',
                                            '&:hover': {
                                                backgroundColor: 'primary.dark'
                                            }
                                        }
                                    }}
                                >
                                    <Link to="/list">
                                    Список зданий
                                    </Link>
                                </StyledMenuItem>
                                <StyledMenuItem 
                                    selected={active === "3"} // выделение если active="3"
                                    sx={{
                                        backgroundColor: active === "3" ? 'primary.main' : 'transparent',
                                        '&.Mui-selected': {
                                            backgroundColor: 'primary.main',
                                            color: 'white',
                                            '&:hover': {
                                                backgroundColor: 'primary.dark'
                                            }
                                        }
                                    }}
                                >
                                    Диаграммы
                                </StyledMenuItem>  
                            </Box>
                        </Drawer>      
                    </Box>
                </StyledToolbar>
            </Container>  
        </AppBar>
    );
}

export default Navbar;