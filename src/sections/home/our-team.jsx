/** @jsxRuntime classic **/
/** @jsx jsx **/
import { jsx } from "theme-ui";
import { Container, Grid, Box } from "theme-ui";
import SectionHeader from "components/section-heading";
import TeamCard from "components/cards/team-member";

const data = [
  {
    id: 1,
    imgSrc:
      "https://res.cloudinary.com/garbhagudi/image/upload/v1633780868/garbhagudi-ivf/Images%20/member1_kboo9r.webp",
    altText: "Dr Asha S Vijay",
    title: "Dr Asha S Vijay",
    designation: "Founder & Medical Director",
    // website: "https://garbhagudi.com/dr-asha-s-vijay-profile",
  },
  {
    id: 2,
    imgSrc:
      "https://res.cloudinary.com/garbhagudi/image/upload/v1633780868/garbhagudi-ivf/Images%20/member2_vd7of5.webp",
    altText: "Dr Chaithra S.K",
    title: "Dr Chaithra S.K",
    designation: "Senior Ferility Specialist",
    // website: "https://garbhagudi.com/dr-chaitra-s-k",
  },
  {
    id: 3,
    imgSrc:
      "https://res.cloudinary.com/garbhagudi/image/upload/v1633780867/garbhagudi-ivf/Images%20/member4_hd1mpx.webp",
    altText: "Dr Maheshwari M",
    title: "Dr Maheshwari M",
    designation: "Senior Ferility Specialist",
    // website: "https://garbhagudi.com/dr-maheshwari",
  },
  {
    id: 4,
    imgSrc:
      "https://res.cloudinary.com/garbhagudi/image/upload/v1633780868/garbhagudi-ivf/Images%20/member5_irwdpd.webp",
    altText: "Dr Chinmayie R",
    title: "Dr Chinmayie R",
    designation: "Fertility Specialist",
    // website: "https://garbhagudi.com/dr-chinmayie-r",
  },
  // {
  //   id: 5,
  //   imgSrc:
  //     "https://res.cloudinary.com/garbhagudi/image/upload/v1633780868/garbhagudi-ivf/Images%20/member6_rrjqnv.webp",
  //   altText: "Dr Swetha V",
  //   title: "Dr Swetha V",
  //   designation: "Fertility Specialist",
  //   // website: "https://garbhagudi.com/dr-swetha-v",
  // },
  {
    id: 6,
    imgSrc:
      "https://res.cloudinary.com/garbhagudi/image/upload/v1633780868/garbhagudi-ivf/Images%20/member7_zys2om.webp",
    altText: "Dr Priyanka Rani",
    title: "Dr Priyanka Rani",
    designation: "Fertility Specialist",
    // website: "https://garbhagudi.com/dr-priyanka-rani",
  },
  {
    id: 7,
    imgSrc:
      "https://res.cloudinary.com/garbhagudi/image/upload/v1634886295/garbhagudi-ivf/Images%20/anita_qy0dpo.webp",
    altText: "Dr Anitha A Manoj",
    title: "Dr Anitha A",
    designation: "Fertility Specialist",
    // website: "https://garbhagudi.com/dr-anitha-a-manoj/",
  },
  {
    id: 8,
    imgSrc:
      "https://res.cloudinary.com/garbhagudi/image/upload/v1634886294/garbhagudi-ivf/Images%20/vandana_w2ieei.webp",
    altText: "Dr Vandana Ramanathan",
    title: "Dr Vandana R",
    designation: "Fertility Specialist",
    // website: "https://garbhagudi.com/dr-vandana-ramanathan/",
  },
  {
    id: 9,
    imgSrc:
      "https://res.cloudinary.com/garbhagudi/image/upload/v1643980098/garbhagudi-ivf/Images%20/Jahnavi-modified_ivxuei.png",
    altText: "Dr Jahnavi Esanakula",
    title: "Dr Jahnavi Esanakula",
    designation: "Fertility Specialist",
    // website: "https://garbhagudi.com/dr-swati-shree/",
  },
  {
    id: 10,
    imgSrc:
      "https://res.cloudinary.com/garbhagudi/image/upload/v1634886295/garbhagudi-ivf/Images%20/srinivas_rbarwv.webp",
    altText: "Dr Vandana Ramanathan",
    title: "Dr Srinivas B.V",
    designation: "Senior Andrologist",
    // website: "https://garbhagudi.com/dr-srinivas-b-v",
  },
  // {
  //   id: 10,
  //   imgSrc:
  //     "https://res.cloudinary.com/garbhagudi/image/upload/v1650949577/garbhagudi-ivf/Images%20/niddhi_m_wmjc6x.jpg",
  //   altText: "Dr Nidhi Jhawar",
  //   title: "Dr Nidhi Jhawar",
  //   designation: "Fertility Specialist",
  //   // website: "https://garbhagudi.com/dr-srinivas-b-v",
  // },
];

export default function TeamSection() {
  return (
    <Box as="section" id="team" sx={styles.section}>
      <Container>
        <SectionHeader
          sx={styles.header}
          title="Meet our Experts"
          description="Our team of fertility specialists have been known for their extensive clinical experience and research contributions, as well as for their success in treating the most challenging fertility cases."
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <TeamCard
              key={`team--key${item.id}`}
              src={item.imgSrc}
              altText={item.altText}
              title={item.title}
              designation={item.designation}
              // website={item.website}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

const styles = {
  section: {
    backgroundColor: "#FFF",
    pt: [5, null, null, 9, null, 10, 8],
    pb: [0, null, null, 5],
  },
  grid: {
    pb: [3, 9, 9, 12, 12, 3],
    mt: [0, null, -6, null, -4],
    mx: "auto",
    gridGap: ["15px 0px", null, 0, null, null, "30px 35px"],
    gridTemplateColumns: [
      "repeat(2,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(5,1fr)",
    ],
    a: {
      textDecoration: "none",
      color: "inherit",
    },
  },
  header: {
    maxWidth: "600px",
  },
};
