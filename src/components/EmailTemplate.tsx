import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

type FormDataType = {
  moveFrom: string;
  moveTo: string;
  propertyType: string;
  bedrooms: string;
  movingDate: string;
  flexibility?: string;
  name: string;
  phone: string;
  email?: string;
  notes?: string;
};

const BRAND = {
  primary: "#d4a843",
  secondary: "#1b2a4a",
  text: "#595959",
  bg: "#f7f5f0",
  white: "#ffffff",
  border: "#e8e2d6",
  gold_light: "#f5e9c8",
};

// ── helpers ──────────────────────────────────────────────────────────────────

function InfoCell({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <Column style={styles.infoCell}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </Column>
  );
}

function DetailRow({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <Row style={styles.detailRow}>
      <Column style={styles.detailLabelCol}>
        <Text style={styles.detailLabel}>{label}</Text>
      </Column>
      <Column style={styles.detailValueCol}>
        <Text style={styles.detailValue}>{value}</Text>
      </Column>
    </Row>
  );
}

// ── main component ────────────────────────────────────────────────────────────

export default function MovingRequestEmail({
  moveFrom,
  moveTo,
  propertyType,
  bedrooms,
  movingDate,
  flexibility,
  name,
  phone,
  email,
  notes,
}: FormDataType) {
  const formattedDate = (() => {
    try {
      return new Date(movingDate).toLocaleDateString("en-AE", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return movingDate;
    }
  })();

  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>
        New Moving Request from {name} — {moveFrom} → {moveTo}
      </Preview>

      <Body style={styles.body}>
        {/* ── HEADER ── */}
        <Section style={styles.headerWrapper}>
          <Container style={styles.headerContainer}>
            {/* Gold top rule */}
            <div style={styles.goldRuler} />

            <Row>
              <Column>
                {/* Logo / Brand name */}
                <Text style={styles.logoEyebrow}>DUBAI</Text>
                <Text style={styles.logoMain}>Prime Movers</Text>
                <Text style={styles.logoTagline}>
                  Premium Relocation Services
                </Text>
              </Column>
              <Column align="right">
                <div style={styles.badgeWrapper}>
                  <Text style={styles.badgeLabel}>NEW REQUEST</Text>
                  <Text style={styles.badgeTime}>
                    {new Date().toLocaleDateString("en-AE", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </Text>
                </div>
              </Column>
            </Row>

            {/* Gold bottom rule */}
            <div style={styles.goldRuler} />
          </Container>
        </Section>

        {/* ── HERO ROUTE CARD ── */}
        <Section style={styles.heroWrapper}>
          <Container style={styles.heroContainer}>
            <Text style={styles.heroEyebrow}>RELOCATION ROUTE</Text>

            <Row style={{ marginTop: "8px" }}>
              <Column align="center" style={{ width: "42%" }}>
                <Text style={styles.routeCity}>{moveFrom}</Text>
                <Text style={styles.routeSubtitle}>Origin</Text>
              </Column>

              <Column align="center" style={{ width: "16%" }}>
                <div style={styles.arrowWrapper}>
                  <div style={styles.arrowLine} />
                  <div style={styles.arrowHead} />
                  <Text style={styles.arrowIcon}>✦</Text>
                </div>
              </Column>

              <Column align="center" style={{ width: "42%" }}>
                <Text style={styles.routeCity}>{moveTo}</Text>
                <Text style={styles.routeSubtitle}>Destination</Text>
              </Column>
            </Row>

            {/* Quick‑glance chips */}
            <Row style={{ marginTop: "20px" }}>
              <Column align="center">
                <div style={styles.chipsRow}>
                  <span style={styles.chip}>🏠 {propertyType}</span>
                  <span style={styles.chip}>🛏 {bedrooms} Bed</span>
                  <span style={styles.chip}>📅 {formattedDate}</span>
                  {flexibility && (
                    <span style={styles.chip}>🔄 {flexibility}</span>
                  )}
                </div>
              </Column>
            </Row>
          </Container>
        </Section>

        {/* ── MAIN CONTENT ── */}
        <Container style={styles.mainContainer}>
          {/* ── CONTACT INFO ── */}
          <Section style={styles.sectionCard}>
            <div style={styles.sectionHeader}>
              <div style={styles.sectionAccentBar} />
              <Heading as="h2" style={styles.sectionTitle}>
                Customer Information
              </Heading>
            </div>

            <Row style={{ marginTop: "16px" }}>
              <InfoCell label="FULL NAME" value={name} />
              <InfoCell label="PHONE" value={phone} />
              {email && <InfoCell label="EMAIL" value={email} />}
            </Row>
          </Section>

          <Hr style={styles.divider} />

          {/* ── MOVE DETAILS ── */}
          <Section style={styles.sectionCard}>
            <div style={styles.sectionHeader}>
              <div style={styles.sectionAccentBar} />
              <Heading as="h2" style={styles.sectionTitle}>
                Move Details
              </Heading>
            </div>

            <div style={styles.detailTable}>
              <DetailRow label="Moving From" value={moveFrom} />
              <DetailRow label="Moving To" value={moveTo} />
              <DetailRow label="Property Type" value={propertyType} />
              <DetailRow label="Bedrooms" value={bedrooms} />
              <DetailRow label="Preferred Date" value={formattedDate} />
              {flexibility && (
                <DetailRow label="Date Flexibility" value={flexibility} />
              )}
            </div>
          </Section>

          {/* ── NOTES ── */}
          {notes && (
            <>
              <Hr style={styles.divider} />
              <Section style={styles.sectionCard}>
                <div style={styles.sectionHeader}>
                  <div style={styles.sectionAccentBar} />
                  <Heading as="h2" style={styles.sectionTitle}>
                    Additional Notes
                  </Heading>
                </div>
                <div style={styles.notesBox}>
                  <Text style={styles.notesText}>{notes}</Text>
                </div>
              </Section>
            </>
          )}

          {/* ── CTA ── */}
          <Section style={styles.ctaSection}>
            <Text style={styles.ctaText}>
              Please follow up with the customer within{" "}
              <strong style={{ color: BRAND.secondary }}>
                2 business hours
              </strong>
              .
            </Text>
            <Row>
              <Column align="center">
                <a href={`tel:${phone}`} style={styles.ctaButton}>
                  Call Customer
                </a>
              </Column>
              {email && (
                <Column align="center">
                  <a href={`mailto:${email}`} style={styles.ctaButtonOutline}>
                    Send Email
                  </a>
                </Column>
              )}
            </Row>
          </Section>
        </Container>

        {/* ── FOOTER ── */}
        <Section style={styles.footerWrapper}>
          <Container style={styles.footerContainer}>
            <div style={styles.goldRuler} />

            <Row style={{ marginTop: "20px" }}>
              <Column align="center">
                <Text style={styles.footerBrand}>PRIME DUBAI MOVERS</Text>
                <Text style={styles.footerTagline}>
                  Trusted Relocation, Exceptional Care
                </Text>
                <Text style={styles.footerMeta}>
                  This is an automated internal notification. Do not reply to
                  this email.
                </Text>
                <Text style={styles.footerMeta}>
                  © {new Date().getFullYear()} Prime Dubai Movers. All rights
                  reserved.
                </Text>
              </Column>
            </Row>

            <div style={{ ...styles.goldRuler, marginTop: "20px" }} />
          </Container>
        </Section>
      </Body>
    </Html>
  );
}

// ── styles ────────────────────────────────────────────────────────────────────

const styles: Record<string, React.CSSProperties> = {
  // Layout
  body: {
    backgroundColor: BRAND.bg,
    fontFamily: "'Georgia', 'Times New Roman', serif",
    margin: 0,
    padding: 0,
  },

  // Header
  headerWrapper: {
    backgroundColor: BRAND.secondary,
    padding: "0",
  },
  headerContainer: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "24px 40px",
  },
  goldRuler: {
    height: "2px",
    backgroundColor: BRAND.primary,
    width: "100%",
    borderRadius: "1px",
  },
  logoEyebrow: {
    color: BRAND.primary,
    fontSize: "10px",
    letterSpacing: "6px",
    fontFamily: "'Arial', sans-serif",
    margin: "16px 0 0 0",
    fontWeight: "700",
  },
  logoMain: {
    color: BRAND.white,
    fontSize: "28px",
    fontWeight: "700",
    margin: "2px 0 0 0",
    letterSpacing: "1px",
  },
  logoTagline: {
    color: "rgba(255,255,255,0.5)",
    fontSize: "11px",
    letterSpacing: "2px",
    fontFamily: "'Arial', sans-serif",
    margin: "4px 0 16px 0",
  },
  badgeWrapper: {
    display: "inline-block",
    backgroundColor: BRAND.primary,
    borderRadius: "4px",
    padding: "10px 16px",
    textAlign: "center",
    marginTop: "16px",
  },
  badgeLabel: {
    color: BRAND.secondary,
    fontSize: "10px",
    fontWeight: "800",
    letterSpacing: "3px",
    fontFamily: "'Arial', sans-serif",
    margin: "0",
  },
  badgeTime: {
    color: BRAND.secondary,
    fontSize: "12px",
    fontWeight: "600",
    fontFamily: "'Arial', sans-serif",
    margin: "2px 0 0 0",
  },

  // Hero Route
  heroWrapper: {
    backgroundColor: BRAND.secondary,
    paddingBottom: "0",
  },
  heroContainer: {
    maxWidth: "600px",
    margin: "0 auto",
    backgroundColor: BRAND.white,
    borderRadius: "12px 12px 0 0",
    padding: "32px 40px 24px",
    borderTop: `4px solid ${BRAND.primary}`,
  },
  heroEyebrow: {
    color: BRAND.primary,
    fontSize: "10px",
    letterSpacing: "5px",
    fontFamily: "'Arial', sans-serif",
    fontWeight: "700",
    margin: "0",
    textAlign: "center",
  },
  routeCity: {
    color: BRAND.secondary,
    fontSize: "20px",
    fontWeight: "700",
    margin: "0",
    textAlign: "center",
    lineHeight: "1.2",
  },
  routeSubtitle: {
    color: BRAND.text,
    fontSize: "11px",
    letterSpacing: "2px",
    fontFamily: "'Arial', sans-serif",
    margin: "4px 0 0 0",
    textAlign: "center",
  },
  arrowWrapper: {
    textAlign: "center",
    position: "relative",
    paddingTop: "8px",
  },
  arrowLine: {
    height: "1px",
    backgroundColor: BRAND.primary,
    opacity: 0.4,
  },
  arrowHead: {},
  arrowIcon: {
    color: BRAND.primary,
    fontSize: "18px",
    margin: "0",
    lineHeight: "1",
  },
  chipsRow: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "8px",
  },
  chip: {
    display: "inline-block",
    backgroundColor: BRAND.gold_light,
    color: BRAND.secondary,
    fontSize: "12px",
    fontFamily: "'Arial', sans-serif",
    fontWeight: "600",
    padding: "5px 12px",
    borderRadius: "20px",
    margin: "0 4px 4px 0",
  },

  // Main content
  mainContainer: {
    maxWidth: "600px",
    margin: "0 auto",
    backgroundColor: BRAND.white,
    padding: "0 40px 8px",
  },
  sectionCard: {
    padding: "24px 0",
  },
  sectionHeader: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  sectionAccentBar: {
    width: "4px",
    height: "20px",
    backgroundColor: BRAND.primary,
    borderRadius: "2px",
    display: "inline-block",
    marginRight: "10px",
    verticalAlign: "middle",
  },
  sectionTitle: {
    color: BRAND.secondary,
    fontSize: "14px",
    fontWeight: "700",
    letterSpacing: "2px",
    fontFamily: "'Arial', sans-serif",
    margin: "0",
    display: "inline",
    verticalAlign: "middle",
    textTransform: "uppercase",
  },

  // Info cells (contact)
  infoCell: {
    paddingRight: "20px",
    paddingBottom: "4px",
  },
  infoLabel: {
    color: BRAND.primary,
    fontSize: "9px",
    letterSpacing: "3px",
    fontFamily: "'Arial', sans-serif",
    fontWeight: "700",
    margin: "0",
    textTransform: "uppercase",
  },
  infoValue: {
    color: BRAND.secondary,
    fontSize: "15px",
    fontWeight: "600",
    margin: "2px 0 0 0",
    fontFamily: "'Georgia', serif",
  },

  // Detail table
  detailTable: {
    marginTop: "12px",
    borderRadius: "8px",
    overflow: "hidden",
    border: `1px solid ${BRAND.border}`,
  },
  detailRow: {
    borderBottom: `1px solid ${BRAND.border}`,
  },
  detailLabelCol: {
    width: "40%",
    backgroundColor: "#faf8f4",
    padding: "10px 16px",
    borderRight: `1px solid ${BRAND.border}`,
  },
  detailValueCol: {
    width: "60%",
    padding: "10px 16px",
  },
  detailLabel: {
    color: BRAND.text,
    fontSize: "12px",
    fontFamily: "'Arial', sans-serif",
    fontWeight: "600",
    margin: "0",
    letterSpacing: "0.5px",
  },
  detailValue: {
    color: BRAND.secondary,
    fontSize: "13px",
    fontFamily: "'Georgia', serif",
    fontWeight: "600",
    margin: "0",
  },

  // Notes
  notesBox: {
    backgroundColor: "#faf8f4",
    border: `1px solid ${BRAND.border}`,
    borderLeft: `4px solid ${BRAND.primary}`,
    borderRadius: "4px",
    padding: "16px 20px",
    marginTop: "12px",
  },
  notesText: {
    color: BRAND.text,
    fontSize: "14px",
    lineHeight: "1.7",
    margin: "0",
    fontStyle: "italic",
  },

  // CTA
  ctaSection: {
    padding: "24px 0 32px",
    textAlign: "center",
    borderTop: `1px solid ${BRAND.border}`,
  },
  ctaText: {
    color: BRAND.text,
    fontSize: "14px",
    lineHeight: "1.6",
    fontFamily: "'Arial', sans-serif",
    margin: "0 0 20px 0",
  },
  ctaButton: {
    display: "inline-block",
    backgroundColor: BRAND.primary,
    color: BRAND.secondary,
    fontSize: "13px",
    fontWeight: "700",
    fontFamily: "'Arial', sans-serif",
    letterSpacing: "1.5px",
    textDecoration: "none",
    padding: "12px 28px",
    borderRadius: "4px",
    margin: "0 8px",
  },
  ctaButtonOutline: {
    display: "inline-block",
    backgroundColor: "transparent",
    color: BRAND.secondary,
    fontSize: "13px",
    fontWeight: "700",
    fontFamily: "'Arial', sans-serif",
    letterSpacing: "1.5px",
    textDecoration: "none",
    padding: "11px 28px",
    borderRadius: "4px",
    border: `2px solid ${BRAND.secondary}`,
    margin: "0 8px",
  },

  // Footer
  footerWrapper: {
    backgroundColor: BRAND.secondary,
  },
  footerContainer: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "0 40px 28px",
  },
  footerBrand: {
    color: BRAND.white,
    fontSize: "13px",
    fontWeight: "700",
    letterSpacing: "4px",
    fontFamily: "'Arial', sans-serif",
    margin: "0",
    textAlign: "center",
  },
  footerTagline: {
    color: BRAND.primary,
    fontSize: "11px",
    letterSpacing: "1.5px",
    fontFamily: "'Georgia', serif",
    fontStyle: "italic",
    margin: "4px 0 12px",
    textAlign: "center",
  },
  footerMeta: {
    color: "rgba(255,255,255,0.35)",
    fontSize: "10px",
    fontFamily: "'Arial', sans-serif",
    margin: "3px 0",
    textAlign: "center",
    letterSpacing: "0.5px",
  },

  // Misc
  divider: {
    borderColor: BRAND.border,
    margin: "0",
  },
};
