import { useEffect, useState } from "react";
import Category from "../Category/Category";

const CategoryList = () => {

  const [categoryList, setCategoryList]=useState([]);

  useEffect(()=>{
     fetch('categories.json')
     .then(res => res.json())
     .then(data => setCategoryList(data))
  },[])
    
  return (
    <div>
      <div className="space-y-3">
          <h2 className="text-4xl text-center font-semibold">
            Job Category List
          </h2>
          <p className="text-center">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 my-10 gap-4">
          {
            categoryList.map((category)=> <Category key={category.id} category={category}></Category>)
          }
      </div>
    </div>
  );
};

export default CategoryList;
