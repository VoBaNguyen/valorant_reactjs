import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import Fonts from '../fonts'
import Navbar from '../navbar'

export default function Main({ children }) {
  return (
    <Box as="main" width="100%">
      <Fonts />
      <Navbar />
      {children}
    </Box>
  )
}
