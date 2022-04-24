import { SunIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Container,
  IconButton,
  Image,
  Link
} from '@chakra-ui/react'
import { css } from '@emotion/react'
import React from 'react'

const navItem = css`
  padding: 10px 15px;
  margin-left: 10px;
  &:hover {
    text-decoration: none;
    background-color: rgba(255, 255, 255, 0.2);
  }
  // &::after {
  //   content: '';
  //   position: absolute;
  //   bottom: 0;
  //   left: 0;
  //   margin-top: 10px;
  //   width: 100%;
  //   height: 3px;
  //   background-color: #f64453;
  // }
`

const playNow = css`
  background: linear-gradient(
    135deg,
    rgb(255, 51, 66) 0%,
    rgb(255, 48, 64) 0.01%,
    rgb(255, 125, 102) 100%
  );
  &:hover {
    background: linear-gradient(
      0deg,
      rgb(255, 51, 66) 0%,
      rgb(255, 48, 64) 0.01%,
      rgb(255, 125, 102) 100%
    );
  }
  transition: all 0.3s ease;
`

export default function Navbar() {
  return (
    <Container
      maxW="full"
      d="flex"
      alignItems="center"
      justifyContent="space-between"
      width="100%"
      backgroundColor="#111111"
    >
      <Box className="nav-left" d="flex">
        <Link>
          <Image
            src="/images/logo/Type_Lockup/V_Lockup_Vertical_Red.png"
            alt="Valorant"
            height="80px"
            objectFit="cover"
          />
        </Link>
        <Box d="flex" alignItems="center">
          <Button variant="link" css={navItem}>
            GAME INFO
          </Button>
          <Button variant="link" css={navItem}>
            MEDIA
          </Button>
          <Button variant="link" css={navItem}>
            NEWS
          </Button>
          <Button variant="link" css={navItem}>
            LEADERBOARDS
          </Button>
          <Button variant="link" css={navItem}>
            SUPPORT
          </Button>
          <Button variant="link" css={navItem}>
            OUR SOCIALS
          </Button>
        </Box>
      </Box>

      <Box className="nav-right" d="flex">
        <IconButton icon={<SunIcon />} mr={4} />
        <Button css={playNow}>PLAY NOW</Button>
      </Box>
    </Container>
  )
}
