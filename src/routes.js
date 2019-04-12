import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Welcome from './screens/Welcome'
import Respositories from './screens/Repositories'

const Routes = (userLogged = false) => createAppContainer(
    createSwitchNavigator(
        {
            Welcome,
            Respositories
        }, {
            initialRouteName: userLogged ? 'Respositories' : 'Welcome'
        }
    ))

export default Routes
