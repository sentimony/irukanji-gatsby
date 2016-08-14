import React from 'react'
import DocumentTitle from 'react-document-title'
import ReleasePage from '../components/ReleasePage'
import HomePage from '../components/HomePage'
import ReleaseList from '../components/ReleaseList'
import MainMenu from '../components/MainMenu'
import Footer from '../components/Footer'
import { config } from 'config'
// import SoundcloudPlayer from '../components/SoundcloudPlayer'
import MixcloudPlayer from '../components/MixcloudPlayer'

import './style.scss'

class MarkdownWrapper extends React.Component {
    render() {
        const {route} = this.props
        const post = route.page.data
        let layout, template

        layout = post.layout

        if (layout === 'ReleasePage') {
            template = <ReleasePage {...this.props} />
        } else if (layout === 'Discography') {
            template = <ReleaseList {...this.props} />
        } else if (layout === 'HomePage') {
            template = <HomePage {...this.props} />
        }

        return (
            <DocumentTitle title={ `${post.title} • ${config.siteTitle}` }>
                <div className='flex-sticky'>
                    <div className='flex-sticky__content'>
                        <MainMenu {...this.props} />
                        <div className='main-container'>
                            { template }
                        </div>
                    </div>
                    <Footer {...this.props} />
                    <MixcloudPlayer {...this.props} />
                </div>
            </DocumentTitle>
        );
    }
}

MarkdownWrapper.propTypes = {
    route: React.PropTypes.object,
}

export default MarkdownWrapper
