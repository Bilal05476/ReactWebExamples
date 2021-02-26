import React from "react";
import NotifiCompo from "./NotifiCompo";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import "./css/dashpro.css";

export default function BottomNav() {
  return (
    <BottomNavigation className="bottomNav">
      <NotifiCompo />
    </BottomNavigation>
  );
}
