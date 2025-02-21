import React, { Suspense } from 'react';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Services from './pages/Services';
// import Industries from './pages/Industries';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from '../ScrollToTop'

const LazyIndustries = React.lazy(() => import('./pages/Industries'))

function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop/>
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/services' element={<Services/>} />
      {/* <Route path='/industries' element={<Industries/>} /> */}
      <Route path='/industries' 
      element={
        <React.Suspense>
          <LazyIndustries/>
        </React.Suspense>
      } />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/blog' element={<Blog/>} />

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
