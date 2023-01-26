import {Input, Button,Form} from "antd";
import { useDispatch } from "react-redux";
import {createTodoAsync } from "../redux/todoSlice";

const AddTodo = () => {
    const [form] = Form.useForm();

    const dispatch = useDispatch()

    const handleSubmit = (value) => {
        dispatch(createTodoAsync(value))
        form.resetFields();
    }

    return(
        <Form
        form={form}
        onFinish={handleSubmit}  initialValues={{
            todo: ''
          }}>
            <Form.Item name= "title">
            <Input placeholder="Add Notes...."/>
            </Form.Item>
            <Button type= "primary" htmlType="submit">Add Note</Button>
        </Form> 
    )
}

export default AddTodo