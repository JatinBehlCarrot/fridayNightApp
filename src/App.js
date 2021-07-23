import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import Header from "./Header";
import Question from "./Question";

const App = () => {
    const [quizStarted, setQuizStarted] = useState(false);
    const quizQuestions = ["How are you feeling today?*", "Do you prefer indoors or outdoor?*", "Would you like to socialize or plan solo?*"];
    const quizOptions = [["Relaxed", "Cheery", "Snoozy", "Productive"], ["Outdoors", "Indoors"], ["Socialize", "Solo"]];
    const images = ["https://images.pexels.com/photos/3807758/pexels-photo-3807758.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", "https://cdn.ramseysolutions.net/media/article-images/budget-date-night-l.jpg", "https://hips.hearstapps.com/clv.h-cdn.co/assets/18/02/1515470256-levi-guzman-268866.jpg"];


    const [firstQuesAnswered, setFirstQuesAnswered] = useState(false);


    function handleStartQuiz() {
        setQuizStarted(true);
    }

    if (quizStarted === false) {
        return (
            <div className="wrapper">
                <Header />
                <div className="container">
                    <div>
                        <h2>Take a quiz to plan your Friday!</h2>
                    </div>
                    <div>
                        <img src="https://images.pexels.com/photos/7262770/pexels-photo-7262770.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="friday night image" />
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                    </div>
                    <div>
                        <button type="button" onClick={handleStartQuiz}>Start Quiz</button>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <Question
                quizQuestions={quizQuestions[0]}
                quizOptions={quizOptions[0]}
                images={images[0]}
                setFirstQuesAnswered={setFirstQuesAnswered}
            />
        )
    }

}

ReactDOM.render(<StrictMode><App /></StrictMode>, document.getElementById("root"));