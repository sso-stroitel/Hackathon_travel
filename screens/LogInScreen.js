import {Field, Formik} from "formik";
import React, {Component} from "react";
import {StyleSheet, View, TextInput, Image} from "react-native";
import {Button, Input} from "react-native-elements";
import * as Yup from "yup";
import AuthPageWrapper from "./AuthPageWrapper";

class LogInScreen extends Component {
    navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    onSubmit = (values, actions) => {
        const {email, password} = values;
        this.props.navigation.navigate("App");
    };

    render() {
        return (
            <AuthPageWrapper>

                <Image source={require('../assets/images/login.jpg')} style={styles.image}/>
                <View>
                    <TextInput
                        placeholder='Email'
                        style={styles.inputFields}
                        editable
                    />

                    <TextInput
                        placeholder='Пароль'
                        style={styles.inputFields}
                        editable
                    />

                    <Button
                        type='outline'
                        title="Войти"
                        onPress={this.onSubmit}
                        style={{marginTop: 18}}
                    />
                </View>
            </AuthPageWrapper>
        );
    }
}

export default LogInScreen;

const styles = StyleSheet.create({
    formContainer: {
        flex: 4,
        alignContent: "center"
    },
    inputContainer: {
        marginBottom: 15
    },
    image: {
        marginBottom: 40,
        marginLeft: 15
    },
    inputFields: {
        height: 40,
        backgroundColor: '#F8F8FC',
        color: '#C4C4C4',
        paddingLeft: 10,
        borderRadius: 5,
        fontSize: 16,
        marginBottom: 10
    }
});
const LoginValidationSchema = Yup.object().shape({
    email: Yup.string()
        .email()
        .required("Required"),
    password: Yup.string().required("Required")
});
