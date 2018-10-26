import React from 'react'
import {View, Text} from 'react-native'
import UneAction from './UneAction'


const ListeActions = ({actions, deleteAction, terminateAction}) => {

    return (
        <View>
           {actions.map((act, i) => <UneAction key={i} text={act} id={i} deleteAction={deleteAction} terminateAction={terminateAction}></UneAction>)}
        </View>
    )
}

export default ListeActions