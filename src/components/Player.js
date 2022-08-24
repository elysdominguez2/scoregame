import "./Player.scss";

function Player(props) {

    const onClickIncrement = () => {
        props.incrementScore(props.id);
    }

    return (
        <li className="Player">
            <div 
            className="percentage_coloring"
            style={{width: props.score + "%"}}/>
            <p>{props.name} (score: {props.score})</p>
            <button onClick={onClickIncrement}> + </button>
        </li>
    )
}

export default Player;