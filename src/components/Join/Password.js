import { useEffect, useState } from "react";
import classes from "./Password.module.css";
import eyeOn from "../../img/join/eye-on.svg";
import eyeOff from "../../img/join/eye-off.svg";
import useInput from "../../hooks/use-input";

function Password(props) {
  const [passwordShown, setPasswordShown] = useState(false);
  const password = useInput("");

  function eyeHandler() {
    setPasswordShown((prev) => !prev);
  }

  useEffect(() => {
    console.log(password.value);
  }, [password.value]);

  return (
    <div className={classes.password}>
      <input
        type={passwordShown ? "text" : "password"}
        placeholder={props.placeholder}
        className={`${classes.input} `}
        name={props.name}
        {...password}
      />
      <img
        src={passwordShown ? eyeOn : eyeOff}
        width="20px"
        onClick={eyeHandler}
      />
    </div>
  );
}

export default Password;
