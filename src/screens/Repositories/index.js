import React, { Component } from 'react'
import { Text, View, AsyncStorage, ActivityIndicator } from 'react-native';
import Header from './../../components/Header'
import Icon from 'react-native-vector-icons/FontAwesome'
import api from './../../services/api'
import styles from './styles';

class Repositories extends Component {

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => <Icon name="list-alt" size={20} color={tintColor} />
    }

    state = {
        username: '',
        loading: true,
        data: []
    }

    async componentDidMount() {
        const username = await AsyncStorage.getItem('@Githun:username')

        const { data } = await api.get(`/users/${username}/repos`)

        this.setState({ data, loading: false })
    }

    handleList = () => {
        return this.state.data.map((repo) => <Text key={repo.id}>{repo.name}</Text>)
    }

    render() {
        const { loading } = this.state
        return (
            <View>
                <Header title='Repositórios' />
                {
                    loading ? <ActivityIndicator style={styles.loading} /> : this.handleList()
                }
            </View>
        )
    }
}

export default Repositories
