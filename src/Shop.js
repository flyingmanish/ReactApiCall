import React, {useState, useEffect} from 'react';
import './App.css';

class Shop extends React.Component {

    state={
      item:[]
    }
    constructor(){
      super();
      this.fetchItems();
    }

    
  fetchItems(){
    // const data = await fetch('http://newsapi.org/v2/everything?q=bitcoin&from=2020-01-06&sortBy=publishedAt&apiKey=96866f774ece4e27bbeaec10eaa42f3d');
    // const items = await data.json();
    // console.log(items.items);
    // setItems(items.items);
    fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=96866f774ece4e27bbeaec10eaa42f3d').then(
        (response) => {
          response.json().then((response)=>{

            this.setState({
              item:response.articles
            },()=>{
              console.log(this.state.item)
            })
          })
          
          
          
        }    
      ).catch((err) => {
        console.log(err);
      });
    
  };

  render(){
    return(
      <div>
        {(this.state.item)?(this.state.item.map((it)=>{
          return it.title
        })):(<div></div>)}
      </div>
    )
  }
}

export default Shop;
