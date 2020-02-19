import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, SafeAreaView} from 'react-native';

function DisplayRecords(props) {
  if (!props.data) {
    return null;
  }
  let info = props.data.map((value, index) => {
    return (
      <View
        style={{borderBottomColor: 'red', borderBottomWidth: 1, padding: 5}}>
        <Text style={{textAlign: 'center', color: 'red'}}>
          {' '}
          Item #{index + 1}{' '}
        </Text>
        <Text style={{textAlign: 'center'}}> {value}</Text>
      </View>
    );
  });
  console.log(info);
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>{info}</ScrollView>
    </SafeAreaView>
  );
}
export default DisplayRecords;
