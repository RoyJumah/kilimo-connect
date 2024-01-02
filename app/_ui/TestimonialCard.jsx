import Image from "next/image";
import { motion } from "framer-motion";

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div
      className="mx-auto h-[300px] max-w-7xl bg-white px-[15px] py-[60px] shadow-sm "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col gap-2">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={100}
          height={100}
          className=" self-center rounded-full"
        />
        <blockquote className=" text-center text-[20px]">
          <q>{testimonial.testimonial}</q>
        </blockquote>
        <h3 className=" text-center text-[18px] font-semibold tracking-wide">
          {testimonial.name}
        </h3>
        <p className=" text-center text-[#3c6a36]">{testimonial.role}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
