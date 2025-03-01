import { useState } from "react";
import { formatarNumeroTelefone } from "../../utils/formatarNumeroTelefone";
import { IUsuarioDados } from "../../interfaces/IUsuarioDados";
import { truncarNome } from "../../utils/truncarNome";

interface ICampoTabelaUser {
  id: number,
  nome: string;
  email: string;
  tipo: string;
  telefone: string;
  onEdit: (user: IUsuarioDados) => void;
  onDelete: (id: number) => void;
  onhistorical: (id: number) => void;
  onSelectedId: (id: number) => void;
}
export function CampoTabelaUser({ id, nome, email, tipo, telefone, onDelete, onEdit, onSelectedId, onhistorical }: ICampoTabelaUser) {
  const [selectedOption, setSelectedOption] = useState("");
  const resetSelect = () => {
    setSelectedOption("");
  };

  const handleEdit = () => {
    onEdit({
      id,
      nome,
      email,
      tipo,
      telefone,
    });
    resetSelect()
  }

  const handleDelete = () => {
    onDelete(id);
    resetSelect()
  }

  const handleHistorical = () => {
    onhistorical(id);
    resetSelect()
  }

  const handleChangeId = () => {
    onSelectedId(id);
    resetSelect()
  }

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    switch (selectedValue) {
      case "detalhes":
        handleChangeId();
        break;
      case "historico":
        handleHistorical();
        break;
      case "editar":
        handleEdit();
        break;
      case "deletar":
        handleDelete();
        break;
      default:
        break;
    }
  }

  return (
    <tr className="relative z-10 border border-primary rounded-lg bg-white">
      <td className="px-4 py-2 hidden md:table-cell">
        {truncarNome(nome)}
      </td>
      <td className="px-4 py-2">
        {email}
      </td>
      <td className="px-4 py-2 hidden md:table-cell">
        {tipo}
      </td>
      <td className="px-4 py-2 hidden md:table-cell">
        +55 {formatarNumeroTelefone(telefone)}
      </td>
      <td className="px-4 py-2 text-sm">
        <select
          className="p-2 border rounded bg-white"
          onChange={handleSelectChange}
          value={selectedOption}
        >
          <option disabled value="">Exibir</option>
          <option value="detalhes">Detalhes</option>
          <option value="historico">Histórico</option>
          <option value="editar">Editar</option>
          <option value="deletar">Deletar</option>
        </select>
      </td>
    </tr>
  )
}
