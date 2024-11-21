// import { ModalRegistro } from "./components/modalRegistro";
import { Header } from "./components/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UsuariosLista } from "./pages/UsuariosLista";
import { CadastrarPet } from "./pages/CadastrarPet";
import { BuscarPets } from "./pages/BuscarPets";
import { CadastrarUsuario } from "./pages/CadastrarUsuario";
// import { UserList } from "./pages/userList";

export function App() {

  return (
    <>
        <Router>
        <Header />
        <div className="flex w-full bg-[#FAFAFA] min-h-[800px] justify-center items-center">
          <Routes>
            <Route path="/usuarios" element={<UsuariosLista />} />
            <Route path="/cadastrar-pet" element={<CadastrarPet />} />
            <Route path="/cadastrar-usuario" element={<CadastrarUsuario />} />
            <Route path="/pets" element={<BuscarPets />} />
          </Routes>
        </div>
        </Router>
    </>
  )
}


