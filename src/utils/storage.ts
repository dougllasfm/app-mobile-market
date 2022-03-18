import AsyncStorage from '@react-native-async-storage/async-storage';

// verificar se o usuario já tem login no app
const getLogin = async () => {
  try {
    const value = await AsyncStorage.getItem("@login")
    if (value) return value
  } catch (error) {
    console.log(error)
  }
}

const storeLogin = async (value: string) => {
  try {
    await AsyncStorage.setItem("@login", JSON.stringify(value))
  } catch (error) {
    console.log(error)
  }
}

const signOut = async () => {
  try {
    await AsyncStorage.removeItem("@login")
  } catch (error) {
    console.log(error)
  }
}

export { getLogin, storeLogin, signOut };

