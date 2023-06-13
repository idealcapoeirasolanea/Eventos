import React, {useEffect} from 'react';
import './App.module.scss';
import BaseLayout from './components/BaseLayout';
import {logGa} from './utils/log';

function App() {
    useEffect(() => {
        logGa('home_page_visit');
    }, []);

    return (
        <div>
            <BaseLayout/>
        </div>
    );
}

export default App;
