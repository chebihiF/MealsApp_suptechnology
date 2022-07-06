/** @format */

import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = () => {
  const renderCategoryItem = (item) => {
    return <CategoryGridTile title={item.title} color={item.color} />;
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
    />
  );
};

export default CategoriesScreen;
