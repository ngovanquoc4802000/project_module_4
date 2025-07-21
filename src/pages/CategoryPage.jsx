import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function CategoryPage() {
  const [categories, setCategories] = useState([
    { id: 1, name: 'Gà' },
    { id: 2, name: 'Combo' },
    { id: 3, name: 'Đồ uống' },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newCategory, setNewCategory] = useState('');
  const [editingCategory, setEditingCategory] = useState(null);

  const handleShow = () => setShowModal(true);
  const handleClose = () => {
    setShowModal(false);
    setEditingCategory(null);
    setNewCategory('');
  };

  const handleAdd = () => {
    if (newCategory.trim() === '') return;
    const newItem = {
      id: Date.now(),
      name: newCategory.trim(),
    };
    setCategories([...categories, newItem]);
    handleClose();
  };

  const handleEdit = (category) => {
    setEditingCategory(category);
    setNewCategory(category.name);
    setShowModal(true);
  };

  const handleUpdate = () => {
    setCategories(categories.map(cat =>
      cat.id === editingCategory.id ? { ...cat, name: newCategory.trim() } : cat
    ));
    handleClose();
  };

  const handleDelete = (id) => {
    if (confirm('Bạn có chắc chắn muốn xoá danh mục này?')) {
      setCategories(categories.filter(cat => cat.id !== id));
    }
  };

  return (
    <div>
      <h3>Quản lý danh mục</h3>
      <Button variant="primary" className="mb-3" onClick={handleShow}>
         Thêm danh mục
      </Button>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên danh mục</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cat) => (
            <tr key={cat.id}>
              <td>{cat.id}</td>
              <td>{cat.name}</td>
              <td>
                <Button variant="warning" size="sm" className="me-2" onClick={() => handleEdit(cat)}>
                  ️ Sửa
                </Button>
                <Button variant="danger" size="sm" onClick={() => handleDelete(cat.id)}>
                   Xoá
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editingCategory ? 'Sửa danh mục' : 'Thêm danh mục'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Tên danh mục</Form.Label>
              <Form.Control
                type="text"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Huỷ</Button>
          <Button variant="primary" onClick={editingCategory ? handleUpdate : handleAdd}>
            {editingCategory ? 'Cập nhật' : 'Thêm mới'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CategoryPage;
