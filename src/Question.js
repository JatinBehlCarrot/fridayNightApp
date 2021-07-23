import React from "react";
import { useState } from "react";

const Question = ({ quizQuestions, quizOptions, images, setFirstQuesAnswered }) => {
    const [mood, setMood] = useState("");
    return (
        <div className="quesContainer">
            <div className="quizQues">
                <p> {quizQuestions} </p>
            </div>
            <div className="options" >
                {
                    quizOptions.map((emotion, index) =>
                    (<>
                        <input key={emotion}
                            type="radio"
                            id="mood"
                            name="radioBtn"
                            value={emotion}
                            onChange={
                                () => setMood(emotion)}
                        />
                        <label htmlFor="mood"
                            key={index}
                        > {emotion} </label>
                    </>
                    )
                    )
                }
            </div>
            <div className="mainImg" >
                <img src={images} alt="image of a girl making all kinds of faces" />
            </div>
            <div className="quesBtnDiv" >
                <button type="button"
                    className="quesBtn"
                    onClick={() => setFirstQuesAnswered(true)}> Next Question </button>
            </div> </div>
    )

}

export default Question;