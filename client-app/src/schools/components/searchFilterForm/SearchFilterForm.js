import React, { useState, useEffect } from "react";
import { Form, Input, Button, Row, Col, Card } from "antd";

const debounce = (fn, delay) => {
  let timout;
  return (...args) => {
    if (timout) {
      clearTimeout(timout);
    }
    timout = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

const SearchFilterForm = ({ onFilterChanged }) => {
  const [form] = Form.useForm();
  const [filters, setFilters] = useState({});

  useEffect(() => {
    onFilterChanged(filters);
  }, [filters]);

  const changeHandler = debounce((e) => {
    setFilters((f) => ({ ...f, ...e }));
  }, 500);

  return (
    <div>
      <h4>Filter schools :</h4>
      <Card>
        <Form
          form={form}
          name="horizontal_login"
          layout="inline"
          onValuesChange={changeHandler}
        >
          <Row>
            <Col style={{ marginBottom: 10 }}>
              <Form.Item name="name" label="School Name">
                <Input placeholder="School Name" />
              </Form.Item>
            </Col>
            <Col style={{ marginBottom: 10 }}>
              <Form.Item name="address" label="Address">
                <Input placeholder="Address" />
              </Form.Item>
            </Col>
            <Col style={{ marginBottom: 10 }}>
              <Form.Item name="email" label="Email">
                <Input placeholder="Email" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  );
};

export default SearchFilterForm;
