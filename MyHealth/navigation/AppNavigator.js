import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from '../components/HomePage';
import Emergency from '../components/Emergency';
import PersonalData from '../components/InfoPage';
import HeartRate from '../components/HeartRate';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Emergency" component={Emergency} />
      <Stack.Screen name="Info" component={PersonalData} />
      <Stack.Screen name="HeartRate" component={HeartRate} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
