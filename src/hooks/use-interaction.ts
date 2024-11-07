"use client";
import { useEffect, useState } from "react";

const events = ["click", "keydown", "mousedown", "touchstart"];
const invalidKeys = [
  "Alt",
  "Control",
  "Shift",
  "Meta",
  "CapsLock",
  "Tab",
  "Escape",
  "F1",
  "F2",
  "F3",
  "F4",
  "F5",
  "F6",
  "F7",
  "F8",
  "F9",
  "F10",
  "F11",
  "F12",
];
const isValidKey = (event: KeyboardEvent) => {
  return !invalidKeys.includes(event.key);
};

export default function useInteraction() {
  const [ready, setReady] = useState(false);

  const listener = (event: Event) => {
    if (event.type === "keydown" && !isValidKey(event as KeyboardEvent)) {
      return;
    }
    if (ready === false) {
      setReady(true);
    }
  };

  useEffect(() => {
    events.forEach((event) => {
      document.addEventListener(event, listener);
    });

    return () => {
      events.forEach((event) => {
        document.removeEventListener(event, listener);
      });
    };
  }, []);

  return ready;
}
