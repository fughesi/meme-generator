import Data from "../data/memesData"

export default function Meme() {
    
    
    function newMeme(e) {
        e.preventDefault()
        let num = Math.ceil(Math.random() * 100)
        const photos = Data.data.memes[num].url
        console.log(photos)
        return photos
    }

    return (
        <>
        <div id="memeContainer">
            <form id="formEl">
                <input type="text"  placeholder="top text" />
                <input type="text"  placeholder="bottom text" />
                <input type="submit" value="Get a new meme image" id="btn" onClick={newMeme} />
                <img src="https://i.imgflip.com/1g8my4.jpg" alt="something" />
            </form>
        </div>
        </>
    )
}