import React, { Component } from 'react'
import {
 StyleSheet,
 Image,
 View,
 TouchableHighlight,
 FlatList,
 Text,
} from 'react-native';
import ListItem from './ListItem';

type Props = {};
export default class ResultatsDeRecherche extends Component<Props> {
 _extracteurClef = (item, index) => index.toString();
 _rendreItem = ({item, index}) => (
    <ListItem
    item={item}
    index={index}
    onPressItem={this._itemAppuye}
    />
   );
   _itemAppuye = (index) => {
    console.log('Ligne appuyée : '+index);
   };  
 render() {
 //console.log(this.props.route.params);
 const { listings } = this.props.route.params;
 return (
 <FlatList
 data={listings}
 keyExtractor={this._extracteurClef}
 renderItem={this._rendreItem}
 />
 );
 }
}

