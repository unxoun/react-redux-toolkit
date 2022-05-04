import { useDispatch, useSelector } from "react-redux";
import { changedToRed } from "../store/slices/color";
import { incrementedBy1 } from "../store/slices/count";

export default function ReduxToolKit() {
  //
  const dispatch = useDispatch();

  //
  const color = useSelector((state) => state.color);
  const handleRedColorButtonClick = () => {
    dispatch(changedToRed('I am a useless payload value!'));
  };

  //
  const count = useSelector((state) => state.count);
  const handleIncrementBy1ButtonClick = () => {
      dispatch(incrementedBy1('I am a useless payload value!'))
  };

  //
  return (
    <>
      <button name="redColorButton" onClick={handleRedColorButtonClick}>
        Red
      </button>
      <button name="blueColorButton">Blue</button>
      <button name="greenColorButton">Green</button>
      <div style={{ background: `${color}` }}>state.color</div>
      <button onClick={handleIncrementBy1ButtonClick}>+1</button>
      <button>+7</button>
      <button>+58</button>
      <div style={{ background: "#ccc" }}>state.count: {count}</div>
    </>
  );
}
