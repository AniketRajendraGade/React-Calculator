import styles from "./btn.module.css";

const ButtonContainer = ({ onButtonClick }) => {
  const btnNames = [
    "C",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "/",
    "*",
    "=",
    ".",
  ];

  return (
    <div className={styles.btncontainer}>
      {btnNames.map((item) => (
        <button
          key={item}
          className={styles.button}
          onClick={() => onButtonClick(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default ButtonContainer;
