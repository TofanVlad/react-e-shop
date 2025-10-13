import { createBrowserRouter } from 'react-router'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import About from './pages/About'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Profile from './pages/Profile'
import Product from './pages/Product'

const router = createBrowserRouter([
    { path: '/', Component: Home },
    { path: '/catalog', Component: Catalog },
    { path: '/about', Component: About },
    { path: '/cart', Component: Cart },
    { path: '/contact', Component: Contact },
    { path: '/profile', Component: Profile },
    { path: '/product/:slug', Component: Product },
])

export default router