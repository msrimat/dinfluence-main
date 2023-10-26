import ReviewsCarousel from "../carousels/ReviewsCarousel";
import { client } from "../utils/Sanity";

async function Reviews() {
  const data = await client.fetch(
    `*[_type == 'reviews'] | order(_createdAt desc) {_id,name,rating,comment,"imageUrl" : image.asset->url}`,
    {},
    { cache: "no-store" }
  );
  return <ReviewsCarousel reviews={data} />;
}

export default Reviews;
