import { useState } from 'react';
import './App.css';

function App() {
    const defaultValues = {
      firstName: {
        id: 'firstName',
        label: 'First Name',
        type: 'text',
        placeholder: 'First Name',
        value: '',
        isError: false,
        errorMsg: "First Name cant be empty"
      },
      lastName: {
        id: 'lastName',
        label: 'Last Name',
        type: 'text',
        placeholder: 'Last Name',
        value: '',
        isError: false,
        errorMsg: "Last Name cant be empty"
      },
      email: {
        id: 'email',
        label: 'Email',
        type: 'email',
        placeholder: 'Email',
        value: '',
        isError: false,
        errorMsg: "Email cant be empty"
      },
      password: {
        id: 'password',
        label: 'Password',
        type: 'password',
        placeholder: 'Password',
        value: '',
        isError: false,
        errorMsg: "Password cant be empty"
      },
      confirmPassword: {
        id: 'confirmPassword',
        label: 'ConfirmPassword',
        type: 'password',
        placeholder: 'Confirm Password',
        value: '',
        isError: false,
        errorMsg: "Confirm Password cant be empty"
      }
}



const[formData, setFormData] = useState(defaultValues)  //keeping all of these json object in state
const [isPassMatch, setIsPassMatch] = useState(true);

const handleInput = (e) => {  //event handler to make changes in the input field when the user is entering all the details
  const key = e.target.id;
  const value = e.target.value;
  const copyFormData = {...formData};  //i am copying all form data, there will be no changes in the original form
  copyFormData[key].value = value;  //formData ki key aur uski value
  setFormData(copyFormData)  //after updating
  isValidForm(); //to remove the error after the user writes in the inout field
}


const passwordMatch = () => {
  const copyFormData = {...formData};
  const pass = copyFormData['password'].value;
  const cpass = copyFormData['confirmPassword'].value;
  if (pass !== cpass) {
    setIsPassMatch(false);
  } else {
    setIsPassMatch(true);
  }

}


//to check if the form is valid, user has entered all the things correctly 
const isValidForm = () => {
  const copyFormData = {...formData};  //copying all the data that the user has entered
  Object.keys(copyFormData)  //whether each key has a valid form data or not
    .forEach(key=>{  
    const obj = copyFormData[key];
    console.log(obj);
    obj.isError = !obj.value ? true : false;  //showing error that the field cant be empty
    passwordMatch();
  });
  setFormData(copyFormData);
}


const handleFormSubmit = (e) => {
  e.preventDefault(); //to prevent refreshing the form
  isValidForm();
}


  return (
    <div className='App'>
      <div className='container'>
        <form onSubmit={handleFormSubmit}>  
           {
           Object.keys(formData).map((key)=>{  //extracting keys from the object
                const {id,label,type,placeholder,value,isError,errorMsg} = formData[key];
                return (
                  <div key={id} className='form-item'>
                    <label htmlFor={id}>{label}</label>
                    <input
                      id={id}
                      placeholder={placeholder}
                      type={type}
                      value={value}
                      onChange={handleInput}
                    />
                    {isError && <span className='error'>{errorMsg}</span>}
                    {key === 'confirmPassword' && !isPassMatch && 
                    <span className='error'>Password doesnt match</span>
                      }
                  </div>
                );
              })}
              <div className='form-item'>
                <button type='submit'>Submit</button>
              </div>
            </form>
          </div>
        </div>
      );
    }
    

export default App;
//i will render all the json here using Object.keys