import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import ProductPage from './pages/ProductPage'

const App = () => (
  <BrowserRouter basename='/'>
    <Routes>
      <Route path='/' element={<ProductPage />} />
      <Route path='/privacy-policy' element={<PrivacyPolicyPage />} />
    </Routes>
  </BrowserRouter>
)

export default App
