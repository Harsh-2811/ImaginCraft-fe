import { Routes, Route, useLocation } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
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
import Dashboard from '../pages/Dashboard/Dashboard'
import Profile from '../pages/Dashboard/Profile'
import ApiKeys from '../pages/Dashboard/ApiKeys'
import BillingDetails from '../pages/Dashboard/BillingDetails'
import ImagesHistory from '../pages/Dashboard/ImagesHistory'
import ProtectedRoute from './ProtectedRoute'
import LoginPopup from '../pages/LoginPopup'
import Pricing from '../pages/Pricing'

const AppRoutes: React.FC = () => {
  const location = useLocation()
  const [showLoginPopup, setShowLoginPopup] = useState(false)

  useEffect(() => {
    if (location.state?.loginPopup) {
      setShowLoginPopup(true)
    }
  }, [location.state])

  return (
    <>
      <Routes>
        <Route path="/" element={<HeaderWrapper />}>
          <Route path="/" index element={<App />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route
            path="/playground"
            element={
              <ProtectedRoute>
                <Playground />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/enter-otp" element={<EnterOtp />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/apikeys"
          element={
            <ProtectedRoute>
              <ApiKeys />
            </ProtectedRoute>
          }
        />
        <Route
          path="/billing-details"
          element={
            <ProtectedRoute>
              <BillingDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/imageshistory"
          element={
            <ProtectedRoute>
              <ImagesHistory />
            </ProtectedRoute>
          }
        />
      </Routes>
      {showLoginPopup && (
        <LoginPopup onClose={() => setShowLoginPopup(false)} />
      )}
    </>
  )
}

export { AppRoutes }
