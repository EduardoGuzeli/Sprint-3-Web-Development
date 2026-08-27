import { useEffect, useState } from "react";

import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Problem from "./components/Problem/Problem";
import Perception from "./components/perception/Perception";
import HowItWorks from "./components/howItWorks/HowItWorks";
import Demo from "./components/demo/Demo";
import MVP from "./components/MVP/MVP";
import Footer from "./components/footer/Footer";

const STORAGE_KEY = "smartcam_items";

function readItems() {
  try {
    return JSON.parse(
      localStorage.getItem(STORAGE_KEY)
    ) || [];
  } catch {
    return [];
  }
}

export default function App() {
  const [aiEnabled, setAiEnabled] = useState(
    () =>
      localStorage.getItem("smartcam_ai") !== "false"
  );

  const [items, setItems] = useState(readItems);

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(items)
    );
  }, [items]);

  useEffect(() => {
    localStorage.setItem(
      "smartcam_ai",
      String(aiEnabled)
    );
  }, [aiEnabled]);

  function saveCapture(capture) {
    const item = {
      id: crypto.randomUUID(),
      ...capture,
      createdAt: Date.now(),
      isPrivate: false
    };

    setItems((current) => [
      item,
      ...current
    ]);
  }

  function togglePrivacy(id) {
    setItems((current) =>
      current.map((item) =>
        item.id === id
          ? {
              ...item,
              isPrivate: !item.isPrivate
            }
          : item
      )
    );
  }

  function deleteItem(id) {
    setItems((current) =>
      current.filter(
        (item) => item.id !== id
      )
    );
  }

  return (
    <>
      <Header
        aiEnabled={aiEnabled}
        onToggleAI={() =>
          setAiEnabled(
            (value) => !value
          )
        }
      />

      <main>
        <Hero />

        <Problem />

        <Perception
          aiEnabled={aiEnabled}
        />

        <HowItWorks />

        <Demo
          aiEnabled={aiEnabled}
          onSaveCapture={saveCapture}
        />

        <MVP
          items={items}
          onTogglePrivacy={togglePrivacy}
          onDeleteItem={deleteItem}
        />
      </main>

      <Footer />
    </>
  );
}