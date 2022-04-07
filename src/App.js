// import logo from './logo.svg';
import './App.css';
function App() {
 var os=["Android","Blackberry","iPhone","Windows"];
var product=["Samsung","HTC","Micromax","Apple"] 
return (
   <div className='App'>
  <h1>Mobile Operating System</h1>
    <ul>
      {os.map(e=>{
   return <OS os={e}></OS>
      })}
    </ul>
    
    <h1>Mobile MobileManufacturers</h1>
      <ul>
        {product.map(e=>{
          return <MANU product={e}></MANU>
        })}
      </ul>
    </div>
  )
}

function OS(props){
  return <li>{props.os}</li>
}
function MANU(props){
  return <li>{props.product}</li>
}

export default App;
