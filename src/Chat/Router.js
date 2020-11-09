import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function Router() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} initialRouteName={Home}/>
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
export default Router;