import { Header } from "./components/header";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Footer } from "./components/footer";
import { Toaster } from "react-hot-toast";
import { Home } from "./pages/Home";
import { AuthProvider } from "./auth/AuthProvider";



export function App() {

  return (
    <>
      <Router>
        <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
        <AuthProvider>
          <Header />
          <div className="flex w-full bg-[#FAFAFA] min-h-[900px] justify-center items-center">
            <Routes>
              <Route path="/sistema-pata-frontend" element={<Home />} />
              <Route path="*" element={<Navigate to="/sistema-pata-frontend" replace />} />
            </Routes>
          </div>
          <Footer />
        </AuthProvider>
      </Router>
    </>
  )
}


