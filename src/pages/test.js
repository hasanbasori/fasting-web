<Form
  {...layout}
  name="nest-messages"
  onFinish={onFinish}
  validateMessages={validateMessages}
>
  <Form.Item
    name="title"
    label="Tile"
    rules={[
      {
        required: true
      }
    ]}
  >
    <Input />
  </Form.Item>
  <Form.Item
    name="link"
    label="Website"
    rules={[
      {
        type: 'link'
      }
    ]}
  >
    <Input />
  </Form.Item>
  
  
  <Form.Item name={['user', 'introduction']} label="Introduction">
    <Input.TextArea />
  </Form.Item>
  <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
    <Button type="primary" htmlType="submit">
      Submit
    </Button>
  </Form.Item>
</Form>
