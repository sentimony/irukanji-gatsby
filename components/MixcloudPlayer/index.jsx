import React from 'react'

import './style.scss'

class MixcloudPlayer extends React.Component {
    render() {
        return (
            <div className='mixcloud-player'>
                <iframe className="mixcloud-player__iframe" src="https://www.mixcloud.com/widget/iframe/?feed=%2Firukanji%2Fgood-murning-morning-zenonesque-psytrance-djset-by-irukanji%2F&hide_cover=1&autoplay=0" />
            </div>
        );
    }
}

export default MixcloudPlayer
