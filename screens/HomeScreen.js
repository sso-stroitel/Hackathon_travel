import React, { Component } from "react";
import { Container, Content, Icon, Accordion, Text, View} from "native-base";
import { Header } from 'react-native-elements';
import { YellowBox, StyleSheet } from 'react-native'

YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
])
const dataArray = [
  { title: "Первый день", content: "Lorem ipsum dolor sit amet" },
  { title: "Второй день", content: "Lorem ipsum dolor sit amet" },
  { title: "Третий день", content: "Lorem ipsum dolor sit amet" }
];

export default class HomeScreen extends Component {
  _renderHeader(item, expanded) {
    return (
        <View style={{
          flexDirection: "row",
          padding: 10,
          justifyContent: "space-between",
          alignItems: "center" ,
          backgroundColor: "#A9DAD6" }}>
          <Text style={{ fontWeight: "600" }}>
            {" "}{item.title}
          </Text>
          {expanded
              ? <Icon style={{ fontSize: 18 }} name="remove-circle" />
              : <Icon style={{ fontSize: 18 }} name="add-circle" />}
        </View>
    );
  }
  _renderContent(item) {
    return (
        <Text
            style={{
              backgroundColor: "#e3f1f1",
              padding: 10,
              fontStyle: "italic",
            }}
        >
          {item.content}
        </Text>
    );
  }
  render() {
    return (
        <Container>
            <Header
                centerComponent={{ text: 'Главная', style: { color: '#fff', fontSize: 22, fontWeight: 'bold' } }}
            />
          <Content style={{ backgroundColor: "white", paddingTop: 10 }}>
            <Accordion
                dataArray={dataArray}
                animation={true}
                expanded={true}
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
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
