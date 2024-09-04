import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './clients/index.ts'
import { Toaster } from 'react-hot-toast'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  duration: 800,
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
