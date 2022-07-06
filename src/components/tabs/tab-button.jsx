/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box } from "theme-ui";

const TabButton = ({ tab }) => {
  return (
    <Box sx={styles.tabButton} className="tab-button">
      {tab.icon}
      {tab.title}
    </Box>
  );
};

export default TabButton;

const styles = {
  tabButton: {
    display: "flex",
    color: "secondary",
    alignItems: "center",
    fontSize: [3, null, null, null, 4],
    lineHeight: 1,
    fontWeight: "bold",
    cursor: "pointer",
    py: 1,
  },
};
