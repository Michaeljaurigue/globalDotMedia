import React from "react";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";
import "../../App/App.css";
import "./Maadblog.css";

import Cards from "../../components/Cards/Cards";

function MaadBlog() {
  return (
    <div>
      <div className="maadblog-container">
        <Cards
          h1={"Maad Blog"}
          src1={"/images/services-1.jpg"}
          text1={
            "As a business owner and human being, I strive to achieve my goals. At the same time, I fulfil my duty to inspire other entrepreneurs and people who are thinking of starting their own businesses to dare to dream about taking their venture onto a global level."
          }
          label1={"Eny talks with Lydia on The Joyful Path Podcast"}
          path1={"/eny-talks-on-the-joyful-path-podcast-with-lydia/"}
          src2={"/images/services-2.jpg"}
          text2={
            "As a business owner and human being, I strive to achieve my goals. At the same time, I fulfil my duty to inspire other entrepreneurs and people who are thinking of starting their own businesses to dare to dream about taking their venture onto a global level."
          }
          label2={"Facebook Ads"}
          path2={"/blog/how-to-get-more-customers-with-facebook-ads"}
          src3={"/images/services-3.jpg"}
          text3={
            "As a business owner and human being, I strive to achieve my goals. At the same time, I fulfil my duty to inspire other entrepreneurs and people who are thinking of starting their own businesses to dare to dream about taking their venture onto a global level."
          }
          label3={"SEO"}
          path3={"/blog/how-to-get-more-customers-with-seo"}
        />
        <Cards
          src1={"/images/services-4.jpg"}
          text1={
            "As a business owner and human being, I strive to achieve my goals. At the same time, I fulfil my duty to inspire other entrepreneurs and people who are thinking of starting their own businesses to dare to dream about taking their venture onto a global level."
          }
          label1={"Google Ads"}
          path1={"/blog/how-to-get-more-customers-with-google-ads"}
          src2={"/images/services-5.jpg"}
          text2={
            "As a business owner and human being, I strive to achieve my goals. At the same time, I fulfil my duty to inspire other entrepreneurs and people who are thinking of starting their own businesses to dare to dream about taking their venture onto a global level."
          }
          label2={"Facebook Ads"}
          path2={"/blog/how-to-get-more-customers-with-facebook-ads"}
          src3={"/images/services-6.jpg"}
          text3={
            "As a business owner and human being, I strive to achieve my goals. At the same time, I fulfil my duty to inspire other entrepreneurs and people who are thinking of starting their own businesses to dare to dream about taking their venture onto a global level."
          }
          label3={"SEO"}
          path3={"/blog/how-to-get-more-customers-with-seo"}
        />
        <Cards
          src1={"/images/services-4.jpg"}
          text1={
            "As a business owner and human being, I strive to achieve my goals. At the same time, I fulfil my duty to inspire other entrepreneurs and people who are thinking of starting their own businesses to dare to dream about taking their venture onto a global level."
          }
          label1={"Google Ads"}
          path1={"/blog/how-to-get-more-customers-with-google-ads"}
          src2={"/images/services-5.jpg"}
          text2={
            "As a business owner and human being, I strive to achieve my goals. At the same time, I fulfil my duty to inspire other entrepreneurs and people who are thinking of starting their own businesses to dare to dream about taking their venture onto a global level."
          }
          label2={"Facebook Ads"}
          path2={"/blog/how-to-get-more-customers-with-facebook-ads"}
          src3={"/images/services-6.jpg"}
          text3={
            "As a business owner and human being, I strive to achieve my goals. At the same time, I fulfil my duty to inspire other entrepreneurs and people who are thinking of starting their own businesses to dare to dream about taking their venture onto a global level."
          }
          label3={"SEO"}
          path3={"/blog/how-to-get-more-customers-with-seo"}
        />
      </div>
    </div>
  );
}

export default MaadBlog;
