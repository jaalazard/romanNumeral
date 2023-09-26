import './App.css'

function App() {
  const handleClick = (toTest) => {
    let result = 0;
    for(let i = 0; i < toTest.length; i++){
      toTest[i] === 'I' && toTest[i+1] === 'V'? result -= 1 : toTest[i] === 'I' && toTest[i+1] === 'X'? result -= 1 : toTest[i] === 'I' && toTest[i+1] !== 'V' && toTest[i+1] !== 'X'? result += 1 :
      toTest[i] === 'V' ? result += 5 : 
      toTest[i] === 'X' && toTest[i+1] === 'C' || toTest[i] === 'X' && toTest[i+1] === 'L'? result -= 10  : toTest[i] === 'X' ? result += 10 :
      toTest[i] === 'L' ? result += 50 : 
      toTest[i] === 'C' && toTest[i+1] === 'M' ? result -= 100 : toTest[i] === 'C' && toTest[i+1] === 'D' ? result -= 100 : toTest[i] === 'C' ? result += 100 : 
      toTest[i] === 'D' ? result += 500 : 
      toTest[i] === 'M' ? result += 1000 : result += 0;
    }
     return result;
  }

  return (
    <>
      <h1>Ave ! Bienvenue sur votre convertisseur de chiffres romains</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        const input = document.querySelector('input');
        const convertedNumber = handleClick(input.value);
        const span = document.querySelector('span');
        span.textContent = convertedNumber;
        input.value= 0;
      }}> 
      <label htmlFor='input'>Entrez un nombre romain : </label>
      <input type="text" id="input" ></input>
      <button>Convertir</button>
      </form>
      <p>Résultat : <span></span></p>
    </>
  )
}

export default App
