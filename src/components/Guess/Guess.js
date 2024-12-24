import React, { useEffect } from "react";
import { range } from "../../utils";

function Guess({ inputOfTheUser }) {
  const [eachSell, setEachSell] = React.useState(["", "", "", "", ""]);
  const nextArray = [...inputOfTheUser, ...eachSell].splice(0, 5);
  useEffect(() => {
    console.log("THISIISISISI", nextArray);
    if (inputOfTheUser.length < 5) {
      setEachSell(nextArray);
    } else {
      alert("No more Live");
    }
  }, [inputOfTheUser]);

  // setEachSell();
  // console.log(eachSell);
  // setEachSell()
  // console.log("Next Array from Guess", { nextArray });
  // console.log("From Guess", { inputOfTheUser });
  // console.log(eachSell);
  return (
    <div>
      <div className="guess-results">
        {range(3).map((i) => {
          return (
            <div key={i}>
              <p className="guess">
                <span className="cell">{eachSell[i]}</span>
                <span className="cell">{eachSell[i]}</span>
                <span className="cell">{eachSell[i]}</span>
                <span className="cell">{eachSell[i]}</span>
                <span className="cell">{eachSell[i]}</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Guess;
