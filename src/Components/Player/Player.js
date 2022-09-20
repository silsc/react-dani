import './player.scss';
import React  from 'react';
import { ReactComponent as PlayBtn } from '../../assets/icons/play.svg';
import { ReactComponent as PrevBtn } from '../../assets/icons/prev.svg';
import { ReactComponent as NextBtn } from '../../assets/icons/next.svg';
import { ReactComponent as PauseBtn } from '../../assets/icons/pause.svg';
import { withTranslation } from 'react-i18next';
import audio1 from '../../assets/audios/audio1.wav';
import audio1Img from '../../assets/images/audio1.png';
import audio2 from '../../assets/audios/audio2.wav';
import audio2Img from '../../assets/images/audio2.png';
import audio3 from '../../assets/audios/audio3.wav';
import audio3Img from '../../assets/images/audio3.png';
import audio4 from '../../assets/audios/audio4.wav';
import audio4Img from '../../assets/images/audio4.png';
import audio5 from '../../assets/audios/audio5.wav';
import audio5Img from '../../assets/images/audio5.png';
import audio6 from '../../assets/audios/audio6.wav';
import audio6Img from '../../assets/images/audio6.png';

class Player extends React.Component {
  state = {
    index: 0,
    currentTime: '0:00',
    musicList: [
      {name:'Inherent Fate', author: 'Furi Helium', img: audio1Img, audio: audio1 , duration: '0:48', type: `${this.props.t('work.production')} / ${this.props.t('work.mix')} / ${this.props.t('work.master')} `}, 
      {name:'La Realidad', author: 'The Fox 196', img: audio2Img, audio: audio2 , duration: '1:20', type: `${this.props.t('work.production')} / ${this.props.t('work.mix')} / ${this.props.t('work.master')} `}, 
      {name:'Shadow Of Your Bliss', author: 'It Came From The Void', img: audio3Img, audio: audio3, duration: '0:44', type: `${this.props.t('work.production')} / ${this.props.t('work.mix')} / ${this.props.t('work.master')}`},
      {name:'El Mirall', author: 'Perarni_Drums', img: audio4Img, audio: audio4, duration: '1:00', type: `${this.props.t('work.production')} / ${this.props.t('work.mix')} / ${this.props.t('work.master')} `},
      {name:'She Comes', author: 'Fuzz Forward', img: audio5Img, audio: audio5, duration: '0:44', type: `${this.props.t('work.production')} / ${this.props.t('work.mix')} / ${this.props.t('work.master')} `}
      ,
      {name:'Pensant del Revés', author: 'Fornax', img: audio6Img, audio: audio6, duration: '1:00', type: `${this.props.t('work.production')} / ${this.props.t('work.mix')} / ${this.props.t('work.master')} `}
    ],
    pause: false,
  };


 componentDidMount() {
   this.playerRef.addEventListener("timeupdate", this.timeUpdate, false);
   this.playerRef.addEventListener("ended", this.nextSong, false);
   this.timelineRef.addEventListener("click", this.changeCurrentTime, false);
   this.timelineRef.addEventListener("mousemove", this.hoverTimeLine, false);
   this.timelineRef.addEventListener("mouseout", this.resetTimeLine, false);
 }

  componentWillUnmount() {
    this.playerRef.removeEventListener("timeupdate", this.timeUpdate);
    this.playerRef.removeEventListener("ended", this.nextSong);
    this.timelineRef.removeEventListener("click", this.changeCurrentTime);
    this.timelineRef.removeEventListener("mousemove", this.hoverTimeLine);
    this.timelineRef.removeEventListener("mouseout", this.resetTimeLine);
  }

  changeCurrentTime = (e) => {
    const duration = this.playerRef.duration;
    
    const playheadWidth = this.timelineRef.offsetWidth;
    const offsetWidht = this.timelineRef.offsetLeft;
    const userClickWidht = e.clientX - offsetWidht;
  
    const userClickWidhtInPercent = (userClickWidht*100)/playheadWidth;

    this.playheadRef.style.width = userClickWidhtInPercent + "%";
    this.playerRef.currentTime = (duration * userClickWidhtInPercent)/100;
  }

  hoverTimeLine = (e) => {
    const duration = this.playerRef.duration;
    
    const playheadWidth = this.timelineRef.offsetWidth
    
    const offsetWidht = this.timelineRef.offsetLeft;
    const userClickWidht = e.clientX - offsetWidht;
    const userClickWidhtInPercent = (userClickWidht*100)/playheadWidth;

    if(userClickWidhtInPercent <= 100){
      this.hoverPlayheadRef.style.width = userClickWidhtInPercent + "%";
    }
    
    const time = (duration * userClickWidhtInPercent)/100;
    
    if( (time >=0) && (time <= duration)){
      this.hoverPlayheadRef.dataset.content = this.formatTime(time);
    }
  }

  resetTimeLine = () => {
    this.hoverPlayheadRef.style.width = 0;
  }

  timeUpdate = () => {
    const duration = this.playerRef.duration;
    const timelineWidth = this.timelineRef.offsetWidth - this.playheadRef.offsetWidth;
    const playPercent = 100 * (this.playerRef.currentTime / duration);
    this.playheadRef.style.width = playPercent + "%";
    const currentTime = this.formatTime(parseInt(this.playerRef.currentTime));  
    this.setState({ 
      currentTime 
    });
  }

  formatTime = (currentTime) =>{
    const minutes = Math.floor(currentTime / 60);
    let seconds = Math.floor(currentTime % 60);

    seconds = (seconds >= 10) ? seconds : "0" + seconds % 60;
    
    const formatTime = minutes + ":" +  seconds
  
    return formatTime;
    }

  updatePlayer = () =>{
      const { musicList, index } = this.state;
      const currentSong = musicList[index];
      const audio = new Audio(currentSong.audio);
      this.playerRef.load();
  }
    
  nextSong = () => {
      const { musicList, index, pause } = this.state;
      this.setState({ 
        index: (index + 1) % musicList.length
      });
      this.updatePlayer();
      if(pause){
        this.playerRef.play();
      }
  };

  prevSong = () => {
    const { musicList, index, pause } = this.state;  
    
    this.setState({ 
      index: (index + musicList.length - 1) % musicList.length
    });
    this.updatePlayer();
    if(pause){
      this.playerRef.play();
    }
  };
   

  playOrPause = () =>{
    const { musicList, index, pause } = this.state;
    const currentSong = musicList[index];
    const audio = new Audio(currentSong.audio);
    if( !this.state.pause ){
      this.playerRef.play();
    }else{
      this.playerRef.pause();
    }
    this.setState({
      pause: !pause
    })
  }
  
  clickAudio = (key) =>{
    const { pause } = this.state;
    
    this.setState({
      index: key
    });
    
    this.updatePlayer();
    if(pause){
      this.playerRef.play();
    }
  }

  
  render() {
    const { musicList, index, currentTime, pause } = this.state;
    const currentSong = musicList[index];
    
    return (
      <div className="player">
        <div className="current-song">
          <audio ref={ref => this.playerRef = ref}>
            <source src={ currentSong.audio } type="audio/ogg"/>
              Your browser does not support the audio element.
          </audio>
          <div className="img-wrap">
            <img src={ currentSong.img }/>
           </div>
           <div className='current-info'>
             <div className='current-title'>
              <p>
                <span className="song-name">{ currentSong.name }</span> - <span className="song-autor">{ currentSong.author }</span>
              </p>
              
             </div>
            <span className="song-type">{ currentSong.type }</span>
            
            <div className="controls">
              <button onClick={this.prevSong} className="prev prev-next current-btn"><PrevBtn/></button>
              
              <button onClick={this.playOrPause} className="play current-btn">
                {
                  (!pause) ? <PlayBtn/>
                  :<PauseBtn/>
                }
              </button>
              <button onClick={this.nextSong} className="next prev-next current-btn"><NextBtn/></button>
            </div>

            <div className="time">
              <div className="current-time">{ currentTime }</div>
              <div className="end-time">{ currentSong.duration }</div>
            </div>

            <div ref={ref => this.timelineRef = ref} id="timeline">
              <div ref={ref => this.playheadRef = ref} id="playhead"></div>
              <div ref={ref => this.hoverPlayheadRef = ref}  data-content="0:00"></div>
            </div>
           </div>
          
          
        </div>
        <div className="play-list" >
          {musicList.map( (music, key=0) =>
                         <div key={key} 
                           onClick={()=>this.clickAudio(key)}
                           className={"track " + 
                             (index === key && !pause ?'current-audio':'') + 
                             (index === key && pause ?'play-now':'')} >
                           <div className="track-discr" >
                            <img className="track-img" src={music.img}/>
                            <div className="track-info">
                              <p><span className="track-name" >{music.name}</span> - <span className="track-author" >{music.author}</span></p>
                              <span className="track-type" >{music.type}</span>
                            </div>
                           </div>
                           <span className="track-duration" >
                             {(index === key)
                               ?currentTime
                               :music.duration
                             }
                           </span>
                         </div>
                        )}
        </div>
      </div>
    )
  }
}

export default withTranslation()(Player)