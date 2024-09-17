import Image from "../components/Atomic/Image";
import Link from "../components/Atomic/Link";
import Text from "../components/Atomic/Text";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about__hero">
          <div className="about__hero__container">
            <Text type="h1" color="white">
              We believe we can all make a difference
            </Text>
            <Text type="h4" color="white">
              Our way: Exceptional quality. Ethical Factories. Radical
              Transparency
            </Text>
          </div>
        </div>
        <div className="about__description">
          <Text type="h1" color="black">
            At Everlane, we want the right choice to be as easy as putting on a
            great T-shirt. That’s why we partner with the best, ethical
            factories around the world. Source only the finest materials. And
            share those stories with you—down to the true cost of every product
            we make. It’s a new way of doing things. We call it Radical
            Transparency.
          </Text>
        </div>

        <div className="about__text">
          <div className="about__text__image">
            <Image src="/images/aboutImage-3.png" />
          </div>
          <div className="about__text__content">
            <Text type="p">OUR FACTORIES</Text>
            <Text type="h2">Our Ethical Approach</Text>
            <Text type="h6">
              We spend months finding the best factories around the world—the
              same ones that produce your favorite designer labels. We visit
              them often and build strong personal relationships with the
              owners. Each factory is given a compliance audit to evaluate
              factors like fair wages, reasonable hours, and environment. Our
              goal? A score of 90 or above for every factory.
            </Text>
          </div>
        </div>

        <div className="about__image ">
          <Image src="/images/aboutImage-1.png" />
        </div>
        <div className="about__text">
          <div className="about__text__content">
            <Text type="p">OUR QUALITY</Text>
            <Text type="h2">Designed to Last</Text>
            <Text type="h6">
              At Everlane, we’re not big on trends. We want you to wear our
              pieces for years, even decades, to come. That’s why we source the
              finest materials and factories for our timeless products— like our
              Grade-A cashmere sweaters, Italian shoes, and Peruvian Pima tees.
            </Text>
          </div>
          <div className="about__text__image">
            <Image src="/images/aboutImage-5.png" />
          </div>
        </div>

        <div className="about__image">
          <Image src="/images/aboutImage-2.png" />
        </div>

        <div className="about__text">
          <div className="about__text__image contain">
            <Image src="/images/aboutImage-6.png" />
          </div>
          <div className="about__text__content bg-white">
            <Text type="p">OUR Prices</Text>
            <Text type="h2">Radically Transparent</Text>
            <Text type="h6">
              We believe our customers have a right to know how much their
              clothes cost to make. We reveal the true costs behind all of our
              products—from materials to labor to transportation—then offer them
              to you, minus the traditional retail markup.
            </Text>
          </div>
        </div>

        <div className="about__explore">
          <div className="about__explore__text">
            <Text type="h3">More to Explore</Text>
          </div>
          <div className="about__explore__container">
            <div className="card">
              <Image src="images/products.png" />
              <Link href="/store">
                <Text type="h4">Our Products</Text>
              </Link>
            </div>

            <div className="card">
              <Image src="images/stores.png" />
              <Link href="/store">
                <Text type="h4">Our Stores</Text>
              </Link>
            </div>

            <div className="card">
              <Image src="images/career.png" />
              <Link href="/store">
                <Text type="h4">Careers</Text>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
