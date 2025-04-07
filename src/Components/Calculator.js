import { useState } from "react";

function Calculator () {
    const [userinput, setUserInput]= useState("");
    const [prevvalue, setPrevValue]= useState(null);
    const [operator, setOperator]= useState(null);


    return (
        <div>
        <h1>Calculator</h1>
        </div>
    )
}

export default Calculator;