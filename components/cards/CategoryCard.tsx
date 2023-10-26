function CategoryCard({ category }: any) {
  return (
    <div className="group flex items-center justify-center space-x-5 border border-primary text-primary hover:bg-primary hover:text-white py-3 p-5 rounded-md cursor-pointer transition-all">
      <div className="group-hover:bg-white p-2 rounded-full bg-primary/[0.1] flex items-center justify-center w-[40px] h-[40px]">
        <img src={category.imageUrl} />
      </div>
      <div className="lg:text-[1.25rem]">{category.title}</div>
    </div>
  );
}

export default CategoryCard;
