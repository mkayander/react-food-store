import React, { useState } from "react";
import styled from "styled-components";
import { ItemList, ItemModal } from "..";

import * as mockMenuData from "../../json/DBMenu.json";

const MenuStyled = styled.main`
  /* background-color: #ccc; */
  background-color: #f0f0f0;
  margin-top: ${({ theme }) => theme.navBarHeight};
  min-height: 500px;
`;

const MenuSection = styled.section`
  padding: 30px;
`;

const Banner = styled.img`
  width: 100%;
  max-height: 300px;
`;

export default function Menu() {
  const [openedItem, setOpenedItem] = useState(null);
  console.log("openedItem: ", openedItem);

  return (
    <MenuStyled>
      <Banner src={"/banner.png"} alt="Banner" />

      <MenuSection>
        <h2>Бургеры</h2>
        <ItemList
          dataList={mockMenuData.burger}
          setOpenedItem={setOpenedItem}
        />
      </MenuSection>

      <MenuSection>
        <h2>Закуски / Напитки</h2>
        <ItemList dataList={mockMenuData.other} setOpenedItem={setOpenedItem} />
      </MenuSection>

      <ItemModal item={openedItem} setOpenedItem={setOpenedItem} />
    </MenuStyled>
  );
}