import { Box, Image, Container, Text, Heading } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import Slider from 'react-slick'
import { css } from '@emotion/react'
import axiois from 'axios'

const VerticalSlider = ({ children, props }) => {
  const settings = {
    className: 'section-outstanding__slider',
    slidesToShow: 6,
    arrows: false,
    infinite: true,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true
  }
  return (
    <Slider {...settings} {...props}>
      {children}
    </Slider>
  )
}

export default function Hero() {
  const agentName = css`
    &:hover {
      color: #ff4655;
      .agent-name {
        margin-left: 1rem;
        transition: all 0.4s ease;
      }
    }
  `
  const [primaryAgent, setPrimaryAgent] = useState()
  const [listAgents, setAgentData] = useState([])

  useEffect(() => {
    const agentAPI = 'https://valorant-api.com/v1/agents'
    axiois({
      method: 'GET',
      url: agentAPI
    })
      .then(res => {
        console.log(res.data)
        const filteredData = res.data.data.filter(
          tmpAgent => tmpAgent.uuid != 'ded3520f-4264-bfed-162d-b080e2abccf9'
        )
        console.log('filteredData: ', filteredData)
        setAgentData(filteredData)
        setPrimaryAgent(filteredData[0])
        console.log(listAgents)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <Box position="relative" height="650px">
      <Box position="absolute" top="0" left="0" height="100%" zIndex={-1}>
        <Image
          src="/images/agent-background-generic.JPG"
          width="100%"
          height="100%"
          objectFit="cover"
        />
      </Box>
      <Container maxW="container.lg" height="100%" display="flex">
        <Box id="agent-scroll" height="100%" width="60%">
          <VerticalSlider>
            {listAgents.map((item, idx) => {
              const agentOrder = idx + 1
              return (
                <Box
                  display="flex !important"
                  fontFamily="Anton"
                  color="#ece8e1"
                  userSelect="none"
                  cursor="pointer"
                  onClick={() => setPrimaryAgent(item)}
                  className="ageent-wrapper"
                  css={agentName}
                  key={item.uuid}
                >
                  <Text
                    as="p"
                    lineHeight="1.1"
                    pt="0.6rem"
                    mr="1rem"
                    fontSize="1.2rem"
                  >
                    {agentOrder < 10 ? '0' + agentOrder : agentOrder}
                  </Text>
                  <Text
                    as="p"
                    lineHeight="1.1"
                    fontSize="6em"
                    letterSpacing="1"
                    fontWeight="500"
                    className="agent-name"
                    textTransform="uppercase"
                  >
                    {item.displayName}
                  </Text>
                </Box>
              )
            })}
          </VerticalSlider>
        </Box>
        <Box
          position="absolute"
          width="100%"
          height="120%"
          top="50%"
          left="55%"
          mt="2rem"
          zIndex={1}
          pointerEvents="none"
          transform="translate(-50%, -50%)"
        >
          {primaryAgent && (
            <Image src={primaryAgent.fullPortraitV2} height="100%" m="0 auto" />
          )}
        </Box>
        <Box className="agent-description">
          <Box>
            <Text as="h3">ROLE</Text>
            <Text
              as="p"
              textTransform="uppercase"
              fontWeight="500"
              fontSize="2.5rem"
              fontFamily="Anton"
            >
              {primaryAgent.role.displayName}
            </Text>
            <Image src={primaryAgent.role.displayIcon} />
          </Box>
          <Box mt={4}>
            <Text as="h3">BIOGRAPY</Text>
            <Text as="p">{primaryAgent.description}</Text>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
