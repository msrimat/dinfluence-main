import VirtualExperiencesCarousel from "../carousels/VirtualExperiencesCarousel";
import { client } from "../utils/Sanity";

async function VirtualExperiences() {
  const data = await client.fetch(
    `*[_type == "experiences"] | order(_createdAt desc) {_id,title,rating,price,totalReviews,"imageUrl" : image.asset->url}`,
    {},
    { cache: "no-store" }
  );
  if (data.length === 0) {
    return <div className="text-center">No Data Found</div>;
  }
  return <VirtualExperiencesCarousel experiences={data} />;
}

export default VirtualExperiences;
