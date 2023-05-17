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
        backgroundColor: 'transparent',
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
          >
            소개
          </MenuButton>
          <MenuButton
            sx={{
              color: getColor,
            }}
          >
            기술 스택
          </MenuButton>
          <MenuButton
            sx={{
              color: getColor,
            }}
          >
            프로젝트
          </MenuButton>
          <MenuButton
            sx={{
              color: getColor,
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
