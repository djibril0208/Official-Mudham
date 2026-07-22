"use client";

import { useEffect, useState } from "react";

const BOOKING_URL =
  "https://letsbook.me/booking/riadmudhammarrakech?checkin=2026-07-21&checkout=2026-07-22&adults=2&children=0";
const PHONE_DISPLAY = "+212 6 61 15 80 84";
const PHONE_LINK = "+212661158084";
const EMAIL_DISPLAY = "Reservation@mudham.net";
const EMAIL_LINK = "reservation@mudham.net";
const MAP_QUERY =
  "Riad Mudham, n° 146 Derb Gachguach, Derb Dabachi, Marrakech 40000, Morocco";

const copy = {
  fr: {
    nav: ["La maison", "Le riad", "Origines", "Galerie", "Localisation"],
    roomsNav: "Chambres",
    reserve: "Réserver",
    heroKicker: "L’esprit de la maison",
    heroTitle: <>Un jardin caché au cœur<br /><em>de la médina de Marrakech</em></>,
    heroText: "Mudham est né de l’idée d’un jardin secret, protégé du tumulte de la médina. Derrière une porte discrète, un patio planté d’orangers et de lauriers s’ouvre sur le ciel, entre zellige noir et blanc, ferronneries anciennes et pierre claire.",
    discover: "Découvrir la maison",
    wholeKicker: "Le Riad dans son intégralité",
    wholeTitle: <>Votre jardin secret,<br /><em>rien que pour vous.</em></>,
    wholeP1: "Franchissez les portes de Mudham et appropriez-vous ce jardin secret. En privatisant la demeure, vous profitez de l’intégralité de la maison et de ses espaces pensés pour votre plus grand confort. C’est l’assurance d’un séjour où le temps s’arrête, loin de l’effervescence de la ville.",
    detailRoom: "Détail chambre",
    detailLounge: "Détail salon",
    wholeP2: "Votre réservation comprend l’accès exclusif au patio arboré, à ses salons chaleureux sous les arcades, ainsi qu’à nos différentes chambres d’exception. Chaque espace a été restauré avec soin, mêlant zelliges authentiques, ferronneries anciennes et artisanat marocain raffiné.",
    wholeP3: "Que ce soit pour un séjour en famille ou une retraite entre amis, Mudham vous offre l’intimité absolue accompagnée d’un service discret, comprenant le petit-déjeuner quotidien servi dans la quiétude du patio.",
    availability: "Voir les disponibilités",
    experienceKicker: "Votre séjour",
    experienceTitle: <>Une maison<br />à <em>vivre.</em></>,
    experiences: [
      ["01", "Privatisation intégrale", "L’intégralité du riad et de ses espaces est exclusivement réservée à votre groupe."],
      ["02", "Patio arboré", "Un jardin ouvert sur le ciel, planté d’orangers et de lauriers, au calme de la médina."],
      ["03", "Salons sous les arcades", "Des espaces chaleureux restaurés avec soin, entre zelliges et ferronneries anciennes."],
      ["04", "Petit-déjeuner quotidien", "Chaque matin, le petit-déjeuner est servi dans la quiétude du patio."],
    ],
    roomsKicker: "Les chambres",
    roomsTitle: <>Des chambres<br /><em>d’exception.</em></>,
    roomsText: "Votre réservation comprend l’accès exclusif au patio arboré, à ses salons chaleureux sous les arcades, ainsi qu’à nos différentes chambres d’exception. Chaque espace a été restauré avec soin, mêlant zelliges authentiques, ferronneries anciennes et artisanat marocain raffiné.",
    roomsDetail: "Détail chambre",
    originsKicker: "Origines",
    originsTitle: <>L’art de l’hospitalité<br /><em>marocaine.</em></>,
    originsP1: "Le nom Mudham trouve ses racines dans l’idée de deux jardins paradisiaques, reflétant l’équilibre et la symétrie. C’est cette vision qui a guidé la restauration de notre riad.",
    originsP2: "Chaque détail, des motifs géométriques des sols aux arches sculptées, a été confié aux meilleurs artisans locaux. Notre volonté : préserver l’âme d’une demeure historique tout en y apportant une touche de pureté et de modernité.",
    galleryKicker: "Instants Mudham",
    galleryTitle: <>Une maison<br />à <em>ressentir.</em></>,
    locationKicker: "Localisation",
    locationTitle: <>Au cœur de<br />la <em>Médina.</em></>,
    locationText: "Idéalement situé dans les ruelles historiques de Marrakech, Mudham est un havre de paix confidentiel. Une fois la porte franchie, l’agitation de la ville laisse place au calme absolu du patio.",
    address: "Adresse : N° 146 Derb Gachguach, Dabachi, 40000 Marrakech Medina",
    privacy: "(L’adresse exacte vous sera communiquée lors de votre réservation pour garantir la confidentialité des lieux)",
    openMap: "Ouvrir dans Maps",
    mapTitle: "Carte Google Maps du Riad Mudham à Marrakech",
    directKicker: "Contact Direct",
    directTitle: <>Notre équipe<br /><em>vous répond.</em></>,
    directText: "Pour toute question concernant la privatisation du riad ou l’organisation de votre séjour, notre équipe est à votre écoute.",
    call: "Appeler maintenant",
    whatsapp: "Écrire sur WhatsApp",
    email: "Envoyer un e-mail",
    footerNav: "Navigation",
    findUs: "Nous retrouver",
    footerBook: "Votre parenthèse commence ici.",
    copyright: "© 2026 Riad Mudham Marrakech",
  },
  en: {
    nav: ["The house", "The riad", "Origins", "Gallery", "Location"],
    roomsNav: "Bedrooms",
    reserve: "Book now",
    heroKicker: "The spirit of the house",
    heroTitle: <>A hidden garden in the heart<br /><em>of Marrakech’s medina</em></>,
    heroText: "Mudham was born from the idea of a secret garden, sheltered from the bustle of the medina. Behind a discreet door, a patio planted with orange and laurel trees opens to the sky, framed by black-and-white zellige, antique ironwork and pale stone.",
    discover: "Discover the house",
    wholeKicker: "The entire riad",
    wholeTitle: <>Your secret garden,<br /><em>entirely yours.</em></>,
    wholeP1: "Step through Mudham’s doors and make this secret garden your own. By reserving the property privately, you enjoy the entire house and all its spaces, designed for your utmost comfort. It is the promise of a stay where time stands still, far from the city’s bustle.",
    detailRoom: "Room details",
    detailLounge: "Lounge details",
    wholeP2: "Your booking includes exclusive access to the tree-filled patio, its welcoming lounges beneath the arcades, and our exceptional bedrooms. Every space has been carefully restored, blending authentic zellige, antique ironwork and refined Moroccan craftsmanship.",
    wholeP3: "Whether for a family stay or a retreat with friends, Mudham offers absolute privacy with discreet service, including a daily breakfast served in the tranquillity of the patio.",
    availability: "Check availability",
    experienceKicker: "Your stay",
    experienceTitle: <>A house<br />to <em>live in.</em></>,
    experiences: [
      ["01", "Exclusive use", "The entire riad and all its spaces are reserved exclusively for your group."],
      ["02", "Tree-filled patio", "A garden open to the sky, planted with orange and laurel trees, in the calm of the medina."],
      ["03", "Arcaded lounges", "Warm spaces carefully restored with zellige and antique ironwork."],
      ["04", "Daily breakfast", "Every morning, breakfast is served in the tranquillity of the patio."],
    ],
    roomsKicker: "The bedrooms",
    roomsTitle: <>Exceptional<br /><em>bedrooms.</em></>,
    roomsText: "Your booking includes exclusive access to the tree-filled patio, its welcoming lounges beneath the arcades, and our exceptional bedrooms. Every space has been carefully restored, blending authentic zellige, antique ironwork and refined Moroccan craftsmanship.",
    roomsDetail: "Bedroom details",
    originsKicker: "Origins",
    originsTitle: <>The art of Moroccan<br /><em>hospitality.</em></>,
    originsP1: "The name Mudham is rooted in the idea of two heavenly gardens, reflecting balance and symmetry. This vision guided the restoration of our riad.",
    originsP2: "Every detail, from the geometric floor patterns to the sculpted arches, was entrusted to the finest local craftspeople. Our aim is to preserve the soul of a historic home while bringing it a sense of purity and modernity.",
    galleryKicker: "Mudham moments",
    galleryTitle: <>A house<br />to <em>feel.</em></>,
    locationKicker: "Location",
    locationTitle: <>In the heart of<br />the <em>Medina.</em></>,
    locationText: "Ideally located in the historic lanes of Marrakech, Mudham is a secluded haven of peace. Once through the door, the city’s bustle gives way to the absolute calm of the patio.",
    address: "Address: No. 146 Derb Gachguach, Dabachi, 40000 Marrakech Medina",
    privacy: "(The exact address will be shared when you book to ensure the privacy of the property)",
    openMap: "Open in Maps",
    mapTitle: "Google Maps location of Riad Mudham in Marrakech",
    directKicker: "Direct contact",
    directTitle: <>Our team is<br /><em>here to help.</em></>,
    directText: "For any questions about reserving the riad privately or organising your stay, our team is here to help.",
    call: "Call now",
    whatsapp: "Message on WhatsApp",
    email: "Send an email",
    footerNav: "Navigation",
    findUs: "Find us",
    footerBook: "Your Marrakech escape starts here.",
    copyright: "© 2026 Riad Mudham Marrakech",
  },
};

const photos = [
  { src: "/hero.webp", altFr: "Patio arboré du Riad Mudham", altEn: "Tree-filled patio at Riad Mudham" },
  { src: "/patio.webp", altFr: "Patio du riad et son zellige noir et blanc", altEn: "Riad patio with black-and-white zellige" },
  { src: "/salon.webp", altFr: "Arcades et salons du Riad Mudham", altEn: "Arcades and lounges at Riad Mudham" },
  { src: "/chambre.webp", altFr: "Vue verticale du patio du Riad Mudham", altEn: "Vertical view of Riad Mudham’s patio" },
  { src: "/architecture.webp", altFr: "Architecture restaurée du Riad Mudham", altEn: "Restored architecture at Riad Mudham" },
];

const roomPhotos = [
  { src: "/room-1.webp", altFr: "Chambre du Riad Mudham aux tons verts et naturels", altEn: "Riad Mudham bedroom in natural green tones" },
  { src: "/room-2.webp", altFr: "Lit et luminaires artisanaux dans une chambre du Riad Mudham", altEn: "Bed and handcrafted lights in a Riad Mudham bedroom" },
  { src: "/room-3.webp", altFr: "Détail d'une chambre chaleureuse du Riad Mudham", altEn: "Detail of a warm Riad Mudham bedroom" },
];

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  const [lang, setLang] = useState<"fr" | "en">("fr");
  const t = copy[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const alt = (photo: (typeof photos)[number]) =>
    lang === "fr" ? photo.altFr : photo.altEn;
  const roomAlt = (photo: (typeof roomPhotos)[number]) =>
    lang === "fr" ? photo.altFr : photo.altEn;

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#accueil" aria-label="Riad Mudham">
          <img src="/mudham-logo.png" alt="Mudham" />
        </a>
        <nav className="desktop-nav" aria-label={lang === "fr" ? "Navigation principale" : "Main navigation"}>
          <a href="#maison">{t.nav[0]}</a>
          <a href="#riad">{t.nav[1]}</a>
          <a href="#chambres">{t.roomsNav}</a>
          <a href="#origines">{t.nav[2]}</a>
          <a href="#galerie">{t.nav[3]}</a>
          <a href="#localisation">{t.nav[4]}</a>
        </nav>
        <div className="language-switch" aria-label={lang === "fr" ? "Choisir la langue" : "Choose language"}>
          <button className={lang === "fr" ? "active" : ""} onClick={() => setLang("fr")} aria-pressed={lang === "fr"}>FR</button>
          <span>/</span>
          <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")} aria-pressed={lang === "en"}>EN</button>
        </div>
        <a className="booking-button header-cta" href={BOOKING_URL} target="_blank" rel="noreferrer">
          {t.reserve} <Arrow />
        </a>
        <details className="mobile-menu">
          <summary aria-label={lang === "fr" ? "Ouvrir le menu" : "Open menu"}><span></span><span></span></summary>
          <nav>
            <a href="#maison">{t.nav[0]}</a><a href="#riad">{t.nav[1]}</a>
            <a href="#chambres">{t.roomsNav}</a>
            <a href="#origines">{t.nav[2]}</a><a href="#galerie">{t.nav[3]}</a>
            <a href="#localisation">{t.nav[4]}</a>
            <a href={BOOKING_URL} target="_blank" rel="noreferrer">{t.reserve}</a>
          </nav>
        </details>
      </header>

      <section className="hero" id="accueil">
        <img className="hero-image" src={photos[0].src} alt={alt(photos[0])} />
        <div className="hero-shade" />
        <div className="hero-content reveal">
          <p className="eyebrow light">{t.heroKicker}</p>
          <h1>{t.heroTitle}</h1>
          <p className="hero-copy">{t.heroText}</p>
          <a className="booking-button light-button" href="#maison">{t.discover} <Arrow /></a>
        </div>
      </section>

      <section className="whole section" id="maison">
        <div className="whole-heading">
          <p className="eyebrow">{t.wholeKicker}</p>
          <h2>{t.wholeTitle}</h2>
        </div>
        <div className="whole-copy">
          <p className="lead-copy">{t.wholeP1}</p>
          <div className="detail-links"><a href="#galerie">{t.detailRoom}</a><a href="#galerie">{t.detailLounge}</a></div>
          <p>{t.wholeP3}</p>
          <a className="booking-button green-button" href={BOOKING_URL} target="_blank" rel="noreferrer">{t.availability} <Arrow /></a>
        </div>
      </section>

      <section className="stay section" id="riad">
        <div className="stay-image-wrap"><img src={photos[3].src} alt={alt(photos[3])} /><span>01</span></div>
        <div className="stay-content">
          <p className="eyebrow">{t.heroKicker}</p>
          <h2>{t.heroTitle}</h2>
          <p>{t.heroText}</p>
        </div>
      </section>

      <section className="rooms section" id="chambres">
        <div className="rooms-gallery">
          {roomPhotos.map((photo) => (
            <figure key={photo.src}>
              <img src={photo.src} alt={roomAlt(photo)} />
            </figure>
          ))}
          <span>{t.roomsDetail}</span>
        </div>
        <div className="rooms-copy">
          <p className="eyebrow light">{t.roomsKicker}</p>
          <h2>{t.roomsTitle}</h2>
          <p>{t.roomsText}</p>
          <a className="booking-button light-button" href={BOOKING_URL} target="_blank" rel="noreferrer">{t.availability} <Arrow /></a>
        </div>
      </section>

      <section className="services section">
        <div className="services-heading">
          <p className="eyebrow light">{t.experienceKicker}</p>
          <h2>{t.experienceTitle}</h2>
        </div>
        <div className="service-list">
          {t.experiences.map(([n, title, text]) => (
            <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section className="origins section" id="origines">
        <div className="origins-image"><img src={photos[4].src} alt={alt(photos[4])} /></div>
        <div className="origins-copy">
          <p className="eyebrow">{t.originsKicker}</p>
          <h2>{t.originsTitle}</h2>
          <p>{t.originsP1}</p>
          <p>{t.originsP2}</p>
        </div>
      </section>

      <section className="gallery section" id="galerie">
        <div className="gallery-title"><p className="eyebrow">{t.galleryKicker}</p><h2>{t.galleryTitle}</h2></div>
        <div className="gallery-grid">
          {photos.slice(1).map((photo, index) => <figure key={photo.src} className={`photo-${index + 1}`}><img src={photo.src} alt={alt(photo)} loading="lazy" /><figcaption>0{index + 1}</figcaption></figure>)}
        </div>
      </section>

      <section className="location section" id="localisation">
        <div className="location-copy">
          <p className="eyebrow">{t.locationKicker}</p>
          <h2>{t.locationTitle}</h2>
          <p>{t.locationText}</p>
          <address><strong>{t.address}</strong><small>{t.privacy}</small></address>
          <a className="booking-button outline-button" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`} target="_blank" rel="noreferrer">{t.openMap} <Arrow /></a>
        </div>
        <div className="map-card">
          <iframe title={t.mapTitle} src={`https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&z=18&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </section>

      <section className="contact section" id="contact">
        <div><p className="eyebrow light">{t.directKicker}</p><h2>{t.directTitle}</h2></div>
        <div className="contact-direct">
          <p>{t.directText}</p>
          <a className="phone-number" href={`tel:${PHONE_LINK}`}>{PHONE_DISPLAY}</a>
          <a className="contact-email" href={`mailto:${EMAIL_LINK}`}>{EMAIL_DISPLAY}</a>
          <div className="contact-actions">
            <a className="booking-button light-button" href={`tel:${PHONE_LINK}`}>{t.call} <Arrow /></a>
            <a className="booking-button light-button" href={`https://wa.me/${PHONE_LINK.replace("+", "")}`} target="_blank" rel="noreferrer">{t.whatsapp} <Arrow /></a>
            <a className="booking-button light-button" href={`mailto:${EMAIL_LINK}`}>{t.email} <Arrow /></a>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-brand"><img src="/mudham-logo.png" alt="Mudham" /><p>Maison d’hôtes · Marrakech</p></div>
        <div><p>{t.footerNav}</p><a href="#maison">{t.nav[0]}</a><a href="#chambres">{t.roomsNav}</a><a href="#origines">{t.nav[2]}</a><a href="#galerie">{t.nav[3]}</a></div>
        <div><p>{t.findUs}</p><a href="#localisation">Médina, Marrakech</a><a href={`tel:${PHONE_LINK}`}>{PHONE_DISPLAY}</a><a href={`mailto:${EMAIL_LINK}`}>{EMAIL_DISPLAY}</a></div>
        <div className="footer-book"><p>{t.footerBook}</p><a href={BOOKING_URL} target="_blank" rel="noreferrer">{t.reserve} <Arrow /></a></div>
        <small>{t.copyright}</small>
      </footer>
    </main>
  );
}
