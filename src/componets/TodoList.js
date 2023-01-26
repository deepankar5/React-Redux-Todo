import {Checkbox} from "antd";
import {nanoid} from "nanoid";

const TodoList = () => {
    const todolist = [
        {id: nanoid() ,completed: false , todo: "study"}, 
        {id: nanoid() ,completed: true, todo: "music practise"}, 
        {id: nanoid() ,completed: false , todo: "study"}, 
        {id: nanoid() ,completed: true, todo: "music practise"}, 
    ]
    return (
        <div>
        {todolist.map((item) => 
                <Checkbox key = {item.id} checked = {item.completed} style= {{width: 300, margin: 10 }}>{item.todo} </Checkbox>           
       )}   
        </div>
        
    )
}

export default TodoList