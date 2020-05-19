import React from 'react';
import './RegCompany.scss';

const RegCompany = () => {
    const [error, setError] = React.useState(null);
    const [form, setForm] = React.useState({
        u_login: '',
        u_mail: '',
        u_password: '',
        u_passwordAgain: '',
        cc_name: '',
        cc_NIP: '',
        cc_REGON: '',
        cc_street: '',
        cc_number:'',
        cc_number_flat:'',
        cc_zip: '',
        cc_city:''
    });
    const handleSubmit = async (event) => {
        error.preventDefault()
        console.log('form submitted', form)
    }

    return(
        <div className="RegCompany">
            <h1>Rejestracja konta firmowego</h1>
                    <label htmlFor="u_login">Login</label><br></br>
                    <input required type="text" name="u_login" title="Proszę wpisać login"></input><br></br>
                    <label htmlFor="u_mail">E-mail</label><br></br>
                    <input required type="text" name="u_mail" title="Proszę podać adres mail"></input><br></br>
                    <label htmlFor="u_password">Ulica</label><br></br>
                    <input required type="text" name="u_password" title="Nowe hasło"></input><br></br>
                    <label htmlFor="u_passwordAgain">Numer domu/bloku</label><br></br>
                    <input required  type="numeric" name="u_passwordAgain" title="Powtórz hasło"></input><br></br>
                    <label htmlFor="cc_name">Nazwa</label><br></br>
                    <input required type="text" name="cc_name" title="Proszę podać nazwę firmy/działalności gospodarczej"></input><br></br>
                    <label htmlFor="cc_NIP">NIP</label><br></br>
                    <input required type="text" name="cc_NIP" title="Proszę podać NIP firmy"></input><br></br>
                    <label htmlFor="cc_REGON">REGON</label><br></br>
                    <input required type="text" name="cc_REGON" title="Proszę podać regon firmy"></input><br></br>
                    <label htmlFor="cc_street">Ulica</label><br></br>
                    <input required type="text" name="cc_street" title="Proszę podać ulicę na której znajduje sie siedziba firmy"></input><br></br>
                    <label htmlFor="cc_number">Numer domu/bloku</label><br></br>
                    <input required  type="numeric" name="cc_number" title="Proszę podać numer domu"></input><br></br>
                    <label htmlFor="cc_number_flat">Numer mieszkania</label><br></br>
                    <input required type="numeric" name="cc_number_flat" title="Proszę podać numer lokalu"></input><br></br>
                    <label htmlFor="cc_zip">Kod pocztowy</label><br></br>
                    <input required type="numeric" name="cc_zip" title="Proszę podać swoje kod pocztowy"></input><br></br>
                    <label htmlFor="cc_city">Miejscowośc</label><br></br>
                    <input required type="text" name="cc_city" title="Proszę podać miejscowość"></input><br></br>
            </div>
    )
}

export default RegCompany;