import React from 'react';
import './RegIndividual.scss';

const RegIndividual = () => {
    const [error, setError] = React.useState(null);
    const [form, setForm] = React.useState({
        u_login: '',
        u_mail: '',
        u_password: '',
        u_passwordAgain: '',
        ci_name: '',
        ci_surname: '',
        ci_street: '',
        ci_number:'',
        ci_number_flat:'',
        ci_zip: '',
        ci_city:''
    });
    const handleSubmit = async (event) => {
        error.preventDefault()
        console.log('form submitted', form)
    }

    return(
        <div className="RegIndividual">
            <h1>Rejestracja konta indywidualnego</h1>
                    <label htmlFor="u_login">Login</label><br></br>
                    <input required type="text" name="u_login" title="Proszę wpisać login"></input><br></br>
                    <label htmlFor="u_mail">E-mail</label><br></br>
                    <input required type="text" name="u_mail" title="Proszę podać adres mail"></input><br></br>
                    <label htmlFor="u_password">Ulica</label><br></br>
                    <input required type="text" name="u_password" title="Nowe hasło"></input><br></br>
                    <label htmlFor="u_passwordAgain">Numer domu/bloku</label><br></br>
                    <input required  type="numeric" name="u_passwordAgain" title="Powtórz hasło"></input><br></br>
                    <label htmlFor="ci_name">Imię</label><br></br>
                    <input required type="text" name="ci_name" title="Proszę podać swoje imię"></input><br></br>
                    <label htmlFor="ci_surname">Nazwisko</label><br></br>
                    <input required type="text" name="ci_surname" title="Proszę podać swoje nazwisko"></input><br></br>
                    <label htmlFor="ci_street">Ulica</label><br></br>
                    <input required type="text" name="ci_street" title="Proszę podać ulicę"></input><br></br>
                    <label htmlFor="ci_number">Numer domu/bloku</label><br></br>
                    <input required  type="numeric" name="ci_number" title="Proszę podać numer domu"></input><br></br>
                    <label htmlFor="ci_number_flat">Numer mieszkania</label><br></br>
                    <input required type="numeric" name="ci_number_flat" title="Proszę podać numer lokalu"></input><br></br>
                    <label htmlFor="ci_zip">Kod pocztowy</label><br></br>
                    <input required type="numeric" name="ci_zip" title="Proszę podać swoje kod pocztowy"></input><br></br>
                    <label htmlFor="ci_city">Miejscowośc</label><br></br>
                    <input required type="text" name="ci_city" title="Proszę podać miejscowość"></input><br></br>
                   
            </div>
    )
}

export default RegIndividual;