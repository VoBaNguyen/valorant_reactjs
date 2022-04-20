import { Box, Image, Container, Text } from '@chakra-ui/react'

const bgGeneric =
  'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltbded518020183769/5eb26f5389bac8148a8006cc/agent-background-generic.JPG'

export default function Hero() {
  const listAgents = [
    'BRIMSTONE',
    'PHOENIX',
    'SAGE',
    'SOVA',
    'VIPER',
    'CYPHER',
    'REYNA',
    'KILLJOY',
    'BREACH',
    'OMEN',
    'JETT',
    'RAZE',
    'SKYE',
    'YORU',
    'ASTRA',
    'KAY/O',
    'CHAMBER',
    'NEON'
  ]
  return (
    <Box position="relative">
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="650px"
        zIndex={-1}
      >
        <Image src={bgGeneric} width="100%" height="100%" objectFit="cover" />
      </Box>
      <Container maxW="container.lg">
        <Box id="agent-scroll">
          {listAgents.map((name, idx) => {
            return (
              <Box d="flex">
                <Text as="span">{idx}</Text>
                <Text
                  as="p"
                  color="#ece8e1"
                  fontSize="9rem"
                  letterSpacing="1"
                  fontWeight="700"
                >
                  {name}
                </Text>
              </Box>
            )
          })}
        </Box>
      </Container>
    </Box>
  )
}
