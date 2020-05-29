import React, { useEffect } from "react";
import { Form, Input, Button, Checkbox, InputNumber } from "antd";

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 16 },
};

const RegistreSchoolForm = ({ onSubmit, reset }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (reset) {
      form.resetFields();
    }
  }, [reset, form]);

  const onFinish = (values) => {
    onSubmit(values);
  };

  return (
    <div>
      <Form {...layout} form={form} onFinish={onFinish}>
        <Form.Item
          label="School Name"
          name="name"
          rules={[{ required: true, message: "Please input school name" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="noOfStudents" label="Number of Students">
          <InputNumber />
        </Form.Item>

        <Form.Item name="email" label="Email" rules={[{ type: "email" }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Address" name="addressLineOne">
          <Input />
        </Form.Item>

        <Form.Item label=" " colon={false} name="addressLineTwo">
          <Input />
        </Form.Item>

        <Form.Item label=" " colon={false} name="addressLineThree">
          <Input />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegistreSchoolForm;
