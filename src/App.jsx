import { useState } from "react";
import "./App.css";

function App() {
  const choice = ["Rock", "Paper", "Scissors"];
  const [win, setWin] = useState("");
  const [userchoice, setuserchoice] = useState("");
  const [computerChoice, setcomputerChoice] = useState("");
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  function winner(user, comp) {
    if (user === comp) {
      setWin("tie");
      return;
    }
    if (
      (user === "Rock" && comp === "Scissors") ||
      (user === "Paper" && comp === "Rock") ||
      (user === "Scissors" && comp === "Paper")
    ) {
      setUserScore(userScore + 1);
      setWin("User");
    } else {
      setComputerScore(computerScore + 1);

      setWin("Computer");
    }
  }

  function choicedone(val) {
    const computerChoice = choice[Math.floor(Math.random() * choice.length)];
    setcomputerChoice(computerChoice);
    setuserchoice(val);
    winner(val, computerChoice);
  }
  const getImage = (choice) => {
    switch (choice) {
      case "Rock":
        return "src/assets/rock.png";
      case "Paper":
        return "src/assets/paper.png";
      case "Scissors":
        return "src/assets/Scissors.png";
      default:
        return "src/assets/rock.png";
    }
  };
  return (
    <>
      <div className="main">
        <div className="wrapper">
          <div>
            <h1>{win}</h1>
          </div>
          <div>
            <div className="score">
              <h2>User Score:{userScore}</h2>
              <h2>Computer Score:{computerScore}</h2>
            </div>

            <div className="images">
              <div>
                <img src={getImage(userchoice)} alt="" />
              </div>
              <div>
                <p>vs</p>
              </div>
              <div>
                <img src={getImage(computerChoice)} alt="" />
              </div>
            </div>
          </div>
          <div>
            {choice.map((item, index) => (
              <button
                className="btn"
                onClick={() => choicedone(item)}
                key={index}
              >
                {item}
              </button>
            ))}
          </div>
          <button
            className="reset"
            onClick={() => {
              setUserScore(0);
              setComputerScore(0);
              setWin("");
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
