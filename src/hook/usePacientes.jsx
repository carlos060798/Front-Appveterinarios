//  este state   pasa por llamado todos los datos del context de pacientes
import { useContext } from "react";
import PacientesContext from "../context/PacienteProvaider";

const usePacientes = () => {
  return useContext(PacientesContext); // retorna el context de pacientes
};

export default usePacientes;
