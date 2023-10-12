import { useEffect, useState } from "react"
import axios from 'axios';

const Data =()=>{
    const [record,setRecord] = useState([]);

    useEffect(()=>{
        axios.get("https://dummyjson.com/comments")
        .then(Response=>{
            setRecord(Response.data.comments);
            console.log(Response.data);
        })
        .catch(error=>{
            console.error(error);
        })
    },[])

    return (
      <center>
      <header><h1>Api Calling(Axios Method)</h1></header>
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
          record.map(v => (
            <tr key={v.id}>
              <td width="20%"style={{textAlign:'center'}}>{v.id}</td>
              <td width="60%"style={{textAlign:'center'}}>{v.body}</td>
              <td width="20%"style={{textAlign:'center'}}>{v.postId}</td>
            </tr>
        ))
      }
      </tbody>
      </table>
      </div>
  </center>
      );
}
export default Data;