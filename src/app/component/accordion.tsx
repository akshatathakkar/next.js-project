'use client'
import { useState } from "react";

export default function Accordion(props:any) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div
      style={{
        border: "1px solid rgba(209, 213, 219, 0.5)"
      }}
    >
      <button
        style={{
          textAlign: "left",
          padding: "4px",
          border: "none",
          background: "transparent",
          outline: "none",
          cursor: "pointer"
        }}
        onClick={toggle}
        type="button"
      >
        <p>{props.title}</p>
      </button>
      <div
        style={{ display: isShowing ? "block" : "none", padding: "5px" }}
        dangerouslySetInnerHTML={{
          __html: props.content
        }}
      />
    </div>
  );
}
