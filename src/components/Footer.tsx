import Link from "next/link";
import React from "react";
import styles from "./Footer.module.css";

const col1Links = [
  { label: "Apartment", href: "https://www.secureguardservices.com/" },
  { label: "Business Park", href: "https://www.secureguardservices.com/" },
  { label: "Airport", href: "https://www.secureguardservices.com/" },
  { label: "Casino", href: "https://www.secureguardservices.com/" },
  { label: "Club", href: "https://www.secureguardservices.com/" },
  { label: "Construction Site", href: "https://www.secureguardservices.com/" },
  { label: "Educational Institute", href: "https://www.secureguardservices.com/" },
  { label: "Energy Facility", href: "https://www.secureguardservices.com/" },
  { label: "Event", href: "https://www.secureguardservices.com/" },
];

const col2Links = [
  { label: "Financial Institution", href: "https://www.secureguardservices.com/" },
  { label: "Government Facility", href: "https://www.secureguardservices.com/" },
  { label: "Healthcare Facility", href: "https://www.secureguardservices.com/" },
  { label: "High Rise", href: "https://www.secureguardservices.com/" },
  { label: "Homeowners Association", href: "https://www.secureguardservices.com/" },
  { label: "Hotel", href: "https://www.secureguardservices.com/" },
  { label: "Mall", href: "https://www.secureguardservices.com/" },
  { label: "Manufacturing Facility", href: "https://www.secureguardservices.com/" },
];

const col3Links = [
  { label: "Religious Facility", href: "https://www.secureguardservices.com/" },
  { label: "Shopping Center", href: "https://www.secureguardservices.com/" },
  { label: "Sporting Event", href: "https://www.secureguardservices.com/" },
  { label: "Storage Facility", href: "https://www.secureguardservices.com/" },
  { label: "Strike/Union Dispute", href: "https://www.secureguardservices.com/" },
  { label: "Transportation & Logistics Facility", href: "https://www.secureguardservices.com/" },
  { label: "Vehicle Dealer", href: "https://www.secureguardservices.com/" },
  { label: "Secure Guard", href: "https://www.secureguardservices.com/" },
];

export function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <div className={`container ${styles.footerInner}`}>
        <div className={styles.footerGrid}>
          {/* Column 1: Logo */}
          <div className={styles.footerBrandCol}>
            <Link href="/" className={styles.logoLink}>
              <img
                src="https://assets.cdn.filesafe.space/ApWkZ2IFXdvkS2AT3Tqg/media/6a0262de60a7a52fdc112210.png"
                alt="SGSS Logo"
                className={styles.logoImg}
              />
            </Link>
            <p className={styles.brandText}>
              Professional security officers, mobile patrols, and access control solutions tailored for your business.
            </p>
          </div>

          {/* Column 2: Links */}
          <div className={styles.footerLinksCol}>
            <h4 className={styles.colTitle}>Industries</h4>
            <ul className={styles.linksList}>
              {col1Links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Links */}
          <div className={styles.footerLinksCol}>
            <h4 className={styles.colTitle}>&nbsp;</h4>
            <ul className={styles.linksList}>
              {col2Links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Links */}
          <div className={styles.footerLinksCol}>
            <h4 className={styles.colTitle}>&nbsp;</h4>
            <ul className={styles.linksList}>
              {col3Links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.footerCopy}>
            © {new Date().getFullYear()} Secure Guard Security Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
