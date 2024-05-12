"use client"
import "./styles.css";
import * as React from "react";
import { useState } from "react";
import { Reorder } from "framer-motion";
import { Item } from "./Item";
// import Item from "./Item";
// import { Item } from "./Item";

const initialItems = ["🍅 Candidate 1", "🥒 Candidate 2", "🧀 Candidate 3", "🥬 Candidate 4"];

export default function CandidateOption() {
  const [items, setItems] = useState(initialItems);

  return (
    <Reorder.Group axis="y" onReorder={setItems} values={items}>
      {items.map((item) => (
        <Item key={item} item={item} />
      ))}
    </Reorder.Group>
  );
}