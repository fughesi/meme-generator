import React, {useState} from "react"
import memesData from "../data/memesData"
import Data from "../data/memesData"

export default function Meme() {

    // state variables
    const [allMemeImages, setAllMemeImages] = React.useState(Data)
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    // regular variables
    const array = allMemeImages.data.memes
    
    // gets a new photo displayed from the Data
    function newMeme(e) {
        e.preventDefault()
        let num = Math.floor(Math.random() * array.length)
        const photos = array[num].url
        setMeme(i => ({
            ...i,
            randomImage: photos
        }))
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
                <p>{meme.topText}</p>
                <img src={meme.randomImage} alt="this is your meme" />
                <p>{meme.bottomText}</p>
            </div>
        </div>
        </>
    )
}