import React from 'react';
import './App.css';
import PinInput from './components/PinInput';
import {submitPin} from './services/index'

const PIN_LENGTH = 6;

function App() {
  const [pin, setPin] = React.useState<Array<number | undefined>>(
    new Array(PIN_LENGTH)
  );
  const [validationResult, setValidationResult] = React.useState<boolean | undefined>(
    undefined
  );
  const [validationMessage, setValidationMessage] = React.useState<
    string | undefined
  >(undefined);

  const [isValidating, setIsValidating] = React.useState(false);

  const onPinChanged = (pinEntry: number | undefined, index: number) => {
    const newPin = [...pin];
    newPin[index] = pinEntry;
    setPin(newPin);
  };

  const validatePin=()=>{
    if(pin.length === 0){return false}
    for(var i=0;i<pin.length;i++){
      if(pin[i] === null){
        console.log("ppp--->",pin[i])
        return false;
      }
    }
    return false;
  }

  const submit = async () => {
    setIsValidating(true);

    if(validatePin()){
      submitPin(pin).then((res) => {
        setIsValidating(false);

        setValidationMessage(res);
        if(res === 'Valid'){
          setValidationResult(true);
        }
      });
  }else{
      setIsValidating(true);
      setValidationResult(false);
      setValidationMessage("Empty values");
  }
    
  };

  return (
    <div className="App">
      <PinInput
        isValidating={isValidating}
        validationMessage={validationMessage}
        validationResult={validationResult}
        onPinChanged={onPinChanged}
        pin={pin}
        pinLength={PIN_LENGTH}
      />

      <button onClick={submit}>NEXT</button>
    </div>
  );
}

export default App;