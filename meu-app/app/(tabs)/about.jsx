import {View, Text, StyleSheet} from 'react-native'

export default function About() {
    return (
        <View>
            <Text style={Estilo.text}>Olá Mundo</Text>
        </View>
    );
}

const Estilo = StyleSheet.create(
    {
        text: {
            fontSize: 20,
            color: 'blue',
        }
    }
);