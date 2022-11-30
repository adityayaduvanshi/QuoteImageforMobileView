import "./App.css";
import { useState } from "react";
import { images, quotes } from "./data";
function App() {
  const [index, setIndex] = useState(0);
  const [quoteIndex, setQouteIndex] = useState(0);
  const { quote } = quotes[quoteIndex];
  const { imgsrc } = images[index];
  const checkNumber1 = (number) => {
    if (number > quotes.length - 1) {
      return 0;
    }
    if (number < 0) {
      return quotes.length - 1;
    }
    return number;
  };
  const checkNumber = (number) => {
    if (number > images.length - 1) {
      return 0;
    }
    if (number < 0) {
      return images.length - 1;
    }
    return number;
  };
  console.log(images);
  var startingX, startingY, movingX, movingY;

  function touchStart(evt) {
    startingX = evt.touches[0].clientX;
    startingY = evt.touches[0].clientY;
  }
  function touchMove(evt) {
    movingX = evt.touches[0].clientX;
    movingY = evt.touches[0].clientY;
  }
  function touchEnd() {
    if (startingY + 100 < movingY) {
      setIndex((index) => {
        let newIndex = index + 1;
        return checkNumber(newIndex);
      });
    } else if (startingY - 100 > movingY) {
      setIndex((index) => {
        let newIndex = index - 1;
        return checkNumber(newIndex);
      });
    }

    if (startingX + 100 < movingX) {
      setQouteIndex((index) => {
        let newIndex = index - 1;
        return checkNumber1(newIndex);
      });
    } else if (startingX - 100 > movingX) {
      setQouteIndex((index) => {
        let newIndex = index + 1;
        return checkNumber1(newIndex);
      });
    }
  }

  return (
    <div
      className="Headerimage"
      onTouchStart={touchStart}
      onTouchMove={touchMove}
      onTouchEnd={touchEnd}
    >
      <div className="Quotes">
        <h1>"{quote}"</h1>
      </div>
      <img className="Img" src={imgsrc} alt="img" />
    </div>
  );
}

export default App;
