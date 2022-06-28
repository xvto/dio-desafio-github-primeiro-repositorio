import React, {useState} from 'react';
import {
Text,
SafeAreaView,
TouchableOpacity,
StyleSheet,
} from 'react-native'; 

const App = () =>{

    const [numero, setNumero] = useState(10)

    function handleNumero(){

        const novo_numero = Math.floor(Math.random() * 100)

        setNumero(numero + novo_numero)
    }

    return (
        <SafeAreaView style={style.container}>
            <Text style={style.numero}>{numero}</Text>
            <TouchableOpacity onPress={handleNumero} style={style.botao}>
                <Text style={style.textBotao}>Gerar Numero</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const  style = StyleSheet.create({
    container: {
        backgroundColor: '#008080',
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
    },
    numero:{
        fontSize: 38,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    botao:{
        backgroundColor: '#800080',
        width: '80%',
        paddingHorizontal: 5,
        paddingVertical: 10,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent:'center',
        marginTop: 10,
},
    textBotao:{
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',

}
});

export default App;