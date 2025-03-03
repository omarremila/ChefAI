import ReactDOM from 'react-dom/client';
import "./body.css";
function Body() {
    function handleClick() {
        console.log("Button clicked");
    }
    return (
   
        <form className ="add-ingredient-form">
            <input 
                type="text"
                placeholder="e.g. oregano"
                aria-label="Add ingredient"
            />
            <button onMouseOver = {handleClick}>Add ingredient</button> {/*if we add onClick = {handleClick()} then it will be called immediately*/}
        </form>
 
    )
}

export default Body;