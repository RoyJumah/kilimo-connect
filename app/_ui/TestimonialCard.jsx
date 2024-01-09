import Image from "next/image";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="mx-auto h-[350px] w-[800px] bg-white px-[15px] py-[60px] shadow-sm ">
      <div className="flex flex-col gap-2">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={100}
          height={100}
          className=" self-center rounded-full"
        />

        <div className="mx-auto w-[600px]">
          <blockquote className=" text-center text-[20px]">
            <q>{testimonial.testimonial}</q>
          </blockquote>
          <h3 className=" text-center text-[18px] font-semibold tracking-wide">
            {testimonial.name}
          </h3>
          <p className=" text-center text-[#3c6a36]">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
