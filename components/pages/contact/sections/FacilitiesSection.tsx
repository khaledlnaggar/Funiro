import Image from "next/image";
const FacilitiesSection = () => {
  const facilities = [
    {
      icon: "/trophy1.png",
      title: "High Quality",
      description: "crafted from top quality materials",
    },
    {
      icon: "/guarantee.png",
      title: "Warranty Protection",
      description: "Over 2 years ",
    },
    {
      icon: "/shipping.png",
      title: "Free Shipping",
      description: "For Order Over $150",
    },
    {
      icon: "/customer-support.png",
      title: "24/7 Support",
      description: "Dedicated Support",
    },
  ];
  return (
    <section className="section-padding py-16 bg-secondary">
      <div className="flex justify-around">
        {facilities.map((facility) => (
          <div key={facility.title} className="flex  items-center gap-2">
            <Image
              src={facility.icon}
              alt={facility.title}
              width={70}
              height={70}
              className=""
            />
            <div className="flex flex-col ">
              <h3 className="text-lg font-bold ">{facility.title}</h3>
              <p>{facility.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default FacilitiesSection;
