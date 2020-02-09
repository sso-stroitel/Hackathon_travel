import React, {Component} from "react";
import {Container, Content, Icon, Accordion, Text, View} from "native-base";
import {Header} from 'react-native-elements';
import {YellowBox, StyleSheet, ScrollView} from 'react-native'
import Events from '../components/Events';

YellowBox.ignoreWarnings([
    'VirtualizedLists should never be nested', // TODO: Remove when fixed
])


const dataArray = [
    {title: "Первый день", date: new Date(2020, 2, 7)},
    {title: "Второй день", date: new Date(2020, 2, 8)},
    {title: "Третий день", date: new Date(2020, 2, 9)},
    {title: "Четвертый день", date: new Date(2020, 2, 10)},
    {title: "Пятый день", date: new Date(2020, 2, 11)}
];

export default class HomeScreen extends Component {
    _renderHeader(item, expanded) {
        const {date} = item;
        const isCompleted = new Date().getDate() > date.getDate();
        return (
            <View style={{
                flexDirection: "row",
                padding: 10,
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#b7daf8"
            }}>
                <Text style={{fontWeight: "600"}}>
                    {" "}{item.title}
                </Text>
                {isCompleted
                    ? <Icon style={{fontSize: 18}} name="checkmark-circle-outline"/>
                    : <Icon style={{fontSize: 18}} name="time"/>}
            </View>
        );
    }

    _renderContent() {
        return (
            <Events/>
        );
    }

    render() {
        const getIdxOfExpandedEl = dataArray.filter(el => el.date.getDate() === new Date().getDate())[0];
        const getIdx = dataArray.indexOf(getIdxOfExpandedEl);
        return (
            <Container>
                    <Header
                        centerComponent={{text: 'Главная', style: {color: '#fff', fontSize: 22, fontWeight: 'bold'}}}
                    />
                    <Content style={{backgroundColor: "white", paddingTop: 10, paddingBottom: 10}}>
                        <Accordion
                            dataArray={dataArray}
                            animation={true}
                            expanded={getIdx}
                            renderHeader={this._renderHeader}
                            renderContent={this._renderContent}
                        />
                    </Content>
            </Container>
        );
    }
}

HomeScreen.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
});
