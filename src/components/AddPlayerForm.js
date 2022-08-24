

import {useState} from "react";

function AddPlayerForm(props) {

    const[name, set_name] = useState("");
   

    return (
        <div className="AddPlayerForm"> 
        
            
                <label>Name</label>
                <input 
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={event => {
                        set_name(event.target.value)
                    }}
                  />{" "}
                <button onClick={() => {props.addPlayer(name);
                set_name("");
                }}>
                    Add
                </button>
           
       </div>
    )
}

export default AddPlayerForm;




