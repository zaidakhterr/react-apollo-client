import { Button, Form, Input, Modal } from "antd";
import React from "react";
import PropTypes from "prop-types";
import { useMutation } from "@apollo/client";
import { ADD_AUTHOR } from "../graphql/mutationAddAuthor";
import { cloneDeep } from "@apollo/client/utilities";

const AddAuthorModal = ({ open, setOpen }) => {
  const [form] = Form.useForm();

  const [addAuthor, { data, loading, error }] = useMutation(ADD_AUTHOR, {
    refetchQueries: ["getAuthors"],
  });

  const onFormSubmit = (values) => {
    console.log("Values : ", { values });

    form.resetFields();
  };

  return (
    <>
      <Modal
        title="Add Author"
        visible={open}
        destroyOnClose
        onCancel={() => {
          setOpen(false);
        }}
        footer={null}
      >
        <Form form={form} layout="vertical" onFinish={onFormSubmit}>
          <Form.Item name="name" label="Name" rules={[{ required: true, message: "Please input a Name" }]}>
            <Input autoFocus />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                type: "email",
                message: "The input is not a valid Email Address!",
              },
              {
                required: true,
                message: "Please input an Email!",
              },
            ]}
          >
            <Input type="email" />
          </Form.Item>
          <Form.Item>
            <Button style={{ float: "right" }} htmlType="submit" key="submit" type="primary" loading={loading}>
              Add
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

AddAuthorModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default AddAuthorModal;
