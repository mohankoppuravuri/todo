import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Plus from './Plus';
import DisplayRecords from './DisplayRecords';
function list(props) {
  const [search, setSearch] = useState('');
  const [compo, setCompo] = useState(false);
  const display = props.list.filter(value => {
    return value.includes(search);
  });
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          borderBottomColor: 'red',
          borderWidth: 1,
          backgroundColor: 'lightgray',
        }}>
        <View style={{padding: 10, flexDirection: 'row'}}>
          <Text style={{flex: 8, color: 'red', textAlign: 'center'}}>
            TO-DO
          </Text>
        </View>
        <Plus />
        <View style={{flexDirection: 'row', padding: 15, height: 70}}>
          <FAIcon
            style={{padding: 5, marginTop: 10, flex: 1}}
            name="search-minus"
            color="steelblue"
            size={15}
          />
          <TextInput
            style={{flex: 10, borderColor: 'red', borderWidth: 1}}
            placeholder={'Search the content'}
            onChangeText={text => {
              setSearch(text);
            }}
          />
        </View>
      </View>
      <DisplayRecords data={display} />
    </View>
  );
}

function mapStateToProps(state) {
  return {
    list: state.list,
  };
}

const List = connect(mapStateToProps)(list);
export default List;
