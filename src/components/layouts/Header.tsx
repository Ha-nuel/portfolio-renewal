import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  styled,
} from '@mui/material';
import { useRecoilValue } from 'recoil';
import currentSectionState from '../../utils/state';

function Header() {
  const currentSection = useRecoilValue(currentSectionState);

  const getColor = () => {
    switch (currentSection) {
      case -1:
      case 0:
      case 4:
        return 'white';
      default:
        return 'black';
    }
  };

  const MenuButton = styled(Button)`
    margin-left: 2rem;
  `;

  return (
    <AppBar
      sx={{
        p: 4,
        backgroundColor: [
          'transparent',
          'transparent',
          currentSection === -1 || currentSection === 0 || currentSection === 4
            ? 'transparent'
            : 'rgba(255, 255, 255, 0.9)',
        ],
        backdropFilter: [
          'none',
          'none',
          currentSection === -1 || currentSection === 0 || currentSection === 4
            ? 'none'
            : 'blur(8px)',
        ],
        boxShadow: 'none',
      }}
    >
      <Toolbar sx={{ mx: 1 }}>
        <Typography
          sx={{
            flexGrow: 1,
            color: getColor,
            opacity: [0, 0, 100],
          }}
        >
          H A N U E L
        </Typography>
        <Box
          sx={{
            display: 'flex',
            opacity: [0, 0, 100],
          }}
        >
          <MenuButton
            sx={{
              color: getColor,
            }}
            onClick={() => {
              window.scrollTo(0, window.innerHeight * 0);
            }}
          >
            소개
          </MenuButton>
          <MenuButton
            sx={{
              color: getColor,
            }}
            onClick={() => {
              window.scrollTo(0, window.innerHeight * 2);
            }}
          >
            기술 스택
          </MenuButton>
          <MenuButton
            sx={{
              color: getColor,
            }}
            onClick={() => {
              window.scrollTo(
                0,
                window.innerHeight * 3 - window.innerHeight / 5
              );
            }}
          >
            프로젝트
          </MenuButton>
          <MenuButton
            sx={{
              color: getColor,
            }}
            onClick={() => {
              window.scrollTo(0, window.innerHeight * 4);
            }}
          >
            연락처
          </MenuButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
