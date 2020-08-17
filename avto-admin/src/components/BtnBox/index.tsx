import React from "react";
import classes from "./style.module.scss";
import Button from "../UI/Button";
import { useGlobalContext } from "../../globalStore/context";
import Spinner from "../UI/Spinner";

interface Props {
  word: string;
  onBack: (e: React.MouseEvent) => void | Promise<void>;
}

const BtnBox: React.FC<Props> = (props) => {
  const {
    state: { edit, loading },
  } = useGlobalContext();
  return (
    <div className={classes.BtnBox}>
      <Button
        type="button"
        color="danger"
        btnType="contained"
        size="medium"
        className={classes.Button}
        onClick={props.onBack}
      >
        Cancel
      </Button>
      <Button
        type="submit"
        color="primary"
        btnType="contained"
        size="medium"
        disabled={loading}
        className={classes.Button}
      >
        {loading ? <Spinner /> : edit ? "Edit" : "Add"} {props.word}
      </Button>
    </div>
  );
};

export default BtnBox;
