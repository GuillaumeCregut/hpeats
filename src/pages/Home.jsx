import React from 'react';
import MenuFilters from '../components/navbar/MenuFilters';
import {useState} from 'react';

function Home() {
    const [filterKind, setFilterKind] = useState('')
    return (
        <div>
            <MenuFilters filterFunction= {setFilterKind} />
        </div>
    )
}

export default Home
