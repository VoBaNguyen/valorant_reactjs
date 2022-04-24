import {
  Box,
  Button,
  Container,
  Image,
  ListItem,
  Text,
  UnorderedList
} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Footer() {
  const socials = [
    'fa-brands fa-twitter',
    'fa-brands fa-youtube',
    'fa-brands fa-instagram',
    'fa-brands fa-facebook',
    'fa-brands fa-discord'
  ]

  return (
    <Box className="footer-wrapper" backgroundColor="#111">
      <Box
        display="flex"
        className="download"
        backgroundColor="#292929"
        height="70px"
        alignItems="center"
        justifyContent="center"
      >
        <Button backgroundColor="transparent">DONWLOAD GAME CLIENT</Button>
        <Button backgroundColor="transparent" ml="2">
          DONWLOAD RIOT MOBILE COMPANION APP
        </Button>
      </Box>
      <Container maxW="container.xl" display="flex" flexDirection="column">
        <Box>
          <UnorderedList
            listStyleType="none"
            m={0}
            mt={6}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {socials.map(social => (
              <ListItem
                mx={2}
                width="30px"
                height="30px"
                lineHeight="30px"
                textAlign="center"
                borderRadius={6}
                backgroundColor="#282828"
                cursor="pointer"
                _hover={{
                  backgroundColor: '#4f4f4f'
                }}
              >
                <Text as="i" className={social} />
              </ListItem>
            ))}
          </UnorderedList>
        </Box>
        <Box className="copy-right">
          <Image
            src="/images/logo/riot-logo/riot-logo.svg"
            alt="RIOT LOGO"
            width="100px"
            m="0 auto"
            my={8}
          />
          <Text
            as="p"
            maxW="640px"
            textAlign="center"
            m="0 auto"
            fontSize="0.8rem"
            textTransform="uppercase"
            color="#7e7e7e"
          >
            © 2022 Riot Games, Inc. Riot Games, VALORANT, and any associated
            logos are trademarks, service marks, and/or registered trademarks of
            Riot Games, Inc.
          </Text>
          <Box display="flex" justifyContent="center" mt={6}>
            <Button backgroundColor="transparent">PRIVACY NOTICE</Button>
            <Button backgroundColor="transparent">TERM OF SERVICE</Button>
          </Box>
          <Box
            className="riot-rating"
            display="flex"
            justifyContent="center"
            m="0 auto"
            mt={4}
            mb={16}
            p={2}
            backgroundColor="#292929"
            width="220px"
            borderRadius={4}
          >
            <Image src="/images/footer-rate.png" alt="RIOT RATING" />
            <Box
              class="riotbar-game-rating-text"
              ml={2}
              fontWeight={500}
              fontSize="0.9rem"
            >
              Blood
              <br />
              Language
              <br />
              Violence
              <br />
              Users Interact
              <br />
              In-Game Purchases
              <br />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
