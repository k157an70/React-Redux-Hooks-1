import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const TodoItem =  ({ todo, toggleTd, deleteTd }) => {
   return (
      <TouchableOpacity
         onPress={toggleTd}
         style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
      >
         <Text
            style={[
               { fontSize: 20, lineHeight: 40 },
               { textDecorationLine: todo.completed ? 'line-through' : 'none' }
            ]}
         >
            {todo.name}
         </Text>
         <TouchableOpacity onPress={deleteTd}>
            <Text style={{ fontSize: 20}}>x</Text>
         </TouchableOpacity>
      </TouchableOpacity>
   )
}

export default TodoItem;


