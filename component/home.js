import React from "react";

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import categoriesData from "../assets/data/categoriesData";
import popularData from "../assets/data/popularData";
import Colors from "../assets/colors";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

export default home = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    const renderCategoryItem = ({ item }) => {
      return (
        <View
          style={[
            styles.categoryItemWrapper,
            {
              backgroundColor: item.selected ? Colors.primary : Colors.white,
              marginLeft: item.id == 1 ? 20 : 0,
            },
          ]}
        >
          <Image source={item.image} style={styles.categoryItemImage} />
          <Text style={styles.categoryItemText}>{item.title}</Text>
          <View
            style={[
              styles.categorySelectWrapper,
              {
                backgroundColor: item.selected
                  ? Colors.white
                  : Colors.secondary,
              },
            ]}
          >
            <Ionicons
              name="chevron-forward"
              size={8}
              style={styles.categorySelectIcon}
              color={item.selected ? Colors.black : Colors.white}
            />
          </View>
        </View>
      );
    };

    return (
      <View style={styles.container}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          showsVerticalScrollIndicator={false}
        >
          {/* Header*/}
          <SafeAreaView>
            <View style={styles.headerWrapper}>
              <Image
                source={require("../assets/images/profile.png")}
                style={styles.profileImage}
              />
              <Ionicons name="menu" size={30} color={Colors.text} />
            </View>
          </SafeAreaView>
          {/*title*/}
          <View style={styles.titlesWrapper}>
            <Text style={styles.titleFod}>Food</Text>
            <Text style={styles.titleDel}>Delivery</Text>
          </View>
          {/* Search */}
          <View style={styles.searchWrapper}>
            <Ionicons name="search-outline" size={16} color={Colors.text} />
            <View style={styles.search}>
              <Text style={styles.searchText}>Search</Text>
            </View>
          </View>
          {/* Categories */}
          <View style={styles.categoriesWrapper}>
            <Text style={styles.categoriesText}>Categories</Text>
            <View style={styles.categoriesListWrapper}>
              {/* FlatList self closing tag */}
              <FlatList
                data={categoriesData}
                renderItem={renderCategoryItem}
                keyExtractor={(item) => item.id}
                //horizontal={true}
                horizontal
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                legacyImplementation={false}
              />
            </View>
          </View>
          {/* Popular */}
          <View style={styles.popularWrapper}>
            <Text style={styles.popularTitle}>Popular</Text>
            {/* Iterating through the popularData to get each item */}
            {popularData.map((item) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => navigation.navigate("Details", { Item: item })}
              >
                <View
                  style={[
                    styles.popularCardWrapper,
                    { marginTop: item.id == 1 ? 10 : 20 },
                  ]}
                >
                  <View>
                    <View>
                      <View style={styles.popularTopWrapper}>
                        <MaterialCommunityIcons
                          name="crown"
                          size={14}
                          style={styles.TopIcon}
                          color={Colors.primary}
                        />
                        <Text style={styles.popularTopText}>
                          top of the week
                        </Text>
                      </View>
                      <View style={styles.popularTitlesWrapper}>
                        <Text style={styles.popularTitlesTitle}>
                          {item.title}
                        </Text>
                        <Text style={styles.popularTitlesWeight}>
                          weight {item.weight}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.popularCardBottomStyle}>
                      <View style={styles.addPizzaButton}>
                        <MaterialCommunityIcons
                          name="plus-thick"
                          size={10}
                          color="black"
                        />
                      </View>
                      <View style={styles.ratingWrapper}>
                        <Ionicons name="star" size={10} color="black" />
                        <Text style={styles.rating}>{item.rating}</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.popularCardRight}>
                    <Image
                      source={item.image}
                      style={styles.popularCardImage}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: "row", //so they are aligned in a row.
    justifyContent: "space-between", //so they go to opposite end
    paddingHorizontal: 20,
    paddingTop: 30,
    alignItems: "center",
  },
  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 60,
  },
  titlesWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  titleFod: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 16,
    color: Colors.text,
  },
  titleDel: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 32,
    color: Colors.text,
    marginTop: 5,
  },
  searchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 30,
  },
  search: {
    flex: 1,
    marginLeft: 10,
    borderBottomColor: Colors.text_2,
    borderBottomWidth: 2,
  },
  searchText: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 14,
    marginBottom: 5,
    color: Colors.text_2,
  },
  //categoryData
  categoriesWrapper: {
    marginTop: 30,
  },
  categoriesText: {
    paddingHorizontal: 20,
    fontFamily: "Montserrat_700Bold",
    fontSize: 16,
  },
  categoriesListWrapper: {
    paddingTop: 15, //we used padding here because of the box-shadow we're going to apply.
    paddingBottom: 20,
  },
  categoryItemWrapper: {
    backgroundColor: "#F5CA48",
    marginRight: 20,
    borderRadius: 20,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  categoryItemImage: {
    width: 60,
    height: 60,
    marginTop: 25,
    alignSelf: "center",
    marginHorizontal: 20,
  },
  categoryItemText: {
    textAlign: "center",
    fontFamily: "Montserrat_500Medium",
    fontSize: 14,
    marginTop: 10,
  },
  categorySelectWrapper: {
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 20,
    width: 26,
    height: 26,
    borderRadius: 26,
    marginBottom: 20,
  },
  categorySelectIcon: {
    alignSelf: "center",
  },
  //popularData
  popularCardWrapper: {
    backgroundColor: Colors.white,
    borderRadius: 25,
    paddingTop: 20,
    paddingLeft: 20,
    //marginTop: 20,
    flexDirection: "row",
    overflow: "hidden",
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  popularWrapper: {
    paddingHorizontal: 20,
  },
  popularTitle: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 16,
  },
  popularTopWrapper: {
    flexDirection: "row",
  },
  popularTopText: {
    marginLeft: 10,
    marginTop: 24,
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 14,
  },
  TopIcon: {
    marginTop: 28.78,
  },
  popularTitlesWrapper: {
    marginTop: 20,
    paddingLeft: 22,
  },
  popularTitlesTitle: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 14,
    color: Colors.text,
  },
  popularTitlesWeight: {
    fontFamily: "Montserrat_500Medium",
    fontSize: 12,
    color: Colors.text_2,
    marginTop: 5,
  },
  popularCardBottomStyle: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginLeft: -20,
  },
  addPizzaButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  ratingWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
  },
  rating: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 12,
    color: Colors.black,
    marginLeft: 5,
  },
  //image
  popularCardRight: {
    marginLeft: 20,
  },
  popularCardImage: {
    width: 210,
    height: 125,
    marginTop: 18,
    marginBottom: 18,
    resizeMode: "contain",
  },
});
