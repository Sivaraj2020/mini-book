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
      img= {Book1.img}
      title = {Book1.title}
      author = {Book1.author} 
     
      >
        <p>
          This is an amazing animals story in english.
          Once upon a time, an eagle befriended a fox.
          Soon both of them became extremely close.
          They became so close that they decided to build
          homes next to each other.
        </p>
      </Book>
       <Book
       img= {Book2.img} 
      title = {Book2.title}
      author = {Book2.author} 
      
      />
    </article>
  );
}


const Book = (props) => {
   const {img,title,author,children }=props;
     
  return (
    <article className="book">
      <img src={img} alt=""/>
      <h1>{title}</h1>
      <p>{author}</p>
      {children}
    </article>
  );
};

ReactDOM.render(<Booklist />, document.getElementById("root"));