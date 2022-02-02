import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Books=[
{
  title: "Holiday Special",
  author:" Kelly Barnhill ",
  img: "https://m.media-amazon.com/images/I/A1d2YfV1+sL._AC_UY327_FMwebp_QL65_.jpg",

},
{
  title: "Jokes And Riddles For Kids",
  author:" Ibrahim AlNaham ",
  img: "https://m.media-amazon.com/images/I/61o40ccwxoL._AC_UY327_FMwebp_QL65_.jpg",

},
]

const names=['siva','deva','jeeva'];
const Newname = names.map((name)=>{
  return <h1>{name}</h1>
});
console.log(Newname);

function Booklist() {
  return (
    <section className="booklist">
      {names}
    </section>
  );
}


const Book = (props) => {
   const {img,title,author }=props;
     
  return (
    <article className="book">
      <img src={img} alt=""/>
      <h1>{title}</h1>
      <p>{author}</p>
    </article>
  );
};

ReactDOM.render(<Booklist />, document.getElementById("root"));