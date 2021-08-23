import React, {Component} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

export default class calculadora extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Declaracion de variables
      resultado:'',
      temp:'',
      bandera:'0',
    };
  }

  render() {
    // Es donde va la programacion, accion de botos y funciones
    const clickbtn7 = () => {
      this.setState({resultado:this.state.resultado+7})
    };
    const clickbtn8 = () => {
      this.setState({resultado:this.state.resultado+8})
    };

    const clickbtn9 = () => {
      this.setState({resultado:this.state.resultado+9})
    };

    const clickbtndiv = () => {
      this.setState({temp:this.state.resultado})
      this.setState({resultado:''})
      this.setState({bandera:'4'})
    };

    const clickbtn4 = () => {
      this.setState({resultado:this.state.resultado+4})
    };

    const clickbtn5 = () => {
      this.setState({resultado:this.state.resultado+5})
    };

    const clickbtn6 = () => {
      this.setState({resultado:this.state.resultado+6})
    };

    const clickbtnmuti = () => {
      this.setState({temp:this.state.resultado})
      this.setState({resultado:''})
      this.setState({bandera:'3'})
    };

    const clickbtn1 = () => {
      this.setState({resultado:this.state.resultado+1})
    };

    const clickbtn2 = () => {
      this.setState({resultado:this.state.resultado+2})
    };

    const clickbtn3 = () => {
      this.setState({resultado:this.state.resultado+3})
    };

    const clickbtnresta = () => {
      this.setState({temp:this.state.resultado})
      this.setState({resultado:''})
      this.setState({bandera:'2'})
    };

    const clickbtn0 = () => {
      this.setState({resultado:this.state.resultado+0})
    };

    const clickbtndel = () => {
      let del = resultado.slice(-1); // Het the last character
      let ress = this.state.resultado - del;
      this.setState({resultado:res})
    };

    const clickbtnpunto = () => {
      let dot = '.'
      this.setState({resultado:this.state.resultado+dot})
    };


    const clickbtnsuma = () => {
      this.setState({temp: this.state.resultado});
      this.setState({resultado:''});
      this.setState({bandera:'1'});
    };

    const clickbtnc = () => {
      this.setState({resultado:''})
    };

    const clickbtnigual = () => {
      if(this.state.bandera == '1'){
        var res = parseInt(this.state.temp) + parseInt(this.state.resultado)
        this.setState({resultado: res})       
      }
      if(this.state.bandera == '2'){
        var res = parseInt(this.state.temp) - parseInt(this.state.resultado)
        this.setState({resultado: res})  
      }
      if(this.state.bandera == '3'){
        var res = parseInt(this.state.temp) * parseInt(this.state.resultado)
        this.setState({resultado: res})  
      }
      if(this.state.bandera == '4'){
        var res = parseInt(this.state.temp) / parseInt(this.state.resultado)
        this.setState({resultado: res})  
      }
    };



  

    return (
      <View>
        <Text style={styles.titulo}> Calculadora </Text>

      <View style={{borderWidth: 3, height:50, width:200, marginLeft:100, marginTop:10}}>
        <Text style={{fontSize:30, textAlign: 'center', fontWeight: 'bold', marginTop:0}}>{this.state.resultado}</Text>
      </View>

        <View style={styles.btn7}>
          <Button title="7" onPress={clickbtn7}/>
        </View>
        <View style={styles.btn8}>
          <Button title="8" onPress={clickbtn8}/>
        </View>
        <View style={styles.btn9}>
          <Button title="9" onPress={clickbtn9}/>
        </View>
        <View style={styles.btndiv}>
          <Button title="/" onPress={clickbtndiv}/>
        </View>

        <View style={styles.btn4}>
          <Button title="4" onPress={clickbtn4}/>
        </View>

        <View style={styles.btn5}>
          <Button title="5" onPress={clickbtn5}/>
        </View>

        <View style={styles.btn6}>
          <Button title="6" onPress={clickbtn6}/>
        </View>

        <View style={styles.btnmulti}>
          <Button title="*" onPress={clickbtnmuti}/>
        </View>

        <View style={styles.btn1}>
          <Button title="1" onPress={clickbtn1}/>
        </View>

        <View style={styles.btn2}>
          <Button title="2" onPress={clickbtn2}/>
        </View>

        <View style={styles.btn3}>
          <Button title="3" onPress={clickbtn3}/>
        </View>

        <View style={styles.btnresta}>
          <Button title="-" onPress={clickbtnresta}/>
        </View>

        <View style={styles.btn0}>
          <Button title="0" onPress={clickbtn0}/>
        </View>

        <View style={styles.btnsuma}>
          <Button title="+" onPress={clickbtnsuma}/>
        </View>

        <View style={styles.btnigual}>
          <Button title="=" onPress={clickbtnigual}/>
        </View>

        <View style={styles.btndel}>
          <Button title="del" onPress={clickbtndel}/>
        </View>

        <View style={styles.btnc}>
          <Button title="C" onPress={clickbtnc}/>
        </View>

        <View style={styles.btnpunto}>
          <Button title="." onPress={clickbtnpunto}/>
        </View>
      </View>
    );
  }
}

// Declaracion de los estilos de objetos visibles
const styles = StyleSheet.create({
  titulo: {
    fontSize: 30,
    color: 'red',
    marginLeft: 120,
    marginTop: 50,
    marginBottom:50,
    fontWeight: 'bold',
  },
  btn7: {
    height: 50,
    width: 60,
    marginLeft: 30,
    marginTop: 50,
  },
  btn8: {
    height: 50,
    width: 60,
    marginLeft: 100,
    marginTop: -50,
  },
  btn9: {
    height: 50,
    width: 60,
    marginLeft: 170,
    marginTop: -50,
  },
  btndiv: {
    height: 50,
    width: 60,
    marginLeft: 240,
    marginTop: -50,
  },
  btn4: {
    height: 50,
    width: 60,
    marginLeft: 30,
    marginTop: 0,
  },
  btn5: {
    height: 50,
    width: 60,
    marginLeft: 100,
    marginTop: -50,
  },
  btn6: {
    height: 50,
    width: 60,
    marginLeft: 170,
    marginTop: -50,
  },
  btnmulti: {
    height: 50,
    width: 60,
    marginLeft: 240,
    marginTop: -50,
  },
  btn1: {
    height: 50,
    width: 60,
    marginLeft: 30,
    marginTop: 0,
  },
  btn2: {
    height: 50,
    width: 60,
    marginLeft: 100,
    marginTop: -50,
  },
  btn3: {
    height: 50,
    width: 60,
    marginLeft: 170,
    marginTop: -50,
  },
  btnresta: {
    height: 50,
    width: 60,
    marginLeft: 240,
    marginTop: -50,
  },
  btn0: {
    height: 50,
    width: 130,
    marginLeft: 30,
    marginTop: 0,
  },
  btnsuma: {
    height: 50,
    width: 60,
    marginLeft: 240,
    marginTop: -50,
  },
  btnigual: {
    height: 50,
    width: 60,
    marginLeft: 310,
    marginTop: -50,
  },
  btndel: {
    height: 50,
    width: 60,
    marginLeft: 310,
    marginTop: -200,
  },
  btnc: {
    height: 50,
    width: 60,
    marginLeft: 310,
    marginTop: 0,
  },

  btnpunto: {
    height: 50,
    width: 60,
    marginLeft: 170,
    marginTop: 50,
  },
});
