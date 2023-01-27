import React, { useState } from 'react';
import {Button, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';

const Counter = () => {
    const [count, setCount] = useState(0);   return (
        <View>
           <TouchableHighlight
             onPress={() => {setCount(count + 1)}}
             testID="Highlight"
           >
                <Text> Click Me </Text>
           </TouchableHighlight>

           <Button
             onPress={() => {setCount(count + 1)}}
             testID="Button"
             title="Or Click Me"
           />
           <TouchableOpacity
             onPress={() => {setCount(0)}} title="Reset"
             testID='Opacity'
           >
                <Text> Reset </Text>
           </TouchableOpacity>
           <Text testID='Text'>You clicked me {count} times</Text>
       </View>
   );
}
export default Counter;