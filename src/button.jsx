function Button()
{  
     let count =0;

    const handleClick2 =(name)=> {
      if(count<3)
      {
        count++;
        console.log(`${name} you clicked me ${count} times`);
      }
      else
      {
        console.log(`${name} stop clicking me`);
      }
    }

    return(
        <button onClick ={()=>handleClick2("Tekken")}>
          Click Me  
        </button>
    );
}
export default Button