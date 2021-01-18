import { Component } from 'react'
import './App.css';
import Card from './components/Card'
import Header from './components/Header'
import Footer from './components/Footer'

import { todos } from './todos.json'

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Tablero tareas',
      ntareas: 5,
      todos
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <header className="App-header">
          <Card todos={this.state.todos} />
        </header>
        <Footer />
      </div>
    );
  }
}

export default App;
