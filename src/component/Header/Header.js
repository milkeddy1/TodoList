import React from 'react';
import './Header.css'

function Header({ data }) {
    return <div>
        <h1 className="title">TodoList</h1>
        <h2 className="num_of_todos">{data.length} Todos Left</h2>
    </div>;
}


export default Header;
