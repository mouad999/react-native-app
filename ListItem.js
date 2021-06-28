import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableHighlight,
    Text,
    Image,
   } from 'react-native';


export default class ListItem extends React.PureComponent {
    _itemAppuye = () => {
    this.props.onPressItem(this.props.index);
    }
    render() {
    const item = this.props.item;
    const flag = item.flag;
    return (
    <TouchableHighlight
    onPress={this._itemAppuye}
    underlayColor='#eedddd'>
    <View>
    <View style={styles.conteneurLigne}>
    <View style={styles.conteneurTexte}>
    <Text style={styles.nom}>{item.name}</Text>
    <Text style={styles.region}>{item.nativeName}</Text>
    <Text style={styles.region}>{item.currencies[0].name}</Text>
    <Text style={styles.region}>{item.languages[0].name}</Text>
    <Text style={styles.region}>{item.cioc}</Text>
    </View>
    </View>
    <View style={styles.separator}/>
    </View>
    </TouchableHighlight>
    );
    }
   } 

const styles = StyleSheet.create({
    conteneurTexte: {
    flex: 1
    },
    separateur: {
    height: 1,
    backgroundColor: '#eedded'
    },
    nom: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#58BEEC'
    },
    region: {
    fontSize: 25,
    fontWeight: "bold",
    color: 'red',
    },
    conteneurLigne: {
    flexDirection: 'row',
    padding: 10
    },
   });