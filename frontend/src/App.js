import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import Content from './pages/Content/Content'
import { ContentProvider } from './components/ContentContext'
import Film from './pages/Film/Film'
import Layout from './components/Layout'
import Comments from './pages/Film/Comments/Comments'

function App() {
  return (
    <ContentProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/films" element={<Content />} />
            <Route path="/films/:id" element={<Film />} />
            <Route path="/films/:id/reviews" element={<Comments />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ContentProvider>
  )
}

export default App
