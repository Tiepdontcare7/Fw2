import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BaseLayout from './layout/BaseLayout'
import HomePage from './pages/client/HomePage'
import DetailPage from './pages/client/DetailPage'
import NotFound from './pages/client/404'
import AdminProducts from './pages/admin/products/List'
import AdminLayout from './layout/AdminLayout'
import AdminCategories from './pages/admin/category/List'
import Dashboard from './pages/admin/dashboard/Dashboard'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import ProductForm from './pages/admin/products/ProductForm'
import CategoryForm from './pages/admin/category/CategoryForm'
import Login from './pages/client/Login'
import Register from './pages/client/Register'
import Card from './pages/client/Card'
import PdfViewer from './components/PdfViewer '
import CheckOut from './components/CheckOut'
import ForgotPassword from './components/ForgotPassword'
import Account from './components/Account'
import CheckoutPassword from './components/CheckoutPassword'
import ChancePassword from './components/ChancePassword'
import PrivateRoute from './utils/PrivateRouter'
import ListOrder from './pages/admin/orders/List'

function App() {
  const user = localStorage.getItem('user')

  return (
    <div className='app animsition'>
      <PdfViewer />

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<BaseLayout />}>
            <Route path='' element={<HomePage />} />
            <Route path='detail/:id' element={<DetailPage />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='card' element={<Card />} />
            <Route path='checkout' element={<CheckOut />} />
            <Route path='forgotpassword' element={<ForgotPassword />} />
            <Route path='checkoutPassword' element={<CheckoutPassword />} />
            <Route path='chancePassword' element={<ChancePassword />} />
            <Route path='account' element={<Account />} />
          </Route>

          <Route
            path='/admin'
            element={
              <PrivateRoute user={user}>
                <AdminLayout />
              </PrivateRoute>
            }
          >
            <Route path='' element={<Dashboard />} />
            <Route path='dashboard' element={<Dashboard />} />

            <Route path='products' element={<AdminProducts />} />
            <Route path='products/add' element={<ProductForm />} />
            <Route path='products/update/:id' element={<ProductForm />} />

            <Route path='category' element={<AdminCategories />} />
            <Route path='category/add' element={<CategoryForm />} />
            <Route path='category/update/:id' element={<CategoryForm />} />

            <Route path='order' element={<ListOrder />} />
          </Route>

          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>

      <ToastContainer position='top-center' autoClose={3000} limit={2} theme='dark' />
    </div>
  )
}

export default App
