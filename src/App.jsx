import { useState } from "react";
import Cita from "./components/Cita";
import Formulario from "./components/Formulario";


function App() {

  const [citas, setCitas] = useState([]);

  const crearCita = cita => {
    setCitas([...citas, cita]);
  }

  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    setCitas(nuevasCitas);
  }

  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas'

  return (
    <>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div 
            className="one-half column"
          >
            <Formulario
              crearCita={crearCita}
            />
          </div>
          <div 
            className="one-half column"
          >
            <h2>{titulo}</h2>
            {
              citas.map(cita => (
                <Cita
                  key={cita.id}
                  cita={cita}
                  eliminarCita={eliminarCita}
                />
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
