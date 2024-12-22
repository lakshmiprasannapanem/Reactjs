
function EventHandler(){
    function showMessage(){
  alert("hello");
    }
    function showName(name){
        alert(name);
    }
    return(
        <div>
            <button onClick={showMessage}>EventHandler</button>
            <button onClick={()=>{
                showName("QT");
            }}>EventHandler-1</button>
        </div>
    )
}
export default EventHandler;