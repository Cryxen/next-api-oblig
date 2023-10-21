"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";

const PollPage = () => {
  const [isChecked, setIsChecked] = useState([]);
  const [polls, setPolls] = useState([{}]);

  // Fetch polls from API
  useEffect(() => {
    const fetchPollsFromAPI = async () => {
      const response = await axios("/api/polls");
      if (response.status === 200) {
        setPolls(response.data.data)
      }
      else
        console.log("Something went wrong")
    };
    fetchPollsFromAPI();
  }, []);

  console.log(polls)
  // Function triggered when checking a checkbox
  const handleCheckBox = (event) => {
    console.log(event.target.value);
    // Check if isChecked is empty
    if (isChecked.length < 1) {
      console.log("if checked tom");
      setIsChecked([event.target.value]);
      console.log(isChecked);
    } else {
      // There is something in "isChecked". See if event target value exists in isChecked. Add if not, if it is - delete.
      if (isChecked.indexOf(event.target.value) <= -1) {
        console.log("Checkbox er ikke i array");
        setIsChecked([...isChecked, event.target.value]);
      } else {
        console.log("Checkbox er i array");
        const index = isChecked.indexOf(event.target.value);
        setIsChecked(isChecked.filter((item) => item !== event.target.value));
      }
    }
  };

  console.log(isChecked);

  const checkbox1 = "checkbox1";
  const checkbox2 = "checkbox2";
  const checkbox3 = "checkbox3";

  // Button handler for submitting form
  const formSubmit = (event) => {
    console.log("Form submitted");
    event.preventDefault();
  };
  return (
    <div className="pollPage">
        <Layout>
      <h1>Pollpage</h1>
      {polls?.map((poll) => 
              <form onSubmit={formSubmit} key={poll.id}>
              <p>{poll.question}</p>
              <label htmlFor={poll.checkbox1}>{poll.checkbox1}</label>
              <input
                type="checkbox"
                name={poll.checkbox1}
                value={poll.checkbox1}
                onChange={handleCheckBox}
              />
              <label htmlFor={poll.checkbox2}>{poll.checkbox2}</label>
              <input
                type="checkbox"
                name={poll.checkbox2}
                value={poll.checkbox2}
                onChange={handleCheckBox}
              />
              <label htmlFor={poll.checkbox3}>{poll.checkbox3}</label>
              <input
                type="checkbox"
                name={poll.checkbox3}
                value={poll.checkbox3}
                onChange={handleCheckBox}
              />
              <button type="submit">Submit poll</button>
            </form>
      )}
     </Layout>
    </div>
  );
};
export default PollPage;
