import React from 'react'

const LoginPopup: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-md shadow-lg">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 shrink-0 bg-orange-100 dark:bg-indigo-500/30">
          <svg
            className="w-6 h-6 shrink-0 fill-current text-orange-500"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z" />
          </svg>
        </div>
        <h2 className="text-2xl mb-4">Please log in to continue</h2>
        <button
          className="bg-orange-400 text-white px-3 py-2 rounded-md"
          onClick={onClose}
        >
          Close
        </button>
        {/* Add your login form or link to the login page here */}
      </div>
    </div>
  )
}

export default LoginPopup
