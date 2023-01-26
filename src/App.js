import AddTodo from "./componets/AddTodo";
import TodoList from "./componets/TodoList";
import TotalCompletedTask from "./componets/TotalCompletedTask";
import {Card, Row} from "antd";
import './App.css';

function App() {
  return (
     <div className='main-page'>
      <Row justify="center">
      <Card title="To do list" style={{width: 600
      }}>
      <AddTodo/>
      <TodoList/>
      <TotalCompletedTask/>
      </Card>
      </Row>

     </div>
  );
}

export default App;
