

interface GameProps{
    text:string;
    onClick: any;
    removeItem: any;
    index: any;
}
export default function Game({text, onClick, removeItem, index}:GameProps){
    return (
        <div className={" text-center"}
            style={{border: '1px solid black', padding: '20px', margin: '20px'}}
            onClick={() => onClick(text)}
        >
            <p className={"pb-3 animate-bounce"}>{text}</p>
            <button className={"hover:bg-red-900"}
                    onClick={() => removeItem(index)}>Löschen</button>
        </div>
    );
}

