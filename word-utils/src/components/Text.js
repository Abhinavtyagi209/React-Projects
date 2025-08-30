import React , {useState}  from 'react'
import './style.css'
export default function Text(props) {
  const [text, settext] = useState('');
   const f1 = () =>{
    settext(text.toUpperCase());
   }
   const f2 = (event) =>
    {
       settext(event.target.value);
    }
    const f3 = () =>
    {
      settext('')
    }
  return (
    <><div className='container'>
      <><div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label"><h1>{props.title}</h1></label>
        <textarea placeholder='enter the value' value={text} onChange={f2} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div><button onClick={f1}>Click </button>
         <button   className="btn btn-primary mx-1"  onClick={f3}>clear</button>
       </>
    </div ><p className='container'>no of words written is {text.length}</p>
    <p className='container' >no of alphabets is {  text.split(" ").filter((a) => a.length !== 0).length}</p>
    <p className='container'>averager time is written </p>

    </>
  )
}

