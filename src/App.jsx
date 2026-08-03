import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import { ThemeProvider } from './contexts/ThemeContext'
import './index.css'

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
