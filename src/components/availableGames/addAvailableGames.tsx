import React, { useState } from 'react';
interface Props {
    addTextToList: (text: any) => void;
}

export default function InputField(props: Props) {
    // Zustand für Text-Eingabefeld
    const [inputText, setInputText] = useState('');

    const handleAddToList = () => {
        props.addTextToList(prevList => [...prevList, inputText]);
        setInputText(''); // Eingabefeld zurücksetzen
    };

    return (
        <div className={"flex gap-2 justify-center p-2 m-2 mt-10"}>
            <input className={"text-center w-2/3"}
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Geben Sie Text ein"
                onKeyDown={(event)=>{if (event.key == "Enter"){handleAddToList() }}}
            />
            <button className={"hover:bg-green-900"}
                    onClick={handleAddToList}>Zur Liste hinzufügen</button>
        </div>
    );
}
