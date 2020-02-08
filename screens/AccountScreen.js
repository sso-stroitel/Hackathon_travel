import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Text from "react-native-web/dist/exports/Text";
import {MonoText} from "../components/StyledText";

export default function AccountScreen() {
    return (
        <ScrollView style={styles.container}>

        </ScrollView>
    );
}

AccountScreen.navigationOptions = {
    title: 'Account',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});
