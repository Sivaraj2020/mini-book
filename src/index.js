import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Book1 ={
  title: "Holiday Special",
  author:" Kelly Barnhill ",
  img: "https://m.media-amazon.com/images/I/A1d2YfV1+sL._AC_UY327_FMwebp_QL65_.jpg",

};
const Book2 ={
  title: "Jokes And Riddles For Kids",
  author:" Ibrahim AlNaham ",
  img: "https://m.media-amazon.com/images/I/61o40ccwxoL._AC_UY327_FMwebp_QL65_.jpg",

};
function Booklist() {
  return (
    <article className="booklist">
      <Book
      title = {Book1.title}
      author = {Book1.author} 
      img= {Book1.img}
      />
       <Book
      title = {Book2.title}
      author = {Book2.author} 
      img= {Book2.img}
      />
    </article>
  );
}


const Book = ({img,title,author}) => {
   
  return (
    <article className="book">
      <img src={img} alt=""/>
      <h1>{title}</h1>
      <p>{author}</p>
    </article>
  );
};

ReactDOM.render(<Booklist />, document.getElementById("root"));