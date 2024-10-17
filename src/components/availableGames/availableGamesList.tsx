import Game from "../game.tsx";

export default function AvailableGamesList({ items, removeItem, addToList}) {

    return (
        <ul>
            {items.map((item, index) =>
                <li key={index}>
                    <Game text={item} onClick={addToList} removeItem={removeItem} index={index}/>

                </li>
            )}
        </ul>
    );
}
