import Video from './video';

function VideoList(props) {
  return props.list.map(item => <Video key={props.list.indexOf(item)} url={item.url} date={item.date} />);
}

export default VideoList;