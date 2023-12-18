
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import CountryDetail from './pages/CountryDetail';
import ThemeContextProvider from './context/ThemeContextProvider';

function App() {
  return (
    <>
    <ThemeContextProvider>
     <BrowserRouter>
     <Routes>
      <Route to='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='detail/:name' element={<CountryDetail/>}/>
      </Route>
     </Routes>
     </BrowserRouter>
     </ThemeContextProvider>
    </>
  )
}

export default App
