import Banner from "../components/Banner";
import im1 from '../assets/v2.jpg';
import im2 from '../assets/pizza-2.jpg';
import im3 from '../assets/v3.jpg';
import im4 from '../assets/food.jpg';
import im5 from '../assets/v2.jpg';
import im6 from '../assets/pizza-4.jpg';
import im7 from '../assets/v3.jpg';
import im8 from '../assets/pizza-3.jpg';

const data = [
  {
    img: {
      mobile: im1,
      desk: im2
    },
    heading: "Lorem ipsum dolor sit",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint culpa at unde nihil explicabo corrupti odit et ullam dignissimos repellat, quo dolorem consequuntur, ratione quis reiciendis exercitationem beatae neque tempora.",
    contentType: 'left'
  },
  {
    img: {
      mobile: im3,
      desk: im4
    },
    heading: "Lorem ipsum dolor sit",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint culpa at unde nihil explicabo corrupti odit et ullam dignissimos repellat, quo dolorem consequuntur, ratione quis reiciendis exercitationem beatae neque tempora.",
    contentType: 'right'
  },
  {
    img: {
      mobile: im5,
      desk: im6
    },
    heading: "Lorem ipsum dolor sit",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint culpa at unde nihil explicabo corrupti odit et ullam dignissimos repellat, quo dolorem consequuntur, ratione quis reiciendis exercitationem beatae neque tempora.",
    contentType: 'left'
  },
  {
    img: {
      mobile: im7,
      desk: im8
    },
    heading: "Lorem ipsum dolor sit",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint culpa at unde nihil explicabo corrupti odit et ullam dignissimos repellat, quo dolorem consequuntur, ratione quis reiciendis exercitationem beatae neque tempora.",
    contentType: 'right'
  }
];

export default function Home() {
  return (
    <div>
      {data.map((item)=> {
        return (<Banner heading={item.heading} img={item.img} desc={item.desc} contentType={item.contentType} />)
      })}
    </div>
  );
}
