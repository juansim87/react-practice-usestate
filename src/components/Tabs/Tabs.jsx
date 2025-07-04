import { useState } from "react";
import "./Tabs.css";

export const Tabs = () => {
  const items = [
    { id: "start", content: "Bienvenido, usuario" },
    { id: "profile", content: "Juan Simón Abad | Salamanca | 37 años" },
    { id: "settings", content: "Personalización pendiente" },
  ];

  const [activeTab, setActiveTab] = useState("start");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const currentItem = items.find((item) => item.id === activeTab);

  return (
    <div>
      <button onClick={() => handleTabClick("start")}>Inicio</button>
      <button onClick={() => handleTabClick("profile")}>Perfil</button>
      <button onClick={() => handleTabClick("settings")}>Ajustes</button>
      <p>{currentItem.content}</p>
    </div>
  );
};
