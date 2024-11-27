import { api } from "../../services/apiService";

interface IModalDeleteUser {
    idUser: number;
    onClose: () => void;
}

export function ModalDeleteUser({ onClose, idUser }: IModalDeleteUser) {
  
  const handleDeleteUser = async () => {
    await api.delete(`/usuario/${idUser}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
      },
    });
    onClose();
  };

  return (
    <div className="fixed z-20 inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-80 sm:w-[600px] text-center">
        <h3 className="text-lg font-semibold mb-4">Você tem certeza que deseja excluir o registro desse usuário?</h3>
        <div className="flex justify-center gap-4">
          <button className="w-[150px] h-10 rounded-lg bg-white border border-primary text-primary" onClick={onClose}>Cancelar</button>
          <button className="w-[150px] h-10 rounded-lg bg-red-500 text-white" onClick={handleDeleteUser}>Deletar</button>
        </div>
      </div>
    </div>
  )
}
