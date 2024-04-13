import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import { Header } from './components/Header'
import Playground from './pages/Playground'
import { SignIn } from './pages/SignIn'

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Header />,
      children: [
        {
          path: '/',
          index: true,
          element: <App />,
        },
      ],
    },
    {
      path: '/playground',
      element: <Playground />,
      // children: [
      //     {
      //         path: "/playground",
      //         index: true,
      //         element: <App />
      //     }
      // ]
    },
    {
      path: "/signin",
      element: <SignIn />
    }
  ],
  { basename: '/' }
)
