import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";
function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <Formulario />
      <ListadoPacientes />
    </div>
  )
}

export default App
