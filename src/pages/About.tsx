import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Typography,
  styled,
} from '@mui/material';

import Project1 from '../assets/images/project1.png';
import Project2 from '../assets/images/project2.png';
import Project3 from '../assets/images/project3.png';
import Stacks from '../assets/images/stacks.png';

function About() {
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

  return (
    <>
      <SectionBox
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          textAlign: 'right',
          fontSize: '7rem',
          backgroundColor: '#111  ',
        }}
      >
        <Box sx={{ mr: 8, color: 'white' }}>
          안녕하세요? <br /> 제 이름은&nbsp;
          <span
            style={{
              fontFamily: 'suite-bold',
              // textDecoration: 'underline',
              // textDecorationThickness: '6px',
              // textUnderlineOffset: '1rem',
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
            꾸준히 노력하면서 계속 발전하려 노력하고 있습니다.
          </StackText>
        </Box>
      </SectionBox>
      <SectionBox sx={{ p: 7, background: '#f9f9fb' }}>
        <Box sx={{ mb: 15 }}>
          <Typography
            sx={{ fontFamily: 'suite-bold', fontSize: '2rem', mb: 5 }}
          >
            완성된 프로젝트
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Card sx={{ width: ['90%', '50%', '30%'], m: 3 }}>
              <CardActionArea href='https://github.com/Ha-nuel/project-web'>
                <CardMedia
                  component='img'
                  height='100'
                  image={Project1}
                  alt='프로젝트 1'
                  sx={{
                    filter: 'blur(1px)',
                  }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h5'
                    component='div'
                    sx={{ p: 3, fontFamily: 'suite-bold' }}
                  >
                    포트폴리오 공유 사이트
                  </Typography>
                  <Typography
                    variant='body2'
                    color='text.secondary'
                    sx={{ p: 3 }}
                  >
                    자신의 포트폴리오를 공유할 수 있는 사이트입니다.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ width: ['90%', '50%', '30%'], m: 3 }}>
              <CardActionArea href='https://github.com/Ha-nuel/project-data'>
                <CardMedia
                  component='img'
                  height='100'
                  image={Project2}
                  alt='프로젝트 2'
                  sx={{
                    filter: 'blur(1px)',
                  }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h5'
                    component='div'
                    sx={{ p: 3, fontFamily: 'suite-bold' }}
                  >
                    나눔 쇼핑몰 사이트
                  </Typography>
                  <Typography
                    variant='body2'
                    color='text.secondary'
                    sx={{ p: 3 }}
                  >
                    더이상 입지 못하는 옷들을 나눔하는 사이트입니다.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ width: ['90%', '50%', '30%'], m: 3 }}>
              <CardActionArea href='https://github.com/Ha-nuel/project-ai'>
                <CardMedia
                  component='img'
                  height='100'
                  image={Project3}
                  alt='프로젝트 3'
                  sx={{
                    filter: 'blur(1px)',
                  }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h5'
                    component='div'
                    sx={{ p: 3, fontFamily: 'suite-bold' }}
                  >
                    감정 일기 사이트
                  </Typography>
                  <Typography
                    variant='body2'
                    color='text.secondary'
                    sx={{ p: 3 }}
                  >
                    서로 간의 감정을 공유할 수 있는 일기 공유 사이트입니다.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
        </Box>
        <Box sx={{ maxWidth: '100%' }}>
          <Typography sx={{ fontFamily: 'suite-bold', fontSize: '2rem' }}>
            진행 중인 프로젝트
          </Typography>
          <Card sx={{ width: ['90%', '50%', '30%'], m: 5 }}>
            <CardActionArea>
              <CardMedia />
              <CardContent>
                <Typography
                  gutterBottom
                  variant='h5'
                  component='div'
                  sx={{ p: 3, fontFamily: 'suite-bold' }}
                >
                  포트폴리오 프로젝트 팀원 모집 사이트
                </Typography>
                <Typography
                  variant='body2'
                  color='text.secondary'
                  sx={{ p: 3 }}
                >
                  프로젝트 팀원들을 구할 수 있는 사이트입니다.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
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
        <Box sx={{ fontSize: '0.8rem' }}>
          <span style={{ fontFamily: 'suite', fontSize: '1rem' }}>
            edcrfv901@naver.com
          </span>
        </Box>
      </SectionBox>
    </>
  );
}

export default About;
