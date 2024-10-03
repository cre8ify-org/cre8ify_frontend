import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './input.css'
import { ChakraProvider } from '@chakra-ui/react'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider>
      <App />
      <ToastContainer theme="colored" />
    </ChakraProvider>
  </StrictMode>,
)
