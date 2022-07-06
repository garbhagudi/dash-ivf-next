import React from "react";
import { Alert, Box } from "theme-ui";
import { Link } from "react-router-dom";

const Alerts = () => {
  return (
    <div>
      <Alert sx={styles.wrapper} role="alert">
        <Box sx={styles.alert}>
          Experience the Joy of Being Complete <br />
          <Link to="/contact-us">Book a Free Consultation </Link>
          <br />
        </Box>
      </Alert>
    </div>
  );
};

export default Alerts;

const styles = {
  wrapper: {
    backgroundColor: "secondary",
    borderRadius: 0,
    textAlign: "center",
    a: {
      color: "white",
    },
  },
  alert: {
    mx: "auto",
    fontSize: [13.9, null, null, 17.5],
  },
};
