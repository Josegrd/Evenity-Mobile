import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const Product = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen
            name="detail"
        />
    </Stack>
  )
}

export default Product