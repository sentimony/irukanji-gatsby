import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import Ink from 'react-ink'

import './style.scss'
import logoIrkNew from '../../static/img/svg-icons/deer2.svg'
import logoIrkOld from '../../static/img/svg-icons/deer1.svg'
import iconDiscography from '../../static/img/svg-icons/kokopelli.svg'
import iconBandcamp from '../../static/img/svg-icons/bandcamp.svg'
import iconFacebook from '../../static/img/svg-icons/facebook.svg'
import iconSoundcloud from '../../static/img/svg-icons/soundcloud.svg'
import iconGithub from '../../static/img/svg-icons/github.svg'

class MainMenu extends React.Component {
    render() {
        const {location} = this.props
        const {route} = this.props
        const page = route.page.data

        return (
            <div className='mainmenu'>
                <div className='mainmenu__container'>

                    <Link to={ prefixLink('/')} className='mainmenu__link mainmenu__link--logo' activeClassName='is-selected' onlyActiveOnIndex>
                        <img className='mainmenu__link-svg' src={ prefixLink(logoIrkNew) }/>
                        <span className='mainmenu__link-name'>{ config.siteTitle }</span>
                        <Ink />
                    </Link>

                    <Link to={ prefixLink('/discography/')} className={`mainmenu__link ${ location.pathname.indexOf(prefixLink('/discography/')) == 0 || location.pathname.indexOf(prefixLink('/release/')) == 0 ? 'is-selected' : '' }`}>
                        <img className='mainmenu__link-svg' src={ prefixLink(iconDiscography) }/>
                        <span className='mainmenu__link-name'>Discography</span>
                        <Ink />
                    </Link> 

                    <a href='http://irukanji-music.github.io/irukanji-music-jekyll' className='mainmenu__link' target='_blank'>
                        <img className='mainmenu__link-svg' src={ prefixLink(logoIrkOld) }/>
                        <span className='mainmenu__link-name'>Old Site</span>
                    </a>

                    <div className='mainmenu__social-nav'>

                        <span className='mainmenu__join'>Follow</span>

                        <a href={ config.siteBandcampUrl } className='mainmenu__link' target='_blank'>
                            <img className='mainmenu__link-svg' src={ prefixLink(iconBandcamp) }/>
                            <span className='mainmenu__link-name'>bandcamp</span>
                        </a>

                        <a href={ config.siteSoundcloudUrl } className='mainmenu__link' target='_blank'>
                            <img className='mainmenu__link-svg' src={ prefixLink(iconSoundcloud) }/>
                            <span className='mainmenu__link-name'>soundcloud</span>
                        </a>

                        <a href={ config.siteFacebookUrl } className='mainmenu__link' target='_blank'>
                            <img className='mainmenu__link-svg' src={ prefixLink(iconFacebook) }/>
                            <span className='mainmenu__link-name'>facebook</span>
                        </a>

                    </div>

                </div>

            </div>
        );
    }
}

MainMenu.propTypes = {
    location: React.PropTypes.object,
    page: React.PropTypes.object,
}

export default MainMenu
