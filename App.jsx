
import React from 'react';
import Classprops from './Classprops';
import Functionprops from './Functionprops';

function App() {
    return (
        <div>

            <Classprops
                name="Learner1"
                place="Bagepalli"
            />

            <Classprops
                name="Learner2"
                place="Bangalore"
            />

            <Functionprops
                name="Learner3"
                place="Mysore"
            />

            <Functionprops
                name="Learner4"
                place="Madikeri"
            />

        </div>
    );
}

export default App;
