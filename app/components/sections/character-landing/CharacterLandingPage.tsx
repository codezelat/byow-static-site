import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import type { CharacterLandingContent } from "@/app/data/characterLanding";
import CharacterShowcase from "./CharacterShowcase";
import styles from "./characterLanding.module.css";

const services = [
  { label: "Custom web design", href: "/services" },
  { label: "UX & UI design", href: "/services/ux-ui-design" },
  { label: "Responsive development", href: "/services/responsive-web-design" },
  { label: "Ecommerce websites", href: "/services/ecommerce-website-development" },
  { label: "Performance optimisation", href: "/services/performance-optimization" },
  { label: "SEO-ready development", href: "/services/seo-ready-development" },
];

interface CharacterLandingPageProps {
  content: CharacterLandingContent;
}

export default function CharacterLandingPage({ content }: CharacterLandingPageProps) {
  const { theme } = content;

  return (
    <div className={styles.page} data-character-theme={theme}>
      <section className={styles.hero} aria-labelledby={`${theme}-hero-title`}>
        <div className={styles.heroOrbit} aria-hidden="true" />
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <h1 id={`${theme}-hero-title`}>{content.hero.heading}</h1>
            <p>{content.hero.body}</p>
            <div className={styles.heroActions}>
              <a
                href={content.hero.primaryHref}
                target="_blank"
                rel="noreferrer"
                className={styles.primaryButton}
              >
                {content.hero.primaryLabel}
                <ArrowRight aria-hidden="true" />
              </a>
              <a href="#process" className={styles.textLink}>
                {content.hero.secondaryLabel}
              </a>
            </div>
          </div>

          <div className={styles.heroStage} aria-label="Original themed character artwork">
            {content.hero.characters.map((character, index) => (
              <div key={character.image} className={styles[`heroCharacter${index + 1}`]}>
                <Image
                  src={character.image}
                  alt={character.alt}
                  fill
                  priority={index === 0}
                  sizes={
                    index === 0
                      ? "(max-width: 768px) 80vw, 46vw"
                      : "(max-width: 768px) 34vw, 20vw"
                  }
                  className={styles.heroCharacterImage}
                />
              </div>
            ))}
          </div>
        </div>
        <a className={styles.scrollCue} href="#signal">
          <span>{theme === "wisdom" ? "Continue with clarity" : "The first clue"}</span>
          <span aria-hidden="true" />
        </a>
      </section>

      <section id="signal" className={styles.problemSection}>
        <div className={styles.sectionHeading}>
          <h2>{content.problem.heading}</h2>
          <p>{content.problem.intro}</p>
        </div>
        <div className={styles.problemList}>
          {content.problem.items.map((item, index) => (
            <article key={item.title} className={styles.problemItem}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <CharacterShowcase
        heading={content.showcase.heading}
        intro={content.showcase.intro}
        items={content.showcase.items}
        theme={theme}
      />

      <section id="process" className={styles.processSection}>
        <div className={styles.sectionHeading}>
          <h2>{content.process.heading}</h2>
          <p>{content.process.intro}</p>
        </div>
        <ol className={styles.processRail}>
          {content.process.steps.map((step, index) => (
            <li key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.servicesSection} aria-labelledby={`${theme}-services-title`}>
        <div className={styles.servicesIntro}>
          <h2 id={`${theme}-services-title`}>{content.services.heading}</h2>
          <p>{content.services.intro}</p>
        </div>
        <nav className={styles.serviceLinks} aria-label="BYOW web services">
          {services.map((service, index) => (
            <Link key={service.label} href={service.href}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{service.label}</strong>
              <ArrowRight aria-hidden="true" />
            </Link>
          ))}
        </nav>
      </section>

      <section className={styles.localSection}>
        <div>
          <h2>{content.local.heading}</h2>
          <p>{content.local.body}</p>
        </div>
        <address className={styles.contactList}>
          <a href="tel:+94727333577">
            <Phone aria-hidden="true" />
            <span>+94 72 733 3577</span>
          </a>
          <a href="mailto:info@byow.lk">
            <Mail aria-hidden="true" />
            <span>info@byow.lk</span>
          </a>
          <a
            href="https://maps.google.com/?q=345%2F35%2C%20RIT%20Alles%20Mw%2C%20Colombo%2008"
            target="_blank"
            rel="noreferrer"
          >
            <MapPin aria-hidden="true" />
            <span>345/35, RIT Alles Mw, Colombo 08</span>
          </a>
        </address>
      </section>

      <section className={styles.closingSection}>
        <h2>{content.closing.heading}</h2>
        <p>{content.closing.body}</p>
        <a
          href="https://cal.com/codezela/"
          target="_blank"
          rel="noreferrer"
          className={styles.primaryButton}
        >
          {content.closing.button}
          <ArrowRight aria-hidden="true" />
        </a>
      </section>
    </div>
  );
}
