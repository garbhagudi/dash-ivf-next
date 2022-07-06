/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Image, Text } from "theme-ui";
import Tabs, { TabPane } from "rc-tabs";
import { rgba } from "polished";
import SectionHeading from "components/section-heading";
const data = [
  {
    id: 1,
    logo: "https://res.cloudinary.com/garbhagudi/image/upload/v1633780903/garbhagudi-ivf/Logos/whatclinic_trexqz.webp",
    author: "By Anees, on WhatClinic",
    quote: `Doctor Chaitra was very helpful and explained every bit very clearly, and sisters were also very helpful, I was happy going to GarbhaGudi, they have explained about the treatment and cost for it, I have to decide and get back to them.”`,
  },
  {
    id: 2,
    logo: "https://res.cloudinary.com/garbhagudi/image/upload/v1633780902/garbhagudi-ivf/Logos/practo_warfpj.webp",
    author: "By Manjunath T H, on Practo",
    quote: `Dr Chaitra S K is very friendly in nature, first she recognises the problem and then she uses to start the treatment. Dr Chaitra is very expertise in this,so she can give a good results to the patients.I 'll suggest my friends who are facing difficulties,that to take the treatment under Dr Chaitra S K,Garbhagudi IVF,Kalyan Nagar.”`,
  },
  {
    id: 3,
    logo: "https://res.cloudinary.com/garbhagudi/image/upload/v1633780903/garbhagudi-ivf/Logos/justdial_jyy9ky.webp",
    author: "By Shivani Madan, on JustDial",
    quote: `“Hi i m Arpitha Prakash . Thank you for Dr. Maheshwari and Dr Asha S Vijay madam and Garbhagudi team , after 5 years our dream came true.The people at garbhagudi are very caring supportive. Atmosphere is like family. I wish the garbhagudi Hanumanthnagar branch to be successful and get more positive results and All the best to this team.”`,
  },
  {
    id: 4,
    logo: "https://res.cloudinary.com/garbhagudi/image/upload/v1633780903/garbhagudi-ivf/Logos/google_jfknrj.webp",
    author: "By Kumar Salunke, on Google",
    quote: `“We are feeling so happy and blessed to knew about this place and its amazing hospital with fabulous doctor and staff. Thank you so much to Dr Chinmayie mam and all the staff members and team. They are very caring and treated very well and all the staff are well behaved. All the test results are accurate and helpful to know the issue and starts treatment within no time. A big thank you to all”`,
  },
  {
    id: 5,
    logo: "https://res.cloudinary.com/garbhagudi/image/upload/v1633780902/garbhagudi-ivf/Logos/facebook_mrzesi.webp",
    author: "By Rammurthi, on Facebook",
    quote: `“Very well organized hospital with well-trained experts who guide you throughout the process and explain things in detail!  Affordable prices and treatments at its best! Qualitative services! Would recommend this place for best IVF treatments”`,
  },
];

const Testimonials = () => {
  return (
    <Box as="section" id="testimonial" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Experience the Joy of Being Complete"
          description="GarbhaGudi IVF Center is guided by the highest ethical standards, providing patients with the best quality, individualized, compassionate care."
        />
        <Tabs
          sx={styles.tabs}
          animated={{ tabPane: true }}
          tabPosition="bottom"
        >
          {data?.map((item) => (
            <TabPane
              key={item.id}
              tab={
                <Image src={item.logo} alt="logo" style={{ width: "120px" }} />
              }
            >
              <Box as="blockquote">
                {item.quote}
                <Text as="span" sx={styles.author}>
                  {item.author}
                </Text>
              </Box>
            </TabPane>
          ))}
        </Tabs>
      </Container>
    </Box>
  );
};

export default Testimonials;

const styles = {
  section: {
    backgroundColor: rgba("#FFF5ED", 0.5),
    pt: [7, null, null, 9, null, 10, 11],
    pb: [5, null, null, 10, 11],
  },
  heading: {
    textAlign: "Center",
    mb: [null, null, null, 10, 4],
  },
  tabs: {
    flexDirection: ["column-reverse", null, null, null, null, "column"],
    ".rc-tabs-nav": {
      mt: [8, null, null, 9, 11],
    },
    ".rc-tabs-nav-wrap": {
      borderTop: `1px solid ${rgba("#01070D", 0.1)}`,
      justifyContent: "center",
    },
    ".rc-tabs-tab": {
      backgroundColor: "transparent",
      // m: ['0 45px'],
    },
    ".rc-tabs-tab-btn": {
      display: "flex",
      alignItems: "center",
      lineHeight: 1,
      outline: 0,
      img: {
        outline: 0,
        maxWidth: [50, 65, null, 110, "80%", "100%"],
        m: ["0 auto"],
      },
    },
    ".rc-tabs-nav-list": {
      flexGrow: 1,
      justifyContent: "space-evenly",
      pt: [4, null, null, 7, 9],
    },
    ".rc-tabs-tabpane": {
      outline: 0,
      blockquote: {
        fontFamily: "heading",
        fontWeight: 400,
        fontSize: [2, null, null, 3, 4, 6],
        lineHeight: [1.87, null, null, 2.08],
        position: "relative",
        maxWidth: 846,
        margin: "0px auto",
        pt: ["12px", null, null, "17px", "13px"],
        pl: [35, 35, 35, 10, 11],
        ":before": {
          background: `url(https://res.cloudinary.com/garbhagudi/image/upload/v1633780928/garbhagudi-ivf/Icons/quote_lhrts2.webp) no-repeat`,
          content: `''`,
          position: "absolute",
          width: 128,
          height: 43,
          left: ["-31px", null, null, "-16px", "-7px", 0],
          top: ["1px", "1px", "1px", 0],
          backgroundSize: ["75%", null, null, "100%"],
        },
      },
      span: {
        color: "#7E8896",
        fontFamily: "body",
        display: "flex",
        fontWeight: 500,
        fontSize: [0, 1, 1, 2],
        lineHeight: 2.5,
        mt: [1, null, null, 3],
      },
    },
    ".rc-tabs-ink-bar": {
      top: 0,
      height: 2,
      backgroundColor: "#A17857",
      borderRadius: 5,
    },
  },
};
