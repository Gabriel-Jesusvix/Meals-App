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
          headerShown: true,
          headerStyle: {
            backgroundColor: '#351401',
          },
          headerTintColor: 'white',
        }}
      >
        <Screen 
          name='MealCategories'
          component={Categories}
          options={{
            title: 'Categorias',
          }}
        />
        <Screen 
          name='MealsOverview'
          component={MealsOverview}
          options={{
            title: 'Overview',
          }}
        />
      </Navigator>
    </NavigationContainer>
  )
}