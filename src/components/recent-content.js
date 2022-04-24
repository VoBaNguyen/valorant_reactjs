import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { css } from '@emotion/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function RecentContent() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://valorant-api.com/v1/events'
    })
      .then(res => {
        setEvents(res.data.data)
      })
      .catch(err => console.log(err))
  }, [])

  const contentOverlay = css`
    overflow: hidden;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: -150%;
      width: 100%;
      height: 100%;
      mix-blend-mode: multiply;
      transform: skew(-20deg) scaleX(1.5);
      transition: all 0.4s ease;
      background-color: #ff4655;
    }

    img {
      transition: all 0.4s ease;
    }
    &:hover {
      cursor: pointer;
      background-color: #111;
      color: #fff;
      img {
        transform: scale(1.1, 1.1);
      }
    }
    &:hover::after {
      left: 0;
    }
  `

  const contentDescr = css`
    transition: all 0.4s ease;
    &:before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0.3rem;
      height: 0.3rem;
      background-color: #ff4655;
    }
  `

  return (
    <Container maxW="container.lg" py={8} borderLeft="solid black 1px">
      <Heading color="#111" fontFamily="Anton" letterSpacing="2px">
        RECENT CONTENTS
      </Heading>
      <Stack direction="row" spacing={4}>
        {events &&
          events.map((event, idx) => {
            const contentId = idx + 1
            // console.log(Date.parse(event.endTime).toString())
            const date = new Date(event.endTime)
            const eventEndDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
            return (
              <Box
                className="content-wrapper"
                border="solid #999 1px"
                color="#111"
                fontWeight="500"
                position="relative"
                css={contentOverlay}
              >
                <Box className="content-image" overflow="hidden">
                  <Image
                    src={`/images/recent-content/content_${contentId}.webp`}
                    alt="content descr"
                  />
                </Box>
                <Box
                  className="content-descr"
                  display="flex"
                  minH="80px"
                  zIndex={1}
                  position="relative"
                  css={contentDescr}
                >
                  <Text
                    as="p"
                    transform="rotate(180deg)"
                    style={{ writingMode: 'vertical-rl' }}
                    fontSize="1.5rem"
                    textAlign="center"
                  >
                    {contentId < 10 ? '0' + contentId : contentId}
                  </Text>
                  <Box p={4}>
                    <Text as="p" opacity="0.5">
                      {eventEndDate}
                    </Text>
                    <Text as="p">{event.displayName}</Text>
                  </Box>
                </Box>
              </Box>
            )
          })}
      </Stack>
    </Container>
  )
}
