import Header from './component/Header/Header'
import Input from './component/Input/Input'
import Lists from './component/Lists/Lists'
import './App.css'
import { useState } from 'react'

function App() {
  const [note, setNote] = useState('')
  const [data, setData] = useState([])
  console.log(note);
  return (
    <div className="container">
      <div className="todolist_container">

        {/* 標題和未完成數 */}
        <Header data={data} />
        {/* todos */}
        <Lists data={data} setData={setData} />
        {/* 輸入欄位 */}
        <Input add={setData} setNote={setNote} note={note} />

      </div>
    </div>
  );
}



export default App;
