import "./Video.css"
const Video = ()=>{

  return (

    <div className="content-video">

    <video autoPlay muted>
      <source className="video" src="./images/Menu/video.mp4" alt="video"  type="video/mp4" />
    </video>


    </div>
  )
}
export default Video