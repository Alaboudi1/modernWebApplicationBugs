import './styles.css'
import { useLayoutEffect } from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useLocation
} from 'react-router-dom'

const Comp = ({ title }) => <h1 style={{ height: '150vh' }}>{title}</h1>

const Wrapper = ({ children }) => {
  const location = useLocation()
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0)
  }, [location.pathname])
  return children
}

export default function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <p>Scroll the bottom to change pages</p>
        <Routes>
          <Route path="/" element={<Comp title="Home" />} />
          <Route path="/page1" element={<Comp title="Page 1" />} />
          <Route path="/page2" element={<Comp title="Page 2" />} />
        </Routes>
      </Wrapper>
      <Link to="/">Home</Link> | <Link to="page1">Page 1</Link> |{' '}
      <Link to="page2">Page 2</Link>
    </BrowserRouter>
  )
}
