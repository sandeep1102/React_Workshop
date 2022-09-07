import React, {useState} from 'react'

// Object
function ThirdUseStateComp() {

  const [name, setName] = useState({firstname: '', lastname: ''})
console.log(name)
  return (
    <div>
      <form>
        <input type="text" name="firstname" value={name.firstname} onChange={(e) => setName({firstname: e.target.value})}></input>
        <input type="text" name="lastname" value={name.lastname} onChange={(e) => setName({lastname: e.target.value})}></input>
        <h2>First name is : {name.firstname}</h2>
        <h2>Last name is : {name.lastname}</h2>

      </form>
    </div>
  )
}

export default ThirdUseStateComp