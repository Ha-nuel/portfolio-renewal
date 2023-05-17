import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  styled,
} from '@mui/material';

function Header() {
  const MenuButton = styled(Button)`
    margin-left: 2rem;

    color: white;
  `;

  return (
    <AppBar
      sx={{
        p: 4,
        backgroundColor: 'transparent',
        boxShadow: 'none',
      }}
    >
      <Toolbar sx={{ mx: 1 }}>
        <Typography sx={{ flexGrow: 1, color: 'white' }}>
          H A N U E L
        </Typography>
        <Box sx={{ display: 'flex' }}>
          <MenuButton>소개</MenuButton>
          <MenuButton>기술 스택</MenuButton>
          <MenuButton>프로젝트</MenuButton>
          <MenuButton>연락처</MenuButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
