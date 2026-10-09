import { Host, Icon, Text, TextInput, Button, Row, Column } from "@expo/ui";

import { Stack, useRouter } from "expo-router";
import React, { useState } from "react";
import { useRef } from "react";
import { StyleSheet } from "react-native";

const DISMISS = Icon.select({
  ios: "xmark",
  android: import("@expo/material-symbols/close.xml"),
});

const CHECK_MARK = Icon.select({
  ios: "checkmark",
  android: import("@expo/material-symbols/check.xml"),
});

export const ICON_TRASH_FILL = Icon.select({
  ios: "trash.fill",
  android: import("@expo/material-symbols/delete.xml"),
});

export const TOOLBAR_CHEVRON_LEFT = Icon.select({
  ios: "chevron.left",
  android: require("@expo/material-symbols/arrow_back.xml"),
});

export default function FamilyAddScreen() {
  const router = useRouter();
  const [changeIcon, setChangeIcon] = useState(false);
  const inputRef = useRef<TextInputRef>(null);

  const undoChanges = () => {
    inputRef.current?.clear();
    setChangeIcon(false);
  };

  return (
    <>
      {/* Causes Header to show blank button on firt navigate */}
      <Stack.Screen
        options={{
          headerTitleAlign: "center",
          headerLeft: () => (
            <Host matchContents>
              <Icon
                name={changeIcon ? DISMISS : TOOLBAR_CHEVRON_LEFT}
                onPress={changeIcon ? undoChanges : router.back}
              />
            </Host>
          ),
        }}
      />
      <Stack.Title>{`Add Family Member`}</Stack.Title>
      <Stack.Toolbar placement="right">
        <Stack.Toolbar.Button icon={CHECK_MARK} variant="prominent" />
      </Stack.Toolbar>

      <Host matchContents>
        <Column>
          <Row>
            <TextInput
              ref={inputRef}
              defaultValue="hello"
              placeholder="Type here"
              onChangeText={(value) => setChangeIcon(true)}
            />
          </Row>
          <Row>
            <Button label="Clear" onPress={undoChanges} />
          </Row>
        </Column>
      </Host>
    </>
  );
}

const styles = StyleSheet.create({});
