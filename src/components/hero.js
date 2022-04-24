import { Box, Image, Container, Text } from '@chakra-ui/react'
import Slider from 'react-slick'
import { css } from '@emotion/react'

const AgentPortrait = ({ primaryAgent, props }) => {
  return (
    <Box
      position="absolute"
      height="110%"
      zIndex={1}
      left="50%"
      transform="translate(-50%, 0)"
      pointerEvents="none"
      userSelect="none"
      margin="0 auto"
      // overflow="visible"
    >
      <Image
        src={primaryAgent.fullPortraitV2}
        height="100%"
        objectFit="cover"
      />
    </Box>
  )
}

const AgentDescr = ({ primaryAgent }) => {
  return (
    <Box
      className="agent-description"
      position="absolute"
      minW="300px"
      right="0"
      height="100%"
      zIndex={10}
    >
      <Box className="agent-description-wrapper" position="absolute" top="25%">
        <Box className="agent-role" height>
          <Text as="h3" fontWeight="500">
            {'//ROLE'}
          </Text>
          <Box display="flex" mt={4}>
            <Text
              as="p"
              textTransform="uppercase"
              fontWeight="500"
              fontSize="2.5rem"
              fontFamily="Anton"
              lineHeight="1"
            >
              {primaryAgent.role.displayName}
            </Text>
            <Image
              src={primaryAgent.role.displayIcon}
              width="40px"
              height="40px"
              ml={2}
            />
          </Box>
        </Box>
        <Box className="agent-biography" mt={10}>
          <Text as="h3" fontWeight="500">
            {'//BIOGRAPHY'}
          </Text>
          <Text as="p" mt={4} textAlign="justify">
            {primaryAgent.description}
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

const VerticalSlider = ({ children, props }) => {
  const settings = {
    className: 'section-outstanding__slider',
    slidesToShow: 6,
    arrows: false,
    infinite: true,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    focusOnSelect: true
  }
  return (
    <Slider {...settings} {...props}>
      {children}
    </Slider>
  )
}

export default function Hero({ primaryAgent, setPrimaryAgent, listAgents }) {
  const agentName = css`
    &.active,
    &:hover {
      color: #ff4655;
      .agent-name {
        margin-left: 1rem;
        transition: all 0.4s ease;
      }
    }
  `

  return (
    <Box
      className="hero-wrapper"
      position="relative"
      height="670px"
      // backgroundColor="red"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        zIndex={-1}
      >
        <video
          poster="/images/agent-background-generic.JPG"
          autoplay="autoplay"
          loop="true"
          muted
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        >
          <source src="/videos/agent-background-generic.mp4" type="video/mp4" />
        </video>
      </Box>
      <Container
        maxW="container.xl"
        height="100%"
        display="flex"
        position="relative"
      >
        <Box id="agent-scroll" height="100%" width="100%">
          <VerticalSlider>
            {listAgents.map((agent, idx) => {
              const agentOrder = idx + 1
              return (
                <Box
                  display="flex !important"
                  fontFamily="Anton"
                  color="#ece8e1"
                  userSelect="none"
                  cursor="pointer"
                  onClick={() => setPrimaryAgent(agent)}
                  className={agent.uuid === primaryAgent.uuid ? 'active' : ''}
                  css={agentName}
                  key={agent.uuid}
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
                    {agent.displayName}
                  </Text>
                </Box>
              )
            })}
          </VerticalSlider>
        </Box>
        {primaryAgent && <AgentPortrait primaryAgent={primaryAgent} />}
        {primaryAgent && <AgentDescr primaryAgent={primaryAgent} />}
      </Container>
    </Box>
  )
}
