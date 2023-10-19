import React, { useContext, useState} from "react";
import { Platform } from "react-native";

import { Background, Container, AreaInput, Input, SubmitButton, SubmitText, Logo } from '../SingIn/styles';

import { AuthContext } from "../../contexts/auth";

export default function SignUp(){

    const { signUp } = useContext (AuthContext)
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function handleSignUp(){
        signUp(nome, email, senha);
    }

    return(
        <Background>
            <Container
             behavior={Platform.OS === 'ios' ? 'padding' : ''}
             enabled
            >

                <Logo
                    source={require('../../assets/Logo.png')}
                />

                <AreaInput>
                    <Input
                        placeholder="Nome"
                        value={nome}
                        onChangeText={(text) => setNome( text) }
                    />
                </AreaInput>
                <AreaInput>
                    <Input
                        placeholder="E-mail"
                        value={email}
                        onChangeText={(text) => setEmail( text) }
                    />
                </AreaInput>
                <AreaInput>
                    <Input
                        placeholder="Senha"
                        value={senha}
                        onChangeText={(text) => setSenha( text) }
                        secureTextEntry={true}
                    />
                </AreaInput>

                <SubmitButton onPress={handleSignUp}>
                    <SubmitText>CADASTRAR</SubmitText>
                </SubmitButton>

            </Container>
        </Background>
    )
}