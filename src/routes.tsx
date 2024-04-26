import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import { Header } from './components/Header'
import Playground from './pages/Playground'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { ForgotPassword } from './pages/ForgotPassword'
import { EnterOtp } from './pages/EnterOtp'
import { NewPassword } from './pages/NewPassword'
import { NotFound } from './pages/NotFound'
import About from './pages/About'

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
        {
          path: '/about-us',
          index: true,
          element: <About />,
        },
        {
          path: '/playground',
          index: true,
          element: <Playground />,
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
      path: '/signin',
      element: <SignIn />,
    },
    {
      path: '/signup',
      element: <SignUp />,
    },
    {
      path: '/forgot-password',
      element: <ForgotPassword />,
    },
    {
      path: '/enter-otp',
      element: <EnterOtp />,
    },
    {
      path: '/new-password',
      element: <NewPassword />,
    },
    {
      path: '/about-us',
      element: <About />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ],
  { basename: '/' }
)
