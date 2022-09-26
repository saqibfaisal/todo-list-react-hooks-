function Button(props) {

    return (
        <> <button className="btn1" onClick={() => {
            if (props.dfval === "delete") {
                props.click(props.i)
                return
            }
            else {
                props.edit(props.i)
            }
        }
        } >{props.dfval}</button>
        </>
    )
}
export default Button