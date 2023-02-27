import React from "react";
import { AppBar, HStack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { View } from "react-native";

export default function Frontscreen({ navigation })
{
    return (
        <View>
            <AppBar
                title="Title"
                subtitle="Lorem ipsum"
                centerTitle={true}
                leading={props => (
                <IconButton 
                icon={props => <Icon name="menu"  />
                })
            ></AppBar>    
        </View>
    );
}