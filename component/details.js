import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import popularData from "../assets/data/popularData";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Colors from "../assets/colors";

export default Details = ({ route, navigation }) => {
  const { Item } = route.params;
  //console.log(Item);
  const renderIngredientItem = ({ item }) => {
    return (
      <View
        style={[
          styles.ingredientItemWrapper,
          { marginLeft: item.id == "1" ? 20 : 0 },
        ]}
      >
        <Image source={item.image} style={styles.ingredientItemImage} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* header */}
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            {/*//navigation.navigate("Home" it works too)}> */}
            <View style={styles.backButton}>
              <MaterialCommunityIcons
                name="chevron-left"
                size={14}
                color={Colors.black}
              />
            </View>
          </TouchableOpacity>

          <View style={styles.favoriteButton}>
            <Ionicons name="star" size={14} color={Colors.white} />
          </View>
        </View>
      </SafeAreaView>
      {/* Title */}
      <View style={styles.titleWrapper}>
        <Text style={styles.titleText}>{Item.title}</Text>
      </View>
      {/* Price */}
      <View style={styles.priceWrapper}>
        <Text style={styles.priceText}>${Item.price}</Text>
      </View>
      {/* Pizza info */}
      <View style={styles.infoWrapper}>
        <View style={styles.infoLeftWrapper}>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Size</Text>
            <Text style={styles.infoItemText}>
              {Item.sizeName} {Item.sizeNumber}"
            </Text>
          </View>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Crust</Text>
            <Text style={styles.infoItemText}>{Item.crust}</Text>
          </View>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Delivery In</Text>
            <Text style={styles.infoItemText}>{Item.deliveryTime} min</Text>
          </View>
        </View>
        <View style={styles.infoRightWrapper}>
          <Image source={Item.image} style={styles.infoImage} />
        </View>
      </View>
      {/* Ingredients */}
      <View style={styles.ingredientsWrapper}>
        <Text style={styles.ingredientsText}>ingredients</Text>
        <View style={styles.ingredientsListWrapper}>
          {/*holds the flatlist */}
          {/* FlatList self closing tag */}
          <FlatList
            data={Item.ingredients}
            renderItem={renderIngredientItem}
            keyExtractor={(item) => item.id}
            //horizontal={true}
            horizontal
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            legacyImplementation={false}
          />
        </View>
      </View>
      {/* Place order button */}
      <TouchableOpacity onPress={() => alert("Your order has been placed!!")}>
        <View style={styles.orderButtonWrapper}>
          <Text style={styles.orderButtonText}>Place an Order</Text>
          <MaterialCommunityIcons
            name="chevron-right"
            size={24}
            color="black"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: "row", //so they are aligned in a row.
    justifyContent: "space-between", //so they go to opposite end
    paddingHorizontal: 20,
    paddingTop: 60,
    alignItems: "center",
  },
  backButton: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: Colors.text_2,
    borderStyle: "Solid",
    padding: 12,
    // paddingHorizontal: 16,
    // paddingVertical: 16,
  },
  favoriteButton: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
    padding: 12,
    borderColor: Colors.primary,
    borderStyle: "Solid",
    borderWidth: 2,
    // paddingHorizontal: 16,
    // paddingVertical: 16,
  },
  titleWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
    //flexWrap: "wrap",
  },
  titleText: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 32,
    color: Colors.text,
    width: "60%",
  },
  priceWrapper: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  priceText: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 32,
    color: Colors.price,
    width: "60%",
  },
  infoWrapper: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoLeftWrapper: {
    paddingHorizontal: 20,
  },
  infoItemWrapper: {
    marginBottom: 20,
  },
  infoItemTitle: {
    paddingBottom: 5,
    fontFamily: "Montserrat_500Medium",
    color: Colors.text_2,
    fontSize: 14,
  },
  infoItemText: {
    fontFamily: "Montserrat_600SemiBold",
    color: Colors.black,
    fontSize: 16,
  },
  infoRightWrapper: {
    color: Colors.white,
  },
  infoImage: {
    resizeMode: "contain",
  },
  ingredientsWrapper: {
    marginTop: 60,
  },
  ingredientsText: {
    paddingHorizontal: 20,
    fontFamily: "Montserrat_700Bold",
    color: Colors.black,
    fontSize: 16,
  },
  ingredientsListWrapper: {
    //for the flatlist
    paddingVertical: 19,
  },
  ingredientItemWrapper: {
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
    paddingHorizontal: 10,
    borderRadius: 15,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  ingredientItemImage: {
    resizeMode: "contain",
  },
  orderButtonWrapper: {
    marginHorizontal: 20,
    marginTop: 60,
    paddingVertical: 23,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: Colors.primary,
    borderRadius: 50,
  },
  orderButtonText: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 14,
    marginRight: 10,
  },
});
