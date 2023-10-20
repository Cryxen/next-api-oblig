"use client"

import { useState } from "react"

const PollPage = () => {
    const [isChecked, setIsChecked] = useState(false)

    const handleCheckBox = (event) => {
        console.log(event.target.value)
    }

    const checkbox1 = "checkbox1"
    const checkbox2 = "checkbox2"
    const checkbox3 = "checkbox3"

    const formSubmit = (event) => {
        console.log("Form submitted")
        event.preventDefault()
    }
    return (
        <div className="pollPage">
            <h1>Pollpage</h1>
            <form onSubmit={formSubmit}>
                <p>Hva synes du om dårlgi mat?</p>
                <label htmlFor={checkbox1} >{checkbox1}</label>
                <input type="checkbox" name={checkbox1} value={checkbox1} onChange={handleCheckBox}/>
                <label htmlFor={checkbox2}>{checkbox2}</label>
                <input type="checkbox" name={checkbox2} value={checkbox2} onChange={handleCheckBox}/>
                <label htmlFor={checkbox3}>{checkbox3}</label>
                <input type="checkbox" name={checkbox3} value={checkbox3} onChange={handleCheckBox}/>
                <button type="submit">Submit poll</button>
            </form>
        </div>
    )
}
export default PollPage