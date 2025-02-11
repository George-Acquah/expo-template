import { ThemedText } from "@/components/ThemedText";
import useTokenRotation from "@/hooks/useTokens";
import { Redirect } from "expo-router";
import React from "react";

const Index = () => {
  const { auth } = useTokenRotation();
  // Render loading state while waiting for auth status to be determined
  if (auth === null) {
    return (
      <ThemedText style={{ textAlign: "center" }} >
        Loading...
      </ThemedText>
    );
  }

  // Render based on auth status
  return auth ? <Redirect href="/explore" /> : <Redirect href="/+not-found" />;
};

export default Index;