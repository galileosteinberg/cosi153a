import React,{useState} from 'react';
import {View, Button, Text} from 'react-native';

const quizTwo = () => {

    const sq = (x) => x*x;

    const cube = (x) => x*x*x;
    
    const circle_area = (r) => Math.PI*r*r;
    
    const cylinder_volume  = (r,h) => Math.PI*r*r*h

    return (
        <View style={styles.title}>
          <Text>Distance of (x,y,z) from (0,0,0)</Text>
          
          {/* <StatusBar style="auto" /> */}
        </View>
      );
    
    // export {cube,circle_area, cylinder_volume};
    // export default sq;


}


const styles = StyleSheet.create({
  title: {
    flex: 1,
    color: 'black',
    backgroundColor: 'white',
    textAlign: 'left',
    //justifyContent: 'center',
  },
});

export default quizTwo;