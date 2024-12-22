//  import "./TabelComb.css";
 function TabelComb({userList,setUserList}){
    const deleteTask=(index)=>{
     userList.splice(index,1);
     setUserList([...userList]);
    }
    return(
        <div style={{border:"3px solid yellow", padding:"20px"}}>
            <table style={{width:'100%', cellPadding:'20px'}}>
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>PASSWORD</th>
                        <th>EMAIL</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userList.map(function(element,index){
                            return <tr>
                                <td>{element.name}</td>
                                <td>{element.password}</td>
                                <td>{element.email}</td>
                                <td>{element.phonenumber}</td>
                                <td><button onClick={()=>{
                                    deleteTask(index);
                                }}
                                >Delete</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
 }
 export default TabelComb;