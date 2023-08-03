import "./About.css";
import HeroHeader from "../../components/HeroHeader/HeroHeader";
import LandingPage from "../../components/LandingPage/LandingPage";
import FormMain from "../../components/FormMain/FormMain";
import { Helmet } from "react-helmet";
import VideoComponent from "../../components/VideoComponent/VideoComponent";

function About() {
  return (
    <section className="about">
      <Helmet>
        <meta charSet="utf-8" />
        <title>About - Global.Media</title>
        <link rel="canonical" href="http://globaldotmedia.com/about/" />
        <meta
          name="description"
          content="About Global.Media. We are a new breed of marketers bred for the digital marketplace. We are driven by the mission to make our clients famous to their target clients by implementing results-based innovative marketing strategies that combine the massive reach of digital platforms with tried and trusted traditional advertising mediums."
        />
      </Helmet>
      <HeroHeader
        className="about__hero-header"
        link={"/images/about-1.jpg"}
        h1={"Your Sales Machine!"}
        h2={"A full-service creative media marketing and Advertising agency."}
        p={"We are a new breed of marketers bred for the digital marketplace."}
      />
      <h2 className="about__heading">LinkedIn Lead Generation</h2>
      <VideoComponent
        className="about__video-component"
        src={"https://www.youtube.com/embed/0bpZpvaOr8M"}
        title={"Online Training Courses"}
      />
      <h2 className="about__heading">Marketing Courses for Business</h2>
      <VideoComponent
        className="about__video-component"
        src={"https://www.youtube.com/embed/JsZIrMiAwdU"}
        title={"Online Training Courses"}
      />

      <LandingPage
        className="about__landing-page"
        h1first={"About Us"}
        pfirst={
          <>
            <p
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "50px",
                color: "black",
              }}
            >
              Your Sales Machine!
            </p>
            <p style={{ textAlign: "center" }}>
              Global.Media is a full-service creative media marketing and
              Advertising agency with branches in London and Truro, Cornwall.
            </p>

            <p style={{ textAlign: "center" }}>
              Global.Media provides you with guaranteed lead generation,
              captivating content and modern marketing strategies so that you
              can reach a greater audience, enabling you to attract, engage and
              retain new customers.
            </p>
            <p style={{ textAlign: "center" }}>
              Our marketing experts offer you access to first-rate design, media
              and technology partners who will create attention-grabbing
              advertising and effective marketing campaigns that engage your
              target audience.
            </p>
            <p style={{ fontWeight: "bold", textAlign: "center" }}>
              We give clients{" "}
              <span style={{ color: "purple", fontWeight: "bold" }}>
                VISIBILITY
              </span>{" "}
              and{" "}
              <span style={{ color: "purple", fontWeight: "bold" }}>
                CREDIBILITY
              </span>{" "}
              that builds{" "}
              <span style={{ color: "purple", fontWeight: "bold" }}>TRUST</span>{" "}
              that leads to more{" "}
              <span style={{ color: "purple", fontWeight: "bold" }}>
                CUSTOMERS
              </span>
              !
            </p>

            <p>
              We work with you to develop the right strategy, action plan and
              expertise to target, attract and engage your ideal clients on mass
              media (billboards, radio, TV, publications and locations) as well
              as digital platforms including social networks, pay-per-click
              (PPC), email, newsletter, SEO (Search optimisation), video, mobile
              app or on their website. Our dedicated in-house creative experts
              provide a complete marketing mix so we create, launch and manage
              every aspect of your campaign from concept to producing digital
              assets and sourcing the right marketing techniques and platforms
              to engage the target audience for your unique business and the
              objectives you want to achieve.
            </p>
          </>
        }
        h1second={"Who we are"}
        psecond={
          <>
            <p style={{ paddingBottom: "10px" }}>
              We are a new breed of marketers bred for the digital marketplace.
              We are driven by the mission to make our clients famous to their
              target clients by implementing results-based innovative marketing
              strategies that combine the massive reach of digital platforms
              with tried and trusted traditional advertising mediums. With us:
            </p>
            <ul style={{ paddingLeft: "0", listStylePosition: "inside" }}>
              <li style={{ textAlign: "left" }}>
                You avoid wasting money and time with marketing that does not
                work.
              </li>
              <li style={{ textAlign: "left" }}>
                You avoid losing time that you should be spending on running
                your business and delighting your customers.
              </li>
              <li style={{ textAlign: "left" }}>
                You won’t miss opportunities to sell to potential customers.
              </li>
            </ul>

            <p>
              {" "}
              We guarantee more leads for you to convert into paying customers
              or we will refund your monthly management charges! Watch these
              short videos to find out more about how we help businesses:
            </p>
          </>
        }
        h1third={
          "We work with businesses to sell more online with a simple target-driven 6P process:"
        }
        pthird={
          <>
            <ol style={{ paddingLeft: "0", listStylePosition: "inside" }}>
              <li style={{ textAlign: "left" }}>
                <span style={{ fontWeight: "bold" }}>Prepare</span> – establish
                the concept for your campaign by clarifying your unique
                qualities, message, objectives, target audience and
                product/service.
              </li>

              <li style={{ textAlign: "left" }}>
                <span style={{ fontWeight: "bold" }}>Plan</span> – develop
                strategy, action plan with timescales, budget and deliverables.
              </li>
              <li style={{ textAlign: "left" }}>
                <span style={{ fontWeight: "bold" }}>Produce</span> – produce
                creative assets for the campaign including graphic design of
                digital marketing images, publication copy, videos and landing
                pages to engage your target clients.
              </li>
              <li style={{ textAlign: "left" }}>
                <span style={{ fontWeight: "bold" }}>Preview</span> – test the
                creative assets with a representative sample of your target
                audience for feedback and improvements.
              </li>
              <li style={{ textAlign: "left" }}>
                <span style={{ fontWeight: "bold" }}>Promote</span> – launch the
                campaigns on the best platforms and partners’ channels to reach
                your target audience.
              </li>
              <li style={{ textAlign: "left" }}>
                <span style={{ fontWeight: "bold" }}>Progress</span> – Review
                campaign performance to establish areas for improvement to
                optimise campaign effectiveness.
              </li>
            </ol>
            <a
              href="http://globaldotmedia.com/contact/"
              style={{ textDecoration: "none" }}
            >
              <button
                style={{
                  color: "green",
                  backgroundColor: "transparent",
                  borderColor: "green",
                  borderStyle: "solid",
                  borderWidth: "1px",
                  padding: "10px",
                  margin: "15px",
                  cursor: "pointer",
                }}
              >
                CONTACT US FOR MORE INFORMATION!
              </button>
            </a>

            <p>
              Effective marketing is serious business. No one can rely on just a
              limited number of sources to promote their products and services.
              Sending the wrong message at the wrong time can mean tens or
              hundreds of pounds of lost revenue. Moreover, from an efficiency
              standpoint, if you don’t use your time wisely, you are missing out
              on potential deals and conversations that you could be having.
            </p>
          </>
        }
        h1fourth={"How it works"}
        pfourth={
          <>
            <p>
              Global.Media delivers marketing across all online and offline
              platforms, letting us target and send the right message to
              potential customers wherever they are, whenever, quickly and
              easily. We use the latest and greatest innovations in targeting,
              personalisation and engagement tools on the market. And because
              today’s marketing technologies make for easy interoperability, we
              utilise our massive partner ecosystem of amazing add-on tools that
              offer all manner of efficiency benefits in your campaign.
            </p>
            <p>How do you know it’s better?</p>
            <p>
              Our marketing ensures you reach your target customers wherever and
              whenever they are consuming media, whether they are using the
              Internet, watching television, reading magazines, listening to the
              radio or even just out shopping. Our expert team ensures that
              in-house marketing teams get the expertise to achieve your
              objectives. Our expert use of automated email capture,
              personalised email, retargeting and product recommendation systems
              clients get:
            </p>
            <ul style={{ paddingLeft: "0", listStylePosition: "inside" }}>
              <li style={{ textAlign: "left" }}>
                Consumers visiting your website as much as 3x to 10x as often.
              </li>
              <li style={{ textAlign: "left" }}>Triple email open rates.</li>
              <li style={{ textAlign: "left" }}>
                Treble click-through rates on Pay-Per-Click advertising.
              </li>
              <li style={{ textAlign: "left" }}>Increased engagement.</li>
              <li style={{ textAlign: "left" }}>
                Consumers having more trust in your brand.
              </li>
            </ul>
            <p>
              We don’t only save you money while getting you more customers, we
              also free up your time to do what you do best – run your business.
            </p>
            <p style={{ color: "purple", fontWeight: "bold" }}>
              We guarantee to make your business better equipped to make money
              online even after we stop working with you.
            </p>
          </>
        }
        h1fifth={"Our Philosophy"}
        pfifth={
          <>
            <p>
              Having a great business idea and creating your website is just the
              start of the road to financial freedom and global domination you
              have always dreamed about. The first challenge is getting
              potential customers to know about your business and how it can
              transform their lives. Then they must trust you before they spend
              their hard-earned money.
            </p>
            <p>
              We also know that marketing budgets are always very precious and
              getting the best return on marketing investment is key. That is
              why we commit to getting the right potential customers to your
              business buying your products and services. Businesses that
              provide high-quality products and services benefit most from our
              marketing services. In addition, they have a strong vision and
              ambition to be successful in their niche.
            </p>
            <p>
              For marketing to deliver maximum return on investment, your
              business will need efficient sales and delivery processes. We can
              work with you to put these key systems in place over time.
              Successful digital marketing rarely happens overnight. So a
              long-term vision built on sustained effort and funding is
              necessary for a sustainable and successful business.
            </p>
            <p>
              Marketing in the digital age is a dynamic business. It seems each
              year brings new technologies, new buzzwords or new trends. Despite
              all of these advancements, too many businesses apply the same mass
              marketing techniques used in the offline world to the digital
              world: Send more messages. Buy more ads. Launch more campaigns.{" "}
              <strong>
                However, these techniques rarely work in the digital age.
              </strong>{" "}
              We believe in implementing bespoke online marketing for your
              unique business, combining multiple marketing techniques to create
              a complete online strategy that works for you. By focusing on a
              single digital marketing technique, you risk bypassing potential
              customers who are more easily accessible through other channels.
              This is why spreading your marketing evenly across various
              platforms and techniques is more likely to lead to positive
              results.
            </p>

            <p style={{ fontWeight: "bold" }}>
              {" "}
              Our priority is to work with you to select the most effective
              marketing strategies to achieve your business goals and get you
              the best return on your marketing investment.
            </p>
            <p
              style={{
                color: "purple",
                fontWeight: "bold",
                textAlign: "center",
                fontSize: "2em",
              }}
            >
              <a
                href="http://globaldotmedia.com/contact/"
                style={{ color: "purple", textDecoration: "underline" }}
              >
                Ready to work together?
              </a>
            </p>
          </>
        }
      />

      <FormMain className="about__form-main" />
    </section>
  );
}

export default About;
