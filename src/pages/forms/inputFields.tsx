type props = {
    otherProps: any
}
const InputFields = ( {otherProps}: props) =>{
    return (
        <>
        <div className="">
            <input type="text"  onChange={otherProps}/>
        </div>
        </>
    )
}
export default InputFields;