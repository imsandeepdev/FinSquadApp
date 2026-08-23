import React, { useState } from "react";

import {
View,
Text,
Image,
TouchableOpacity,
LayoutAnimation,
} from "react-native";

import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";
import { useTheme } from "../../../utils/provider/themeProvider";
import { getStyles } from "./styles";
import { responsiveSize } from "../../../res";

const HeroSection = () => {
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);
  const gridientColor = [themeColor.appColor, themeColor.appColor, themeColor.secAppColor];

  const [expanded, setExpanded] = useState(false);

  const toggleProfile = () => {
    LayoutAnimation.configureNext(
      LayoutAnimation.Presets.easeInEaseOut,
    );

    setExpanded(prev => !prev);
  };

  return (
    <View>
      {/* Always rendered — this is the only toggle control, so it can
          never end up "missing" after collapsing. */}
      <View style={styles.header}>
        <View style={styles.flexOne}>
          <Text style={styles.greeting}>
            Good Morning ☀️
          </Text>

          <Text style={styles.name}>
            Riya Nandi
          </Text>

          <Text style={styles.role}>
            Senior Relationship Manager
          </Text>
        </View>

        <TouchableOpacity
          onPress={toggleProfile}
          style={styles.profileButton}
        >
          <Text style={styles.profileButtonText}>
            {expanded ? "Hide Profile" : "View Profile"}
          </Text>

          <Icon
            name={expanded ? "chevron-up" : "chevron-forward"}
            size={responsiveSize(18)}
            color={themeColor.white}
          />
        </TouchableOpacity>
      </View>

      {/* Extra detail panel — expands/collapses below the header above,
          which never moves or disappears. */}
      {expanded && (
        <LinearGradient
          colors={gridientColor}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.container}
        >
          <View style={styles.particle1} />
          <View style={styles.particle2} />
          <View style={styles.particle3} />

          <View style={styles.topBody}>
            <View style={styles.profileRow}>
              <View style={styles.profileWrap}>
                <Image
                  source={{ uri: "https://i.pravatar.cc/200" }}
                  style={styles.profile}
                />
                <View style={styles.online} />
              </View>

              <View style={styles.infoWrap}>
                <View style={styles.empChip}>
                  <Icon
                    name="lock-closed"
                    size={responsiveSize(12)}
                    color={themeColor.white}
                  />
                  <Text style={styles.empText}>{'EMP102345'}</Text>
                </View>

                <View style={styles.locationRow}>
                  <Icon
                    name="location-outline"
                    size={responsiveSize(14)}
                    color="#e9eaef"
                  />
                  <Text style={styles.location}>{'Varanasi Branch'}</Text>
                </View>
              </View>
            </View>

            <View style={styles.achievement}>
              <View>
                <Text style={styles.gold}>{'🏆 Gold Performer'}</Text>
                <Text style={styles.top10}>{'Top 10%'}</Text>
              </View>
              <View style={styles.divider} />
              <View>
                <Text style={styles.level}>{'⚡ Level 4'}</Text>
                <Text style={styles.advisor}>{'Pro Advisor'}</Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      )}
    </View>
  );
};

export default HeroSection;
