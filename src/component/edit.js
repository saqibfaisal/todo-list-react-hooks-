import { useRef } from "react";
function Edit(props) {
    const value = useRef(null);
    return (
        <div onSubmit={(event => {
            event.preventDefault()
            // console.log(value.current.value)
        })}>
            {/* <input defaultValue={props.list} onChange={(e) => {
            props.setText(e.target.value)
            }}/> */}
            <input defaultValue={props.list} ref={value} />
            <button onClick={() => props.updated(props.index, value.current.value)}>{props.dtval}</button>
        </div>
    )
}
export default Edit;