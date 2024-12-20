import { createDrawerNavigator } from '@react-navigation/drawer';
import { Favorite } from '../screens/Favorite'
import { Categories } from '../screens/Categories'
import { Ionicons } from '@expo/vector-icons';

const { Navigator, Screen } = createDrawerNavigator()

export function Drawer() {
  return (
    <Navigator
    screenOptions={{
      headerStyle: { backgroundColor: '#351401' },
      headerTintColor: 'white',
      sceneContainerStyle: { backgroundColor: '#3f2f25' },
      drawerContentStyle: { backgroundColor: '#351401' },
      drawerInactiveTintColor: 'white',
      drawerActiveTintColor: '#351401',
      drawerActiveBackgroundColor: '#e4baa1',
    }}
    >
      <Screen
        name='MealCategories'
        component={Categories}
        options={{
          title: 'Categorias',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name='Favorite'
        component={Favorite}
        options={{
          title: 'Favoritos',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Navigator>
  )
}