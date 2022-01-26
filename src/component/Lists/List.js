import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles'


const useStyles = makeStyles({
    root: {
        background: '#A8FF24',
        '&:hover': {
            background: '#82D900',
        },
        margin: '0.5rem'
    },
    margin: {
        margin: '0.5rem'
    }
});


function List({ note, data, id, setData, complete }) {
    const classes = useStyles();
    function outLine() {
        setDisable(true)
    }
    const [disable, setDisable] = useState(false)
    const [edit, setEdit] = useState(false)
    const [data2, setData2] = useState([])
    const newData = [...data]
    console.log(newData);
    function editHandler() {
        newData.forEach((item) => {
            if (item.id === id) {
                item.note = data2
            }
            setData(newData)
        })
    }

    function deleteList() {
        setData(
            data.filter(item => item.id !== id)
        )
    }
    if (edit) {
        return <div className='list'>
            <div className="edit">
                <input type="text" value={data2} onChange={(e) => setData2(e.target.value)}></input>
            </div>
            <div className="buttons">
                <Button className={classes.root} variant="contained" onClick={outLine} disabled={disable}  >DONE</Button>
                <Button className={classes.margin} color="primary" variant="contained" disabled={disable} onClick={() => { setEdit(false); editHandler() }}  >Save</Button>
                <Button className={classes.margin} color="secondary" variant="contained" aria-label="delete" >Delete</Button>
            </div>
        </div>;
    } else {
        return <div className='list'>
            <p className={`content ${disable ? 'linethrough' : ''}`} >{note}</p>
            <div className="buttons">
                <Button className={classes.root} variant="contained" onClick={outLine} disabled={disable}  >DONE</Button>
                <Button className={classes.margin} color="primary" variant="contained" disabled={disable} onClick={() => { setEdit(true) }}  >Edit</Button>
                <Button className={classes.margin} color="secondary" variant="contained" aria-label="delete" onClick={deleteList} >Delete</Button>
            </div>
        </div>;
    }
}

export default List;
