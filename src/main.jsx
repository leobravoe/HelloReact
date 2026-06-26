import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
// bootstrap icons
import 'bootstrap-icons/font/bootstrap-icons.min.css';
// fontawesome-free 
import '@fortawesome/fontawesome-free/css/all.min.css';

import App from './pages/App'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'

const router = createBrowserRouter(
    [
        { path: "/", element: <App /> },
        { path: "/sobre", element: <Sobre /> },
        { path: "/contato", element: <Contato /> },
    ],
    {
        // npm run dev → ambiente local → usa "/"
        // npm run build → produção/preview → usa "/NOME_DO_REPOSITORIO/"
        basename: import.meta.env.BASE_URL,
    }
);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)