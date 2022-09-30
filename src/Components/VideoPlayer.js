import React from 'react';
import VideoPlayer from 'react-videoplayer'
import 'react-videoplayer/lib/index.css'


class Player extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            videoSrc : './images/video.mov'
        };
        
    }


    render() {
        return (
            <div>
                <VideoPlayer
                    videoSrc={this.state.videoSrc}
                    autoPlay={true}
                    width={50}
                />
            </div>
        );
    }
}

export default Player;