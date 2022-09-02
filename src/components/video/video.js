import DateTimePretty from '../datetime/datetime-pretty';

function Video(props) {
  return (
    <div className='video'>
      <iframe src={props.url} frameBorder='0' allow='autoplay; encrypted-media' allowFullScreen></iframe>
      <DateTimePretty date={props.date} />
    </div>
  )
}

export default Video;