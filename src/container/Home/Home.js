import React from "react";
import Rhelmet from "../../components/Helmet/Rhelmet";
import { setLanguage } from "../../redux/redux/global/action";
import { openModalAction } from "../../redux/redux/modals/actions";
import  Box  from '@mui/material/Box';

export default function Home(props) {
  const changeLang = (value) => {
    props.dispatch(setLanguage(value));
  };
  return (
    <Box>
      <Rhelmet
        title={props.t("pages.home")}
        description={props.t("pages.homeDescription")}
      />
      <div>{props.t("pages.home")}</div>
      <button
        onClick={() => {
          changeLang("en");
        }}
      >
        En
      </button>
      <button
        onClick={() => {
          changeLang("tn");
        }}
      >
        Tn
      </button>
      <button
        onClick={() => {
         
          return props.dispatch(
            openModalAction({ modalType: "TestModal", modalProps: {} })
          );
        }}
      >
        Open Modal
      </button>
    </Box>
  );
}
