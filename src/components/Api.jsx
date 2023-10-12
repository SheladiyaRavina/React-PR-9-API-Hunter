import { useEffect, useState } from "react";

const Api =()=>{

const [data,setData] =useState([]);
   useEffect(()=>{
    fetch('https://dummyjson.com/quotes')
    .then(response => response.json())
    .then(record => setData(record.quotes))
    .catch(error => console.error(error));
   },[])
   console.log(data);
    return(
        <center>
            <header><h1>Api Calling(Fecth Method)</h1></header>
            <div className="container">
            <table border={1} cellPadding={10}>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Quotes</th>
                    <th>Author</th>
                </tr>
                </thead>
          
            <tbody>
                {
                data.map((v)=>{
                    return(
                        <tr>
                            <td width="10%"style={{textAlign:'center'}}>{v.id}</td>
                            <td style={{textAlign:'center', Color:'#00000'}}>{v.quote}</td>
                            <td width="20%" style={{textAlign:'center'}}>{v.author}</td>
                        </tr>
                    )
                })
            }
            </tbody>
            </table>
            </div>
        </center>
    )
}
export default Api;