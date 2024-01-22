import { useRef } from "react";
import "./portfolio.scss";
import web1 from "../asserts/airbnbClone.png"
import app3 from "../asserts/img2.jpeg"
import app2 from "../asserts/deliverooclone.png"
import web3 from "../asserts/zancop.png"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
const items = [
  {
    id: 1,
    title: "Bookitup",
    image: web1,
    link: "https://airbnb-api-xi.vercel.app/",
    desc: "Revolutionize your travel experience with our Next.js-based platform—delivering blazing-fast performance and an intuitive, modern design. Elevate user satisfaction, drive conversions, and future-proof your online business.",
  },
  {
    id: 2,
    title: "Mind Morpheus",
    link:"https://zaancorp-three.vercel.app/",
    image:web3,
    desc: "Empower your project management platform with Next.js. Experience seamless content creation, dynamic personalization, and cutting-edge technology, enhancing the project journey for devs and manager alike.",
  },
  {
    id: 3,
    title: "Delivero Clone",
    link:"https://github.com/ZainGhazanfarofficals/delivero-clone/tree/main",
    image: app2,
    desc: "Optimize project efficiency with our react native food delivery solution. Enjoy intuitive collaboration, real-time updates, and a streamlined interface, empowering your food delivery.",
  },
  {
    id: 4,
    title: " Car Rental App",
    link:"https://github.com/ZainGhazanfarofficals/react-native-rent-a-car/tree/main",
    image: app3,
    desc: "Transform your rental of cars  with our react native app. Experience real-time insights, secure transactions, and a user-friendly interface, ensuring smart and efficient control over your rental through advanced technology.",
  },
];
const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [ "start start" , "end start" ],
  });
  const redirect = (link)=>{
    window.open(link, '_blank');
  }
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"]);

  return (
    <section ref={ref}>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer">
            <img src={item.image} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={()=>redirect(item.link)}>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
function portfolio() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
}

export default portfolio;
