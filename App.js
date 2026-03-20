import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Stack = createNativeStackNavigator();

// --- BOTTOM MENU COMPONENT ---
// Tạo component dùng chung để gắn vào Home và Cart
function BottomMenu({ navigation, activeScreen }) {
  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity
        style={[styles.navItem, activeScreen === "Home" && styles.activeNavHome]}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          source={require("./assets/icons/home.png")} 
          style={[styles.navIcon, { tintColor: activeScreen === "Home" ? "#5BB2FF" : "gray" }]}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem}>
        <Image source={require("./assets/icons/bell.png")} style={styles.navIcon} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("Scan")}>
        <Image source={require("./assets/icons/qr.png")} style={styles.navIcon} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem}>
        <Image source={require("./assets/icons/history.png")} style={styles.navIcon} />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.navItem, activeScreen === "Cart" && styles.activeNavCart]}
        onPress={() => navigation.navigate("Cart")}
      >
        <Image
          source={require("./assets/icons/cart.png")}
          style={[styles.navIcon, { tintColor: activeScreen === "Cart" ? "#F48B5C" : "gray" }]}
        />
      </TouchableOpacity>
    </View>
  );
}

// --- HOME SCREEN ---
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.hello}>Hello 👋🏻 </Text>
            <Text style={styles.name}>Christie Doe</Text>
          </View>

          <Image
            source={require("./assets/avatar.png")}
            style={styles.avatar}
          />
        </View>

        <Text style={styles.title}>Your Insights</Text>
        <View style={styles.grid}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("Scan")}
          >
            <View style={styles.icon1}>
              <Image
                source={require("./assets/icons/newscan.png")}
                style={styles.icon}
              />
            </View>
            <Text style={styles.cardTitle}>Scan new</Text>
            <Text style={styles.cardSub}>Scanned 483</Text>
          </TouchableOpacity>

          <View style={styles.card}>
            <View style={styles.icon2}>
              <Image
                source={require("./assets/icons/Counterfeits.png")}
                style={styles.icon}
              />
            </View>
            <Text style={styles.cardTitle}>Counterfeits</Text>
            <Text style={styles.cardSub}>Counterfeited 32</Text>
          </View>

          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("Payment")}
          >
            <View style={styles.icon3}>
              <Image
                source={require("./assets/icons/Success.png")}
                style={styles.icon}
              />
            </View>
            <Text style={styles.cardTitle}>Success</Text>
            <Text style={styles.cardSub}>Checkouts 8</Text>
          </TouchableOpacity>

          <View style={styles.card}>
            <View style={styles.icon4}>
              <Image
                source={require("./assets/icons/Directory.png")}
                style={styles.icon}
              />
            </View>
            <Text style={styles.cardTitle}>Directory</Text>
            <Text style={styles.cardSub}>History 26</Text>
          </View>
        </View>
      </ScrollView>

      {/* Gọi component Menu dưới cùng */}
      <BottomMenu navigation={navigation} activeScreen="Home" />
    </View>
  );
}

// --- CART SCREEN ---
function CartScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }} showsVerticalScrollIndicator={false}>
        
        {/* Nút Back */}
        <TouchableOpacity style={styles.cartBackBtn} onPress={() => navigation.goBack()}>
          <Image source={require("./assets/icons/back_orange.png")} style={{ width: 20, height: 20 }} />
        </TouchableOpacity>

        <Text style={styles.cartMainTitle}>Your Cart 👍🏼</Text>

        {/* Sản phẩm 1 */}
        <View style={styles.cartItem}>
          <View style={styles.cartItemImgBox}>
            <Image source={require("./assets/juice.png")} style={styles.cartItemImg} />
          </View>
          <View style={styles.cartItemInfo}>
            <Text style={styles.cartItemBrand}>Lauren's</Text>
            <Text style={styles.cartItemName}>Orange Juice</Text>
            <Text style={styles.cartItemPrice}>₹ 149</Text>
          </View>
          <View style={styles.qtyBox}>
            <Text style={styles.qtyBtn}>-</Text>
            <Text style={styles.qtyText}>2</Text>
            <Text style={styles.qtyBtn}>+</Text>
          </View>
        </View>

        {/* Sản phẩm 2 */}
        <View style={styles.cartItem}>
          <View style={[styles.cartItemImgBox, { backgroundColor: '#F0F0F0' }]}>
            <Image source={require("./assets/milk.png")} style={styles.cartItemImg} />
          </View>
          <View style={styles.cartItemInfo}>
            <Text style={styles.cartItemBrand}>Baskin's</Text>
            <Text style={styles.cartItemName}>Skimmed Milk</Text>
            <Text style={styles.cartItemPrice}>₹ 129</Text>
          </View>
          <View style={styles.qtyBox}>
            <Text style={styles.qtyBtn}>-</Text>
            <Text style={styles.qtyText}>2</Text>
            <Text style={styles.qtyBtn}>+</Text>
          </View>
        </View>

        {/* Sản phẩm 3 */}
        <View style={styles.cartItem}>
          <View style={[styles.cartItemImgBox, { backgroundColor: '#E8E8E8' }]}>
            <Image source={require("./assets/lotion.png")} style={styles.cartItemImg} />
          </View>
          <View style={styles.cartItemInfo}>
            <Text style={styles.cartItemBrand}>Marley's</Text>
            <Text style={styles.cartItemName}>Aloe Vera Lotion</Text>
            <Text style={styles.cartItemPrice}>₹ 1249</Text>
          </View>
          <View style={styles.qtyBox}>
            <Text style={styles.qtyBtn}>-</Text>
            <Text style={styles.qtyText}>2</Text>
            <Text style={styles.qtyBtn}>+</Text>
          </View>
        </View>

        {/* Tổng thanh toán */}
        <View style={styles.totalRow}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalPrice}>₹ 1,527</Text>
        </View>

        {/* Nút thanh toán */}
        <TouchableOpacity
          style={styles.proceedBtn}
          onPress={() => navigation.navigate("Payment")}
        >
          <Text style={styles.proceedText}>Proceed to checkout</Text>
        </TouchableOpacity>

      </ScrollView>

      {/* Gọi component Menu dưới cùng */}
      <BottomMenu navigation={navigation} activeScreen="Cart" />
    </View>
  );
}

function ScanScreen({ navigation }) {
  return (
    <View style={styles.container2}>

      <Image
        source={require("./assets/icons/nuoc_ep.png")}
        style={styles.product}
      />
      <Image
        source={require("./assets/icons/Group5.png")}
        style={styles.scanFrame}
      />

      <View style={styles.bottomCard}>
        <Image
          source={require("./assets/icons/nuoc_ep.png")}
          style={styles.smallImage}
        />

        <View>
          <Text style={{ color: "gray" }}>Lauren's</Text>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>
            Orange Juice
          </Text>
        </View>

        <TouchableOpacity 
          style={styles.plus}
          onPress={() => navigation.navigate("Success")}
        >
        <Image
          source={require("./assets/icons/square-plus.png")}
          style={{ width: 35, height: 35 }}
        />
        </TouchableOpacity>

      </View>

    </View>
  );
}
function PaymentScreen({ navigation }) {
  return (
    <View style={styles.paymentContainer}>

      {/* BACK BUTTON */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          source={require("./assets/icons/back.png")}
          style={{ width: 24, height: 24 }}
        />
      </TouchableOpacity>
      
      {/* HEADER */}
      <View style={styles.headerBox}>

        <View style={styles.checkoutRow}>
          <Text style={styles.checkoutText}>Checkout 💳</Text>

          <View>
            <Text style={styles.price}>₹ 1,527</Text>
            <Text style={styles.gst}>Including GST (18%)</Text>
          </View>
        </View>

        <View style={styles.methodRow}>

          <View style={styles.creditCard}>
            <Image
              source={require("./assets/icons/Credit card icon.png")}
              style={styles.iconSmall}
            />
            <Text style={styles.methodText}>Credit card</Text>
          </View>

          <View style={styles.applePay}>
            <Image
              source={require("./assets/icons/Apple icon.png")}
              style={styles.iconSmall}
            />
            <Text>Apple Pay</Text>
          </View>

        </View>

      </View>


      {/* CARD NUMBER */}
      <Text style={styles.label}>Card number</Text>

      <View style={styles.inputRow}>
        <Text>5261 4141 0151 8472</Text>

        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("./assets/icons/Master Card Logo.png")}
            style={{ width: 30, height: 20, marginRight: 10 }}
          />

          <Image
            source={require("./assets/icons/Card Icon.png")}
            style={{ width: 20, height: 20 }}
          />
        </View>
      </View>


      {/* CARDHOLDER */}
      <Text style={styles.label}>Cardholder name</Text>

      <View style={styles.input}>
        <Text>Christie Doe</Text>
      </View>


      {/* DATE + CVV */}
      <View style={styles.row}>

        <View style={{ width: "48%" }}>
          <Text style={styles.label}>Expiry date</Text>

          <View style={styles.input}>
            <Text>06 / 2024</Text>
          </View>
        </View>

        <View style={{ width: "48%" }}>
          <Text style={styles.label}>CVV / CVC</Text>

          <View style={styles.input}>
            <Text>915</Text>
          </View>
        </View>

      </View>


      <Text style={styles.smallText}>
        We will send you an order details to your email
        after the successful payment
      </Text>


      {/* PAY BUTTON */}
      <TouchableOpacity
        style={styles.payButton}
        onPress={() => navigation.navigate("Success")}
      >
        <Image
          source={require("./assets/icons/lock.png")}
          style={{ width: 18, height: 18, marginRight: 8 }}
        />

        <Text style={styles.payText}>
          Pay for the order
        </Text>
      </TouchableOpacity>

    </View>
  );
}
function SuccessScreen() {
  return (
    <View style={styles.successContainer}>

      <TouchableOpacity style={styles.backBtn}>
        <Text style={{fontSize:18}}>←</Text>
      </TouchableOpacity>

      <Image
        source={require("./assets/success_screen.png")}
        style={styles.successImage}
      />

      <Text style={styles.successTitle}>
        Payment Success, Yayy!
      </Text>

      <Text style={styles.successText}>
        we will send order details and invoice in
        your contact no. and registered email
      </Text>

      <TouchableOpacity>
        <Text style={styles.checkDetails}>
          Check Details →
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.invoiceBtn}>
        <Text style={styles.invoiceText}>
          Download Invoice
        </Text>
      </TouchableOpacity>

    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Cart" component={CartScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Scan" component={ScanScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Success" component={SuccessScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50, // Thêm padding top thay cho safe area
    backgroundColor: "#ffffff",
  },
  container:{
    flex:1,
    padding:20,
    backgroundColor:"#ffffff"
  },
  container2: {
    flex: 1,
    backgroundColor: "#F4E8DB",
    alignItems: "center"
  },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  hello: { fontSize: 28, fontWeight: "600" },
  name: { fontSize: 18, color: "gray" },
  avatar: { width: 50, height: 50, borderRadius: 15 },
  title: { marginTop: 30, fontSize: 22, fontWeight: "600" },
  grid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", marginTop: 20 },
  card: { width: "48%", height: 180, backgroundColor: "#f9f9f9", borderRadius: 20, padding: 20, marginBottom: 15, justifyContent: "center", alignItems: "center" },
  cardTitle: { fontSize: 16, marginTop: 15, fontWeight:"500" },
  cardSub: { color: "gray", marginTop: 5, fontSize: 12 },
  icon1: { width: 60, height: 60, backgroundColor: "#E6E6FA", borderRadius: 20, justifyContent: "center", alignItems: "center" },
  icon2: { width: 60, height: 60, backgroundColor: "#FDF5E6", borderRadius: 20, justifyContent: "center", alignItems: "center" },
  icon3: { width: 60, height: 60, backgroundColor: "#E0FFFF", borderRadius: 20, justifyContent: "center", alignItems: "center" },
  icon4: { width: 60, height: 60, backgroundColor: "#F0F8FF", borderRadius: 20, justifyContent: "center", alignItems: "center" },
  icon: { width: 25, height: 25 },
  center:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  scanArea:{
  justifyContent:"center",
  alignItems:"center"
},

product:{
  width:"100%",
  height:"100%",
  resizeMode:"contain"
},

scanFrame:{
  position:"absolute",
  marginTop:100,
  width:300,
  height:450,
  resizeMode:"contain"
},

  bottomCard: {
    position: "absolute",
    bottom: 40,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 20,
    width: "65%",
    justifyContent: "space-between"
  },

  smallImage: {
    width: 50,
    height: 50,
    borderRadius: 10
  },
  successContainer:{
  flex:1,
  backgroundColor:"#fff",
  alignItems:"center",
  justifyContent:"center",
  padding:30
},

backBtn:{
  position:"absolute",
  top:50,
  left:20
},

successImage:{
  width:220,
  height:220,
  resizeMode:"contain",
  marginBottom:20
},

successTitle:{
  fontSize:22,
  fontWeight:"600",
  marginBottom:10
},

successText:{
  textAlign:"center",
  color:"gray",
  marginBottom:20
},

checkDetails:{
  color:"#4A6CF7",
  fontSize:16,
  marginBottom:30
},

invoiceBtn:{
  backgroundColor:"#5568FE",
  width:"100%",
  padding:18,
  borderRadius:15,
  alignItems:"center"
},

invoiceText:{
  color:"#fff",
  fontSize:16,
  fontWeight:"600"
},
successContainer:{
  flex:1,
  backgroundColor:"#fff",
  alignItems:"center",
  justifyContent:"center",
  padding:30
},

backBtn:{
  position:"absolute",
  top:50,
  left:20
},

successImage:{
  width:220,
  height:220,
  resizeMode:"contain",
  marginBottom:20
},

successTitle:{
  fontSize:22,
  fontWeight:"600",
  marginBottom:10
},

successText:{
  textAlign:"center",
  color:"gray",
  marginBottom:20
},

checkDetails:{
  color:"#4A6CF7",
  fontSize:16,
  marginBottom:30
},

invoiceBtn:{
  backgroundColor:"#5568FE",
  width:"100%",
  padding:18,
  borderRadius:15,
  alignItems:"center"
},

invoiceText:{
  color:"#fff",
  fontSize:16,
  fontWeight:"600"
},

paymentContainer:{
  flex:1,
  backgroundColor:"#F5F5F5"
},

headerBox:{
  backgroundColor:"#fff",
  borderBottomLeftRadius:55,
  borderBottomRightRadius:55,
  padding:20,
  paddingTop:100,
  marginBottom:30
},

checkoutRow:{
  flexDirection:"row",
  justifyContent:"space-between",
  alignItems:"center"
},

checkoutText:{
  fontSize:26,
  fontWeight:"700"
},

price:{
  color:"#2ecc71",
  fontSize:22,
  paddingBottom:25,
  fontWeight:"600",
  textAlign:"right"
},

gst:{
  fontSize:12,
  color:"gray"
},

methodRow:{
  flexDirection:"row",
  marginTop:20
},

creditCard:{
  flexDirection:"row",
  alignItems:"center",
  backgroundColor:"#2ecc71",
  paddingVertical:25,
  paddingHorizontal:30,
  borderRadius:15
},

methodText:{
  color:"#fff",
  marginLeft:8,
  fontWeight:"600"
},

applePay:{
  flexDirection:"row",
  alignItems:"center",
  backgroundColor:"#e9e9e9",
  paddingVertical:25,
  paddingHorizontal:30,
  borderRadius:15
},

iconSmall:{
  width:20,
  height:20
},

label:{
  marginLeft:20,
  marginTop:10,
  marginBottom:5,
  color:"gray"
},

input:{
  backgroundColor:"#fff",
  padding:15,
  borderRadius:12,
  marginHorizontal:20
},

inputRow:{
  flexDirection:"row",
  justifyContent:"space-between",
  alignItems:"center",
  backgroundColor:"#fff",
  padding:15,
  borderRadius:12,
  marginHorizontal:20
},

row:{
  flexDirection:"row",
  justifyContent:"space-between"
},

smallText:{
  textAlign:"center",
  color:"gray",
  fontSize:12,
  marginTop:20,
  marginHorizontal:40
},

payButton:{
  flexDirection:"row",
  justifyContent:"center",
  alignItems:"center",
  backgroundColor:"#2ecc71",
  marginHorizontal:20,
  padding:18,
  borderRadius:18,
  marginTop:30
},

payText:{
  color:"#fff",
  fontSize:16,
  fontWeight:"600"
},
backButton:{
  position:"absolute",
  top:30,
  left:20,
  zIndex:10,
  backgroundColor:"#fff",
  padding:8,
  borderRadius:10
},

  // --- STYLES BOTTOM MENU MỚI ---
  bottomNav: {
    position: "absolute",
    bottom: 20, // Nổi lên một chút so với viền màn hình
    left: 20,
    right: 20,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 15,
    borderRadius: 30, // Bo tròn nhiều giống ảnh
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10, // Dành cho Android
  },
  navItem: {
    padding: 12,
    borderRadius: 20,
  },
  navIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain"
  },
  activeNavHome: {
    backgroundColor: "#E3F2FD", // Màu nền xanh nhạt
  },
  activeNavCart: {
    backgroundColor: "#FBE9E7", // Màu nền cam nhạt
  },

  // --- STYLES CART SCREEN MỚI ---
  cartBackBtn: {
    width: 40,
    height: 40,
    backgroundColor: "#F9F9F9",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20
  },
  cartMainTitle: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 25
  },
  cartItem: {
    flexDirection: "row",
    backgroundColor: "#F9F9F9",
    borderRadius: 20,
    padding: 15,
    marginBottom: 15,
    alignItems: "center",
  },
  cartItemImgBox: {
    width: 70,
    height: 70,
    backgroundColor: "#FCE4CA", // Nền mặc định cho nước ép
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15
  },
  cartItemImg: {
    width: 40,
    height: 60,
    resizeMode: "contain"
  },
  cartItemInfo: {
    flex: 1,
  },
  cartItemBrand: {
    color: "#A0A0A0",
    fontSize: 12,
    marginBottom: 3
  },
  cartItemName: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5
  },
  cartItemPrice: {
    fontSize: 16,
    color: "#F48B5C",
    fontWeight: "700"
  },
  qtyBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 5
  },
  qtyBtn: {
    fontSize: 18,
    color: "#F48B5C",
    paddingHorizontal: 5
  },
  qtyText: {
    fontSize: 14,
    fontWeight: "600",
    marginHorizontal: 8
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 30
  },
  totalText: {
    fontSize: 20,
    fontWeight: "600",
  },
  totalPrice: {
    fontSize: 22,
    fontWeight: "700",
    color: "#F48B5C"
  },
  proceedBtn: {
    backgroundColor: "#F48B5C",
    paddingVertical: 18,
    borderRadius: 20,
    alignItems: "center"
  },
  proceedText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700"
  }
});