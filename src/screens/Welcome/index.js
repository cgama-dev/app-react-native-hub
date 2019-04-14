import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, AsyncStorage, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types'
import styles from './styles'
import api from './../../services/api'
class Welcome extends Component {

    state = {
        username: '',
        isLoading: false,
        isError: false
    }

    verifyUserExists = async (username) => {
        const user = await api.get(`/users/${username}`)

        return user
    }

    saveUser = async (username) => {
        await AsyncStorage.setItem('@Githun:username', username)
    }

    signIn = async () => {
        const { username } = this.state
        const { navigation } = this.props

        this.setState({ isLoading: true })
        try {
            await this.verifyUserExists(username)
            await this.saveUser(username)

            navigation.navigate('User')
        } catch (e) {
            this.setState({ isLoading: false, isError: true })
            console.tron.log('Usuário não existe')
        }
    }

    handleChange = (text) => {
        this.setState({
            username: text
        })

    }
    render() {
        const { username, isLoading, isError } = this.state

        return (
            <View style={styles.container}>
                <Text style={styles.title}> Bem Vindo</Text>
                <Text style={styles.text}>
                    Para continuar precisamos que você informe seu usuário do github
                </Text>

                {isError && <Text style={styles.error}>Usuário inexistente</Text>}

                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder="Digite seu usuário"
                        value={username}
                        onChangeText={text => this.handleChange(text)}
                    />

                    <TouchableOpacity style={styles.button} onPress={() => this.signIn()}>
                        {isLoading ?
                            (<ActivityIndicator size="small" color="#FFF" />)
                            : (<Text style={styles.buttonText}>Prosseguir</Text>)}
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default Welcome;

