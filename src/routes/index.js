// Configuracao de Rostas 
import React from "react";
import { View, ActivityIndicator } from "react-native";

import AuthRoutes from "./auth.routes";

function Routes(){
    //Variavel fake 
    const loading = false;
    const signed = false;


    return(
        //Se estiver logado manda pra View
        signed ? <View></View> : <AuthRoutes/>
    )
}

export default Routes;