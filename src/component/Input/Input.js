import Reactfrom 'react';
import './input.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles'
import { v4 } from 'uuid'

const useStyles = makeStyles({
    root: {
        background: '#FF9224',
        '&:hover': {
            background: '#82D900',
        },
        margin: '0.5rem'
    },

});

function Input({ add, setNote, note }) {
    const classes = useStyles()

    function addData() {
        add((prev) => {
            return [
                ...prev,
                {
                    note,
                    id: v4(),
                    complete: false
                }
            ]
        })
    }

    return <div className="input_container">
        <input type="text" className="input" value={note} onChange={(e) => { setNote(e.target.value) }}  ></input>
        <Button className={classes.root} color="primary" variant="contained" onClick={addData}>ADD</Button>
    </div>;
}

export default Input;
