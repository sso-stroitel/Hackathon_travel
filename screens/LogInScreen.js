import { Field, Formik } from "formik";
import React, { Component } from "react";
import { Alert, Keyboard, StyleSheet, View } from "react-native";
import { Button, Input, Text } from "react-native-elements";
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
    const { email, password } = values;
    console.log("trying to login with creds: ", email, password);
    this.props.navigation.navigate("App");
  };

  render() {
    return (
      <AuthPageWrapper>

        <Formik
          validationSchema={LoginValidationSchema}
          initialValues={{ email: "", password: "" }}
          onSubmit={this.onSubmit}
        >
          {({
            handleChange,
            handleSubmit,
            handleBlur,
            values,
            isValid,
            touched
          }) => (
            <View>
              <Field name="email">
                {({ field }) => (
                  <Input
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Email"
                    textContentType="emailAddress"
                    leftIcon={{ name: "email" }}
                    inputContainerStyle={styles.inputContainer}
                    value={values.email}
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                  />
                )}
              </Field>

              <Field name="password">
                {({ field }) => (
                  <Input
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    textContentType="password"
                    placeholder="Пароль"
                    leftIcon={{ name: "vpn-key" }}
                    inputContainerStyle={styles.inputContainer}
                    value={values.password}
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                  />
                )}
              </Field>

              <Button
                disabled={touched.email && touched.password && !isValid}
                title="Войти"
                onPress={(e) => {
                  isValid ? handleSubmit(e) : null;
                }}
                style={{ marginTop: 18 }}
              />
            </View>
          )}
        </Formik>
        {/*<Button*/}
        {/*  type="clear"*/}
        {/*  title="Че кого в натуре"*/}
        {/*  style={{ marginTop: 18 }}*/}
        {/*  titleStyle={{ fontSize: 16 }}*/}
        {/*/>*/}
        {/* <Button
              title="logout"
              type="clear"
              onPress={() =>
                firebase
                  .auth()
                  .signOut()
                  .then(() => console.log("logoutsuccess"))
              }
              style={{ alignSelf: "center", marginTop: 20 }}
            /> */}
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
  }
});
const LoginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required("Required"),
  password: Yup.string().required("Required")
});
