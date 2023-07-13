import "./Video.css"

const Video = ()=>{
  const handleClick = () => {
    const video = document.querySelector('.video');
    video.play()
    
  };
  return (
    <div className="content-video">
      <video onMouseEnter={handleClick} className="video" src="./images/Menu/video.mp4" alt="video" />
    </div>
  )
}
export default Video