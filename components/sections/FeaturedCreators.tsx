import FeaturedCreatorsCarousel from "../carousels/FeaturedCreatorsCarousel";
import { client } from "../utils/Sanity";

async function FeaturedCreators() {
  const data = await client.fetch(
    `*[_type == 'creators'] | order(_createdAt asc) {_id,name,media,rating,"imageUrl" : image.asset->url}`,
    {},
    { cache: "no-store" }
  );
  if (data.length === 0) {
    return <div className="text-center">No Data Found</div>;
  }
  return <FeaturedCreatorsCarousel creators={data} />;
}

export default FeaturedCreators;
