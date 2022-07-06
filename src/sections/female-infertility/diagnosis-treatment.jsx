/** @jsxRuntime classic */
/** @jsx jsx */
import { rgba } from "polished";
import { jsx, Container } from "theme-ui";
import Tabs, { TabPane } from "rc-tabs";
import Treatment from "sections/female-infertility/diagtreat/treatment";
import SectionHeading from "components/section-heading";
import TabButton from "components/tabs/tab-button";
import Diagnosis from "sections/female-infertility/diagtreat/diagnosis";

const data = [
  {
    id: 1,
    title: "Diagnosis",
    content: <Diagnosis />,
  },
  {
    id: 2,
    title: "Treatment",
    content: <Treatment />,
  },
];

const DiagnosisTreatment = () => {
  return (
    <section sx={styles.section} id="diag">
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Diagnosis &amp; Treatment for Female Infertility"
          description="If a couple have been unable to conceive in a reasonable amount of time, seek help from a fertility specialist for evaluation and subsequent treatment."
        />
        <Tabs sx={styles.dashboardTabs} animated={{ tabPane: true }}>
          {data.map((tab) => (
            <TabPane key={tab.id} tab={<TabButton tab={tab} />}>
              {tab.content}
            </TabPane>
          ))}
        </Tabs>
      </Container>
    </section>
  );
};

export default DiagnosisTreatment;

const styles = {
  section: {
    pt: [8, null, null, 12],
    pb: [6, null, null, null, 2],
  },
  heading: {
    marginBottom: [6, null, null, 8],
    maxWidth: ["none", null, null, 565, null, "none"],
    p: {
      color: rgba("#02073E", 0.7),
      maxWidth: "700px",
      fontSize: [3, null, null, 3],
    },
  },
  dashboardTabs: {
    border: 0,
    ".rc-tabs-nav-wrap": {
      justifyContent: "center",
      marginBottom: 8,
      overflow: "unset",
    },
    ".rc-tabs-ink-bar": {
      display: "none",
    },
    ".rc-tabs-tabpane, .rc-tabs-tab-btn": {
      outline: 0,
    },
    ".rc-tabs-nav-list": {
      flexWrap: ["wrap", null, null, "unset"],
    },
    ".rc-tabs-tab": {
      backgroundColor: "transparent",
      ":nth-of-type(1),:nth-of-type(2)": {
        mb: [4, null, null, 0],
      },
      ":nth-of-type(2)": {
        ml: [4, null, null, 0],
      },
      ":nth-of-type(4)": {
        ml: [2, null, null, 0],
      },
      "+ .rc-tabs-tab": {
        ml: [null, null, null, 4, 8],
      },
    },
    ".rc-tabs-tab-active": {
      backgroundColor: "white",
      fontWeight: [400, null, null, 500],
      boxShadow: "0px 4px 6px rgba(125, 128, 170, 0.08)",
      borderRadius: 5,
      padding: ["10px 10px", null, null, "10px 18px"],
    },
  },
};
