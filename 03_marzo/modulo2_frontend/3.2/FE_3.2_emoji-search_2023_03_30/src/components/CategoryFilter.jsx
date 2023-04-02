import React from 'react'

const CategoryFilter = ({ categories, onChange, value }) => {
  return (
    <select value={value} onChange={onChange}>
      <option key="all" value="">
        👋🏼 All Categories
      </option>
      {
        categories.map(category => (
          <option value={category} key={category}>
            👉🏼 {category}
          </option>
        ))
      }
    </select>
  )
}

export default CategoryFilter