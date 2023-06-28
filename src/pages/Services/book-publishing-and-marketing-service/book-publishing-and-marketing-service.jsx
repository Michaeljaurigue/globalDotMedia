import React from "react";
import "./book-publishing-and-marketing-service.css";
import HeroHeader from "../../../components/HeroHeader/HeroHeader";
import ClientTestimonials from "../../../components/ClientTestimonials/ClientTestimonials";
import FormMain from "../../../components/FormMain/FormMain";
import Cards from "../../../components/Cards/Cards";
import LandingPage from "../../../components/LandingPage/LandingPage";
import StepsContainerLeft from "../../../components/StepsContainerLeft/StepsContainerLeft";
import StepsContainerRight from "../../../components/StepsContainerRight/StepsContainerRight";

function BookPublishingAndMarketingService() {
  return (
    <>
      <HeroHeader
        h1={"Get help to write, publish, and sell your book."}
        h2={"We help you to write, publish and market your book."}
        p={
          "Want to get published but don’t know how? Don’t let your dreams of being a published author die. We work with you to write, publish and market your book."
        }
        link={"/images/book-1.jpg"}
      />
      <LandingPage
        h1first={"Relax, we have your book publishing and marketing covered."}
        pfirst={
          "Being an author can give you visibility and authority, make you a thought leader and give you a platform to launch your business. Ultimately publishing your book builds your legacy and increases your revenue. Save hours by getting book writing coaching and professional ghost-writing to write your book in 30 days. Get instant credibility with Amazon self-publishing in any format you want, from paperbacks, hardbacks, kindle/ebooks, and audio. Reach more people by [ublishing in English and different languages (Spanish, German, Italian). Learn everything you need to take your book idea to published in 30 days without being confused by the process of writing a book. Get the one-stop writing publishing and marketing service you need, including how to start today and how to get revenue from your book"
        }
        h1second={
          "A simple 6 step process that doesn't take up hours of your valuable time"
        }
        psecond={
          "We have a simple 6 step process that takes you from book idea to published in 30 days. We help you to write, publish and market your book. We have"
        }
        h1third={
          "A choice of packages and flexible payment options so you know exactly where you stand"
        }
        pthird={
          "We offer packages based on the Coaching, Writing, Publishing and Marketing services you choose. You can also choose the most affordable payment options to suit your budget from pay-upfront to smaller payment amounts over a longer period of time. Flexible payment plan options are 1. Monthly, 2. In 4 parts, 3. Half and half, 4. In full."
        }
        h1fourth={
          "Why choose us to Coach, Write, Publish and Market your book?"
        }
        pfourth={
          "Spread the word about your business. Attract a regular supply of new customers. 30 years of combined experience. Nimble and Flexible service to meet your needs. Proven track record in writing, publishing and marketing books. Be a member of our online book club – Jump on a Q & A once a month and networking opportunities. VIP Lounge to get access to exclusive resources and templates and introductions to industry leaders in your sector."
        }
        h1fifth={""}
        pfifth={""}
      />

      <StepsContainerLeft
        header={"Step One: Discovery"}
        p={
          " One of our Book Writing and Marketing Consultants will take you through a quick discovery process to find out more about your book ideas and goals and make sure we are a good fit for each other."
        }
        src={"/images/abook1.jpg"}
        alt={"Book Publishing and Marketing Service"}
/>
<StepsContainerRight
        header={"Step Two: Road-Test your Book Idea"}
        p={
          "We work with you to road-test your book for proof of concept of your book idea with your target audience online. You will get ideas to improve your book. We also set up an Anthology to find a network of contributors and find potential collaborators and co-authors. "
        }
        src={"/images/abook2.jpg"}
        alt={"Book Publishing and Marketing Service"}
      />
        <StepsContainerLeft
        header={"Step Three: Book Writing and Marketing Strategy"}
        p={
          "Our book writing expert and marketing specialist will meet with you to develop a strategy and plan to write and publish your book in the formats you want. We will also create a strategy to market your book to achieve your goals."
        }
        src={"/images/abook3.jpg"}
        alt={"Book Publishing and Marketing Service"}
/>
<StepsContainerRight
        header={"Step Four: Writing Your Book"}
        p={
          "Our book writing experts work with you to write your book by providing the support you need from coaching, ghostwriting, or handholding to develop your book content. We will review your learning with you to establish whether you have achieved your book writing goals and identify any additional support from which you can benefit."
        }
        src={"/images/abook4.jpg"}
        alt={"Book Publishing and Marketing Service"}
      />
         <StepsContainerLeft
        header={"Step Five: Marketing Plan to Sell your Book"}
        p={
          "Our marketing consultant will work with you to develop a marketing plan to sell your book in the places where your target audience spends time. The plan includes choosing the distribution channels, organizing your Book launch, and producing graphics and content to publicize your book on social media."
        }
        src={"/images/abook5.jpg"}
        alt={"Book Publishing and Marketing Service"}
/>
<StepsContainerRight
        header={"Step Six: Marketing your Book"}
        p={
          "Our publishing and marketing consultants work with you to prepare to sell your book by providing sessions to practice reading sections of your book and doing practice Q&A. Our done-for-you marketing service sets up your profiles on self-publishing and sales platforms like Amazon. If appropriate, we also work with you to get speaking gigs online (on Podcasts & Lives), and speaking events with ongoing marketing."
        }
        src={"/images/abook6.jpg"}
        alt={"Book Publishing and Marketing Service"}
      />

      <Cards
        h1={"What's Included?"}
        src1={"/images/abook7.jpg"}
        text1={
          "Learn from expert authors how to plan, design & write a book that is engaging, informative and helpful to your readers so that you build a community of fans for life"
        }
        label1={"Book Writing Coaching"}
        path1={"https://globaldotmedia.com/contact-us-2/"}
        src2={"/images/abook8.jpg"}
        text2={
          "Get professional ghost-writing to capture and put your thought-leadership insights and experiences in print that leaves your readers buzzing with excitement"
        }
        label2={"Book Writing and Publishing"}
        path2={"https://globaldotmedia.com/contact-us-2/"}
        src3={"/images/abook9.jpg"}
        text3={
          "Our expert book marketing gives you a presence on the major book sales platforms, including Amazon, established bookstores other book outlets where your readers are."
        }
        label3={"Book Marketing"}
        path3={"https://globaldotmedia.com/contact-us-2/"}
      />
      <ClientTestimonials />
      <FormMain />
    </>
  );
}

export default BookPublishingAndMarketingService;
