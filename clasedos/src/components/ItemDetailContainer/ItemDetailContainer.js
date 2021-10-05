//imports
import React,{useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer() {
  const [ProductInfo, setProductInfo] =  useState([])

  const ObtenerProducts = new Promise ((resolve) =>{
    setTimeout(()=>{
      const mockProduct = 
          {
            id: '1',
            title: "Cacao en polvo" ,
            img: 'producto1.png' ,
            price: '$650' ,
            description: 'de 500gr. (incluyen 3 sobres)',
            stock: '7'
          }
      
  resolve(mockProduct) }, )  })   

  useEffect(() =>{
          ObtenerProducts.then((response) => {
                        setProductInfo(response)}) 
                      }, [])
return ( 
     <div className="Detail-Container">
     <ItemDetail data= {ProductInfo}/>
     </div> );
    }
    
    export  default ItemDetailContainer;
    