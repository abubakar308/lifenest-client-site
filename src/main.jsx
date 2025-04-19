import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.jsx'
import { AuthContext } from './provider/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<AuthContext>
<RouterProvider router={router}></RouterProvider>
</AuthContext>
  </StrictMode>,
)
