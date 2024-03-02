import { Box, Typography } from "@material-ui/core";

import styles from "../../styles/Section.module.css";
import FoodMenu from "./FoodMenu";

// interface SectionProps {
//   id: string;
//   sectionTitle: string;
//   content: ExperienceCardProps[] | EssayCardProps[];
//   useProjectCards?: boolean;
//   useEssayCards?: boolean;
//   rawRenderContent?: React.Component;
// }

const DeckDisplay = () => {
  return (
    <Box className={styles.container}>
      <Typography variant="h3" className={styles.sectionTitle}>
        <strong>Menu</strong>
      </Typography>
      <FoodMenu />
    </Box>
  );
};

export default DeckDisplay;
