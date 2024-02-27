import Banner from "../components/Banner";

const data = [
  {
    img: {
      mobile: '/v1.jpg',
      desk: '/pizza-2.jpg'
    },
    heading: "Lorem ipsum dolor sit",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint culpa at unde nihil explicabo corrupti odit et ullam dignissimos repellat, quo dolorem consequuntur, ratione quis reiciendis exercitationem beatae neque tempora.",
    contentType: 'left'
  },
  {
    img: {
      mobile: '/v3.jpg',
      desk: '/pizza-4.jpg'
    },
    heading: "Lorem ipsum dolor sit",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint culpa at unde nihil explicabo corrupti odit et ullam dignissimos repellat, quo dolorem consequuntur, ratione quis reiciendis exercitationem beatae neque tempora.",
    contentType: 'right'
  },
  {
    img: {
      mobile: '/v2.jpg',
      desk: '/pizza-3.jpg'
    },
    heading: "Lorem ipsum dolor sit",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint culpa at unde nihil explicabo corrupti odit et ullam dignissimos repellat, quo dolorem consequuntur, ratione quis reiciendis exercitationem beatae neque tempora.",
    contentType: 'left'
  },
  {
    img: {
      mobile: '/v1.jpg',
      desk: '/pizza-4.jpg'
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
