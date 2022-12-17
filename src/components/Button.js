import PropTypes from "prop-types";
import styles from "./Button.module.css"; // cra는 css코드를 javascript 객체로 변환시켜줌.
//모듈화한 css를 원하는 컴포넌트에 따로 적용가능하게 함.

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>; //객체화된 모듈 css에 className으로 접근하여 사용
  //-> create-react-app은 html에서 랜덤 class명을 가지게함. -> 다른 모듈css에서 같은 className을 사용해도 상관없음!!
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button; //->App.js에서 Button을 가져올 수 있게 함.즉, Button을 내보냄.-> App에선 Button을 import로 받아옴.
