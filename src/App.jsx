import React, {useState} from 'react';
import './App.css';

function App() {
    const [nameValue, setNameValue] = useState('');
    const [ageValue, setAgeValue] = useState('');
    const [messageValue, setMessageValue] = useState('');
    const [newsletterValue, setNewsletterValue] = useState(false);
    // function handleSubmit() {
    //     console.log({
    //         naam: nameValue,
    //         leeftijd: ageValue,
    //         opmerking: messageValue,
    //         nieuwsbrief: newsletterValue
    //     });
    // }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(nameValue, ageValue, messageValue, newsletterValue);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Gegevens</legend>
                    <label htmlFor="name-field">
                        Naam:
                        <input
                            type="text"
                            value={nameValue}
                            onChange={(e) => setNameValue(e.target.value)}
                            id="name-field"
                            name="name"
                        />
                    </label>
                    <label htmlFor="age-field">
                        Leeftijd:
                        <input
                            type="number"
                            value={ageValue}
                            onChange={(e) => setAgeValue(parseInt(e.target.value))}
                            id="age-field"
                            name="age"
                            placeholder="0"
                        />
                    </label>
                </fieldset>

                <fieldset>
                    <legend>Jouw review</legend>
                    <label htmlFor="message-field">
                        Opmerkingen:
                    </label>
                        <textarea
                            id="message-field"
                            name="message"
                            rows="5"
                            cols="50"
                            placeholder="Wat vond je van het recept?"
                            value={messageValue}
                            onChange={(e) => setMessageValue(e.target.value)}
                        />

                    <label htmlFor="form-newsletter" className="checkbox-label">
                        <input
                            type="checkbox"
                            id="form-newsletter"
                            name="newsletter"
                            checked={newsletterValue}
                            onChange={() => setNewsletterValue(!newsletterValue)}
                        />
                        Ik schrijf me in voor de nieuwsbrief
                    </label>

                    <button type="submit">Versturen</button>

                </fieldset>
            </form>
        </>
    );
}

export default App;
