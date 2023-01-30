// Code EyesOnMe Component Here

function EyesOnMe(){
    function focusText(e){
        console.log("Good!");
    }

    function blurText(e){
        console.log("Hey! Eyes on me!");
    }

    return(
        <button onFocus={focusText} onBlur={blurText}>{"Eyes on me"}</button>
    );
}
export default EyesOnMe;