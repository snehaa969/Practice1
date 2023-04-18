import React , { useState } from 'react'

const EventHandling = () => {

     const [upvotes, setUpvotes] = useState(0);
     const [mycolor, setMycolor] = useState('#eee');

     const [textColor, setTextColor] = useState('blue');
     const [textSize, setTextSize] = useState(40);
 
     let myStyles = {
      color : textColor,
      fontSize : textSize,
     }
    
  let likes = 0;

  const increaseLikes = () => {
    likes++;
    console.log(likes);
  }

  const increaseUpvotes = () => {
    //upvotes++; ❌ wrong
    setUpvotes( upvotes + 1 ); //✅ right
  }

  return (
   <div style={{ backgroundColor : mycolor, height : '100vh', padding: 50 }}>
    <h1 style={myStyles}>Event Handling</h1>
    <hr />

    <button className='btn btn-primary' onClick={ () => {alert('Knock Knock!! 😎😎 ') } }>Click Event Handling</button>

    <br />
    <input type="text" onChange={ (e) => { console.log(e.target.value) } } />

    <br />
    <input type="color" onChange={ (e) => { setMycolor(e.target.value) } } />

    <br />
    <button className='btn btn-danger mt-4' onClick={increaseLikes}>Add a Like</button>

    <h1>👍🏻 {likes}</h1>
    <button className='btn btn-danger mt-4' onClick={increaseUpvotes}>Add an Upvote</button>

    <br />
    <input type="text" onChange={ (e) => { console.log(e.target.value) } } />

    <h1>🔼 {upvotes}</h1>

    <input type="range" className='form-range' id='customRange1' onChange={(e) => {setTextSize(parseInt(e.target.value));}}/>

    <input type="color" onChange={(e) => {setTextColor(e.target.value)}}/>

   </div>
  )
}

export default EventHandling