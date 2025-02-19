import React, { useState } from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import RecipeCard from './components/RecipeCard';
import RecipeDetail from './components/RecipeDetail';

const recipesData = [
  {
    id: 1,
    title: 'Spaghetti Bolognese',
    image: 'https://example.com/spaghetti.jpg',
    ingredients: ['Spaghetti', 'Tomato sauce', 'Ground beef'],
    steps: ['Boil spaghetti', 'Cook sauce', 'Combine'],
  },
  {
    id: 2,
    title: 'Chicken Salad',
    image: 'https://example.com/salad.jpg',
    ingredients: ['Chicken', 'Lettuce', 'Tomatoes'],
    steps: ['Grill chicken', 'Chop veggies', 'Mix everything'],
  },
  // Ajoute plus de recettes ici...
];

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {selectedRecipe ? (
          <RecipeDetail recipe={selectedRecipe} />
        ) : (
          <View style={styles.recipeList}>
            {recipesData.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} onClick={handleClick} />
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  recipeList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default App;

