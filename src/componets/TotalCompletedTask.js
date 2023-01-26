import { useSelector } from "react-redux"

const TotalCompletedTask = () => {

    const todos = useSelector((state) => state.todos)
    const completedTask = todos.reduce((acc, cur) => {
        if(cur.completed === true){
            return acc + 1
        }else return acc
    },0)
    return(
        <div>
            <h3>Total Tasks completes: {completedTask}</h3>
        </div>
    )
}

export default TotalCompletedTask