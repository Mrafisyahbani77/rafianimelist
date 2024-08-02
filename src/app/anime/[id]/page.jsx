import { getAnimeResponse } from "@/libs/api-libs";
import Image from "next/image";
import VideoPlayer from "@/components/Utilities/VideoPlayer";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);

  return (
    <>
      <div className="pt-6 px-6">
        <h3 className="text-3xl font-bold text-color-primary mb-4">
          {anime.data.title} - {anime.data.year}
        </h3>
      </div>
      <div className="pt-4 px-6 flex gap-4 text-color-primary overflow-hidden overflow-x-auto">
        {[
          { label: "PERINGKAT", value: anime.data.rank },
          { label: "SKOR", value: anime.data.score },
          { label: "ANGGOTA", value: anime.data.members },
          { label: "EPISODE", value: anime.data.episodes },
        ].map((item, index) => (
          <div
            key={index}
            className="min-w-36 flex flex-col justify-center items-center rounded-lg shadow-lg border border-color-primary p-4 transition-transform transform hover:scale-105"
          >
            <h3 className="font-semibold">{item.label}</h3>
            <p className="text-lg">{item.value}</p>
          </div>
        ))}
      </div>
      <div className="pt-6 px-6 flex flex-col sm:flex-row gap-6 text-color-primary">
        <Image
          src={anime.data.images.webp.image_url}
          alt={anime.data.images.jpg.image_url}
          width={250}
          height={250}
          className="w-full sm:w-1/3 rounded-lg shadow-lg object-cover transition-transform transform hover:scale-105"
        />
        <p className="text-justify text-lg leading-relaxed">
          {anime.data.synopsis}
        </p>
      </div>
      <div className="px-6 pt-6">
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </>
  );
};

export default Page;
