import Image from "next/image";


const mockUrl = [
  "https://utfs.io/f/05df0958-1d51-4ce6-909f-410b2c55e0bc-ksu0g0.jpg",
  "https://utfs.io/f/d676ef7e-5edb-442c-8161-de7fb2e9d23f-tooym1.png",
  "https://utfs.io/f/a9b664c3-ef40-4a3d-ba1b-9e965fe2310f-pz0nqg.jpg",
  "https://utfs.io/f/fdded49f-7ca8-401e-bc25-bbc44aa472fb-88z1cz.jpg"
];

const mockImages = mockUrl.map((url, index) => ({
  id: index+1,
  url
}));

export default function Home() {
  return (
    <main className="">
     <div className="flex flex-wrap gap-4">
      { mockImages.map((image) => (
        <div key= {image.id} className="w-48">
          <img src={image.url} alt="image" />
        </div>
      ))}
     </div>
    </main>
  );
}
