import React,{useState} from 'react';
import {View, Button, Text} from 'react-native';

import CoinCount from './CoinCount';

const App = () => {
    const [change,setChange] = useState(0)
    const [coins,setCoins] = useState(0)

    const updateTotal = (val) => {
        setChange(change+val);
        setCoins(coins + 1);

    }

    return (
      <View>
            <Text style = {{fontSize: 40}}>
                U.S. Change Counter
            </Text>
            <Text style = {{fontSize: 20}}>
                Total Value is: {change}
            </Text>
            <Text style = {{fontSize: 20}}>
                Amount of coins: {coins}
            </Text>
            <View style={{flex: 1, flexDirection: 'row'}} >
                <CoinCount coinName="Penny" coinValue={1} updateTotal ={updateTotal}/>
                <CoinCount coinName="Nickel" coinValue={5} updateTotal ={updateTotal} />
                <CoinCount coinName="Dime" coinValue={10} updateTotal ={updateTotal}/>
                <CoinCount coinName="Quarter" coinValue={25} updateTotal ={updateTotal}/>
                <CoinCount coinName="Half Dollar" coinValue={50} updateTotal ={updateTotal}/>
                
            </View>
      </View>
    )
  }


export default App;