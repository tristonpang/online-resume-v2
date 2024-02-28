import { Box } from "@material-ui/core";
import { useState } from "react";
import styles from "../../styles/sharing-box/FlipCard.module.css";

const FlipCard = ({
  foodName,
  question,
  onClick,
}: {
  foodName: string;
  question: string;
  onClick: () => void;
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <Box
      className={`${styles.flipCard} ${isActive && styles.flipCardActive}`}
      onClick={() => {
        onClick();
        setIsActive(!isActive);
      }}
    >
      <Box className={styles.flipCardInner}>
        <Box className={styles.flipCardFront}>
          <h1>{foodName}</h1>
        </Box>
        <Box className={styles.flipCardBack}>
          <h1>{question}</h1>
        </Box>
      </Box>
    </Box>
  );
};

export default FlipCard;
