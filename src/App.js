import React from 'react';
import './App.css';
import Form from './Form'
import Alumno from './Alumno'

const initValues = {
  name: "",
  carnet: "",
  tarde: false
};

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      ...initValues,
      lista:[]
    }

  }

  changeHandler = event=> {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [target.id]: value    
    });
  }

  submitHandler = event => {
    event.preventDefault();
    const { name, carnet, tarde } = this.state;
    const listaAux = [...this.state.lista];
    listaAux.push({ 
      name, carnet, tarde
    });
    this.setState({ ...initValues, lista:listaAux });
    console.log(this.state.lista);
  }

  deleteAlumno = carnet =>{
    const listaAux=this.state.lista.filter(element=>{
      return(element.carnet!==carnet)
    });

    this.setState({lista:listaAux});
    
  }
  

  render(){
    const {name, carnet, tarde} = this.state
    return(
      <div>
        <h1>Listado de alumnos</h1>
        <Form name={name} carnet={carnet} tarde={tarde} changeHandler={this.changeHandler} submitHandler={this.submitHandler}/>
        {this.state.lista.map(element=> <Alumno key={element.carnet} name={element.name} carnet={element.carnet} tarde={element.tarde} deleteAlumno={()=>this.deleteAlumno(element.carnet)}/> )}
      </div>
    )
  }
}

export default App;
