import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box component="footer" sx={{ p: 2, mt: 'auto' }}>
      <Typography variant="body2" align="center">
        © {new Date().getFullYear()} Самые высокие здания
      </Typography>
    </Box>
  );
}

export default Footer;