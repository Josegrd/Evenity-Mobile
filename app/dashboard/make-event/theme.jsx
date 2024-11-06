import { Text, TextInput, View, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { registMakeEvent } from "@/redux/slices/makeEventSlice";

// import MakeEventLayout from "../dashboard/(tabs)/MakeEventLayout";
import tailwind from "twrnc";
import MakeEventLayout from "@/app/dashboard/make-event/layout";

const MakeEventTheme = () => {
  const [themeEvent, setThemeEvent] = useState();
  const dispatch = useDispatch();
  const [isInputValid, setIsInputValid] = useState(false);

  const validateInputs = () => {
    if (themeEvent) {
      setIsInputValid(true);
    } else {
      setIsInputValid(false);
    }
  };

  const handleMakeEvent = () => {
    if (!isInputValid) {
      Alert.alert("Invalid Input", "Please enter a valid event theme.");
      return;
    } else {
      dispatch(
        registMakeEvent({
          theme: themeEvent,
        })
      );
    }
  };

  useEffect(() => {
    validateInputs();
  }, [themeEvent]);

  return (
    <MakeEventLayout
      progress={50}
      nextRoute="capacity"
      handleNext={handleMakeEvent}
      isInputValid={isInputValid}
    >
      <View className="px-10" style={[tailwind`mt-5`]}>
        <Text className="text-6xl font-outfitSemiBold" style={[tailwind`mb-3`]}>
          What Event
        </Text>
        <Text className="text-6xl font-outfitExtraBold">Theme?</Text>
      </View>
      <View className="flex flex-col gap-4 w-full mt-12 px-10">
        <View className="flex flex-col gap-2">
          <Text className="font-outfitRegular">Event Theme</Text>
          <TextInput
            className="border-[0.5px] py-2 px-4 rounded-xl border-gray-400 text-xs font-outfitLight w-full"
            placeholder="Enter your event theme"
            value={themeEvent}
            onChangeText={setThemeEvent}
          />
        </View>
      </View>
    </MakeEventLayout>
  );
};

export default MakeEventTheme;
