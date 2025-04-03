import React, { useState } from "react";
import { useDrag } from "@use-gesture/react";

function Todo() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const bindDrag = useDrag((state) => {
    setPos({ x: state.offset[0], y: state.offset[1] });
  });

  return (
    <div
      {...bindDrag()}
      className="fixed z-[999] cursor-grab active:cursor-grabbing"
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`,
      }}
    >
      <iframe
        className="w-[300px] h-[80vh] rounded-lg shadow-lg"
        src="http://localhost:5174"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Todo;
