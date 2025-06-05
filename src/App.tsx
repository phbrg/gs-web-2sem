import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Toaster } from "sonner"

import Home from "./pages/Home/Home"
import { About } from "./pages/About/About"
import { Login } from "./pages/Login/Login"

import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer/Footer"
import { Register } from "./pages/Register/Register"
import { NotFound } from "./pages/NotFound/NotFound"
import { Report } from "./pages/Report/Report"

function App() {
  return (
    <>
      <Toaster richColors />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/report" element={<Report />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
