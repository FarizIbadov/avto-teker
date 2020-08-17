import React from "react";
import Form from "../../packages/Formidable/Form";
import classes from "./style.module.scss";
import JsValidator from "../../packages/JsValidator";
import { TextField } from "../../components/UI/Fields";
import Button from "../../components/UI/Button";
import { useGlobalContext } from "../../globalStore/context";
import Spinner from "../../components/UI/Spinner";
import Message from "../../components/UI/Message";
import Icon from "../../components/UI/Icon";
import { Method } from "../../packages/Formidable/types";
import { useTitle } from "../../hooks";

export const Login: React.FC = () => {
  const { action, state } = useGlobalContext();
  useTitle("Login");

  const formProps = {
    name: "login",
    initVals: { username: "", password: "" },
    onSubmit: action.onSubmit,
    method: "post" as Method,
    action: "/auth/login",
    className: classes.LoginForm,
    validationSchema: {
      username: JsValidator.validate().required("Username is required"),
      password: JsValidator.validate().required("Password is required"),
    },
  };

  return (
    <div className={classes.Login}>
      <Form {...formProps}>
        <Icon id="user" className={classes.UserIcon} />
        <Message className={classes.Message} />
        <TextField
          name="username"
          placeholder="Username"
          className={classes.LoginField}
        />
        <TextField
          name="password"
          type="password"
          placeholder="Password"
          className={classes.LoginField}
        />
        <Button
          type="submit"
          color="primary"
          btnType="contained"
          size="medium"
          disabled={state.loading}
          className={classes.LoginBtn}
        >
          {state.loading ? <Spinner /> : "Login"}
        </Button>
      </Form>
    </div>
  );
};
