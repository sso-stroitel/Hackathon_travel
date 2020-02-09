import React from 'react';
import {View} from 'react-native';
import {Card, Text} from "react-native-elements";

const EventCard = (props) => {
    return <Card titleStyle={{margin: 0, padding: 0}} image={{uri: props.photo}} imageStyle={{height: 150}}>
            <View>
                <Text style={{fontSize: 22, fontWeight: 'normal'}}>{props.name}</Text>
                <Text style={{fontSize: 14}}>{props.time}</Text>
            </View>
    </Card>
}


export default EventCard
