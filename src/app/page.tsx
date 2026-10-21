import Image from "next/image";
import styles from "./page.module.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PreFooterCTA } from "@/components/PreFooterCTA";

// Reusable icons for situations and fits
const situations = [
  { icon: "🚶", title: "After-Hours Trespassing", desc: "Deterring unauthorized after-hours activity and trespassing on property boundaries after business hours." },
  { icon: "🚗", title: "Vehicle Break-ins", desc: "Patrolling shared parking structures and open lots to help deter theft and break-ins." },
  { icon: "🎨", title: "Vandalism", desc: "Deterring graffiti, property damage, and vandalism of facilities during low-traffic periods." },
  { icon: "🅿️", title: "Unauthorized Parking", desc: "Document parking violations and coordinate authorized towing when included in site post orders." },
  { icon: "👤", title: "Suspicious Persons", desc: "Observe and report concerning behavior, request that unauthorized persons leave when appropriate, and escalate according to client policy." },
  { icon: "🔑", title: "Tenant Lockouts & Access", desc: "Assist with verified access requests only under written client authorization." },
  { icon: "🚨", title: "Alarm Response", desc: "Alarm assessment and escalation under the agreed response plan, with mobile dispatch available when included or contracted separately." },
  { icon: "🚚", title: "Vendor Access Issues", desc: "Managing check-ins, verifying authorizations, and directing vendor vehicles after hours per site procedures." },
  { icon: "🌌", title: "Parking Lot Safety", desc: "Conducting visible patrols to support the safety of employees and visitors walking to their vehicles." },
  { icon: "📋", title: "Property Damage Reports", desc: "Document observed conditions, preserve incident details, and share reports with property management." },
];

const properties = [
  { icon: "🏢", label: "Business Parks" },
  { icon: "🏫", label: "Office Campuses" },
  { icon: "🏙️", label: "Corporate Plazas" },
  { icon: "🏬", label: "Multi-Tenant Office Properties" },
  { icon: "🏥", label: "Professional Buildings" },
  { icon: "🅿️", label: "Parking Lots" },
  { icon: "🛍️", label: "Mixed-Use Commercial Properties" },
];

const coverageOptions = [
  { service: "Business Hours Support", schedule: "Sample: Mon - Fri Day", desc: "Monitoring access points, managing visitor logs, and assisting tenants and deliveries as defined by the service agreement." },
  { service: "Overnight & After-Hours Patrols", schedule: "Sample: 6 PM - 6 AM", desc: "Scheduled physical patrols and building lock-up checks during vacant periods to help deter trespassing and break-ins (hours determined by agreement)." },
  { service: "Weekend & Holiday Coverage", schedule: "Sample: Weekend / Custom", desc: "Scheduled property checks and incident reporting during agreed coverage hours when the campus is closed." },
  { service: "Alarm & Incident Response", schedule: "By Agreement / Contracted", desc: "Alarm assessment and escalation under the agreed response plan, with mobile dispatch available when included or contracted separately." },
];

export default function BusinessParkSecurityPage() {
  return (
    <main className={styles.main}>
      {/* ===== NAVBAR ===== */}
      <Navbar />

      {/* ===== SECTION 1: HERO ===== */}
      <section className={styles.hero} id="hero">
        <div className={styles.heroBg}>
          <Image
            src="https://cms.secureguardservices.com/wp-content/uploads/2026/09/buspark.png"
            alt="Secure Guard officer standing in front of a sleek modern business park at twilight"
            fill
            className={styles.heroBgImg}
            priority
            unoptimized
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={`container ${styles.heroWrapper}`}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge} id="hero-badge">
              <span className={styles.heroBadgeDot} />
              Business Park Security Services
            </div>
            <h1 className={styles.heroTitle} id="hero-title">
              Secure Multi-Tenant Properties, Parking Areas, Offices, <span className={styles.heroTitleAccent}>and After-Hours Activity</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Secure Guard Security Services delivers responsive, de-escalation-focused security for commercial properties. Support tenant safety and business operations with professional patrols, access support, and incident reporting.
            </p>
            <div className={styles.heroCtas}>
              <a 
                href="https://www.secureguardservices.com/contact" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.btnPrimary} 
                id="hero-cta-primary"
              >
                Request a Free Quote
              </a>
              <a 
                href="#solution" 
                className={styles.btnOutline} 
                id="hero-cta-secondary"
              >
                Explore Solutions
              </a>
            </div>
          </div>
        </div>
        <div className={styles.heroScroll} aria-hidden="true">
          <span className={styles.heroScrollDot} />
        </div>
      </section>

      {/* ===== SECTION 2: REAL-LIFE PROBLEM ===== */}
      <section className={styles.whySection} id="problem">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Real-Life Problem</span>
            <h2 className={styles.sectionTitle}>
              Challenges of a <span className={styles.titleAccent}>Multi-Tenant Corporate Campus</span>
            </h2>
          </div>
          <div className={styles.whyGrid}>
            <div className={styles.whyText}>
              <p className={styles.bodyText}>
                Business parks often have multiple tenants, shared parking lots, delivery traffic, visitors, vendors, and after-hours activity. This can create confusion about who belongs on the property and who does not.
              </p>
              <p className={styles.bodyText}>
                Clients need security that can patrol large areas, monitor buildings, support tenants, document suspicious activity, and respond professionally when issues happen outside normal business hours.
              </p>
            </div>
            <div className={styles.whyCards}>
              {[
                { icon: "🚗", title: "Vehicle Break-ins", desc: "Open parking structures and lots are prime targets for vehicle break-ins and auto theft." },
                { icon: "🚶", title: "After-Hours Trespassing", desc: "Unoccupied corporate areas are susceptible to unauthorized after-hours activity, trespassing, and vandalism after closing." },
                { icon: "👤", title: "Access Control", desc: "Managing vendor access, delivery traffic, and diverse visitor types without bottlenecks." },
                { icon: "🛠️", title: "Property Damage", desc: "Vandalism, graffiti, and facility damage that can occur during low-traffic night or weekend hours." },
              ].map((c) => (
                <div key={c.title} className={styles.whyCard}>
                  <div className={styles.whyCardIconWrapper}>
                    <span className={styles.whyCardIcon}>{c.icon}</span>
                  </div>
                  <div className={styles.whyCardContent}>
                    <h3 className={styles.whyCardTitle}>{c.title}</h3>
                    <p className={styles.whyCardDesc}>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: SECURE GUARD SOLUTION ===== */}
      <section className={styles.addonSection} id="solution">
        <div className="container">
          <div className={styles.addonGrid}>
            <div className={styles.addonImageCol}>
              <Image 
                src="https://cms.secureguardservices.com/wp-content/uploads/2026/09/bp1.png" 
                alt="Secure Guard officer patrolling business park corporate campus" 
                width={600} 
                height={500} 
                className={styles.addonImage} 
                style={{ objectFit: 'cover' }}
                unoptimized
              />
            </div>
            <div className={styles.addonContent}>
              <span className={styles.sectionTag}>Secure Guard Solution</span>
              <h2 className={styles.sectionTitle}>
                Visible Patrols & <span className={styles.titleAccent}>Professional Corporate Security</span>
              </h2>
              <p className={styles.bodyText}>
                Secure Guard provides business park security officers, mobile patrols, parking lot monitoring, access control, tenant support, lock-up checks, alarm assessment, and incident reporting, with standing guards and mobile patrol services tailored to your service agreement.
              </p>
              <p className={styles.bodyText}>
                Our officers are trained to represent your property professionally, assist visitors, support property managers, document incidents, and de-escalate situations in accordance with site post orders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: CUSTOMIZABLE COVERAGE (TOWER SECTION APPROACH) ===== */}
      <section className={styles.towerSection} id="coverage">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTagLight}>Customizable Coverage</span>
            <h2 className={styles.sectionTitleLight}>
              Flexible Security Scheduling <span className={styles.titleAccentGold}>for Commercial Campuses</span>
            </h2>
          </div>
          <p className={styles.bodyTextCenteredLight}>
            Sample schedules are shown below. Coverage hours, patrol frequency, and staffing levels are determined by your property&apos;s service agreement.
          </p>

          {/* Coverage Options Table */}
          <div className={styles.tableWrapper} id="coverage-table">
            <table className={styles.pricingTable}>
              <thead>
                <tr>
                  <th>Coverage Type</th>
                  <th>Schedule Focus</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {coverageOptions.map((row) => (
                  <tr key={row.service}>
                    <td className={styles.tdComponent}>{row.service}</td>
                    <td>
                      <span className={styles.badgeOptional}>{row.schedule}</span>
                    </td>
                    <td className={styles.tdDesc}>{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: WHAT THIS MEANS FOR THE CLIENT ===== */}
      <section className={styles.opsSection} id="benefits">
        <div className="container">
          <div className={styles.opsGrid}>
            <div className={styles.opsText}>
              <span className={styles.sectionTagLight}>Client Value</span>
              <h2 className={styles.sectionTitleLight}>
                What This Means <span className={styles.titleAccentGold}>for the Client</span>
              </h2>
              <p className={styles.bodyTextLight}>
                By deploying Secure Guard, you establish a reliable security presence that supports both property managers and tenants, helps deter property damage, and supports a professional campus environment.
              </p>
            </div>
            <div className={styles.opsFeatures}>
              {[
                "Better protection for tenants and visitors",
                "Reduced after-hours trespassing and vandalism",
                "Documented patrols across multiple buildings",
                "Support for property managers and tenant complaints",
                "Improved visibility in parking lots and common areas",
                "Clear response to suspicious activity",
                "Flexible staffing for large business campuses",
              ].map((benefit, idx) => (
                <div key={idx} className={styles.opsFeatureItem}>
                  <span className={styles.opsFeatureIcon}>🛡️</span>
                  <span className={styles.opsFeatureLabel}>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: COMMON SITUATIONS ===== */}
      <section className={styles.addonSectionAlt} id="situations">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Field Expertise</span>
            <h2 className={styles.sectionTitle}>
              Common Business Park <span className={styles.titleAccent}>Security Situations We Handle</span>
            </h2>
          </div>
          <div className={styles.situationsGrid}>
            {situations.map((sit, index) => (
              <div key={index} className={styles.situationCard}>
                <div className={styles.situationHeader}>
                  <span className={styles.situationIcon}>{sit.icon}</span>
                  <h3 className={styles.situationTitle}>{sit.title}</h3>
                </div>
                <p className={styles.situationDesc}>{sit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 7: BEST FIT FOR ===== */}
      <section className={`${styles.gallerySection} ${styles.bestFitSection}`} id="best-fit">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTagLight}>Best Fit For</span>
            <h2 className={styles.sectionTitleLight}>
              Properties We <span className={styles.titleAccentGold}>Secure & Manage</span>
            </h2>
            <p className={styles.sectionSubtextLight}>
              Our commercial security services are optimized for various business developments, from single professional buildings to sprawling corporate parks.
            </p>
          </div>
          <div className={styles.propertiesGrid}>
            {properties.map((prop, idx) => (
              <div key={idx} className={styles.propertyCard}>
                <div className={styles.propertyIcon}>{prop.icon}</div>
                <span className={styles.propertyLabel}>{prop.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRE-FOOTER CTA ===== */}
      <PreFooterCTA />

      {/* ===== FOOTER ===== */}
      <Footer />
    </main>
  );
}
