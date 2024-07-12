import React from 'react';
import RegisterForm from './RegisterForm';
import Searchbar from './Searchbar';
import Emaillist from './Emaillist';
import './assets/scss/App.scss';

function App() {
    return (
        <div id="root">
            <div id="App">
                <RegisterForm />
                <Searchbar />
                <Emaillist />
            </div>
        </div>
    );
}

export default App;
