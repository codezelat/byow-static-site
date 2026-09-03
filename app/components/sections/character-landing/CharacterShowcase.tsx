"use client";

import Image from "next/image";
import { useState } from "react";
import type { CharacterFeature, CharacterLandingTheme } from "@/app/data/characterLanding";
import styles from "./characterLanding.module.css";

interface CharacterShowcaseProps {
  heading: string;
  intro: string;
  items: CharacterFeature[];
  theme: CharacterLandingTheme;
}

export default function CharacterShowcase({
  heading,
  intro,
  items,
  theme,
}: CharacterShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(theme === "mystery" ? 2 : 1);
  const active = items[activeIndex];

  const moveSelection = (direction: number) => {
    setActiveIndex((current) => (current + direction + items.length) % items.length);
  };

  return (
    <section className={styles.showcaseSection} aria-labelledby={`${theme}-showcase-title`}>
      <div className={styles.sectionHeading}>
        <h2 id={`${theme}-showcase-title`}>{heading}</h2>
        <p>{intro}</p>
      </div>

      <div
        className={styles.characterRail}
        role="tablist"
        aria-label="Website delivery disciplines"
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault();
            moveSelection(1);
          }
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            moveSelection(-1);
          }
        }}
      >
        {items.map((item, index) => (
          <button
            key={item.title}
            type="button"
            role="tab"
            aria-selected={activeIndex === index}
            aria-controls={`${theme}-feature-panel`}
            tabIndex={activeIndex === index ? 0 : -1}
            className={`${styles.characterTab} ${
              activeIndex === index ? styles.characterTabActive : ""
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <span className={styles.characterImageWrap}>
              <Image
                src={item.image}
                alt=""
                fill
                sizes="(max-width: 640px) 32vw, (max-width: 1024px) 20vw, 190px"
                className={styles.characterThumb}
              />
            </span>
            <span className={styles.characterLabel}>
              <span>{item.number}</span>
              <strong>{item.title}</strong>
            </span>
          </button>
        ))}
      </div>

      <div
        id={`${theme}-feature-panel`}
        className={styles.featurePanel}
        role="tabpanel"
        aria-live="polite"
      >
        <div className={styles.featurePortrait}>
          <Image
            key={active.image}
            src={active.image}
            alt={active.alt}
            fill
            sizes="(max-width: 768px) 80vw, 380px"
            className={styles.featurePortraitImage}
          />
        </div>
        <div className={styles.featureCopy}>
          <span>{active.number}</span>
          <h3>{active.title}</h3>
          <p className={styles.featureLine}>{active.line}</p>
          <p>{active.description}</p>
        </div>
      </div>
    </section>
  );
}

