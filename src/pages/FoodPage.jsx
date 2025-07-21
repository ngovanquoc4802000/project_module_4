import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import garanImage from '../assets/garan.png';
import popcornImage from '../assets/popcorn.png';


function FoodPage() {
  const [foods, setFoods] = useState([
    {
      id: 1,
      name: 'gà rán',
      price: 45000,
      image: garanImage,
    },
    {
      id: 2,
      name: 'popcorn',
      price: 40000,
      image: popcornImage,
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingFood, setEditingFood] = useState(null);
  const [formData, setFormData] = useState({ name: '', price: '', image: '' });

  const handleClose = () => {
    setShowModal(false);
    setEditingFood(null);
    setFormData({ name: '', price: '', image: '' });
  };

  const handleShowAdd = () => {
    setFormData({ name: '', price: '', image: '' });
    setEditingFood(null);
    setShowModal(true);
  };

  const handleEdit = (food) => {
    setEditingFood(food);
    setFormData({ name: food.name, price: food.price, image: food.image });
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (confirm('Xoá món ăn này?')) {
      setFoods(foods.filter(f => f.id !== id));
    }
  };

  const handleSubmit = () => {
    if (formData.name.trim() === '' || isNaN(formData.price)) return;

    const newItem = {
      id: editingFood ? editingFood.id : Date.now(),
      name: formData.name,
      price: parseFloat(formData.price),
      image: formData.image,
    };

    if (editingFood) {
      setFoods(foods.map(f => f.id === editingFood.id ? newItem : f));
    } else {
      setFoods([...foods, newItem]);
    }

    handleClose();
  };

  return (
    <div>
      <h3>Quản lý món ăn</h3>
      <Button variant="primary" className="mb-3" onClick={handleShowAdd}>
         Thêm món ăn
      </Button>

      <table className="table table-bordered text-center align-middle">
        <thead className="table-light">
          <tr>
            <th>ID</th>
            <th>Hình ảnh</th>
            <th>Tên món</th>
            <th>Giá (VNĐ)</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {foods.map((food) => (
            <tr key={food.id}>
              <td>{food.id}</td>
              <td>
                <img
                  src={food.image}
                  alt={food.name}
                  style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px' }}
                />
              </td>
              <td>{food.name}</td>
              <td>{food.price.toLocaleString()}</td>
              <td>
                <Button variant="warning" size="sm" className="me-2" onClick={() => handleEdit(food)}>
                  ️ Sửa
                </Button>
                <Button variant="danger" size="sm" onClick={() => handleDelete(food.id)}>
                   Xoá
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editingFood ? 'Sửa món ăn' : 'Thêm món ăn'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-2">
              <Form.Label>Tên món</Form.Label>
              <Form.Control
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Giá (VNĐ)</Form.Label>
              <Form.Control
                type="number"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Ảnh món ăn (URL)</Form.Label>
              <Form.Control
                type="text"
                value={formData.image}
                placeholder="https://..."
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              />
            </Form.Group>

            {formData.image && (
              <div className="text-center mt-2">
                <img
                  src={formData.image}
                  alt="Xem trước"
                  style={{ maxWidth: '100px', maxHeight: '100px', objectFit: 'cover', borderRadius: '8px' }}
                />
              </div>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Huỷ
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            {editingFood ? 'Cập nhật' : 'Thêm mới'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default FoodPage;
