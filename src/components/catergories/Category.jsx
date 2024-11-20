import React from 'react'
import './Category.css'
import { FaHome } from "react-icons/fa";
import { FaMobileScreen } from "react-icons/fa6";
import { RiMotorbikeFill } from "react-icons/ri";
import category_data from '../../assets/category_data'

const Category = () => {
  return (
    <div className='category_page'>
      <h1>Top Categories</h1>
      <ul className='Category'>
        {category_data.map((category, index) => (
          <li className='item' key={index}>
            <a href="#"><img src={category.c_img} alt={category.c_name} /></a>
            <p>{category.c_name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Category