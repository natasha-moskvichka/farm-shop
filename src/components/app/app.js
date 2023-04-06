import React from "react";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import "./style.css";
import advantageList from "/src/mocks/advantageList";

export default function App() {
  return <PageWrapper advantages={advantageList} />;
}
