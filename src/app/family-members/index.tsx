import { FieldGroup, Host, Row, Spacer, Text } from "@expo/ui";
import { foregroundStyle } from "@expo/ui/swift-ui/modifiers";
import { Color, useRouter } from "expo-router";
import React from "react";

export default function FamilyMembersScreen() {
  const router = useRouter();

  return (
    <>
      <Host style={{ flex: 1 }}>
        <FieldGroup>
          {["test"].map((familyMember) => (
            <Row
              key={familyMember}
              spacing={6}
              onPress={() => {
                router.push({
                  pathname: "/family-members/add-edit",
                });
              }}
            >
              {/* Modifiers for ios don't crash android and vice versa, they are ignored! */}
              <Text modifiers={[foregroundStyle(Color.ios.label)]}>
                {familyMember}
              </Text>
              <Spacer flexible />
            </Row>
          ))}
        </FieldGroup>
      </Host>
    </>
  );
}
