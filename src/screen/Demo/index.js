import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  TouchableHighlight,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ScrollView} from 'react-native-gesture-handler';
import Modal from 'react-native-modal';

const App = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/Images/containbg.png')}
        style={{
          height: hp('100%'),
          width: wp('100%'),
        }}>
        <Modal isVisible={isModalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                Are you sure you want Log out from App?
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginVertical: hp('5%'),
                }}>
                <TouchableHighlight
                  onPress={() => {
                    navigation.navigate('Login');
                  }}
                  style={{
                    backgroundColor: 'rgba(172,208,132,1)',
                    borderRadius: wp('2.5%'),
                    height: hp('6%'),
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: wp('25%'),
                    marginHorizontal: wp('8%'),
                  }}>
                  <Text style={styles.introTextStyle1}>YES</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={toggleModal}
                  style={{
                    backgroundColor: 'rgba(172,208,132,1)',
                    borderRadius: wp('2.5%'),
                    height: hp('6%'),
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: wp('25%'),
                  }}>
                  <Text style={styles.introTextStyle1}>NO</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </Modal>
        <View style={styles.container}>
          <View
            style={{
              width: wp('100%'),
              height: hp('35%'),
              backgroundColor: 'rgba(172,208,132,1)',
              borderBottomLeftRadius: wp('5%'),
              borderBottomRightRadius: wp('5%'),
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                marginTop: hp('3%'),
                fontSize: hp('3.5%'),
                color: '#fff',
              }}>
              Dashboard
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Notification');
              }}
              style={{
                marginLeft: wp('85%'),
                marginTop: hp('-4%'),
              }}>
              <Image
                source={require('../../assets/Images/Notification.png')}
                resizeMode="contain"
                style={{
                  width: wp('7%'),
                  height: hp('4%'),
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: wp('90%'),
                height: hp('70%'),
                backgroundColor: '#fff',
                marginTop: hp('-20%'),
                borderRadius: wp('5%'),
                borderWidth: wp('0.5%'),
                borderColor: 'grey',
              }}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../../assets/Images/profilePicture.png')}
                  style={{
                    width: wp('28%'),
                    height: hp('12%'),
                    marginTop: hp('-6%'),
                  }}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    fontWeight: 'bold',
                    marginTop: hp('1.5%'),
                    fontSize: hp('3%'),
                    color: '#000',
                  }}>
                  Dr Ortho.
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    width: wp('35%'),
                    height: hp('10%'),
                  }}>
                  <Image
                    source={require('../../assets/Images/contractIcon.png')}
                    style={{
                      width: wp('6%'),
                      height: hp('5%'),
                      marginLeft: wp('6%'),
                    }}
                    resizeMode="contain"
                  />
                  <Text
                    style={{
                      marginLeft: wp('2%'),
                      marginTop: hp('1%'),
                      fontSize: hp('2%'),
                      color: '#000',
                    }}>
                    MBBS,MD
                  </Text>
                </View>

                <Text style={styles.seprator}>
                  _________________________________________________
                </Text>
                <ScrollView
                  style={{
                    width: wp('90%'),
                    height: hp('46%'),
                  }}>
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <View style={styles.con}>
                      <View style={styles.sep1}>
                        <TouchableOpacity
                          onPress={() => {
                            navigation.navigate('Booking');
                          }}>
                          <Text style={styles.textdraw}>Booking</Text>
                        </TouchableOpacity>
                      </View>
                      <View style={styles.sep2}></View>
                    </View>
                    <Text style={styles.seprator1}>
                      _________________________________________________
                    </Text>
                    <View style={styles.con}>
                      <View style={styles.sep1}>
                        <TouchableOpacity
                          onPress={() => {
                            navigation.navigate('Search');
                          }}>
                          <Text style={styles.textdraw}>Search</Text>
                        </TouchableOpacity>
                      </View>
                      <View style={styles.sep2}></View>
                    </View>
                    <Text style={styles.seprator1}>
                      _________________________________________________
                    </Text>
                    <View style={styles.con}>
                      <View style={styles.sep1}>
                        <TouchableOpacity
                          onPress={() => {
                            navigation.navigate('Profile');
                          }}>
                          <Text style={styles.textdraw}>Profile</Text>
                        </TouchableOpacity>
                      </View>
                      <View style={styles.sep2}></View>
                    </View>
                    <Text style={styles.seprator1}>
                      _________________________________________________
                    </Text>
                    <View style={styles.con}>
                      <View style={styles.sep1}>
                        <TouchableOpacity
                          onPress={() => {
                            navigation.navigate('Contactus');
                          }}>
                          <Text style={styles.textdraw}>Contact Us</Text>
                        </TouchableOpacity>
                      </View>
                      <View style={styles.sep2}></View>
                    </View>
                    <Text style={styles.seprator1}>
                      _________________________________________________
                    </Text>
                    <View style={styles.con}>
                      <View style={styles.sep1}>
                        <TouchableOpacity
                          onPress={() => {
                            navigation.navigate('AboutUs');
                          }}>
                          <Text style={styles.textdraw}>About Us</Text>
                        </TouchableOpacity>
                      </View>
                      <View style={styles.sep2}></View>
                    </View>
                    <Text style={styles.seprator1}>
                      _________________________________________________
                    </Text>
                    <View style={styles.con}>
                      <View style={styles.sep1}>
                        <TouchableOpacity
                          onPress={() => {
                            navigation.navigate('TandC');
                          }}>
                          <Text style={styles.textdraw}>Term & Condition</Text>
                        </TouchableOpacity>
                      </View>
                      <View style={styles.sep2}></View>
                    </View>
                    <Text style={styles.seprator1}>
                      _________________________________________________
                    </Text>
                    <View style={styles.con}>
                      <View style={styles.sep1}>
                        <TouchableOpacity
                          onPress={() => {
                            navigation.navigate('PrivacyPolicy');
                          }}>
                          <Text style={styles.textdraw}>Privacy Policy</Text>
                        </TouchableOpacity>
                      </View>
                      <View style={styles.sep2}></View>
                    </View>
                  </View>
                </ScrollView>
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: hp('8%'),
            }}>
            <TouchableOpacity
              onPress={toggleModal}
              style={styles.headerStyles1}>
              <Text style={styles.introTextStyle1}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  introTextStyle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: hp('3%'),
  },
  introTextStyle1: {
    color: '#fff',
    fontSize: hp('3%'),
  },
  introTitleStyle: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
  },
  introTitleStyle1: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  headerStyles: {
    width: wp('100%'),
    height: '8%',
    backgroundColor: 'rgba(172,208,132,1)',
    paddingLeft: wp('5%'),
    paddingTop: hp('3%'),
  },
  subconatiner1: {
    backgroundColor: '#ffff',
    borderRadius: wp('1.5%'),
    height: hp('8%'),
    borderBottomWidth: wp('0.8%'),
    borderBottomColor: 'grey',
    borderRightWidth: wp('0.4%'),
    borderRightColor: 'grey',
    flexDirection: 'row',
  },
  sub1: {
    backgroundColor: '#ffff',
    borderRadius: wp('1.5%'),
    height: hp('7%'),
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('20%'),

    paddingTop: hp('1%'),
  },
  sub2: {
    borderRadius: wp('1.5%'),
    height: hp('7%'),
    padding: wp('4%'),
    width: wp('60%'),
  },
  text1: {
    fontSize: hp('2.5%'),
    fontWeight: 'bold',
  },
  imagein: {
    width: wp('8%'),
    height: hp('4%'),
  },
  headerStyles1: {
    width: wp('100%'),
    height: hp('8%'),
    backgroundColor: 'rgba(172,208,132,1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    height: hp('24%'),
    width: wp('85%'),
    backgroundColor: '#fff',
    borderRadius: wp('2.5%'),
    padding: wp('5%'),
    zIndex: 2,
    opacity: 1,
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  seprator: {
    color: 'grey',
    marginTop: hp('-5%'),
  },
  seprator1: {
    color: 'grey',
    marginTop: hp('-2%'),
  },
  modalText: {
    fontSize: hp('3%'),
    textAlign: 'center',
  },
  sep1: {
    width: wp('55%'),
    height: hp('7%'),
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  sep2: {
    width: wp('15%'),
    height: hp('7%'),
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: wp('4%'),
  },
  con: {
    width: wp('70%'),
    height: hp('7%'),
    flexDirection: 'row',
  },
  textdraw: {
    fontSize: hp('2.5%'),
    color: '#000',
  },
  imagenext: {
    width: wp('5%'),
    height: hp('3.5%'),
  },
});
