import React, {useState} from "react";

function FavColorInput(props) {
    const [color, setColor] = useState('')

    return (
        <form>
            <label>Favorite Color:
            <input/>
            </label>
            <input type='submit' value='Sumbit'>Sumbit</input>
        </form>
    );
}
export default FavColorInput