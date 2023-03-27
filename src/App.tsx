import React, { useState } from 'react';
import './App.scss';
import Provider from './components/Provider';

import TwitterContainer from './components/TwitterContainer/TwitterContainer';

function App() {
    return (
        <Provider>
            <TwitterContainer />
        </Provider>
    );
}

export default App;
