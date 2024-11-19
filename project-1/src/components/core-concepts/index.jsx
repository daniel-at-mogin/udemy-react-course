import React from "react";
import { CORE_CONCEPTS } from "../../data";
import CoreConceptItem from "../core-concept-item";
import "./styles.css";
import Section from "../section";

export default function CoreConcepts() {
  return (
    <Section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((concept, idx) => (
          <CoreConceptItem key={idx} {...concept} />
        ))}
      </ul>
    </Section>
  );
}
