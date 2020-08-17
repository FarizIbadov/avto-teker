import React from "react";
import { useHistory } from "react-router-dom";
import { RouteToWord } from "../../types";
import classes from "./style.module.scss";
import Form from "../../packages/Formidable/Form";
import { useGlobalContext } from "../../globalStore/context";
import BtnBox from "../../components/BtnBox";
import { TextField, FileUpload } from "../../components/UI/Fields";
import TextArea from "../../components/UI/Fields/TextArea";
import Select from "../../components/UI/Fields/Select";

const routeToWord: RouteToWord = {
  "/country/add-country": "Country",
  "/brand/add-brand": "Brand",
  "/season/add-season": "Season",
  "/serie/add-serie": "Serie",
};

export const AddEditPage: React.FC = () => {
  const { state } = useGlobalContext();
  const history = useHistory();
  const { location } = history;
  const word = routeToWord[location.pathname];

  const fields = [
    <TextField
      key="0"
      name="title"
      placeholder={`${word} title`}
      className={classes.Field}
    />,
    <FileUpload key="1" name="image" className={classes.Field} />,
    null,
    null,
  ];

  if (word === "Brand" || word === "Serie") {
    fields[2] = (
      <Select
        key="2"
        name={word.toLowerCase()}
        placeholder={word}
        className={classes.Field}
      ></Select>
    );
    fields[3] = (
      <TextArea
        key="3"
        name="description"
        placeholder="Description"
        className={classes.Field}
      />
    );
  }

  const onBack = () => {
    history.goBack();
  };

  return (
    <Form
      action={location.pathname}
      method={state.edit ? "put" : "post"}
      name={state.edit ? "put" : "post"}
      initVals={{ title: "", image: null }}
      onSubmit={(data) => {
        console.log(data);
      }}
      // multiparty
      className={classes.Form}
    >
      {fields}
      <BtnBox onBack={onBack} word={word} />
    </Form>
  );
};
