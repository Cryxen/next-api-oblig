"use client"
import Layout from "../components/Layout"

const CreatePoll = () => {

    const numberOfQuestions = 2

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("Submit button pressed")
    }

    return(
        <Layout>
            <h1>Lag spørreundersøkelse!</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="pollTitle">Navn på spørreundersøkelse</label>
                <input type="text" name="pollTitle" />
                <label htmlFor="pollQuestion">Spørsmål</label>
                <input type="text" name="pollQuestion" />
                <button type="submit">Lag undersøkelse</button>
            </form>
        </Layout>
    )
}
export default CreatePoll