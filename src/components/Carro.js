import { Component } from 'react'
import BubbleAlert from './BubbleAlert'

const styles = {
    button:{
        backgroundColor: '#359A2C',
        color: '#fff',
        border: 'none',
        padding: '15px',
        cursor: 'pointer'
    },
    bubble: {
        position: 'relative',
        left: 12,
        top: 20
    }

}
class Carro extends Component {
    render() {
        return (
            <div>
                <span style={styles.bubble}>
                    <BubbleAlert/>
                </span>
                <button style = {styles.button}>Carro</button>
            </div>
        )
    }

}

export default Carro
