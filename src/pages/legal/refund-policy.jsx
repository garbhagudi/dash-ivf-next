import React from "react";
import { Box, Container, Text, Heading } from "theme-ui";

const RefundPolicy = () => {
  return (
    <>
      <Box sx={styles.wrapper}>
        <Container sx={styles.container}>
          <Heading as="h3">Cancellation & Refund Policy</Heading>
          <Text as="p" style={{ textAlign: "center" }}>
            GarbhaGudi IVF believes in helping its patients as far as possible
            and has a liberal cancellation policy for consultation booked
            online.
          </Text>
          <Heading as="h4" style={{ marginTop: "45px" }}>
            Under this policy
          </Heading>
          <Text as="p">
            Cancellations are into consideration only if our doctors have
            cancelled the consultation. There will be no refund for cancellation
            if it comes from the other end(patients). Refund for Cancellations
            is not applicable for the consultation services obtained on special
            occasions like Holi, Diwali, Valentine’s Day etc. Cancellations are
            not possible for these appointments however, you can reschedule the
            appointments to a desired future date and avail the benefit for
            payment done. <br />
            <br /> In case one feels that the consultation services received is
            not as shown on the website, one must bring it to the notice of our
            customer service within 24 hours after making the appointment and
            payment online. The concerned team will look into your complaint and
            will take an appropriate decision after validating the case;
            however, no refund will be provided in case of dissatisfactory
            consultation experience. <br />
            <br /> Auto-refunds to your account are not there. You will have to
            request (within seven days of cancellation) a Refund using our
            Contact Page. The Refund shall be processed within 7 working days as
            it involves bank transactions. Refund amounts to deduction of bank
            charges any. It will be our earnest attempt to respond to your
            online query or online consultation request within the stipulated
            time frame of three Working days. But in case you do not receive any
            communication (auto-generated email is not a form of communication)
            from the Clinic, one is eligible for a Refund OR Cancel the Request,
            whichever is applicable.
          </Text>
        </Container>
      </Box>
    </>
  );
};

export default RefundPolicy;

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
      fontSize: [7, null, null, "36px", null, "55px", 9],
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
      fontSize: [5, null, null, "36px", null, "55px", 6],
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
