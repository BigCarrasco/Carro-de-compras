import  { Component } from 'react'

const styles = {
    button: {
        backgroundColor: 'black',
        color: 'white',
        padding: '15px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
    }
}

class Button extends Component {
render() {
    console.log('Hola')
    return(
        <button style={styles.button}{...this.props}></button>
    )}
}

export default Button;
