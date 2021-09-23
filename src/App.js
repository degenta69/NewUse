import './App.css';
import React, {useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import './index.css'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App=()=>{
  const [mode, setmode] = useState('light');
  const [progress, setProgress] = useState(30);
  const [Text, setText] = useState('PayPal');

  const toggleMode=()=>{
      if (mode==='light') {
        setmode('dark');
        document.body.style.backgroundColor='#212121';
      }else{
        setmode('light');
        document.body.style.backgroundColor='white';
      }
    }
    return (
      <div>
        <Router>
        <Navbar mode={mode}  toggleMode={toggleMode} Text={Text} setText={setText}/>
        <LoadingBar
          color={`${mode==='light'?'#000':'rgb(255, 0, 0)'}`}
          shadow='true'
          background={`${mode==='light'?'7':'0'}`}
          progress= {progress}
          loaderSpeed= '900'
          onLoaderFinished={() => setProgress(0)}
        />
        <h1
          className={`text-${mode==='dark'?'danger':'dark'}`}
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            margin: '90px 0px 0px 0px'
          }}
          >
          
          NewUse
        </h1>
        <Switch>
           <Route exact path="/business"><News Text={Text} setProgress={setProgress}  key="business" pageSize={6} country='in' category='business' mode={mode} toggleMode={toggleMode} /></Route>
           <Route exact path="/entertainment"><News Text={Text} setProgress={setProgress}  key="entertainment" pageSize={6} country='in' category='entertainment' mode={mode} toggleMode={toggleMode} /></Route>
           <Route exact path="/health"><News Text={Text} setProgress={setProgress}  key="health" pageSize={6} country='in' category='health' mode={mode} toggleMode={toggleMode} /></Route>
           <Route exact path="/science"><News Text={Text} setProgress={setProgress}  key="science" pageSize={6} country='in' category='science' mode={mode} toggleMode={toggleMode} /></Route>
           <Route exact path="/sports"><News Text={Text} setProgress={setProgress}  key="sports" pageSize={6} country='in' category='sports' mode={mode} toggleMode={toggleMode} /></Route>
           <Route exact path="/technology"><News Text={Text} setProgress={setProgress}  key="technology" pageSize={6} country='in' category='technology' mode={mode} toggleMode={toggleMode} /></Route>
           <Route exact path="/"><News Text={Text} setProgress={setProgress}  key="general" pageSize={6} country='in' category='general' mode={mode} toggleMode={toggleMode} /></Route>
        </Switch>
        </Router>
      </div>
    )
  
}

export default App;