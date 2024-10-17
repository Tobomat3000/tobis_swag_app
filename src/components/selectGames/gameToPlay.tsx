

interface SelectedGameProps{
    text:string;
}
export default function GameToPlay({text}:SelectedGameProps){
    return (
        <div
            style={{border: '1px solid black', padding: '20px', margin: '20px'}}
        >
            <p>Das außerwählte Spiel ist: </p>
            <p>{text}</p>
        </div>
    );
}