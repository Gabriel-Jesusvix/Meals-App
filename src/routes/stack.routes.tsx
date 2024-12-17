import {  NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Categories } from '../screens/Categories'


const { Navigator, Screen } = createStackNavigator()

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Screen 
          name='MealCategories'
          component={Categories}
        />
      </Navigator>
    </NavigationContainer>
  )
}