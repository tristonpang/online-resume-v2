import { Box } from "@material-ui/core";

import styles from "../../styles/sharing-box/SharingBoxContent.module.css";
import DeckDisplay from "./DeckDisplay";

const SharingBoxContent = () => {
  return (
    <Box className={styles.container}>
      <DeckDisplay />
    </Box>
  );
};

export default SharingBoxContent;
