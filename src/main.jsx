import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Projects from './components/Projects'
import About from './components/About'
import Technologies from './components/Technologies'
import Resume from './components/Resume'
import Error from './components/Error'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <About />
      },
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/technologies',
        element: <Technologies />
      },
      {
        path: '/resume',
        element: <Resume />
      }
    ],
    errorElement: <Error />,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
