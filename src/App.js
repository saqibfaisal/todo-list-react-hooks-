import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Button from "./component/button"
import Edit from "./component/edit";
function App() {
  let [text, setText] = useState("")
  let [list, setList] = useState([])
  let [update, setUpdate] = useState(false)
  let [editIndex, setEditIndex] = useState()

  function add(e) {
    e.preventDefault()
    if (!text) {
      alert("Please fill the Todo")
    }
    else {
      list.push(text)
      setList([...list])
      // console.log(list)
    }
    setText("")
  }
  function click(i) {
    let data = [...list]
    data.splice(i, 1)
    // console.log(i)
    // console.log(data)
    setList(data)
  }
  function deleteall() {
    setList([])
  }
  function updated(index, newList) {
    let arr = []
    list.map((list, i) => {
      // console.log(list);
      if (index === i) {
        arr.push(newList)
      } else {
        arr.push(list)
      }
    })
    // console.log(newList)
    // console.log(arr);
    setList(arr)
  }
  function cancel() {
    setList(list)
  }
  return (
    <div className="App">
      <header className='header'>
        <div className='main'>
          <h1>Todo With React </h1>
          <input type="text" value={text} placeholder='ENTER THE TODO' onChange={(e) => {
            setText(e.target.value)
          }} />
          <button onClick={add} className="btn">Add</button>
          <div className='main1'>
            <div >{list.map((e, i) => {
              return <div className='main2'>
                <li key={i}>{e}</li>
                <Button dfval="delete" i={i} click={click} />
                <Button dfval="edit" i={i} edit={() => {
                  setUpdate(true);
                  setEditIndex(i);
                }} />
                <div>
                  {update && editIndex === i ?
                    <><Edit dtval="save" cancel={cancel}
                      index={i}
                      list={e}
                      updated={updated} />
                    </>
                    :
                    null
                  }
                </div>
              </div>
            })}
            </div>
          </div>
          <button onClick={deleteall} className="btn2">DeleteAll</button>
        </div>
      </header>
    </div>
  );
}

export default App;
