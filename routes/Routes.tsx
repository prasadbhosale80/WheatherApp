import React from 'react'
import Home from '../screens/Home';
import { createStackNavigator } from '@react-navigation/stack';
import WheatherInfo from '../screens/WheatherInfo';
import MoreInfo from '../screens/MoreInfo';
import { NavigationContainer } from '@react-navigation/native';


const Routes = () => {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{ headerTitleAlign: 'center',  cardStyle: { backgroundColor: '#98bedc' },
                  headerStyle: { backgroundColor: '#729aba' } }} >
                <Stack.Screen name="Home" component={Home} options={{ title: "Wheather App",}} />
                <Stack.Screen name="WheatherInfo" component={WheatherInfo} />
                <Stack.Screen name="MoreInfo" component={MoreInfo} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes