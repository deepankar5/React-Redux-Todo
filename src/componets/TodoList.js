import {Checkbox, Row, Col, Button} from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getTodosAsync , ToggleTodoAsync, DeleteTodoAsync} from "../redux/todoSlice";

const TodoList = () => {

    const todolist = useSelector((state)=> state.todos)
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getTodosAsync())
    }, [dispatch])

    return (
        <div>
        {todolist.map((item) => 
                <Row gutter={16}  align="middle" justify = "space-between"  key = {item.id}>
                    <Col>
                    <Checkbox checked = {item.completed} style = {{margin: 10}} onChange={(event) => 
                            dispatch(ToggleTodoAsync({id: item.id, completed: event.target.checked}))
                        }>{item.title} </Checkbox>           
                    </Col>
                    <Col >   
                    <Button type="primary" danger onClick={()=> dispatch(DeleteTodoAsync({id: item.id}))}>Delete</Button>
                    </Col>
                </Row>

       )}   
        </div>
        
    )
}

export default TodoList