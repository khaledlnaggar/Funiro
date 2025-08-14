import Image from "next/image";

const BrowseRangeSection = () => {
  const categories = [
    {
      id: 1,
      name: "Dining",
      image: "/dining.png",
    },
    {
      id: 2,
      name: "Living",
      image: "/living-room.png",
    },
    {
      id: 3,
      name: "Bedroom",
      image: "/bedroom.png",
    },
  ];

  return (
    <section className="container-max section-padding py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl   font-bold text-black mb-4">
          Browse The Range
        </h2>
        <p className="text-neutral-600 max-w-2xl text-[20px] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div key={category.id} className="group cursor-pointer">
            <div className="relative w-full min-h-[30rem] mb-4 overflow-hidden rounded-lg">
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                fill
                className="object-cover group-hover:scale-105 h-full transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl   font-semibold text-center text-black">
              {category.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrowseRangeSection;
