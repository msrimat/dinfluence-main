import ExperiencesUnder100Carousel from "../carousels/ExperiencesUnder100Carousel";
import { client } from "../utils/Sanity";

async function ExperiencesUnder100() {
  const data = await client.fetch(
    `*[_type == "experiences" && price < 100] | order(_createdAt desc) {_id,title,rating,price,totalReviews,"imageUrl" : image.asset->url}`,
    {},
    { cache: "no-store" }
  );
  if (data.length === 0) {
    return <div className="text-center">No Data Found</div>;
  }
  return <ExperiencesUnder100Carousel experiences={data} />;
}

export default ExperiencesUnder100;
