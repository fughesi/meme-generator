import troll from "../img/troll.png"

export default function Header() {
    return (
        <div id="headContainer">
            <h3><img src={troll} alt=""/> Meme Generator</h3>
            <p>React Course - Project 3</p>
        </div>
    )
}