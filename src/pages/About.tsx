import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
  styled,
} from '@mui/material';

import intro from '/videos/ink.mp4';
import Stacks from '/images/stacks.png';
import currentSectionState from '../utils/state';

function About() {
  const [currentSection, setCurrentSection] =
    useRecoilState(currentSectionState);

  const scrollEventListener = () => {
    const deviceHeight = Math.floor(window.scrollY / window.innerHeight);

    if (currentSection !== deviceHeight) setCurrentSection(deviceHeight);
  };

  const SectionBox = styled(Box)`
    height: 100vh;
  `;

  const StackText = styled('span')`
    display: block;
    background: #0a0a0a;
    color: white;
    margin-bottom: 12px;
    padding: 4px 8px;
    white-space: nowrap;
    font-size: 1.2rem;
    width: fit-content;
  `;

  const BackVideo = styled('video')`
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: -1;
    width: 100%;
  `;

  useEffect(() => {
    window.addEventListener('scroll', scrollEventListener);

    return () => {
      window.removeEventListener('scroll', scrollEventListener);
    };
  }, []);

  return (
    <>
      <SectionBox
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          textAlign: 'right',
          fontSize: '7rem',
          backgroundColor: 'transparent  ',
        }}
      >
        <BackVideo autoPlay muted play-inline>
          <source src={intro} type='video/mp4' />
        </BackVideo>
        <Box sx={{ mr: 8, color: 'white' }}>
          안녕하세요. <br /> 제 이름은&nbsp;
          <span
            style={{
              fontFamily: 'suite-bold',
            }}
          >
            이하늘
          </span>
          입니다.
        </Box>
      </SectionBox>
      <SectionBox
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            textAlign: 'center',
            flexDirection: 'row',
            width: '100%',
            pt: 22,
          }}
        >
          <Typography
            sx={{
              fontFamily: 'suite-bold',
              fontSize: '3rem',
            }}
          >
            전공
          </Typography>
          <Typography sx={{ fontSize: '3rem' }}>정보통신과</Typography>
        </Box>
        <Divider
          sx={{
            width: '5%',
            borderWidth: 4,
            mt: 16,
            backgroundColor: 'black',
          }}
        />
        <Typography sx={{ mt: 4, fontSize: '2rem' }}>
          코드에 대한 <span style={{ fontFamily: 'suite-bold' }}>탐구</span>로
          새로운 <span style={{ fontFamily: 'suite-bold' }}>기술</span>을 찾는
          시간에 <span style={{ fontFamily: 'suite-bold' }}>집중</span>하고
          있습니다.
        </Typography>
      </SectionBox>
      <SectionBox
        sx={{
          backgroundImage: `url(${Stacks})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '250px',
            right: '70%',
            textAlign: 'right',
          }}
        >
          <StackText>3번의 팀 프로젝트를 통해</StackText>
          <StackText>해당 기술 스택들을 숙지하게 되었습니다.</StackText>
        </Box>
        <Box
          sx={{
            position: 'absolute',
            top: '650px',
            right: '10%',
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
          }}
        >
          <StackText>비록 아직 부족한 점이 많지만</StackText>
          <StackText>
            꾸준히 노력하면서 계속 발전해 나가려 하고 있습니다.
          </StackText>
        </Box>
      </SectionBox>
      <SectionBox>
        <Box mb={6} p={8}>
          <Typography
            sx={{ mb: 1, fontSize: '2rem', fontFamily: 'suite-bold' }}
          >
            완성된 프로젝트
          </Typography>
          <Divider sx={{ mb: 3 }} />
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={3}>
              <Card>
                <CardActionArea>
                  <CardMedia />
                  <CardContent>
                    <Typography sx={{ fontFamily: 'suite-bold' }}>
                      포트폴리오 공유 사이트
                    </Typography>
                    <Typography sx={{ pt: 3 }}>
                      자신의 포트폴리오를 공유할 수 있는 사이트입니다.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card>
                <CardActionArea>
                  <CardMedia />
                  <CardContent>
                    <Typography sx={{ fontFamily: 'suite-bold' }}>
                      헌 옷 나눔 사이트
                    </Typography>
                    <Typography sx={{ pt: 3 }}>
                      더이상 못 입는 옷을 나눔할 수 있는 사이트입니다.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Typography sx={{ fontFamily: 'suite-bold' }}>
                      감정일기 공유 사이트
                    </Typography>
                    <Typography sx={{ pt: 3 }}>
                      일기의 감정을 식별하고 서로 공유할 수 있는 사이트입니다.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Box>
        <Box p={8}>
          <Typography
            sx={{ mb: 1, fontSize: '2rem', fontFamily: 'suite-bold' }}
          >
            진행 중인 프로젝트
          </Typography>
          <Divider sx={{ mb: 3 }} />
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={3}>
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Typography sx={{ fontFamily: 'suite-bold' }}>
                      프로젝트 팀원 모집 사이트
                    </Typography>
                    <Typography sx={{ pt: 3 }}>
                      포트폴리오 프로젝트를 같이 만들 팀원을 모집하는
                      사이트입니다.
                    </Typography>
                    <CardMedia />
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </SectionBox>
      <SectionBox
        sx={{
          background: '#111',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'right',
          fontSize: '1rem',
        }}
      >
        <Box
          sx={{
            fontSize: '0.8rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box style={{ fontFamily: 'suite-bold', fontSize: '1rem' }}>
            EMAIL
          </Box>
          <Box style={{ fontFamily: 'suite', fontSize: '1rem' }}>
            edcrfv901@naver.com
          </Box>
        </Box>
      </SectionBox>
    </>
  );
}

export default About;