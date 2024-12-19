import {  NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Categories } from '../screens/Categories'
import { MealsOverview } from '../screens/MealsOverview'
import { MealsDetails } from '../screens/MealsDetails'


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
          
        />
        <Screen 
          name='MealsDetails'
          component={MealsDetails}
        />
      </Navigator>
    </NavigationContainer>
  )
}