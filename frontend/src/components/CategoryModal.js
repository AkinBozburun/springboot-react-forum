import React, { useContext } from 'react';
import '../styles/CategoryModal.css';
import { CategoriesContext } from '../contexts/CategoriesContext';

const CategoryModal = ({ show, onClose }) => {
  const { categories } = useContext(CategoriesContext);

  if (!show) {
    return null;
  }

  const handleOverlayClick = (e) => {
    e.stopPropagation();
    onClose();
  };

  const handleModalClick = (e) => e.stopPropagation();

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal" onClick={handleModalClick}>
        <div className='modal-header'>Select Category</div>
        <div>
          <ul className="category-list-container">
            {categories.map((category, index) => (
              <li key={index}>
                <h2 className="category-header">{category.categoryName}</h2>
                <ul className="sub-category-list">
                  {category.content.map((subCategory, subIndex) => (
                    <li key={subIndex} className="sub-category-item">
                      {subCategory.name}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoryModal;