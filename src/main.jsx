import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes'
import AuthProviders from './Providers/AuthProviders'
import { ToastContainer } from 'react-toastify'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AuthProviders>
      <QueryClientProvider client={queryClient}>
        <div className='max-w-screen-xl mx-auto'>
          <RouterProvider router={router}> </RouterProvider>
          <ToastContainer
            position="top-right"
            autoClose={1500}
            theme='dark'
          />
        </div>
      </QueryClientProvider>

    </AuthProviders>

  </StrictMode>,
)
