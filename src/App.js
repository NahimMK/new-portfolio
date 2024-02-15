import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import './App.scss'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />} />
    </Routes>
    </>
  )
}

export default App;
