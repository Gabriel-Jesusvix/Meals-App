import { createStackNavigator } from '@react-navigation/stack'
import { Categories } from '../screens/Categories'
import { MealsOverview } from '../screens/MealsOverview'
import { MealsDetails } from '../screens/MealsDetails'
import { DrawerRoutes } from '.'


const { Navigator, Screen } = createStackNavigator()

export function Routes() {
  return (
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
          name="Drawer"
          component={DrawerRoutes}
          options={{
            headerShown: false,
          }}
        />
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
  )
}