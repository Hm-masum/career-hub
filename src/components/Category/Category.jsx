

const Category = ({category}) => {
    
    const {logo,category_name,availability} = category

    return (
        <div className="p-6 bg-[#f3f3fb] rounded-xl space-y-2">
            <img src={logo} className="w-[50px]" alt="" />
            <h2 className="font-semibold">{category_name}</h2>
            <p>{availability}</p>
        </div>
    );
};

export default Category;