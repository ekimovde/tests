import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";

import { authActions } from "redux/actions";

import { Button, Input } from "components/commons";
import "./Auth.scss";

const Auth = ({ fetchAuthLogin }) => {
  const { values, handleSubmit, handleChange, handleBlur } = useFormik({
    enableReinitialize: true,
    initialValues: {
      login: "",
      password: "",
    },
    validationSchema: Yup.object({
      login: Yup.string().min(1).required(),
      password: Yup.string().min(1).required(),
    }),
    onSubmit: ({ login, password }) => {
      const userData = {
        login,
        password,
        type: "web",
      };

      fetchAuthLogin(userData);
    },
  });

  return (
    <div className="auth">
      <form className="auth__form" onSubmit={handleSubmit}>
        <div className="auth__top">
          <img src="" alt="" className="auth__brand" />

          <h5 className="auth__title">Авторизация</h5>
        </div>

        <div className="auth__offer">
          <div className="auth__block">
            <label htmlFor="login" className="auth__name">
              Логин
            </label>

            <div className="auth__input">
              <Input
                name={"login"}
                type="text"
                value={values.login}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </div>

          <div className="auth__block">
            <label htmlFor="password" className="auth__name">
              Пароль
            </label>

            <div className="auth__input">
              <Input
                name={"password"}
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </div>
        </div>

        <div className="auth__bottom">
          <Button title="Войти" />
        </div>
      </form>
    </div>
  );
};

export default connect(() => ({}), authActions)(Auth);
