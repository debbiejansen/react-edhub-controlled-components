import React, {useState} from 'react';
import './App.css';

function App() {
    const [nameValue, setNameValue] = useState('');
    const [ageValue, setAgeValue] = useState('');
    const [messageValue, setMessageValue] = useState('');
    const [termsAndConditionsValue, setTermsAndConditionsValue] = useState(false);
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
                    <br/><br/>
                    <label htmlFor="age-field">
                        Leeftijd:
                        <input
                            type="text"
                            value={ageValue}
                            onChange={(e) => setAgeValue(e.target.value)}
                            id="age-field"
                            name="age"
                            placeholder="0"
                        />
                    </label>
                </fieldset>
            </form>
            <form>
                <fieldset>
                    <legend>Jouw review</legend>
                    <label htmlFor="message-field">
                        Opmerkingen:
                        <input
                            type="text"
                            value={messageValue}
                            onChange={(e) => setMessageValue(e.target.value)}
                            id="message-field"
                            name="message"
                            placeholder="Wat vond je van het recept?"
                        />
                    </label>
                    <br /><br />
                    <label htmlFor="form-terms-and-conditions">
                        <input
                            type="checkbox"
                            id="form-terms-and-conditions"
                            name="terms-and-conditions"
                            checked={termsAndConditionsValue}
                            onChange={() => setTermsAndConditionsValue(!termsAndConditionsValue)}
                        />
                        Ik ga akkoord met de algemene voorwaarden
                    </label>
                </fieldset>
            </form>
        </>
    );
}

export default App;
