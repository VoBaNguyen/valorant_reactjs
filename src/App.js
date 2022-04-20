import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layouts/main'
import './App.css'
import Home from './pages/home'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './libs/theme'
import Agent from './pages/agent'

function App() {
  return (
    <Router>
      <ChakraProvider theme={theme}>
        <Layout>
          <Routes>
            <Route exact path="/test" element={<Home title="Home" />} />
            <Route exact path="/" element={<Agent title="Agents" />} />
          </Routes>
        </Layout>
      </ChakraProvider>
    </Router>
  )
}

export default App
