import { Component } from 'react'
import Productos from './components/Productos'
import Layout from './components/Layout'
import Title from './components/Title'
import Navbar from './components/Navbar'

class App extends Component {
    state = {
        productos: [
            {name: 'Tomate', price: 1500, img: '/productos/tomate.jpg'},
            {name: 'Arbejas', price: 2500, img: '/productos/arbejas.jpg'},
            {name: 'Lechuga', price: 500, img: '/productos/lechuga.jpg'},
        ],
        carro: [
          //declaración vacia
        ],
    }

    agregarAlCarro = (producto) => {
        console.log(producto)
        return this.setState({
            carro: this.state.carro.concat({
                ...producto,
                cantindad: 1
            })
        })
    }

    render () {
        return (
            <div>
                <Navbar/>
                    <Layout>
                        <Title/>
                        <Productos
                            agregarAlCarro = {this.agregarAlCarro}
                                productos = {this.state.productos}/>
                    </Layout>
            </div>
        )
    }
}

export default App;
