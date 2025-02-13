import React, { createContext, useState } from 'react';

export const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) =>
{
  const [categories, setCategories] = useState([
    {
      categoryName: 'Cars',
      content:[
        {
          name: "Bmw",
          postsCount: 2031,
          commentsCount: 123456,
          lastPost: "2 min ago - JhonD"
        },
        {
          name: "Audi",
          postsCount: 2031,
          commentsCount: 123456,
          lastPost: "2 min ago - JhonD"
        },
        {
          name: "Mercedes",
          postsCount: 2031,
          commentsCount: 123456,
          lastPost: "2 min ago - JhonD"
        }
      ]
    },
    {
      categoryName: 'Sports',
      content: [
        {
          name: "Football",
          postsCount: 2000,
          commentsCount: 123456,
          lastPost: "2 min ago - JhonD"
        },
        {
          name: "Basketball",
          postsCount: 2000,
          commentsCount: 123456,
          lastPost: "2 min ago - JhonD"
        },
        {
          name: "Volleyball",
          postsCount: 2000,
          commentsCount: 123456,
          lastPost: "2 min ago - JhonD"
        }
      ]
    }
  ]);

  return (
    <CategoriesContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoriesContext.Provider>
  );
};