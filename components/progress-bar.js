import { View, ViewStyle } from "react-native";
import tailwind from "twrnc";



/**
 * React Native progress bar component built with Tailwind CSS
 */
export const ProgressBar = ({
    variant = "default",
    progress,
    containerStyle,
    barStyle,
}) => {
    const variants = {
        default: tailwind`bg-blue-400`,
        success: tailwind`bg-green-400`,
        destructive: tailwind`bg-red-400`,
        warning: tailwind`bg-orange-400`,
    };

    const getWidth = () => {
        if (progress > 100) {
            return "100%";
        }

        if (progress < 0) {
            return "0%";
        }

        return `${progress}%`;
    };

    return (
        <View
            style={[tailwind`h-6 bg-neutral-200 rounded-full w-full`, containerStyle]}
        >
            <View
                style={[
                    tailwind`h-6 rounded-full`,
                    variants[variant],
                    barStyle,
                    { width: getWidth() },
                ]}
            />
        </View>
    );
};
