import { Box, Divider, styled } from '@mui/material';

function Footer() {
  const FooterContainer = styled(Box)`
    font-size: 0.7rem;
    text-align: center;
  `;

  return (
    <FooterContainer sx={{ background: '#111', color: 'white' }}>
      <Box sx={{ mb: 6, display: 'flex', justifyContent: 'center' }}>
        <Divider sx={{ width: '90%', background: 'white' }} />
      </Box>
      <Box sx={{ pb: 6 }}>© H A N U E L</Box>
    </FooterContainer>
  );
}

export default Footer;
