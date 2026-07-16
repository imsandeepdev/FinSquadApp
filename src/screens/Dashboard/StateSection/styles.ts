import {StyleSheet} from "react-native";
import { ThemeColorType } from "../../../res/colors/theme.types";
import { responsiveSize } from "../../../res";

export const getStyles = (AppColor: ThemeColorType) =>
StyleSheet.create({

  container: {
    marginHorizontal: responsiveSize(20),
    marginTop: responsiveSize(20),
  },

  heading: {
    fontSize: responsiveSize(16),
    fontWeight: "700",
    color: AppColor.primaryText,
    marginBottom: responsiveSize(15),
  },

  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "48%",
    backgroundColor: AppColor.cardColor,
    borderRadius: responsiveSize(14),
    padding: responsiveSize(10),
    marginBottom: responsiveSize(15),
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: .08,
    shadowOffset: {
      width: 0,
      height: responsiveSize(4),
    },
    shadowRadius: responsiveSize(10),
  },

  cardInner: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  infoWrap: {
    marginLeft: responsiveSize(10),
    flex: 1,
  },

  iconBox: {
    height: responsiveSize(50),
    width: responsiveSize(50),
    borderRadius: responsiveSize(25),
    justifyContent: "center",
    alignItems: "center",
  },

  value: {
    fontSize: responsiveSize(18),
    fontWeight: "700",
    marginTop: responsiveSize(2),
    color: AppColor.primaryText,
  },

  title: {
    marginTop: responsiveSize(4),
    fontSize: responsiveSize(12),
    color: AppColor.lightBlack,
  },

});

export default getStyles;
