import React from 'react';
import List from './List'
import './List.css'

function Lists({ data, setData }) {
    return <div className="lists">
        {data.map((item) => {
            return <List id={item.id} key={item.id} note={item.note} setData={setData} data={data} complete={item.complete} />
        })}
    </div>;
}

export default Lists;
