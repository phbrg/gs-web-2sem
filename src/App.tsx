import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Toaster } from "sonner"
import Home from "./pages/Home/Home"

function App() {
  return (
    <>
      <Toaster richColors />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
