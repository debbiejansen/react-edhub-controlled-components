import React, {useState} from 'react';
import './App.css';

function App() {
    const [nameValue, setNameValue] = useState('');
    const [ageValue, setAgeValue] = useState('');
    const [messageValue, setMessageValue] = useState('');
    const [newsletterValue, setNewsletterValue] = useState(false);
    function handleSubmit() {
        console.log({
            naam: nameValue,
            leeftijd: ageValue,
            opmerking: messageValue,
            nieuwsbrief: newsletterValue
        });
    }

    return (
        <>
            <form>
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
                            onChange={(e) => setAgeValue(e.target.value)}
                            id="age-field"
                            name="age"
                            placeholder="0"
                        />
                    </label>
                </fieldset>
            </form>
            <form
            onSubmit={function(event){
                event.preventDefault();
                handleSubmit();
            }}>
                <fieldset>
                    <legend>Jouw review</legend>
                    <label htmlFor="message-field">
                        Opmerkingen:
                    </label>
                        <textarea
                            type="text"
                            value={messageValue}
                            onChange={(e) => setMessageValue(e.target.value)}
                            id="message-field"
                            name="message"
                            placeholder="Wat vond je van het recept?"
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

                    <button type="submit">
                    Versturen
                    </button>

                </fieldset>
            </form>
        </>
    );
}

export default App;
