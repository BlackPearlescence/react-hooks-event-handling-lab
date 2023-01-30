// Code Keypad Component Here

function Keypad (){
    function pwdMsg(e){
        console.log("Entering password...")
    }
    return (
        <div>
            <input type="password" onChange={pwdMsg}/>
        </div>
    )
}

export default Keypad;