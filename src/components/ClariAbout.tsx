import { Box, IconButton, Typography } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";

import styles from "../styles/About.module.css";

const ClariAbout = () => {
  return (
    <Box className={styles.container} id="about">
      <Box className={styles.textContainer}>
        <Typography variant="h4" className={`${styles.text} ${styles.title}`}>
          Hello there!
        </Typography>
        <Typography className={styles.text}>
          If you are Clari, hi honey!!! Please ignore this section first ok, you
          can read below first then if you want come back hehe.
          <br />
          <br />
          Otherwise, hi there! You have stumbled upon this page that I have made
          for a very important girl in my life. Her name is Clari, and I have
          made attached this page to my domain (triston.dev) to symbolise that
          she will always be a part of my life :)
        </Typography>
      </Box>
      <Box className={styles.contactContainer}>
        <IconButton
          className={styles.buttonWrapper}
          href="https://www.instagram.com/clarigraphy.art/"
        >
          <InstagramIcon className={styles.button} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ClariAbout;
