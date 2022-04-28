import PropTypes from "prop-types";
import styled from "./Button.module.css";

function Button({ text }) {
  return <button className={styled.btn}>{text}</button>;
}

//뭐랄까 자동완성이 되서 편하다
Button.propTypes = {
  text: PropTypes.string.isRequired,
};
export default Button;
