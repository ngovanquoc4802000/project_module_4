import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function UserPage() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Hồ Quang Hiếu', email: 'hieusingle@gmail.com' },
    { id: 2, name: 'Nguyễn Thanh Tùng', email: 'SonTungMTP@gmail.com' },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleClose = () => {
    setShowModal(false);
    setEditingUser(null);
    setFormData({ name: '', email: '' });
  };

  const handleShowAdd = () => {
    setFormData({ name: '', email: '' });
    setEditingUser(null);
    setShowModal(true);
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setFormData({ name: user.name, email: user.email });
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (confirm('Xoá người dùng này?')) {
      setUsers(users.filter(u => u.id !== id));
    }
  };

  const handleSubmit = () => {
    if (formData.name.trim() === '' || formData.email.trim() === '') return;

    if (editingUser) {
      setUsers(users.map(u =>
        u.id === editingUser.id ? { ...u, ...formData } : u
      ));
    } else {
      setUsers([...users, { id: Date.now(), ...formData }]);
    }

    handleClose();
  };

  return (
    <div>
      <h3>Quản lý người dùng</h3>
      <Button variant="primary" className="mb-3" onClick={handleShowAdd}> Thêm người dùng</Button>

      <table className="table table-bordered ">
        <thead>
          <tr>
            <th>ID</th><th>Họ tên</th><th>Email</th><th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td><td>{user.name}</td><td>{user.email}</td>
              <td>
                <Button variant="warning" size="sm" className="me-2" onClick={() => handleEdit(user)}> Sửa</Button>
                <Button variant="danger" size="sm" onClick={() => handleDelete(user.id)}> Xoá</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editingUser ? 'Sửa người dùng' : 'Thêm người dùng'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-2">
              <Form.Label>Họ tên</Form.Label>
              <Form.Control
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Huỷ</Button>
          <Button variant="primary" onClick={handleSubmit}>
            {editingUser ? 'Cập nhật' : 'Thêm mới'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default UserPage;
