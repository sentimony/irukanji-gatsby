import React from 'react'
import { prefixLink } from 'gatsby-helpers'
import { PlayButton, Timer, Progress } from 'react-soundplayer/components'
import { SoundPlayerContainer } from 'react-soundplayer/addons'

import './style.scss'
import iconPreloader from '../../static/img/svg-icons/preloader.svg'

const clientId = '305b2f7948fb888a0222751f4ca59398';
const resolveUrl = 'https://soundcloud.com/irukanji-music/kremlin-invaders'
const seekingIcon = <img src={ prefixLink(iconPreloader)} className='sb-soundplayer-play-icon' />

class Player extends React.Component {
    constructor() {
        super();

        this.state = {
            seeking: false,
            playing: false,
        };
    }

    handleClick() {
        let { playing } = this.state;

        if (!playing) {
            this.setState({seeking: true});
            setTimeout(() => {
                this.setState({seeking: false, playing: !!!this.state.playing});
            }, 800);
        } else {
            this.setState({playing: !!!this.state.playing});
        }
    }

    render() {
        let { track, currentTime } = this.props;
        let { playing, seeking } = this.state;

        return (
            <div className='soundcloud-player'>

                <PlayButton
                    playing={playing}
                    seeking={seeking}
                    seekingIcon={seekingIcon}
                    onTogglePlay={this.handleClick.bind(this)}
                    {...this.props}
                />

                <div style={{
                    float:'right',
                    textAlign:'right',
                    // padding:'0 4px 0 8px'
                }}>
                    <div className='soundcloud-player__track-name'>{track ? track.title : 'Loading...'}</div>
                    <Timer currentTime={currentTime} duration={305086 / 1000} {...this.props} />
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
