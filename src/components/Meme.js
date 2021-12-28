import Data from "../data/memesData"

export default function Meme() {
    
    function newMeme(e) {
        e.preventDefault()
        let num = Math.ceil(Math.random() * 100)
        console.log(num)
    }

    return (
        <>
        <div id="memeContainer">
            <form id="formEl">
                <input type="text"  placeholder="top text" />
                <input type="text"  placeholder="bottom text" />
                <input type="submit" value="Get a new meme image" id="btn" onClick={newMeme} />
            </form>
        </div>
        <div id="photoContainer">
            
        </div>
        </>
    )
}