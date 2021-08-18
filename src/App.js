import React from "react";
import { RecoilRoot } from "recoil";
import { UserProvider } from "./propviders/UserPropvider";
import { Router } from "./router/Router";
import "./styles.css";

export default function App() {
  return (
    <RecoilRoot>
      <UserProvider>
        <Router />
      </UserProvider>
    </RecoilRoot>
  );
}
