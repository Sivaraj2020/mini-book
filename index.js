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
{
  title: "Red: My Uncensored Life in Rock",
  author:" Sammy Hagar ",
  img: "https://m.media-amazon.com/images/I/818MrxvFk-L._AC_UY327_FMwebp_QL65_.jpg",

},
]



function Booklist() {
  return (
    <section className="booklist">
      {Books.map((book)=>
      {
        const {img,title,author}=book;
        return(
          <Book book={book}></Book>
        );      
      })}
    </section>
  );
}


const Book = (props) => {
   const {img,title,author }=props.book;
     
  return (
    <article className="book">
      <img src={img} alt=""/>
      <h1>{title}</h1>
      <p>{author}</p>
    </article>
  );
};

ReactDOM.render(<Booklist />, document.getElementById("root"));