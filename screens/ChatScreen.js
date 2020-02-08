import React from 'react';
import {ExpoConfigView} from '@expo/samples';
import {GiftedChat, Send} from "react-native-gifted-chat";
import {Image, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import Colors from "../constants/Colors";
import {Platform} from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';

class ChatScreen extends React.Component {
    state = {
        messages: [],
    }

    componentDidMount() {
        this.setState({
            messages: [
                {
                    _id: 1,
                    text: 'Йоу йоу мазафака',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                },
            ],
        })
    }

    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))
    }

    renderSend(props) {
        return (
            <Send {...props}>
                <View style={{marginRight: 10, marginBottom: 5}}>
                    <Ionicons name={Platform.OS === 'ios' ? 'ios-send' : 'md-send'} size={26}
                              style={{marginBottom: 3}}
                              color={Colors.tabIconSelected}/>
                </View>
            </Send>
        );
    }

    render() {
        return <View style={{flex: 1}}>
          <GiftedChat
            messages={this.state.messages}
            onSend={messages => this.onSend(messages)}
            user={{
                _id: 1,
            }}
            renderSend={text => this.renderSend(text)}
            placeholder='Написать...'
        />
            {Platform.OS === 'android' ? <KeyboardSpacer/> : null}
        </View>;
    }
}

ChatScreen.navigationOptions = {
    header: null,
};

export default ChatScreen;
