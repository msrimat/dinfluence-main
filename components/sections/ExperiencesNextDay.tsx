import ExperiencesNextDayCarousel from "../carousels/ExperiencesNextDayCarousel";
import { getNextDay } from "../utils/FormatDate";
import { client } from "../utils/Sanity";

async function ExperiencesNextDay() {
  const nextDay = getNextDay();
  const data = await client.fetch(
    `*[_type == 'experiences' && date >= "${nextDay}"] | order(_createdAt asc) {_id,title,rating,totalReviews,schedule,"imageUrl" : image.asset->url}`,
    {},
    { cache: "no-store" }
  );
  if (data.length === 0) {
    return <div className="text-center">No Data Found</div>;
  }
  return <ExperiencesNextDayCarousel experiences={data} />;
}

export default ExperiencesNextDay;
