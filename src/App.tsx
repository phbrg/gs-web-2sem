import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Toaster } from "sonner"

function App() {
  return (
    <>
      <Toaster richColors />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
