import './index.css'
import Sidebar from './components/SideBar'
import Footer from './components/Footer'

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
import Header from './components/Header'

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        
        {/* Sidebar */}
        <Sidebar />

        {/* Right Section */}
        <div className="flex flex-col flex-1">

          <Header />
          {/* Main Content */}
          <main className="flex-1 p-6">
            <Routes>
              <Route path="/" element={<CRM />} />

              <Route path="/customers" element={<Customers />} />
              <Route path="/customers/view" element={<CustomersView />} />
              <Route path="/customers/create" element={<CustomersCreate />} />

              <Route path="/totalproducts" element={<TotalProducts />} />
              <Route path="/products/view" element={<ProductsView />} />
              <Route path="/products/create" element={<ProductsCreate />} />

              <Route path="/payment" element={<Payment />} />
              <Route path="/invoice/view" element={<InvoiceView />} />
              <Route path="/invoice/create" element={<InvoiceCreate />} />

              <Route path="/installation" element={<Installation />} />
              <Route path="/installation/view" element={<InstallationView />} />
              <Route path="/installation/create" element={<InstallationCreate />} />
            </Routes>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
