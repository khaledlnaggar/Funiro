"use client";

import { Clock, MapPin, Phone } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
type ContactFormData = {
  name: string;
  email: string;
  subject?: string;
  message: string;
};

const ContactFormSection = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<ContactFormData> = (data) => {
    if (errors) return;
    console.log("Form data:", data);
    reset();
  };
  return (
    <section className=" container-max section-padding py-16 flex flex-col items-center gap-20">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-black mb-4">
          Get In Touch With Us
        </h2>

        <p className="font-medium text-neutral-400 text-sm text-center w-[60%]">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>

      <div className="flex w-full gap-64 justify-between">
        <div className="flex flex-col w-1/4 gap-8">
          <div className="flex items-start gap-4">
            <MapPin fill="#000" stroke="white" width={60} height={60} />
            <div>
              <p className="font-semibold text-black text-sm">Address</p>
              <p className="font-medium text-neutral-600 text-sm">
                400 University Drive Suite 200 Coral Gables, FL 33134 USA
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <Phone fill="#000" stroke="white" />
            <div>
              <p className="font-semibold text-black text-sm">Phone</p>
              <p className="font-medium text-neutral-600 text-sm">
                Mobile: +(84) 546-6789
                <br />
                Hotline: +(84) 456-6789{" "}
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <Clock />
            <div>
              <p className="font-semibold text-black text-sm">Working Time</p>
              <p className="font-medium text-neutral-600 text-sm">
                Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00{" "}
              </p>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-3/4"
        >
          <div>
            <label className="block text-sm font-medium mb-1">Your name</label>

            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className={`w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-black ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Your Name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Email address
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              className={`w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-black ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Abc@def.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Subject</label>
            <input
              type="text"
              {...register("subject")}
              className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-black"
              placeholder="This is an optional"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              {...register("message", { required: "Message is required" })}
              rows={4}
              className={`w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-black resize-none ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Hi! I’d like to ask about"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>
          <button className="btn-primary w-fit">Send Message</button>
        </form>
      </div>
    </section>
  );
};
export default ContactFormSection;
