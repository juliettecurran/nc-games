import { useEffect, useState } from 'react';
import { getCategories } from '../../utils/api';
import React from 'react';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categoriesFromApi) => {
      console.log(categoriesFromApi);
      setCategories(categoriesFromApi);
    });
  }, []);

  return (
    <div>
      <p style={{ color: 'red' }}>I am a list of all categories</p>
      <ul>
        {categories.map((category) => {
          return (
            <li key={category.slug}>
              <h3>{category.slug}</h3>
              <h4>{category.description}</h4>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoryList;
