const HeroSection = () => {
  return (
    <section className="relative bg-[url('/HeroSection.jpg')] bg-cover bg-center bg-no-repeat min-h-[80dvh] overflow-hidden">
      <div className="container-max section-padding ">
        <div className="flex justify-end items-center min-h-[80dvh]">
          <div className="space-y-6 lg:pr-8 bg-secondary p-8">
            <div className="space-y-4">
              <h3 className="text-[16px] text-black  font-semibold tracking-[0.2em]">
                New Arrival
              </h3>

              <h1 className="text-4xl lg:text-5xl font-bold text-primary  ">
                Discover Our
                <br />
                New Collection
              </h1>
              <p className="text-[18px] text-black   font-medium max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </p>
            </div>
            <button className="btn-primary text-lg px-8 py-4">Buy Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
