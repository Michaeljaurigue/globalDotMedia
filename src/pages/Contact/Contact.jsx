// import React, { useEffect, useState } from "react";
// import "../../App/App.css";
// import { Button } from "../../components/Button/Button";

// import "./Contact.css";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// function Contact() {
//   const boxVariant1 = {
//     visible: {
//       opacity: 1,
//       scale: 1,
//     },
//     hidden: {
//       opacity: 0,
//       scale: 0,
//     },
//   };

//   const boxVariant2 = {
//     visible: {
//       opacity: 1,
//       scale: 1,
//     },
//     hidden: {
//       opacity: 0,
//       scale: 0,
//     },
//   };

//   const [ref1, inView1] = useInView();
//   const [ref2, inView2] = useInView();
//   const [isVisible1, setIsVisible1] = useState(false);
//   const [isVisible2, setIsVisible2] = useState(false);

//   useEffect(() => {
//     setIsVisible1(inView1);
//   }, [inView1]);

//   useEffect(() => {
//     setIsVisible2(inView2);
//   }, [inView2]);

//   return (
//     <div className="hero__container">
//       <img
//         src="/images/home-0.jpg"
//         alt="Hero Background"
//         className="hero-home-img"
//       />
//       <div className="hero__container_items">
//         <motion.div
//           ref={ref1}
//           variants={boxVariant1}
//           initial="hidden"
//           animate={isVisible1 ? "visible" : "hidden"}
//           className="hero__container_left"
//         >
//           <h1>Contact Us</h1>
//           <h2>We would really like to hear from you so please call/text, send the form or email us here!</h2>
//           <p>Call or text: 07599 527195
//             Post: Eden House, Forge Lane, Saltash, PL12 6LX</p>
//           <div className="hero-btns">
//             <Button
//               className="btns"
//               buttonStyle="btn--outline"
//               buttonSize="btn--large"
//               path="/projects"
//             >
//               Contact Us
//             </Button>
//           </div>
//         </motion.div>
//         <div className="hero__container_right">
//           <motion.div
//             ref={ref2}
//             variants={boxVariant2}
//             initial="hidden"
//             animate={isVisible2 ? "visible" : "hidden"}
//           >
//             <div className="contact-container">
//               <form className="contact-form">
//                 <label htmlFor="fullName">Full Name</label>
//                 <input type="text" id="fullName" name="fullName" />

//                 <label htmlFor="email">Enter your email</label>
//                 <input type="email" id="email" name="email" />

//                 <label htmlFor="phone">Phone Number</label>
//                 <input type="text" id="phone" name="phone" />

//                 <label htmlFor="comments">Your Comments...</label>
//                 <textarea id="comments" name="comments" rows="4" />

//                 <div className="consent-container">
//                   <input type="checkbox" id="consent" name="consent" />
//                   <label htmlFor="consent">
//                     Yes, I agree with the privacy policy and terms and
//                     conditions.
//                   </label>
//                 </div>

//                 <button type="submit">SEND</button>
//               </form>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;

import React from "react";
// import "./Contact.css";
import HeroHeader from "../../components/HeroHeader/HeroHeader";

const Contact = () => {
  return (
    <div>
      <HeroHeader
        h1={"Global.Media"}
        h2={
          " We would really like to hear from you, so please call/text, send the form, or email us here."
        }
        p={
          "Call or text: 07599 527195. Post: Eden House, Forge Lane, Saltash, PL12 6LX"
        }
        link={"/images/content-marketing.jpg"}
      />
      {/* 
      <div className="contact-container">
        <h1>Contact</h1>
        <p className="contact-description">
          We would really like to hear from you, so please call/text, send the
          form, or email us here.
        </p>
        <p className="contact-details">Call or text: 07599 527195</p>
        <p className="contact-details">
          Post: Eden House, Forge Lane, Saltash, PL12 6LX
        </p>
        <form className="contact-form">
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" name="fullName" />

          <label htmlFor="email">Enter your email</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="phone">Phone Number</label>
          <input type="text" id="phone" name="phone" />

          <label htmlFor="comments">Your Comments...</label>
          <textarea id="comments" name="comments" rows="4" />

          <div className="consent-container">
            <input type="checkbox" id="consent" name="consent" />
            <label htmlFor="consent">
              Yes, I agree with the privacy policy and terms and conditions.
            </label>
          </div>

          <button type="submit">SEND</button>
        </form>
      </div> */}
    </div>
  );
};

export default Contact;
