import React, { PureComponent } from "react";
import { StyleSheet, KeyboardAvoidingView, View } from "react-native";
import Container from "../components/basic/Container";

const AuthPageWrapper = props => (
  <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
    <Container padded="more" style={styles.formContainer}>
      {props.children}
    </Container>
   </KeyboardAvoidingView>
);

export default AuthPageWrapper;

const styles = StyleSheet.create({
  formContainer: {
    flex: 3,
      flexDirection: 'column',
    justifyContent: "center"
  }
});
