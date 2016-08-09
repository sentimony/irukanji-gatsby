import React from 'react'
import { PlayButton, Timer, Progress } from 'react-soundplayer/components';
import { SoundPlayerContainer } from 'react-soundplayer/addons';

const clientId = '305b2f7948fb888a0222751f4ca59398';
const resolveUrl = 'https://soundcloud.com/irukanji-music/kremlin-invaders';

import './style.scss'

class Player extends React.Component {
    render() {
        let { track, currentTime } = this.props;

        return (
            <div className='soundcloud-player'>
                <PlayButton {...this.props} />
                <div style={{float:'right',textAlign:'right'}}>
                    <div className='soundcloud-player__track-name'>{track ? track.title : 'Loading...'}</div>
                    <Timer currentTime={currentTime} duration={305086 / 1000} />
                </div>
                <Progress {...this.props} />
            </div>
        );
    }
}

class SoundcloudPlayer extends React.Component {
    render() {
        return (
            <SoundPlayerContainer clientId={clientId} resolveUrl={resolveUrl} {...this.props}>
                <Player />
            </SoundPlayerContainer>
        );
    }
}

export default SoundcloudPlayer
