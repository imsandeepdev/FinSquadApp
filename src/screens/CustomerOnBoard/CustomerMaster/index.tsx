import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import { AppTextInput } from "../../../components";

interface Props {
  data: any;
  updateData: (key: string, value: string) => void;
}

const CustomerMaster: React.FC<Props> = ({
  data,
  updateData,
}) => {
  return (
    <View style={styles.container}>

      <Text style={styles.sectionTitle}>
        CUSTOMER MASTER
      </Text>

      <AppTextInput
        title="Full Name"
        placeholder="Enter full name"
        value={data.fullName}
        onChangeText={text =>
          updateData("fullName", text)
        }
      />

      <AppTextInput
        title="Date of Birth"
        placeholder="DD/MM/YYYY"
        value={data.dob}
        onChangeText={text =>
          updateData("dob", text)
        }
      />

      <AppTextInput
        title="Mobile Number"
        placeholder="Enter mobile number"
        keyboardType="phone-pad"
        maxLength={10}
        value={data.mobile}
        onChangeText={text =>
          updateData("mobile", text)
        }
      />

      <AppTextInput
        title="Email"
        placeholder="Enter email"
        keyboardType="email-address"
        value={data.email}
        onChangeText={text =>
          updateData("email", text)
        }
      />

      <AppTextInput
        title="Aadhaar Number"
        placeholder="XXXX XXXX XXXX"
        keyboardType="numeric"
        maxLength={12}
        value={data.aadhaar}
        onChangeText={text =>
          updateData("aadhaar", text)
        }
      />

      <AppTextInput
        title="PAN Number"
        placeholder="ABCDE1234F"
        autoCapitalize="characters"
        maxLength={10}
        value={data.pan}
        onChangeText={text =>
          updateData("pan", text.toUpperCase())
        }
      />

      <AppTextInput
        title="Occupation"
        placeholder="Enter occupation"
        value={data.occupation}
        onChangeText={text =>
          updateData("occupation", text)
        }
      />

      <AppTextInput
        title="Annual Income"
        placeholder="Enter annual income"
        keyboardType="numeric"
        value={data.income}
        onChangeText={text =>
          updateData("income", text)
        }
      />

      <AppTextInput
        title="Marital Status"
        placeholder="Single / Married"
        value={data.maritalStatus}
        onChangeText={text =>
          updateData("maritalStatus", text)
        }
      />

      <AppTextInput
        title="Address"
        placeholder="Enter address"
        value={data.address}
        onChangeText={text =>
          updateData("address", text)
        }
        restInputTextProps={{
          multiline: true,
          numberOfLines: 3,
        }}
      />

    </View>
  );
};

export default CustomerMaster;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 15,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#8A97B3",
    marginBottom: 15,
  },
});