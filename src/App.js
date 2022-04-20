import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layouts/main'
import './App.css'
import Home from './pages/home'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './libs/theme'

function App() {
  return (
    <Router>
      <ChakraProvider theme={theme}>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home title="Home" />} />
          </Routes>
        </Layout>
      </ChakraProvider>
    </Router>
  )
}

export default App
