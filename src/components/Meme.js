

export default function Meme() {

    function noReload(e) {
        return e.preventDefault()
    }

    return (
        <div id="memeContainer">
            <form id="formEl">
                <input type="text"  placeholder="top text" />
                <input type="text"  placeholder="bottom text" />
                <input type="submit" value="Get a new meme image" id="btn" onClick={noReload} />
            </form>
        </div>
    )
}