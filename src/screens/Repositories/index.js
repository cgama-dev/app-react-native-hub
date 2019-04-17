import React, { Component } from 'react'
import { Text, View, AsyncStorage, ActivityIndicator, FlatList } from 'react-native';
import Header from './../../components/Header'
import Icon from 'react-native-vector-icons/FontAwesome'
import api from './../../services/api'
import styles from './styles';
import RepositoryItem from './RepositoryItem'

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

    handleListItem = ({ item }) => <RepositoryItem repository={item} />

    handleList = () => {
        const { data } = this.state

        return (<FlatList
            data={data}
            keyExtractor={item => String(item.id)}
            renderItem={this.handleListItem}
        />)
        // return data.map((repo) => <Text key={repo.id}>{repo.name}</Text>)
    }

    render() {
        const { loading } = this.state
        return (
            <View style={styles.container}>
                <Header title='Repositórios' />
                {
                    loading ? <ActivityIndicator style={styles.loading} /> : this.handleList()
                }
            </View>
        )
    }
}

export default Repositories
