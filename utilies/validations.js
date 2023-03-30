export const isValidEmail = (stringEmail) => {
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(stringEmail))
}
export const isValidPassword = (stringPassword) => stringPassword.length >= 8
import { Platform,Dimensions } from "react-native"

export const screenWidth=Dimensions.get("screen").width;
export const screenHeight=Dimensions.get("screen").height; 