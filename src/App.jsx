import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";
function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <div className="flex mt-3">
        <Formulario />
        <ListadoPacientes />
      </div>
    </div>
  )
}

export default App
