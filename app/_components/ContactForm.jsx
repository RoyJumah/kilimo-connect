import React, { useState } from "react";

export default function ContactForm() {
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(subject);
  }

  return (
    <div className="mt-4 flex  gap-4 sm:mt-8 md:mt-12">
      <div className="md:w-1/2"></div>
      <form className="flex flex-col gap-2  md:w-1/2 " onSubmit={handleSubmit}>
        <div className="flex gap-2">
          <input
            value={fname}
            className="min-h-[60px] w-1/2 border border-[#f1efeb] bg-[#f1efeb] px-[22px] py-[16px] focus:outline-none"
            type="text"
            placeholder="First Name"
            onChange={(e) => setFname(e.target.value)}
          />
          <input
            value={lname}
            type="text"
            className="min-h-[60px] w-1/2 border border-[#f1efeb] bg-[#f1efeb] px-[22px] py-[16px] focus:outline-none"
            placeholder="Last Name"
            onChange={(e) => setLname(e.target.value)}
          />
        </div>
        <input
          value={email}
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="min-h-[60px] w-full border border-[#f1efeb] bg-[#f1efeb] px-[22px] py-[16px] focus:outline-none"
        />

        <textarea
          placeholder="Message"
          onChange={(e) => setSubject(e.target.value)}
          value={subject}
          className="max-h[265px] h-[156px] min-h-[60px] w-full border border-[#f1efeb] bg-[#f1efeb] px-[22px] py-[16px] focus:outline-none"
        />
        <button type="button" className="mt-4 min-w-[200px] self-start bg-[#3c6a36] px-[32px] pb-[19px] pt-[19px] text-sm font-[500] uppercase tracking-wide text-white transition-all duration-300 ease-out hover:scale-[1.05] hover:border-2 hover:border-[#151515] hover:bg-transparent hover:text-[#151515]">
          Send Message
        </button>
      </form>
    </div>
  );
}
