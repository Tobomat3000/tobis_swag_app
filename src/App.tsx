import { useState } from 'react'
import './App.css'
import ListComponent from "./components/selectGames/selectedGames.tsx";
import GameToPlay from "./components/selectGames/gameToPlay.tsx";
import AvailableGamesList from "./components/availableGames/availableGamesList.tsx";
import InputField from "./components/availableGames/addAvailableGames.tsx";
import ResultList from "./components/resultList/resultList.tsx";
import InputFieldResult from "./components/resultList/addResult.tsx";


function App() {
    const [list, setList] = useState<string[]>([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [gamesList, setGamesList] = useState<string[]>([]);
    const [resultList, setResultList] = useState([])

    const addToList = (text) => {
        if (!list.includes(text)) {
            setList(prevList => [...prevList, text]);
        } else {
            alert('Dieses Element wurde bereits zur Liste hinzugefügt.')
        }
    };


    const removeItem = (index) => {
        setList(prevList => prevList.filter((_, i) => i !== index));
    };

    const removeGeamesItem = (index) => {
        setGamesList(prevList => prevList.filter((_, i) => i !== index));
    };

    const selectRandomItem = () => {
        const randomIndex = Math.floor(Math.random() * list.length);
        setSelectedItem(list[randomIndex]);
        setList(prevList => prevList.filter((_, i) => i !== randomIndex));
    };

  return (
      <div className={"grid grid-cols-2 h-screen border-2 w-screen justify-center"}>
          <div className="border-2">
              <div>
                  <InputField addTextToList={setGamesList}/>
              </div>
              <div>
                  <AvailableGamesList items={gamesList} removeItem={removeGeamesItem} addToList={addToList}/>
              </div>
          </div>

          <div className="flex flex-col h-full border-2">
              <div className={"flex-1 border-pink-500 border-2"}>
                  <button onClick={selectRandomItem}>Wähle zufälliges Element</button>
                  {selectedItem && (<GameToPlay text={selectedItem}/>)}
                  <ListComponent items={list} removeItem={removeItem}/>
              </div>
              <div className={"flex-1 border-pink-500 border-2"}>
                  <InputFieldResult addRow={setResultList}/>
                  <ResultList items={resultList}/>
              </div>
          </div>


      </div>
  )
}

export default App
