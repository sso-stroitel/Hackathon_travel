import React from 'react';
import {FlatList} from "react-native";
import EventCard from './EventCard';

const items = [
    {id: '0', photo: 'https://254066-790876-3-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/06/spalnica.jpg', name: 'Подъем', time: '7:00 '},
    {id: '1', name: 'Завтрак', photo: 'https://24tv.ua/resources/photos/news/201809/1034494.jpg?1549360041000', time: '8:00'},
    {id: '2', name: 'Государственный музей архитектуры имени А.В. Щусева', photo: 'https://bigenc.ru/media/2016/10/27/1235148259/4201.jpg', time: '10:00'},
    {id: '3', photo: 'https://ph0.qna.center/storage/photos/rossinanta/1879900.png', name: 'Обед', time: '12:00'},
    {id: '4', photo: 'https://tybet.ru/upload/Photo_news/29067--.jpg', name: 'Институт "Стрелка" ', time: '14:00'},
    {id: '5', photo: 'https://hsusb.s3.amazonaws.com/us-bank/images/home_page/homepage-header.png', name: 'Свободное время', time: '16:00'},
    {id: '6', photo: 'https://avatars.mds.yandex.net/get-zen_doc/50509/pub_5a817bd9f4a0dd293303bd56_5a817ca88309058c3b12dcfb/scale_1200', name: 'Ужин', time: '19:00'},
    {id: '7', photo: 'http://profesor.md/wp-content/uploads/2019/10/feedback.jpeg', name: 'Рефлексия дня', time: '20:00'},
    {id: '8', photo: 'https://avatars.mds.yandex.net/get-zen_doc/149044/pub_5d7feb1374f1bc00ae4bc921_5d7feb17f73d9d00ae930c96/scale_1200', name: 'Отбой', time: '22:00'}
];

class Events extends React.Component {
    render() {
        return (
            <FlatList
                style={{paddingBottom: 14}}
                keyExtractor={item => item.id}
                data={items}
                renderItem={({item}) => (
                    <EventCard name={item.name} photo={item.photo} time={item.time}/>
                )}
            />
        )
    }
}

export default Events
