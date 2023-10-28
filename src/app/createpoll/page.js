"use client";
import { useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { validate } from "@/lib/validation";

const CreatePoll = () => {
  const [pollTitle, setPollTitle] = useState("");
  const [pollQuestion1, setPollQuestion1] = useState("");
  const [pollQuestion2, setPollQuestion2] = useState("");
  const [pollQuestion3, setPollQuestion3] = useState("");
  const [validationError, setValidationError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const poll = {
        question: pollTitle,
        checkbox1: pollQuestion1,
        checkbox2: pollQuestion2,
        checkbox3: pollQuestion3,
        userId: localStorage.getItem("userId")
      };

    const isValidQuestion = validate.isQuestion(pollTitle);
    const containsQuestion = validate.containsQuestion(poll);
    if (!isValidQuestion && !containsQuestion) {
        console.log("validation error!")
      setValidationError({
        containtsQuestionMark: "Tittel mangler spørsmålstegn",
        containsQuestion: "Mangler spørsmål",
      });
    } else if (!isValidQuestion) {
      setValidationError({
        containtsQuestionMark: "Tittel mangler spørsmålstegn",
      });
    } else if (!containsQuestion) {
      setValidationError({ containsQuestion: "Mangler spørsmål" });
    } else {
      console.log("Submit button pressed");

      axios
        .post("/api/polls", poll)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handlePollTitleChange = (event) => {
    setPollTitle(event.target.value);
  };

  const handlePollQuestion1 = (event) => {
    setPollQuestion1(event.target.value);
  };
  const handlePollQuestion2 = (event) => {
    setPollQuestion2(event.target.value);
  };
  const handlePollQuestion3 = (event) => {
    setPollQuestion3(event.target.value);
  };

  return (
    <Layout>
      <h1>Lag spørreundersøkelse!</h1>
      <form onSubmit={handleSubmit}>
        <div>
            {validationError ? JSON.stringify(validationError) : null}
        </div>
        <label htmlFor="pollTitle">Navn på spørreundersøkelse</label>
        <input type="text" name="pollTitle" onChange={handlePollTitleChange} />
        <label htmlFor="pollQuestion1">Svar alternativ 1</label>
        <input
          type="text"
          name="pollQuestion1"
          onChange={handlePollQuestion1}
        />
        <label htmlFor="pollQuestion2">Svar alternativ 2</label>
        <input
          type="text"
          name="pollQuestion2"
          onChange={handlePollQuestion2}
        />
        <label htmlFor="pollQuestion3">Svar alternativ 3</label>
        <input
          type="text"
          name="pollQuestion3"
          onChange={handlePollQuestion3}
        />
        <button type="submit">Lag undersøkelse</button>
      </form>
    </Layout>
  );
};
export default CreatePoll;
