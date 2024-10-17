export default function ListComponent({ items, removeItem}) {

    return (
        <ul>
            {items.map((item, index) =>
                <li key={index}>{item}
                    <button onClick={() => removeItem(index)}>Löschen</button>
                </li>
            )}
        </ul>
    );
}
