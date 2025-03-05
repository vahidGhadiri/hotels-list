import { QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'

import queryClient from './config/react-query'
import "./config/tailwind/styles/tailwind.css"
import { HotelRouter } from './presentations'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            <HotelRouter />
        </QueryClientProvider>
    </BrowserRouter>
)
