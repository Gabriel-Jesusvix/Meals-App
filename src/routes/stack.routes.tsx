import {  NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Categories } from '../screens/Categories'
import { MealsOverview } from '../screens/MealsOverview'


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
        <Screen 
          name='MealsOverview'
          component={MealsOverview}
        />
      </Navigator>
    </NavigationContainer>
  )
}