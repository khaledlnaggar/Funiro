import Image from "next/image";
const ContactHeroSection = () => {
  return (
    <section className="section-padding py-16  bg-[url('/Rectangle-1.png')] bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col items-center justify-center">
        <Image src="/Logo.png" alt="logo" width={100} height={100}></Image>
        <h2 className="text-3xl font-bold text-black mb-4">Contact</h2>
        <div className="flex gap-2">
          <p className="font-semibold text-black text-sm">{"Home >"}</p>
          <p className="font-medium text-black text-sm">Contact</p>
        </div>
      </div>
    </section>
  );
};
export default ContactHeroSection;
