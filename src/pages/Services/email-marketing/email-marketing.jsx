import React from "react";
import "./email-marketing.css";
import HeroHeader from "../../../components/HeroHeader/HeroHeader";
import ClientTestimonials from "../../../components/ClientTestimonials/ClientTestimonials";
import FormMain from "../../../components/FormMain/FormMain";
import LandingPage from "../../../components/LandingPage/LandingPage";

function EmailMarketing() {
  return (
    <>
      <HeroHeader
        h1={"Email Marketing"}
        h2={"Global.Media is a full-service digital marketing agency."}
        p={
          "Email marketing is one of the most effective ways to get more customers. Learn how we use email marketing to grow your business and get more customers."
        }
        link={"/images/email-marketing.jpg"}
      />
      <LandingPage
        h1first={"Using emails in business."}
        pfirst={
          "Email is a great way to stay in touch throughout the year. You can also keep people informed about new products, discounts, and promotions. People like being engaged via email because they can also communicate with your business directly at their convenience. An effective email strategy ultimately drives potential and existing customers to your website. As you will see in the diagram below, businesses use email marketing for many different purposes apart from selling products and services. Email works best when it is focused on helping recipients solve problems. Provide value with every email and soon, customers will see you as an authority in your industry and will help spread the word about your business – recipients become your brand advocates, sharing your email with their networks and driving more visitors to your business. This means that churning out emails advertising your products and services only will turn people off – they will stop reading your emails and quickly delete them when they arrive."
        }
        h1second={"‘Following up visitors can double profits’"}
        psecond={
          "Do you know how to use email to follow up and convert visitors to your website? Do you know how to build a responsive email list and use it to keep yourself at the forefront of your customers' and prospects' minds? One of the most valuable ways that businesses now use emails is to nurture visitors because it can double your sales and profits. The nurturing process involves systematically following up visitors for whom they have email addresses with the aim of starting and maintaining a dialogue with them and eventually pushing them further down the sales funnel towards making a purchase. Nurturing can also help to cross-sell (publicizing other items) and up-sell (advertising higher value items) to potential and existing customers."
        }
        h1third={"Retargeting"}
        pthird={
          "Retargeting is a type of email marketing that involves following up visitors to your website that have not completed the conversion process. This frustrating phenomenon, often called cart-abandonment, sees visitors spend a lot of time looking at a particular product or service on your website, putting items in their shopping cart or requesting information about a particular item, only to then leave without completing the transaction. Others may start completing the registration process and then fail to finish. Instead of losing these potentially valuable visitors, the right follow-up email strategy often makes the difference in convincing them to come back and complete the transaction or going to a competitor."
        }
        h1fourth={"Getting email marketing right"}
        pfourth={
          "We know how to design, implement, and monitor email marketing campaigns to ensure that they deliver maximum return on investment for your business. Devising an email marketing strategy helps identify the business goals for this marketing medium and plan a clear route to achieve them. Furthermore, a strategy sets out the data that will be used to measure progress towards the objectives. The first key element in achieving email marketing objectives is building an email list, one of your most important marketing assets. With a good email list, you can start a dialogue with visitors that allows you to dig deeper and meet their needs. Ensuring visitors have a good reason to provide their email address is central to building a good email list. Furthermore, email lists need to be actively managed to ensure they are of high quality, with real leads and existing customers who want to maintain a dialogue with your business. Segmenting email lists based on specific criteria, such as stage in the buying process and buyer personas, is the next stage in the email marketing process. This helps ensure that the right email is sent at the correct time to each visitor. Sending mass emails to everyone no longer works. Personalization is an additional task in targeting emails that makes recipients feel that the email is specifically for them and not part of a mass mail-out. We know how to do this well."
        }
        h1fifth={
          "‘Most people delete most of the emails they get without opening them. Do you know how to create captivating subject lines?’"
        }
        pfifth={
          "We all get so many emails every day. Take a moment to think about how many of these you delete and how many you actually open and read. In reality, we delete most emails we get. One of the reasons for deleting emails without a second thought is the subject line. Unless the subject line grabs our attention and captures our interest, the email goes into the trash. If people don't open your emails, there is virtually no chance that they will perform the action you want. We know how to create attention-grabbing subject lines that increase the likelihood of emails getting opened. This makes them more likely to engage with your emails and move further down the purchasing funnel. After the subject line, crafting the right email for the occasion is the next priority. Using the right structure, tone, call to action, and incentives requires skill to do properly. Otherwise, you risk losing the recipient to a competitor rather than getting a transaction. Sending emails at the right time is important to get the desired response. We can research your business sector and visitors to establish the best day and time to send your emails to have the greatest chance of getting people to read and engage with them. Every marketing activity has to be monitored using appropriate metrics because this is the best basis to make changes to make the medium more effective. We have experience analyzing email marketing metrics to identify what is working and make improvements where needed to increase your return on investment."
        }
        h1sixth={"Email Marketing Service Package"}
        psixth={
          "Review email marketing activities. Propose email marketing initiatives. Segment email list. Design targeted monthly email updates. Manage email list. Set up initiatives to get subscribers. Quality-test current subscribers. Design and setup a stage email nurture campaign for new leads. Design email retargeting system. Analyze email marketing performance and report monthly.Take your email marketing to new heights by partnering with us. Contact us now to discuss your specific needs and discover how we can help you achieve remarkable results."
        }
      />
      <ClientTestimonials />
      <FormMain />
    </>
  );
}

export default EmailMarketing;
