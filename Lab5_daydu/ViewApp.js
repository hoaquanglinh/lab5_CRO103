import React from 'react'
import { tang, giam } from './actions';
import { useSelector, useDispatch } from 'react-redux';
import { Text, View, Button } from 'react-native';

const ViewApp = () => {
    const count = useSelector(state => state.dem);
    const dispatch = useDispatch();

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Dem {count}</Text>
            <Button title='Tang' onPress={() => dispatch(tang())}/>
            <Button title='Giam' onPress={() => dispatch(giam())}/>
        </View>
    )
}

export default ViewApp