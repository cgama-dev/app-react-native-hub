import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Welcome from './screens/Welcome'
import Respositories from './screens/Repositories'

const Routes = createAppContainer(createSwitchNavigator({
    Welcome,
    Respositories
}))

export default Routes
