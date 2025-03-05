import { QueryClientProvider } from '@tanstack/react-query';
import ReactDOM from 'react-dom/client';
import queryClient from './config/react-query';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <QueryClientProvider client={queryClient}>
        INITIAL
    </QueryClientProvider>,
);


