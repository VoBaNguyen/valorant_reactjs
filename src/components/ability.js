import { Box, Button, Container, Heading, Image, Text } from '@chakra-ui/react'
import { css } from '@emotion/react'
import React, { useEffect, useState } from 'react'

export default function Ability({ primaryAgent }) {
  console.log(primaryAgent.abilities)
  const [primaryAbility, setPrimaryAbility] = useState(
    primaryAgent.abilities[0]
  )

  const btnAfter = css`
    overflow: hidden;
    background-color: #cec4b2;
    &::after {
      content: '';
      position: absolute;
      left: -150%;
      width: 100%;
      height: 100%;
      transform: skew(-20deg) scaleX(1.5);
      transition: all 0.4s ease;
      background-color: #ff4655;
    }

    &.active::after,
    &:hover::after {
      left: 0;
    }

    img,
    h3 {
      transition: all 0.4s ease;
    }

    &.active,
    &:hover {
      img,
      h3 {
        transform: scale(1.2, 1.2);
      }
    }
  `

  useEffect(() => {
    console.log('Run useEffect ability')
    setPrimaryAbility(primaryAgent.abilities[0])
  }, [primaryAgent])

  console.log(
    'Outside return',
    primaryAgent.displayName,
    primaryAbility.displayName
  )

  return (
    <Container maxW="container.lg" pt={36} borderLeft="solid black 1px">
      <Heading color="#111" fontFamily="Anton" letterSpacing="2px">
        SPECIAL ABILITIES
      </Heading>
      <Box
        className="ability-container"
        ml={16}
        mt={8}
        maxW="600px"
        minHeight="300px"
      >
        <Box className="all-abilities" display="flex">
          {primaryAgent.abilities.map(ability => (
            <Button
              width="80px"
              height="80px"
              p={2}
              mr={4}
              outline="solid #000 1px"
              borderRadius="0"
              css={btnAfter}
              onClick={() => setPrimaryAbility(ability)}
              className={
                ability.displayName === primaryAbility.displayName
                  ? 'active'
                  : ''
              }
              key={ability.displayName}
              _focus={{
                boxShadow: 'none'
              }}
            >
              {ability.displayIcon ? (
                <Image
                  src={ability.displayIcon}
                  zIndex={1}
                  alt={ability.slot}
                />
              ) : (
                <Text
                  zIndex={1}
                  as="h3"
                  fontSize="1rem"
                  textTransform="uppercase"
                >
                  {ability.slot}
                </Text>
              )}
            </Button>
          ))}
        </Box>
        {primaryAbility && (
          <Box className="ability-descr" mt={8}>
            <Text
              as="p"
              color="#383E3A"
              textTransform="uppercase"
              fontSize="1.5rem"
              fontWeight="500"
            >
              {primaryAbility.displayName}
            </Text>
            <Text as="p" mt={4} color="#768079">
              {primaryAbility.description}
            </Text>
          </Box>
        )}
      </Box>
      {console.log('Inside return')}
    </Container>
  )
}
