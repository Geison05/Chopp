import React, { createContext, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import axios from "axios";


export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [user, setUser] = useState({
        nome: 'Jason teste'
    });

    const navigation = useNavigation();

    async function signUp(email, senha, nome) {
        try {
            // Faça uma solicitação POST para o servidor JSON Server usando axios
           /* const response = await axios.post('http://localhost:3000/users', {
                name: nome,
                senha: senha,
                email: email,
            })*/

            navigation.goBack();

        } catch (err) {
            console.error("ERRO AO CADASTRAR!", err);
        }
    }

    return (
        <AuthContext.Provider value={{ user, signUp }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
