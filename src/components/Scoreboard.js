import { useState } from "react";
import AddPlayerForm from "./AddPlayerForm";
import "./Scoreboard.scss";

import Player from "./Player";

function compare_score(player_a, player_b) {
        return player_b.score - player_a.score;
    }
function compare_name(player_a, player_b) {
    return player_a.name.localeCompare(player_b.name);
}

function Scoreboard() {

    const [sort_by, set_sort_by] = useState("score");

    const [players, set_players] = useState([
        { id: 1, name: "Violeta", score: 11 },
        { id: 2, name: "Eszter", score: 14 },
        { id: 3, name: "Jeroen v2", score: 4 },
        { id: 4, name: "Lisa", score: 42 },
    ])

    const players_sorted = [...players].sort(sort_by === "name" ? compare_name : compare_score);
   
    const change_sorting = (event) => {
        console.log("new sort order:", event.target.value);
        set_sort_by(event.target.value);
    }

    const incrementScore = (id) => {
        console.log("the id:", id);
        const new_players_array = players.map((player) =>{
            if(player.id === id) {
               return { ...player, score: player.score + 1,}
            
        } else {
            return player;
     } })
     set_players(new_players_array);
    
    }

    const resetButton = () => {
        console.log("reset todo")
        const clearScore = players.map((player) => ({
            ...player, score: 0
            
        }))
        set_players(clearScore);
        
    }
    
    const randomButton = () => {
        const randomScore = players.map((player) => ({
          
            ...player, score: (Math.floor(Math.random() * 101))
        }))
        set_players(randomScore);
    }

    const addPlayer = name => {
                        console.log("Lets add a new player with the name", name);
                        set_players([...players, {id: players.length + 1, name, score: 0 }] )
    }
   

    return (

        <div className="Scoreboard">
            <div>
                <h4>Add a new player!</h4>
                <AddPlayerForm 
                    addPlayer = {addPlayer}
                />
            </div>
            <p>
                Sort order: {" "}
                <select onChange={change_sorting} value= {sort_by}>
                    <option value="score">Sort by score</option>
                    <option value="name">Sort by name</option>
                </select>
            </p>
            <p>
                <button onClick={resetButton}>Reset Score</button>
            </p>
            <p>
                <button onClick={randomButton}>Random Score</button>
            </p>
            <p>Players scores:</p>
            <ul>
                {players_sorted.map((player, index) => {
                    return(
                        <Player 
                        key={player.id}
                        id = {player.id} 
                        name={player.name} 
                        score={player.score}
                        incrementScore={incrementScore}/>
                    )
                })}
                
            </ul>
             

        </div>
    )
}

export default Scoreboard;