import React,{useState} from 'react';
import {View,Text,Button} from 'react-native';

const CoinCount = ({coinName,coinValue, updateTotal}) => {
    const [value,setValue] = useState(0);
    const [amount,setAmount] = useState(0);

    return (
        <View style={{flex: 1, flexDirection: 'column'}} >
                <Text> Value: {value}</Text>
                <Text>  Amount: {amount}</Text>
                <Button
                    title={coinName}
                    onPress = {() => {
                        setValue(value+coinValue);
                        setAmount(amount +1);
                        updateTotal(coinValue);
                    }
                }

                />
        </View>
    )
}

export default CoinCount;
