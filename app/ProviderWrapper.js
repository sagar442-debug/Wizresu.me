"use client";

import { Provider } from "react-redux";
import store from "@/redux/store";
import { ClerkProvider } from "@clerk/nextjs";

const ProviderWrapper = ({ children }) => {
  return (
    <ClerkProvider>
      <Provider store={store}>{children}</Provider>
    </ClerkProvider>
  );
};

export default ProviderWrapper;
