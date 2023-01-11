import logo from './logo.svg';
import './App.css';
import ListaPersona from './components/PersonCardque ';

function App() {
  return (
    <div className="App">
      <ListaPersona firsName = "Doe," lastName = "Jane"/>
      <ListaPersona age ={"Age: " + 45}/>
      <ListaPersona hairColor = {"Hair Color: " + "Black"}/>

      <ListaPersona firsName = "Smith," lastName = "John"/>
      <ListaPersona age = {"Age: " + 88}/>
      <ListaPersona hairColor = {"Hair Color: " + "Brown"}/>

      <ListaPersona firsName = "Fillmore," lastName = "Millard"/>
      <ListaPersona age = {"Age: " + 50}/>
      <ListaPersona hairColor = {"Hair Color: " + "Brown"}/>

      <ListaPersona firsName = "Smith," lastName = "Maria"/>
      <ListaPersona age = {"Age: " + 62}/>
      <ListaPersona hairColor = {"Hair Color: " + "Brown"}/>
    </div>
  );
}

export default App;
