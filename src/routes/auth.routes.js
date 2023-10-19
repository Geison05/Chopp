import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SingIn from '../pages/SingIn';
import SingUp from '../pages/SingUp';

const AuthStack = createNativeStackNavigator();

function AuthRoutes(){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen
            name="SingIn"
            component={SingIn}
            options={{
                headerShown: false,
            }}
            />

        <AuthStack.Screen
            name="SingUp"
            component={SingUp}
            options={{
                headerStyle:{
                    backgroundColor: '#FFBB12',
                    borderBottomWidth: 1,
                    borderBottomColor:'#410404'
                },
                headerTintColor: '#410404',
                headerTitle: 'Voltar',
                headerBackTitleStyle: false,
            }}
            />
        </AuthStack.Navigator>
    )
}

export default AuthRoutes;