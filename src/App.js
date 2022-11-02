import {useState, useEffect} from 'react';

// Components
import SlidingButton from './components/SlidingButton';

const App = () => {
  // Local State
  const [isFormComplete, setFormCompleted] = useState(false); // The form is fully completed when password and mail are != from ""
  const [mail, setMail] = useState("")
  const [password, setPasword] = useState("")

  // UseEffect
  useEffect(() => {
    if (mail == "" || password == ""){
      setFormCompleted(false)
    }
    else {
      setFormCompleted (true)
    }
  },[mail,password])

  // Stylesheet
  const styles = {
    mainPage: {
      height: "100vh",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    formContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: 40,
      border: 'solid',
      borderRadius: 10,
      background: '#DCDCDC',
    },
    textInput: {
      display: 'flex',
      marginBottom: 20,
      padding: 10,
      borderRadius: 10,
    }
  }

  // Form component
  const renderFrom = () => {
    return(
      <div style = {styles.formContainer}>
        <input 
          style={styles.textInput} 
          type="email" 
          name="email" 
          placeholder="Your email"
          onChange={(e) => setMail(e.target.value)}/>
        <input 
          style={styles.textInput} 
          type="password" 
          name="name" 
          placeholder="Your password"
          onChange={(e) => setPasword(e.target.value)}/>
        <SlidingButton shouldSlide={!isFormComplete} label={"Submit"}></SlidingButton>
      </div>
    );
  }

  return (
    <div style = {styles.mainPage}>
      {renderFrom()}
    </div>
  );
}

export default App;
