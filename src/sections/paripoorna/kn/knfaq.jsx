/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Box } from "theme-ui";
import SectionHeading from "components/section-heading-kn";
import Accordion from "components/accordion/accordion";

const faqs = [
  {
    title: "ಪರಿಪೂರ್ಣ-2021 ಯೋಜನೆಗೆ ಹೇಗೆ ನೋಂದಾಯಿಸಬೇಕು?",
    contents: (
      <div>
        ಪರಿಪೂರ್ಣ-2021 ಯೋಜನೆಗೆ ನೋಂದಾಯಿಸಲು, ನಮ್ಮ ಸಂಸ್ಥೆಯ ಯಾವುದಾದರೂ ಒಂದು ಕೇಂದ್ರಕ್ಕೆ
        ಭೇಟಿ ನೀಡಿ ಅರ್ಜಿಯನ್ನು ಪಡೆದು ಭರ್ತಿಮಾಡಿ ಸಲ್ಲಿಸತಕ್ಕದ್ದು.
      </div>
    ),
  },
  {
    title: "ಪರಿಪೂರ್ಣ-2021 ಯೋಜನೆಗೆ ಅರ್ಹತೆಗಳೇನು ?",
    contents: (
      <div>
        ವಿಶೇಷವಾಗಿ ಈ ಯೋಜನೆಯನ್ನು ಸಂತಾನ ಹೀನತೆ ನಿವಾರಣೆಯನ್ನು ಬಯಸುತ್ತಿರುವ ಹಾಗೂ
        ಚಿಕೆತ್ಸೆಗಾಗಿ ಆರ್ಥಿಕ ಸಹಾಯ ಬಯಸುವ ದಂಪತಿಗಳಿಗೋಸ್ಕರ ರೂಪಿಸಲಾಗಿದೆ.
      </div>
    ),
  },
  {
    title: `ನೊಂದಾಯಿಸಿದ ಎಲ್ಲಾ ದಂಪತಿಗಳಿಗೂ ಈ ಯೋಜನೆಯ ದಕ್ಕುತ್ತದೆಯೇ ?  `,
    contents: (
      <div>
        ಗರ್ಭಜ್ಞಾನ ಫೌಂಡೇಶನ್ ಸಮಿತಿಯು ನೊಂದಾಯಿತ ಅರ್ಜಿಗಳನ್ನು ಪರಿಶೀಲಿಸಿ, ಒಪ್ಪಿಗೆ
        ಸೂಚಿಸಿದ ದಂಪತಿಗಳು ಈ ಯೋಜನೆಯ ಸದುಪಯೋಗ ಪಡೆದುಕೊಳ್ಳಲು ಅರ್ಹರಾಗಿರುತ್ತಾರೆ.
      </div>
    ),
  },
  {
    title: `ಅರ್ಹತೆಯ ಮಾನದಂಡ ಏನು? `,
    contents: (
      <div>
        ಐವಿಎಫ್ ಚಿಕೆತ್ಸೆಯನ್ನು ಬಯಸುತ್ತಿರುವ ದಂಪತಿಗಳಿ ಮಾತ್ರ ಈ ಯೋಜನೆಯ ಸದುಪಯೋಗ
        ಪಡೆದುಕೊಳ್ಳಬಹುದು. ಅರ್ಹತೆಯನ್ನು ಗರ್ಭಜ್ಞಾನ ಫೌಂಡೇಶನ್ ಸಮಿತಿಯು ಅರ್ಜಿಗಳನ್ನು
        ಪರಿಶೀಲಿಸಿದ ನಂತರವಷ್ಟೆ ಅರ್ಹತೆಯ ಬಗ್ಗೆ ತಿಳಿಯುತ್ತದೆ.
      </div>
    ),
  },
  {
    title: `ಒಪ್ಪಿಗೆ ಸಿಕ್ಕಿದ  ನಂತರ,  ಚಿಕೆತ್ಸೆಯ ರೂಪುರೇಷುಗಳು ದೊರೆಯುತ್ತವೆಯೆ? `,
    contents: (
      <div>
        ಹೌದು, ಅರ್ಜಿಗಳನ್ನು ಪರಿಶೀಲಿಸಿ, ಒಪ್ಪಿಗೆ ಸಿಕ್ಕ ನಂತರ ನಿಮಗೆ ನಮ್ಮ ತಜ್ಞ
        ವೈದ್ಯರಿಂದ ಚಿಕೆತ್ಸೆಯ ರೂಪುರೇಷುಗಳು ದೊರೆಯುತ್ತವೆ.
      </div>
    ),
  },
  {
    title: `ನಾನು ಪರಿಪೂರ್ಣ ಯೋಜನೆಯನ್ನು ಆಯ್ಕೆ ಮಾಡಿಕೊಳ್ಳದೆ ಚಿಕೆತ್ಸೆಯನ್ನು ಮುಂದುವರಿಸಬಹುದೇ?`,
    contents: (
      <div>
        ಹೌದು, ಇದರಿಂದ ಬಹು ಅಗತ್ಯವಿರುವ ದಂಪತಿಗಳಿಗೆ ಯೋಜನೆಯ ಸಹಾಯ ಪಡೆಯಲು
        ಅನುಕೂಲವಾಗುತ್ತದೆ.
      </div>
    ),
  },
  {
    title: `ಅರ್ಜಿಯ ಸ್ಥಿತಿಯ ಬಗ್ಗೆ ತಿಳಿದುಕೊಳ್ಳುವುದು  ಹೇಗೆ?`,
    contents: (
      <div>
        ನಮ್ಮ ಕೇಂದ್ರಗಳಿಗೆ ಬೇಟಿ ನೀಡಿ ನಿಮ್ಮ ಅರ್ಜಿಯ ಸ್ಥಿತಿಯನ್ನು ತಿಳಿಯಬಹುದಾಗಿದೆ.
        ಅಲ್ಲದೆ ಸಂಭಂದ ಪಟ್ಟ ಕೇಂದ್ರಗಳು ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ ನಿಮ್ಮ ಅರ್ಜಿಯ ಸ್ಥಿತಿಯನ್ನು
        ತಿಳಿಸುತ್ತಾರೆ.
      </div>
    ),
  },
  {
    title: `ನಾನು ಈಗಾಗಲೇ ನೋಂದಾಯಿಸಿದ್ದಲ್ಲಿ  ಮತ್ತೆ ಪರಿಪೂರ್ಣ ಯೋಜನಗೆ ಅರ್ಜಿ ಹಾಕಬಹುದೆ?`,
    contents: (
      <div>
        ಈ ಯೋಜನೆಯು ಡಿಸೆಂಬರ್ 1, 2021 ರಿಂದ ಡಿಸೆಂಬರ್ 31, 2021 ರ ಒಳಗೆ ನೊಂದಾಯಿಸಿದ
        ದಂಪತಿಗಳಿಗೆ ಮಾತ್ರ ಅನ್ವಯಿಸುತ್ತದೆ.
      </div>
    ),
  },
  {
    title: `ಅರ್ಜಿ ಸಲ್ಲಿಸಿದ ನಂತರ ಅದರಲ್ಲಿ ತಿದ್ದುಪಡಿ ಮಾಡಬಹುದೆ?`,
    contents: (
      <div>
        ಇಲ್ಲಾ, ಅರ್ಜಿ ಸಲ್ಲಿಸಿದ ನಂತರ ಯಾವುದೇ ತಿದ್ದುಪಡಿಗಳಿಗೆ ಅವಕಾಶವಿರುವುದಿಲ್ಲ.
        ಆದ್ದರಿಂದ ಅರ್ಜಿಯನ್ನು ಸಲ್ಲಿಸುವ ಮೊದಲು ದಯವಿಟ್ಟು ಅರ್ಜಿಯನ್ನು ಸರಿಯಾಗಿ ಓದಿ
        ಸರಿಯಾದ ಮಾಹಿತಿಯನ್ನು ನೀಡಿ ಸ್ವಯಂ ಪರಿಶೀಲಿಸತಕ್ಕದ್ದು.
      </div>
    ),
  },
  {
    title: `ಪರಿಪೂರ್ಣ ಅರ್ಜಿ ಸಲ್ಲಿಸಿಲು ಅಂತಿಮ ದಿನಾಂಕ ಯಾವುದು?`,
    contents: <div>ಡಿಸೆಂಬರ್ 31, 2021 ರ ಒಳಗೆ ನೊಂದಾಯಿಸಿಕೊಳ್ಳಬೇಕು.</div>,
  },
  {
    title: `ನಾನು ಈಗಾಗಲೇ ಬೇರೊಂದು ಸಂಸ್ಥೆಯಲ್ಲಿ ಚಿಕಿತ್ಸೆ ಪ್ರಾರಂಭಿಸಿದ್ದು, ಪರಿಪೂರ್ಣ-2021 ಯೋಜನೆಯ ಅಡಿಯಲ್ಲಿ ಚಿಕೆತ್ಸೆ ಮತ್ತು ಅದರ ಉಪಯೋಗವನ್ನು ಪಡೆಯಬಹುದೆ?`,
    contents: (
      <div>
        ಹೌದು, ಅರ್ಜಿ ಸಲ್ಲಿಸಬಹುದು, ಆದರೆ ನಡೆಯುತ್ತಿರುವ ಚಿಕೆತ್ಸೆಯನ್ನು ನಿಲ್ಲಿಸಬೇಡಿ
        ಎಂದು ನಾವು ವಿನಂತಿಸುತ್ತೇವೆ, ಏಕೆಂದರೆ ಅದು ಚಿಕೆತ್ಸೆಯ ಯಶಸ್ಸಿನ ಮೇಲೆ ಪರಿಣಾಮ
        ಬೀರಬಹುದು.
      </div>
    ),
  },
  {
    title: `ನಾನು ಮೊದಲನೇ ಬೇಟಿಯಲ್ಲಿ ನೊಂದಾಯಿಸದಿದ್ದರೆ, ಮುಂದಿನ ದಿನಗಳಲ್ಲಿ ನಮಗೆ ಬೇಕಾದಾಗ ನೊಂದಾಯಿಸಕೊಳ್ಳಬಹುದೇ?`,
    contents: (
      <div>
        ಗರ್ಭಗುಡಿಯು ಆಗಾಗ್ಗೆ ಇತರೆ ವಿವಿಧ ಯೋಜನೆಗಳನ್ನು ನಡೆಸಿರುತ್ತದೆ, ಹಾಗಾಗಿ ಮುಂದಿನ
        ದಿನಗಳಲ್ಲಿ ಬೇರೆ ಯೋಜನೆಗಳ ಅಡಿಯಲ್ಲಿ ನೊಂದಾಯಿಸಲು ಸಾಧ್ಯವಿರುತ್ತದೆ.
      </div>
    ),
  },
  {
    title: `ನಾನು ತಮ್ಮ ಶಾಖೆಗಳಿಗೆ ಬೇಟಿ ನೀಡದೆ, ಆನಲೈನ್ ಮುಖಾಂತರ ಪರಿಪೂರ್ಣ-2021 ಯೋಜನೆಗೆ ನೋಂದಾಯಿಸಬಹುದೆ?`,
    contents: (
      <div>
        ಇಲ್ಲಾ, ನಿಮ್ಮ ಹತ್ತಿರದ ಗರ್ಭಗುಡಿ ಶಾಖೆಗೆ ಭೇಟಿ ನೀಡಿ ಹಾಗು ನೊಂದಾಯಿಸಿಕೊಳ್ಳಿ.
      </div>
    ),
  },
];
export default function Faq() {
  return (
    <Box
      as="section"
      variant="section.faq"
      sx={{ pt: "48px", mb: "12px" }}
      id="frequent"
    >
      <Container>
        <SectionHeading
          title="ನಿಮಗೆ ಏನಾದರೂ ಪ್ರಶ್ನೆ ಇದಿಯೇ ?"
          description="ನಿಮ್ಮ ಸಹಾಯಕ್ಕಾಗಿ GG ಕೇರ್ ಸಹಾಯವಾಣಿ ಲಭ್ಯವಿದೆ. ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗೆ ಕರೆ ಮಾಡಿ +918880000909"
        />
        <Box
          sx={{
            display: "flex",
            width: ["100%", null, null, "650px", "745px"],
            flexDirection: "column",
            mx: "auto",
            my: -4,
          }}
        >
          <Accordion items={faqs} style={{ fontFamily: "'Baloo Tamma 2'" }} />
        </Box>
      </Container>
    </Box>
  );
}
