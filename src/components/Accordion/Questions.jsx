import React from "react";
import Accordion from "./Accordion";

const Questions = () => {
  return (
    <div className="p-4 bg-gray-300 rounded-lg m-auto">

        <h2 className="mt-[12px] font-bold text-yellow-600 md:text-[15px] text-[14px]">QUESTIONS & ANSWERS</h2>
        <h1 className="md:text-[40px] text-[26px] font-bold">See frequently asked questions</h1> <br />


      <Accordion
        title="What sets DEX apart from competitors?"
        answer="Our company stands out due to our commitment to innovation, quality, and customer satisfaction. We leverage cutting-edge technologies, maintain high standards of excellence in our work, and prioritize the needs of our clients to deliver solutions that exceed expectations."
      />
      <Accordion
        title="What industries do we specialize in?"
        answer="Our expertise spans across various industries including healthcare, finance, e-commerce, education, entertainment, and more. We have experience working with clients from diverse sectors and can tailor our solutions to meet specific industry needs."
      />
      <Accordion 
      title="How can I request a quote for a project?"
      answer="You can request a quote by filling out the contact form on our website or by reaching out to us via email or phone. Our team will review your requirements and provide you with a tailored quote based on the scope of your project." />


      <Accordion
        title="How do we ensure client satisfaction?"
        answer="Client satisfaction is at the core of everything we do. We prioritize open communication, transparency, and collaboration throughout the project lifecycle to ensure that we not only meet but exceed our clients' expectations. Our goal is to build long-term partnerships based on trust, reliability, and mutual success."
      />
      
      <Accordion 
      title="How do I get started with your services?" 
      answer=" Getting started with our services is easy! Simply reach out to us through our website, email, or phone, and one of our representatives will be in touch to discuss your requirements, provide more information, and guide you through the process of starting a project with us." />
    </div>
  );
};

export default Questions;




