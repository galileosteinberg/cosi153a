import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, FlatList, View, Image, TextInput } from 'react-native';



const Exam3cStart = () => {
    const [data,setData] = useState([]);
    const [ingredient, setIngredient] = useState('');
    const [loading,setLoading] = useState(true);

    const getMeals = async () => {
        try {
          const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
          const response = await fetch(url);
          const json = await response.json();
          setData(json.meals); 
        } catch (error) {
          console.error(error);
        } finally {
            setLoading(false);
        }
      };

    useEffect(() => {getMeals()}, [ingredient])

    const Item = ({strMeal, strMealThumb }) => (
      <View style={styles.item}>
          <Text style={styles.mealName}>{strMeal}</Text>
          <Image style={styles.image} source={{ uri: strMealThumb}} />
      </View>
    );


    return(
        <View style = {styles.container}>
            <Text style={styles.title}>Meal Finder</Text>
            <Text style={styles.body}> Main Ingredient: 
            <TextInput 
            style={styles.input} 
            placeholder="enter ingredient here" 
            onChangeText={text => setIngredient(text)}
                value={ingredient}
                
                /> 
            </Text> 
            <FlatList 
              data = {data} 
              renderItem={({item}) => <Item strMeal={item.strMeal} strMealThumb={item.strMealThumb} />}
              keyExtractor={(item) => item.idMeal}
            />
        </View>
    );


    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    marginLeft: 20,
  },
  title: {
    textAlign: 'left',
    
    fontSize: 50,
    marginBottom: 50,
  },
  body: {
    textAlign: 'left',
   
    fontSize: 25,
    marginBottom: 50,
  },
  mealName: {
    textAlign: 'center',
    fontSize: 25,
  },
  item: {
    backgroundColor: '#FDDBBA',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderColor: 'black',
    borderWidth: 5,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  input: {
    textAlign: 'left',
    fontStyle: 'italic',
    fontSize: 25,
    
  },
  image: {
    alignContent: 'right',
    width: 100,
    height: 100,
  }
});

export default Exam3cStart;