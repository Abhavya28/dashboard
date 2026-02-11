import './index.css'
import Sidebar from './components/SideBar'
import Customers from './pages/Customers/Customers'
import CustomersView from './pages/Customers/CustomersView'
import CustomersCreate from './pages/Customers/CustomersCreate'
import CRM from './pages/Dashboards/CRM'
import TotalProducts from './pages/Products/TotalProducts'
import ProductsView from './pages/Products/ProductsView'
import ProductsCreate from './pages/Products/ProductsCreate'
import Payment from './pages/Payment/Payment'
import InvoiceView from './pages/Payment/InvoiceView'
import InvoiceCreate from './pages/Payment/InvoiceCreate'
import Installation from './pages/Installation/Installation'
import InstallationView from './pages/Installation/InstallationView'
import InstallationCreate from './pages/Installation/InstallationCreate'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <Sidebar />

        <main className="flex-1 overflow-y-auto p-6">
          <Routes>
            {/* Dashboard */}
            <Route path="/" element={<CRM />} />

            {/* Customers */}
            <Route path="/customers" element={<Customers />} />
            <Route path="/customers/view" element={<CustomersView />} />
            <Route path="/customers/create" element={<CustomersCreate />} />

            {/* Products */}
            <Route path="/totalproducts" element={<TotalProducts />} />
            <Route path="/products/view" element={<ProductsView />} />
            <Route path="/products/create" element={<ProductsCreate />} />

            {/* Payment */}
            <Route path="/payment" element={<Payment />} />
            <Route path="/invoice/view" element={<InvoiceView />} />
            <Route path="/invoice/create" element={<InvoiceCreate />} />

            {/* Installation */}
            <Route path="/installation" element={<Installation />} />
            <Route path="/installation/view" element={<InstallationView />} />
            <Route path="/installation/create" element={<InstallationCreate />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
