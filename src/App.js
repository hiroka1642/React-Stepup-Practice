import React from "react";
import { UserProvider } from "./propviders/UserPropvider";
import { Router } from "./router/Router";
import "./styles.css";

export default function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}
