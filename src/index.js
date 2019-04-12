import './config/ReactotronConfig'
import './config/DevToolsConfig'
import React, { Component } from 'react';
import { StyleSheet, AsyncStorage } from 'react-native';
import createNavigation from './routes'

export default class App extends Component {
    state = {
        userChecked: false,
        userLogged: false
    }
    async componentDidMount() {
        const username = await AsyncStorage.getItem('@Githun:username')

        this.setState({
            userChecked: true,
            userLogged: !!username
        })
    }
    render() {
        const { userChecked, userLogged } = this.state
        if (!userChecked) return null

        const Routes = createNavigation(userLogged)

        return <Routes />

    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});
