//imports
import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import '../ListProducts/ListProducts.css'

 
export default function ListProducts() {
  
         const [products, setProduct] = useState([])

         const ObtenerProducts = new Promise ((resolve) =>{
              setTimeout(()=>{
         const mockProducts = [ 
          {
            id: '1',
            title: "Cacao en polvo" ,
            img: 'producto1.png' ,
            price: 650 ,
            description: 'de 500gr.',
            stock: 7,
            category: 1,
            count: 1
        },
        {
              id: '2',
              title: "Spirulina en polvo" ,
              img: 'producto2.png' ,
              price: 700 ,
              description: ' de 500gr.',
              stock: 9,
              category: 1,
              count: 1
              },
              {
              id: '3',
              title: "Te verde en Polvo" ,
              img: 'producto3.jpg' ,
              price: 650 ,
              description: ' de 500gr.',
              stock: 2,
              category: 1,
              count: 1
   },
                    {
               id: '4',
               title: "Te de Manzana" ,
               img: 'producto4.jpg' ,
               price: 700 ,
               description: ' de 500gr.',
               stock: 4,
               category: 1,
               count: 1
       },  
        {
        id: '5',
        title: "Serum Multivitaminico" ,
        img: 'producto5.jpg' ,
        price: 830 ,
        description: 'de 60ml.',
        stock: 5,
        category: 2,
        count: 1
    },
    {
          id: '6',
          title: "Aceite de Rosa" ,
          img: 'producto6.png' ,
          price: 1350 ,
          description: ' de 10ml.',
          stock: 12,
          category: 2,
          count: 1
          },
          {
          id: '7',
          title: "Shampoo Neutro" ,
          img: 'producto7.jpg' ,
          price: 950 ,
          description: ' de 500ml.',
          stock: 3,
          category: 2,
          count: 1
  },
                {
           id: '8',
           title: "Crema Hidratante" ,
           img: 'producto8.jpg' ,
           price: 600 ,
           description: ' de 235ml.',
           stock: 2,
           category: 2,
           count: 1
   }, 
   
       
  ]   
     resolve(mockProducts) 
      }, 2000)  
      
})   
 

   useEffect(()=>{
       ObtenerProducts.then(  (res) =>{
       setProduct(res)
       
       })
       
},[ObtenerProducts])
    return (
      <div>
        {products.length !== 0 ? (
        products.map( (product)=> {

        return (
                 <Product key={`item-${product.id}`} title={product.title} price={product.price} image={product.img} 
                                        stock={product.stock} description={product.description} id={product.id} /> )
           })
        ) : (
      <div className='loading'> 
        <img src={('../../assets/loading.gif')} alt='loading-gif'/> 
      </div>
         
        )}
      </div>
    )
  }
