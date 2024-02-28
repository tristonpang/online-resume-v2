import { Box, Typography } from "@material-ui/core";
import { useState } from "react";
import styles from "../../styles/sharing-box/FoodMenu.module.css";
import FlipCard from "./FlipCard";

import { MenuItem, sharingBoxData } from "../../data/sharingBoxData";

const FoodMenu = () => {
  const [menuItem, setMenuItem] = useState<MenuItem>();

  const [isCardActive, setIsCardActive] = useState<boolean>(false);

  const checkResetState = () => {
    if (!isCardActive) {
      setIsCardActive(true);
      return;
    }
    // reset
    setIsCardActive(false);
    setTimeout(() => {
      setMenuItem(undefined);
    }, 1000);
  };

  const renderMenuItems = () => {
    return (
      <>
        <Box
          className={styles.menuItem}
          onClick={() => setMenuItem(MenuItem.Main)}
        >
          <Typography>Main</Typography>
        </Box>
        <Box
          className={styles.menuItem}
          onClick={() => setMenuItem(MenuItem.Side)}
        >
          <Typography>Side</Typography>
        </Box>
        <Box
          className={styles.menuItem}
          onClick={() => setMenuItem(MenuItem.Drink)}
        >
          <Typography>Drink</Typography>
        </Box>
        <Box
          className={styles.menuItem}
          onClick={() => setMenuItem(MenuItem.Dessert)}
        >
          <Typography>Dessert</Typography>
        </Box>
        <Box
          className={styles.menuItem}
          onClick={() => setMenuItem(MenuItem.SoupSalad)}
        >
          <Typography>Soup/Salad</Typography>
        </Box>
      </>
    );
  };

  const renderCards = (menuItem: MenuItem) => {
    const cardData = sharingBoxData[menuItem];
    const cards = Object.entries(cardData).map((dataPair) => {
      const [foodName, question] = dataPair;
      return (
        <FlipCard
          foodName={foodName}
          question={question}
          onClick={checkResetState}
        />
      );
    });

    return cards;
  };

  return (
    <Box className={styles.menu}>
      {!menuItem && renderMenuItems()}
      {menuItem && renderCards(menuItem)}
    </Box>
  );
};

export default FoodMenu;
