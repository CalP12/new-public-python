import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import IconButton from '@mui/material/IconButton'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import France from './images/france.jpg'
import Delhi from './images/delhi.jpg'
import Dubai from './images/dubai.jpg'

function App() {
  
  const [details,setDetails] = useState([
    {name:'France',description:'France is beautiful', like:1, dislike:2, img: France}, 
    {name:'Delhi',description:'Delhi is beautiful', like:4, dislike:0, img: Delhi},
    {name:'Dubai',description:'Dubai is beautiful', like:3, dislike:5, img: Dubai}, 
  ])


  return (<div>
    <h1>States and Props</h1>
    <div class="album py-5 bg-light">
      <div class="container">
        <div class="row">
        {details.map((det) => {
          return(
            <div class="col-md-4">
            <div class="card mb-4 shadow">
              <img src={det.img} alt="dest"/>
              <div class="card-body">
                <h5 class="card-text">{det.name}</h5>
                <p class="card-text">{det.description} <a href="">See More</a></p>

                <Interaction like={det.like} dislike={det.dislike}/>
              </div>
            </div>
          </div>
          )
        })}

        </div>
      </div>
    </div>
  </div>)
}

function Interaction(props){
  
  const [newLikes,setLikes] = useState(props.like)
  const [newDislikes,setDislikes]  = useState(props.dislike)

  let likeHandler = () =>
  {
    setLikes(newLikes+1)
  }

  let dislikeHandler = () =>
  {
    setDislikes(newDislikes+1)
  }

  return(
  <>
  <IconButton color="success" onClick={likeHandler} aria-label="like"> <ThumbUpIcon fontSize="small"  /> </IconButton>
  <span style={{color:"green"}}>{newLikes}</span>
  <IconButton color="error" onClick={dislikeHandler} aria-label="dislike"> <ThumbDownIcon  fontSize="small" /> </IconButton>
  <span style={{color:"red"}}>{newDislikes}</span>
  </>
  )
}

export default App;
