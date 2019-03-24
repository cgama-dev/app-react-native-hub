import './config/ReactotronConfig'
import './config/DevToolsConfig'
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Platform } from 'react-native';
import Todo from './components/Todo'
import Routes from './routes'

export default class App extends Component {

    state = {
        todos: [
            { id: 1, text: 'Beber água' }
        ]
    }

    handleAddTodo = () => {

        const todos = [...this.state.todos, { id: Math.random(), text: "Novo" }]

        console.tron.log(todos)
        this.setState({ todos })

    }
    render() {
        return (
            <Routes />
        );
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
