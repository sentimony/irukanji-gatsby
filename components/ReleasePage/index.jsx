import React from 'react'
import { RouteHandler, Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'
import { config } from 'config'
import ReleaseList from '../ReleaseList'

import './style.scss'

class SitePost extends React.Component {
    render() {
        const {route} = this.props
        const post = route.page.data

        return (
            <div className='release-page'>
                <div className='release-page__sidebar'>
                    <ReleaseList {...this.props} />
                </div>
                <div className='release-page__content'>
                    <h1 className='release-page__title'>{ post.title }</h1>
                    <img className='release-page__cover' src={ prefixLink(`../..${ post.path }cover.jpg`) } alt={ post.title } />
                    <div dangerouslySetInnerHTML={ {    __html: post.body} } />
                </div>
            </div>
        );
    }
}

SitePost.propTypes = {
    post: React.PropTypes.object,
    pages: React.PropTypes.array,
}

export default SitePost
