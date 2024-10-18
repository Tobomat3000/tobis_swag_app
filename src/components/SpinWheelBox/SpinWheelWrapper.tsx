import {SpinWheel} from "spin-wheel-game";
import {useEffect, useState} from "react";

interface SpinWheelWrapperPros{
    gamesList: string[];
}

export default function SpinWheelWrapper({gamesList}:SpinWheelWrapperPros){

    const [key,setKey]=useState(0)
    useEffect(()=>{
        setSegmentArray(gamesList.map(game => ({segmentText: game, segColor: "#4CAF50"}))) // Initialisierung der Segmente mit den Spielnamen und Farbe
        setKey(prevKey => prevKey + 1) // Aktualisierung des Keys, damit die Komponente neu rendert, wenn die Liste geändert wurde.
    },[gamesList])

    const [playedGames,setPlayedGames] = useState<string[]>([]);

    const [segmentArray,setSegmentArray]=useState<any[]>([
        ])

    const handleSpinnFinish= (result:string) => {
        setKey(prevKey => prevKey + 1)

        setSegmentArray(prevSegments => {
            const updatedSegments = prevSegments.filter(segment => segment.segmentText !== result);
            return updatedSegments; // Rückgabe des neuen Arrays
        })
        if(gamesList.length>0)
        setPlayedGames(prevGames => [...prevGames, result]); // Rückgabe des gespielten Spiels
    }

    return(
<>

        <SpinWheel buttonText={"Spank me"} segments={segmentArray.length?segmentArray:[{segmentText:"Keine Spiele mehr :)",segColor:"#941212"}]} onFinished={handleSpinnFinish} key={key}/>
       <p className={"text-center text-xl underline p-4"}> Gespielte Spiele</p>
        <ol >
            {playedGames.map((item,index)=> (<li key={index}>{item}</li>))}
        </ol>
</>
    )
}
