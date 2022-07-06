/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Text, Container } from "theme-ui";
import Logo from "components/logo";
import Link from "next/link";
import { WidgetAbout, WidgetInfo, WidgetPages, WidgetConnect } from "./widget";
import { about } from "./footer.data";
import { information } from "./footer.data";
import { pages } from "./footer.data";
import { connect } from "./footer.data";
import { rgba } from "polished";

export default function Footer() {
  return (
    <Box as="footer" sx={styles.footer}>
      <Container>
        <Box sx={styles.footerTopInner}>
          <Box sx={styles.about}>
            <Box sx={styles.logo}>
              <Logo />
            </Box>
            <Box sx={styles.terms}>
              <Link href="/terms-and-conditions">Terms of use</Link>
              <Text as="span">|</Text>
              <Link href="/privacy-policy">Privacy</Link>
            </Box>
            <Text as="p" sx={styles.copyright}>
              &copy; GarbhaGudi IVF Center - {new Date().getFullYear()}
            </Text>
          </Box>
          {about.map(({ id, title, items }) => (
            <WidgetAbout key={id} title={title} items={items} />
          ))}
          {information.map(({ id, title, items }) => (
            <WidgetInfo key={id} title={title} items={items} />
          ))}
          {pages.map(({ id, title, items }) => (
            <WidgetPages key={id} title={title} items={items} />
          ))}
          {connect.map(({ id, title, items }) => (
            <WidgetConnect key={id} title={title} items={items} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  footer: {
    pt: [8],
    pb: [8],
  },
  footerTopInner: {
    gap: [30, null, 50, "20px 50px", 17, 50],
    display: ["grid"],
    gridTemplateColumns: [
      "repeat(2, 1fr)",
      null,
      null,
      "repeat(4, 1fr)",
      "repeat(5, 1fr)",
    ],
  },
  footerInner: {
    borderTop: `1px solid #D9E0E7`,
    display: ["block", null, "flex"],
    alignItems: "center",
    justifyContent: "space-between",
    padding: "35px 0 40px",
  },
  about: {
    display: [null, null, null, "grid", "block"],
    gridTemplateColumns: "205px 1fr 1fr",
    alignItems: ["center"],
    gridRow: ["3/4", null, "1/1", "3/4", "unset"],
    gridColumn: ["1/3", null, "1/2", "1/5", "unset"],
  },
  logo: {
    display: ["flex"],
    justifyContent: ["center", null, null, "unset"],
    gridColumn: "1/2",
  },
  terms: {
    display: ["flex"],
    gridColumn: "3/4",
    alignItems: ["center", null, null, null, "flex-start", "center"],
    flexDirection: ["row", null, null, null, "column", "row"],
    justifyContent: [
      "center",
      null,
      "flex-start",
      "center",
      null,
      "flex-start",
    ],
    mt: [4, null, null, 0, 4],
    a: {
      color: "heading",
    },
    span: {
      display: ["inline-flex", null, null, null, "none", "inline-flex"],
      m: ["0 10px"],
    },
  },
  copyright: {
    color: rgba("#0F2137", 0.6),
    fontSize: ["14px"],
    mt: [3, null, null, -31, 3],
    mr: [null, null, null, "auto", "unset"],
    gridColumn: "2/3",
    textAlign: ["center", null, "left", "center", "left"],
  },
};
