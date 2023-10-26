import CategoriesCarousel from "../carousels/CategoriesCarousel";
import { client } from "../utils/Sanity";

async function Categories() {
  const data = await client.fetch(
    `*[_type == 'category'] | order(_createdAt asc) {_id,title,"imageUrl" : icon.asset->url}`,
    {},
    { cache: "no-store" }
  );
  if (data.length === 0) {
    return <div className="text-center">No Data Found</div>;
  }
  return <CategoriesCarousel categories={data} />;
}

export default Categories;
