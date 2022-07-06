import React from "react";
import { Box, Container, Text, Heading } from "theme-ui";

const TermsConditions = () => {
  return (
    <>
      <Box sx={styles.wrapper}>
        <Container sx={styles.container}>
          <Heading as="h3">Terms and Conditions</Heading>
          <Text as="p">
            The following terms and conditions will be deemed to have been
            accepted by the User on usage of the website www.garbhagudi.com. You
            are requested to read them carefully before you use the content and
            services of this site. <br />
            <br />
            By using the Site, you agree to follow and be bound by the following
            terms and conditions concerning your use of the Site. Areas of the
            Site may have different terms of use posted. If there is a conflict
            between the Terms of Use and terms of use posted for a specific area
            of the Site, the latter shall have precedence with respect to your
            use of that area of the Site. Reproduction, distribution, and/or
            retransmission of material contained within our website is
            prohibited unless the prior written consent has been obtained.
          </Text>
          <Heading as="h4" style={{ marginTop: "45px" }}>
            Disclaimer
          </Heading>
          <Text as="p">
            The materials appearing on this website are provided for
            informational use only, and are in no way intended to constitute
            Medical advice or opinions from our clinics or any of its doctors.{" "}
            <br />
            <br /> Transmission or receipt of any information from this website
            does not create a clinic/doctor-client relationship, and you should
            not act or rely upon any information appearing on this website
            without seeking the advice of a doctor. The information provided
            about the doctors and medical professionals and the special
            programs/procedures conducted by them shall in no way be construed
            as advertisement and is only provided for public awareness, well
            being and in public interest. The decision to engage a doctor from
            the clinic should not be based on the information appearing on this
            website and the person concerned should personally satisfy
            himself/herself before engaging the doctor and taking the services
            of the clinic. <br />
            <br /> The Site, and all data, statements content, materials,
            information, software, products and services provided on the Site,
            are provided on an “as is” and “as available” basis. We expressly
            disclaim all warranties of any kind, whether express or implied,
            including, but not limited to, the implied warranties of
            merchantability, fitness for a particular purpose and
            non-infringement. <br />
            <br />
            We makes no warranty that:
            <ul>
              <li>The Site will meet your requirements;</li>
              <li>
                The Site will be available on an uninterrupted, timely, secure,
                or error-free basis;
              </li>
              <li>
                The results that may be obtained from the use of the Site or any
                services offered through the Site will be accurate or reliable.
              </li>
            </ul>
          </Text>
        </Container>
        <Container sx={styles.container} style={{ marginTop: "45px" }}>
          <Heading as="h4">Limitation of Liability and Indemnification</Heading>
          <Text as="p">
            In no event will we be liable to any party for any direct, indirect,
            incidental, special, exemplary, punitive or consequential damages of
            any type whatsoever related to or arising from this Site or any use
            of this website, its or of any site or resource/information linked
            to, referenced or accessed through this Site, or for the use or
            downloading of, or access to, any materials, information, products,
            or services, including, without limitation, any lost profits,
            business interruption, lost savings or loss of programs or other
            data, even if we are expressly advised of the possibility of such
            damages. This exclusion and waiver of liability applies to all
            causes of action, whether based on contract, warranty, tort, or any
            other legal theories. The User agrees to indemnify, defend and hold
            harmless,{" "}
            <a href="https://garbhagudi-ivf.com">garbhagudi-ivf.com</a>
            , its subsidiaries and affiliates its officers, directors, employees
            and agents from any claim, cost, expense, judgment or other loss
            relating to your use of this website including, without limitation
            of the foregoing, any action you take which is in violation of the
            terms and conditions of these Terms of Use.
            <br />
          </Text>
        </Container>
        <Container sx={styles.container} style={{ marginTop: "45px" }}>
          <Heading as="h4">Paripoorna</Heading>
          <Text as="p">
            GarbhaGnan Foundation is one of the foremost foundations in the
            country that offers specialized and the latest health care for
            women. With growing rates of infertility across the globe due to
            varying diet, lesser physical exertion and so on, GarbhaGnan
            Foundation remains steadfast in helping women get unparalleled care
            from experienced specialists. <br />
            <br /> In its pursuit of rendering service to couple looking for
            progeny GarbhaGnan Foundation has decided to offer “PARIPOORNA 2021”
            where in the discount offered by GarbhaGudi IVF Centre is being
            borne by GarbhaGnan Foundation as a part of its CSR activity.
            Deserving couple are selected by a committee put in place by
            GarbhaGnan Foundation. The selection process and merits are defined
            by GarbhaGnan Foundation and cannot be contested by any couple.{" "}
            <br />
            <br />
            Committee’s decision in awarding the offer is final. Offer is not
            transferable. Strictly, the offer ends on the mentioned date, unless
            otherwise extended by the Committee. Payment to be done fully by the
            suggested date. All the terms and conditions are subject to change
            without notice which is at the sole
          </Text>
        </Container>
      </Box>
    </>
  );
};

export default TermsConditions;

const styles = {
  wrapper: {
    pt: ["80px", null, null, null, "100px", "120px"],
    pb: ["60px", null, null, null, "60px", null, "120"],
    overflow: "hidden",
  },
  container: {
    width: [null, null, null, null, null, null, "1390px"],
    h3: {
      fontWeight: "bold",
      lineHeight: [1.39],
      letterSpacing: ["-.7px", "-1.5px"],
      mb: ["15px", null, null, null, "50px"],
      width: ["100%"],
      maxWidth: ["100%", null, null, "90%", "100%", "full"],
      fontSize: [6, null, null, "36px", null, "55px", 9],
      textAlign: "center",
      color: "secondary",
    },
    h4: {
      fontWeight: "bold",
      lineHeight: [1.39],
      letterSpacing: ["-.7px", "-1.5px"],
      mb: ["15px", null, null, null, "50px"],
      width: ["100%"],
      maxWidth: ["100%", null, null, "90%", "100%", "full"],
      fontSize: [3, null, null, "36px", null, "55px", 6],
      textAlign: "center",
      textDecoration: "underline",
      color: "primary2",
    },
  },
  grid: {
    display: "grid",
    gridTemplateColumns: ["1fr", null, null, "1fr 1fr"],
    gridGap: "0",
  },
  content: {
    p: {
      fontSize: [1, null, null, 2, null, 3],
      lineHeight: ["26px", null, null, null, 1.5],
      color: "text_secondary",
      mb: ["20px", null, null, null, null, "30px"],
      width: ["100%"],
      maxWidth: ["100%", null, null, null, null, "640px"],
      br: {
        display: ["none", null, null, null, "inherit"],
      },
      h2: {
        fontSize: [3, null, null, 2, null, 6],
        fontWeight: ["bold", null, null, "bold", null, "bold"],
        mb: ["5px", null, null, null, null, "-5px"],
        mt: ["5px", null, null, null, null, "15px"],
      },
    },
  },
  image: {
    img: {
      display: ["block", null, null, "flex"],
      mx: "auto",
      width: "500px",
      mixBlendMode: "darken",
      position: "relative",
      top: ["0", null, null, null, null, "-40px"],
      maxWidth: ["100%", null, null, null, null, null, "100%"],
      float: [null, null, null, "right"],
      my: ["20px", null, null, "60px"],
    },
  },
};
