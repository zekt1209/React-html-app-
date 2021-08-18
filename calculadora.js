import React, {Component} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

export default class calculadora extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Declaracion de variables
    };
  }

  render() {
    // Es donde va la programacion, accion de botos y funciones
    return (
      <View>
        <Text style={styles.titulo}> Calculadora </Text>
        <View style={styles.btn7}>
          <Button title="7" />
        </View>
        <View style={styles.btn8}>
          <Button title="8" />
        </View>
        <View style={styles.btn9}>
          <Button title="9" />
        </View>
        <View style={styles.btndiv}>
          <Button title="/" />
        </View>

        <View style={styles.btn4}>
          <Button title="4" />
        </View>

        <View style={styles.btn5}>
          <Button title="5" />
        </View>

        <View style={styles.btn6}>
          <Button title="6" />
        </View>

        <View style={styles.btnmulti}>
          <Button title="*" />
        </View>

        <View style={styles.btn1}>
          <Button title="1" />
        </View>

        <View style={styles.btn2}>
          <Button title="2" />
        </View>

        <View style={styles.btn3}>
          <Button title="3" />
        </View>

        <View style={styles.btnresta}>
          <Button title="-" />
        </View>

        <View style={styles.btn0}>
          <Button title="0" />
        </View>

        <View style={styles.btnsuma}>
          <Button title="+" />
        </View>

        <View style={styles.btnigual}>
          <Button title="=" />
        </View>

        <View style={styles.btndel}>
          <Button title="del" />
        </View>

        <View style={styles.btnc}>
          <Button title="C" />
        </View>

        <View style={styles.btnpunto}>
          <Button title="." />
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
    marginLeft: 90,
    marginTop: 50,
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
