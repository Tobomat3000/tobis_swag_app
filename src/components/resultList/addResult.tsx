import {useState} from "react";

interface Props {
    addTextToList: (text: any) => void;
}

export default function InputFieldResult({addRow}){
    const [nameInput, setNameInput] = useState('');
    const [pointsInput, setPointsInput] = useState('');

    const handleAdd = () => {
        addRow(nameInput, pointsInput);
        setNameInput('');
        setPointsInput('');
    };

    return (
        <div>
            <input
                type="text"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                placeholder="Name"
            />
            <input
                type="text"
                value={pointsInput}
                onChange={(e) => setPointsInput(e.target.value)}
                placeholder="Punkte"
            />
            <button onClick={handleAdd}>Punkte eintragen</button>
        </div>
)
}