import { Routes, Route, BrowserRouter } from 'react-router-dom'
import App from '../App'
import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'
import { ForgotPassword } from '../pages/ForgotPassword'
import { EnterOtp } from '../pages/EnterOtp'
import { NewPassword } from '../pages/NewPassword'
import About from '../pages/About'
import ContactUs from '../pages/ContactUs'
import { NotFound } from '../pages/NotFound'
import { HeaderWrapper } from '../wrapper/HeaderWrapper'
import Playground from '../pages/Playground'

const AppRoutes: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeaderWrapper />}>
            <Route path="/" index element={<App />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/playground" element={<Playground />} />
          </Route>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/enter-otp" element={<EnterOtp />} />
          <Route path="/new-password" element={<NewPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export { AppRoutes }
