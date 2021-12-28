

export default function Meme() {
    return (
        <div id="memeContainer">
            <form>
                <input type="text"  placeholder="top text" />
                <input type="text"  placeholder="bottom text" />
                <div id="submitContainer">
                    <input type="submit" value="Get a new meme image" />
                </div>
            </form>
        </div>
    )
}