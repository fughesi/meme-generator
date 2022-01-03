import React from "react"

export default function Meme() {

    // state variables
    const [allMemeImages, setAllMemeImages] = React.useState()
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    // effect hook to control for API
    React.useEffect(()=> {
    fetch("https://api.imgflip.com/get_memes")
        .then(res=>res.json())
        .then(data=>setAllMemeImages(data.data.memes))
        console.log(allMemeImages)
    }, [])

        
    // maintains state of topText and bottomText
    function addText(event) {
        const{name, value} = event.target
        setMeme(i=> ({
            ...i,
            [name]: value
        }))
    }
        
    // gets a new photo displayed from the Data
    function newMeme(e) {
        e.preventDefault()
        let num = Math.floor(Math.random() * allMemeImages.length)
        const photos = allMemeImages[num].url
        setMeme(i => ({
            ...i,
            randomImage: photos
        }))
    }

    return (
        <>
        <div id="memeContainer">
            <form id="formEl">
                <input 
                    name="topText"
                    type="text"  
                    placeholder="top text" 
                    id="topText" 
                    onChange={addText}
                />
                <input 
                    name="bottomText"
                    type="text"  
                    placeholder="bottom text" 
                    id="bottomText" 
                    onChange={addText}
                />
                <input 
                    type="submit" 
                    value="Get a new meme image" 
                    id="btn" 
                    onClick={newMeme} 
                />
            </form>
            <div id="photoContainer">
                <p id="topText">{meme.topText}</p>
                <img src={meme.randomImage} alt="this is your meme" />
                <p id="bottomText">{meme.bottomText}</p>
            </div>
        </div>
        </>
    )
}