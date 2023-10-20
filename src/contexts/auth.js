import React, { createContext, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import api from "../services/api";


export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [user, setUser] = useState({
        nome: 'Jason teste'
    });

    const navigation = useNavigation();

    async function signUp(email, senha, nome) {
        try {
             const response = await api.post('/users', {
                name: nome,
                senha: senha,
                email: email,
            })

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
