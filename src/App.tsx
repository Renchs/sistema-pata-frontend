import { Header } from "./components/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UsuariosLista } from "./pages/UsuariosLista";
import { CadastrarPet } from "./pages/CadastrarPet";
import { BuscarPets } from "./pages/BuscarPets";
import { CadastrarUsuario } from "./pages/CadastrarUsuario";
import { Footer } from "./components/footer";
import { Toaster } from "react-hot-toast";
import { Home } from "./pages/Home";
import { AuthProvider } from "./auth/AuthProvider";
import { ProtectedRoute } from "./auth/ProtectedRoute";
import { HistoricoAdocaoPet } from "./pages/HistoricoAdocaoPet";
import { EditarPerfil } from "./pages/EditarPerfilUsuario";


export function App() {

  return (
    <>
      <Router>
        <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
        <AuthProvider>
          <Header />
          <div className="flex w-full bg-[#FAFAFA] min-h-[800px] justify-center items-center">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="" element={<ProtectedRoute />}>
                <Route path="/usuarios" element={<UsuariosLista />} />
                <Route path="/cadastrar-pet" element={<CadastrarPet />} />
                <Route path="/cadastrar-usuario" element={<CadastrarUsuario />} />
                <Route path="/pets" element={<BuscarPets />} />
                <Route path="/historico-usuario/:id" element={<HistoricoAdocaoPet /> } />
                <Route path="/editar-perfil/" element={<EditarPerfil /> } />
              </Route>
            </Routes>
          </div>
          <Footer />
        </AuthProvider>
      </Router>
    </>
  )
}


