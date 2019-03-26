import React from 'react';

import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles'


const Welcome = () => (
    <View style={styles.container}>
        <Text style={styles.title}> Bem Vindo</Text>
        <Text style={styles.text}>
            Para continuar precisamos que você informe seu usuário do github
        </Text>

        <View style={styles.form}>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Digite seu usuário"
            />

            <TouchableOpacity style={styles.button} onPress={() => ''}>
                <Text style={styles.buttonText}>Prosseguir</Text>
            </TouchableOpacity>
        </View>
    </View>
)

export default Welcome;

