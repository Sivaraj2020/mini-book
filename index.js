import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Books=[
{
  id:1,
  title: "Holiday Special",
  author:" Kelly Barnhill ",
  img: "https://m.media-amazon.com/images/I/A1d2YfV1+sL._AC_UY327_FMwebp_QL65_.jpg",

},
{
  id:2,
  title: "Jokes And Riddles For Kids",
  author:" Ibrahim AlNaham ",
  img: "https://m.media-amazon.com/images/I/61o40ccwxoL._AC_UY327_FMwebp_QL65_.jpg",

},
{
  id:3,
  title: "Red: My Uncensored Life in Rock",
  author:" Sammy Hagar ",
  img: "https://m.media-amazon.com/images/I/818MrxvFk-L._AC_UY327_FMwebp_QL65_.jpg",

},
]



function Booklist() {
  return (
    <section className="booklist">
      {Books.map((book,index)=>
      {
       
        return<Book key={book.id} {...book}></Book>;      
      })}
    </section>
  );
}


const Book = (props) => {
   const {img,title,author }=props;


      const clickHandler =(e) =>{
        console.log(e);
        console.log(e.target);
        alert("Hello Boys!");      
      };
      const complexButton=(author)=>{
        console.log(author);
       };

  return (
    <article className="book">
      <img src={img} alt=""/>
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <p>{author}</p>
      <button type="button" onClick={clickHandler}>Button</button>
      <button type="button" onClick={complexButton(author)}>Complex Button</button>
    </article>
  );
};

ReactDOM.render(<Booklist />, document.getElementById("root"));