import React from "react";
import ProjectCard from "./ProjectCard";
import ecommerceImg from "../../../public/images/laptop.png";
import chatAppImag from "../../../public/images/chattapp.png";
import typingMasterImg from "../../../public/images/typingmaster.jpg";

const ProjectPage = () => {
  return (
    <section className="py-8 px-6 lg:px-10 h-screen bg-gray-700 pt-40" id="projects">
        <h1 className='text-5xl mb-24 font-bold text-center text-white'>My <span className='text-blue-400'>Projects</span></h1>
      <div className="flex gap-10 overflow-x-auto justify-center">
      <ProjectCard
        description={"A Application where any person can purchase some special and precious gifts for their loved ones. Used React Js, Node Js, Express Js and MongoDB with a learning mindset which helped me to improve my development skills."}
        imageUrl={`https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/easebuzz-explainer/explainers-ecommerce/what-is-ecommerce/upi-credit-cards.png`}
        title={"GiftGroves - An Ecommerce App"}
        key={"1"}
        projectLink={"https://github.com/shahab-musharraf/giftgroves"}
      />
      <ProjectCard 
        title={"iChat - Let's Chat"}
        imageUrl={`https://img.freepik.com/premium-vector/chat-vector-icon_676179-133.jpg`}
        description={"A Real time Chat Application in which many people comes together in a group through a link, and they can chat with each other."}
        key={"2"}
        projectLink={"https://github.com/shahab-musharraf/iChat"}

      />
      <ProjectCard
        description={"A Typing Test Application in which you can check your typing speed. An atrractive UI with full of functionality. Try Once!"}
        imageUrl={`https://www.codingnepalweb.com/wp-content/uploads/2022/01/Typing-Speed-Test-Game-in-HTML-CSS-JavaScript.jpg`}
        title={"Typing Master"}
        key={"3"}
        projectLink={"https://github.com/shahab-musharraf/Typing-Master"}
      />
      
      </div>
    </section>
  );
};

export default ProjectPage;
