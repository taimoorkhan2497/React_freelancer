import React, {useState} from "react";
import './InputField.css';

export default function InputField(props) {
  const [inputType] = useState(props.type)
  const [inputValue, setInputValue] = useState('')
  const [inputPlaceholder] = useState(props.Placeholder)
  function handleChange(event){
    setInputValue(event.target.value);
    if(props.onChange) props.onChange(inputValue)
  }
  return (
    <>
   
    <p className="heading_style">{props.heading}</p>
  
      <input type={inputType} value={inputValue} placeholder={inputPlaceholder} name="input-form" onChange={handleChange} class="inputclass"/>
      
    </>
  );
}


export function InputField2(props) 
{
  const [inputType] = useState(props.type)
  const [inputValue, setInputValue] = useState('')
  const [inputPlaceholder] = useState(props.Placeholder)

  function handleChange(event)
  {
    setInputValue(event.target.value);
    if(props.onChange) props.onChange(inputValue)
  }
  return (
    <>
   
    <p className="heading_style">{props.heading}</p>
  
      <input type={inputType} value={inputValue} placeholder={inputPlaceholder} name="input-form" onChange={handleChange} class="inputclass2  pf_mb"/>
 
    </>
  );
}


export function InputField3(props) 
{
  const [inputType] = useState(props.type)
  const [inputValue, setInputValue] = useState('')
  const [inputPlaceholder] = useState(props.Placeholder)

  function handleChange(event)
  {
    setInputValue(event.target.value);
    if(props.onChange) props.onChange(inputValue)
  }
  return (
    <>
   
    <p className="heading_style">{props.heading}</p>
   
    <div class="rt-input-input">
    <input type="text" pattern="[0-9]*" value={inputValue} placeholder={inputPlaceholder}  onChange={handleChange} class="inputclass  pf_mb" />
  </div>
     
 
    </>
  );
}


export function InputField4(props) 
{
  const [inputType] = useState(props.type)
  const [inputValue, setInputValue] = useState('')
  const [inputPlaceholder] = useState(props.Placeholder)

  function handleChange(event)
  {
    setInputValue(event.target.value);
    if(props.onChange) props.onChange(inputValue)
  }
  return (
    <>
   
    <p className="heading_style">{props.heading}</p>
  
      <input type={inputType} value={inputValue} placeholder={inputPlaceholder} name="input-form" onChange={handleChange} class="inputclass4  pf_mb"/>
 
    </>
  );
}

export function InputField5(props) 
{
  const [inputType] = useState(props.type)
  const [inputValue, setInputValue] = useState('')
  const [inputPlaceholder] = useState(props.Placeholder)

  function handleChange(event)
  {
    setInputValue(event.target.value);
    if(props.onChange) props.onChange(inputValue)
  }
  return (
    <>
   
    <p className="heading_style">{props.heading}</p>
  
      <input type={inputType} value={inputValue} placeholder={inputPlaceholder} name="input-form" onChange={handleChange} class="inputclass5"/>
 
    </>
  );
}
