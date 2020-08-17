import React from "react";
import classes from "./style.module.scss";
import { useHistory } from "react-router-dom";
import { useTitle, useGetData } from "../../hooks";
import { useGlobalContext } from "../../globalStore/context";
import Spinner from "../../components/UI/Spinner";
import { RouteToWord } from "../../types";
import Button from "../../components/UI/Button";

const routeToWord: RouteToWord = {
  "/country": "Country",
  "/brand": "Brand",
  "/season": "Season",
  "/serie": "Serie",
};

export const ListPage: React.FC = () => {
  const { state } = useGlobalContext();
  const history = useHistory();
  const { location } = history;

  const word = routeToWord[location.pathname];
  const lowerWord = word.toLowerCase();
  const addPagePath = `${location.pathname}/add-${lowerWord}`;

  const onAddPage = () => {
    history.push(addPagePath);
  };

  useTitle("Country");
  useGetData(location.pathname, "list");

  let component = <Spinner className={classes.Spinner} />;

  if (!state.loading) {
    component =
      typeof state.list === "string" ? (
        <h3 className={classes.EmpyString}>{state.list}</h3>
      ) : (
        <div></div>
      );
  }

  return (
    <React.Fragment>
      <div className={classes.List}>{component}</div>

      <Button
        type="button"
        color="primary"
        btnType="contained"
        size="medium"
        onClick={onAddPage}
        className={classes.Button}
      >
        Add {word}
      </Button>
    </React.Fragment>
  );
};
