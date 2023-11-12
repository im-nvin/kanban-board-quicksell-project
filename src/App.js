import { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/header/Header';
import Board from './components/board/Board';

function App() {
  const [boardData, setBoardData] = useState(null);
  const [ordering, setOrdering] = useState("title");
  const [grouping, setGrouping] = useState("status");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
        const data = await response.json();
        setBoardData(data);
        console.log(boardData)

      } catch (error) {
        console.log("Error while fetching data from API" + error)
      }
    }
    fetchData();

  }, [])
  return (
    <div className="App">
      <Header ordering={ordering} grouping={grouping} setOrdering={setOrdering} setGrouping={setGrouping} />
      {boardData && <Board boardData={boardData} grouping={grouping} ordering={ordering}/>}

    </div>
  );
}

export default App;
