import {Input, Button,Form} from "antd";
import {nanoid} from "nanoid";

const AddTodo = () => {
    const [form] = Form.useForm();

    const handleSubmit = (value) => {
        console.log({id: nanoid(),completed: false,...value});
        form.resetFields();
    }

    return(
        <Form
        form={form}
        onFinish={handleSubmit}  initialValues={{
            todo: ''
          }}>
            <Form.Item name= "todo">
            <Input placeholder="Add Notes...."/>
            </Form.Item>
            <Button type= "primary" htmlType="submit">Add Note</Button>
        </Form> 
    )
}

export default AddTodo