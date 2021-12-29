import React, {useState} from "react"
import Data from "../data/memesData"

export default function Meme() {
    // state variables
    const [memeImage, setMemeImage] = useState("")
    // regular variables
    const array = Data.data.memes
    
    //gets a new photo displayed from the Data
    function newMeme(e) {
        e.preventDefault()
        let num = Math.floor(Math.random() * array.length)
        const photos = array[num].url
        setMemeImage(i => photos)
    }

    return (
        <>
        <div id="memeContainer">
            <form id="formEl">
                <input type="text"  placeholder="top text" id="topText" />
                <input type="text"  placeholder="bottom text" id="bottomText" />
                <input type="submit" value="Get a new meme image" id="btn" onClick={newMeme} />
            </form>
            <div id="photoContainer">
                <img src={memeImage} alt="this is your meme" />
            </div>
        </div>
        </>
    )
}