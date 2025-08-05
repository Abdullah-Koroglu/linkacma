"use client";

import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");

  const openLinks = () => {
    const links = text.split("\n");
    console.log({links});
    links.forEach((link) => {
      window.open(link, "_blank");
      console.log(link);
    });
  };
  return (
    <div className="p-4 flex flex-col items-center justify-center">
      <textarea
        className="w-full min-h-96 bg-amber-300 p-4 rounded-md"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white p-2 rounded-md mt-4"
        onClick={() => openLinks()}
      >
        baslat
      </button>
    </div>
  );
}
