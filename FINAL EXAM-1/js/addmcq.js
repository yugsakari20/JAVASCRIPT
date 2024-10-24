import { api } from "./api.js";

const handleQue = async (e) => {
  e.preventDefault();

  let data = {
    question: document.getElementById("question").value,
    option1: document.getElementById("option1").value,
    option2: document.getElementById("option2").value,
    option3: document.getElementById("option3").value,
    option4: document.getElementById("option4").value,
    correct: document.getElementById("correct").value,
  };

  console.log(data);

  api.post(data);
};

document.getElementById("mcq-form").addEventListener("submit", handleQue);

let score = 0;

let data = await api.get();
console.log(data);

const ui = () => {
  document.getElementById("app").innerHTML = "";
  data.map((ele, i) => {
    let question = document.createElement("h3");
    question.innerHTML = `${i + 1}. ${ele.question}`;

    let option1 = document.createElement("p");
    option1.innerHTML = `A: ${ele.option1}`;

    let option2 = document.createElement("p");
    option2.innerHTML = `B: ${ele.option2}`;

    let option3 = document.createElement("p");
    option3.innerHTML = `C: ${ele.option3}`;

    let option4 = document.createElement("p");
    option4.innerHTML = `D: ${ele.option4}`;

    console.log("Correct Answer:", ele.correct);

    const checkAns = (option) => {
      return () => {
        if (option.innerHTML.slice(3) === ele.correct) {
          option.style.color = "green";
          score++;
        } else {
          option.style.color = "red";
          if (score >= 1) {
            score--;
          }
        }
        document.getElementById("score").innerHTML = `Score: ${score}`;
        option1.style.pointerEvents = "none";
        option2.style.pointerEvents = "none";
        option3.style.pointerEvents = "none";
        option4.style.pointerEvents = "none";
      };
    };

    option1.addEventListener("click", checkAns(option1));
    option2.addEventListener("click", checkAns(option2));
    option3.addEventListener("click", checkAns(option3));
    option4.addEventListener("click", checkAns(option4));

    document.getElementById("app").append(question, option1, option2, option3, option4);
  });
};

ui();
