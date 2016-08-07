import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import Ink from 'react-ink'

import './style.scss'
import logoIrk from '../../static/img/logo/deer.svg'
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

                    <Link to={ prefixLink('/')} className='mainmenu__link' activeClassName='is-selected' onlyActiveOnIndex>
                        <img className='mainmenu__svglogo' src={ prefixLink(logoIrk) }/>
                        { config.siteTitle }
                        <Ink />
                    </Link>

                    <Link to={ prefixLink('/discography/')} className={`mainmenu__link ${ location.pathname.indexOf(prefixLink('/discography/')) == 0 || location.pathname.indexOf(prefixLink('/release/')) == 0 ? 'is-selected' : '' }`}>
                        Discography
                        <Ink />
                    </Link> 

                    <div style={{float:'right'}}>

                        <a className='mainmenu__link' href={ config.siteBandcampUrl } target='_blank'>
                            <img className='mainmenu__svgicon' src={ prefixLink(iconBandcamp) }/>
                            <span className='mainmenu__link-name'>bandcamp</span>
                            <Ink />
                        </a>

                        <a className='mainmenu__link' href={ config.siteSoundcloudUrl } target='_blank'>
                            <img className='mainmenu__svgicon' src={ prefixLink(iconSoundcloud) }/>
                            <span className='mainmenu__link-name'>soundcloud</span>
                            <Ink />
                        </a>

                        <a className='mainmenu__link' href={ config.siteFacebookUrl } target='_blank'>
                            <img className='mainmenu__svgicon' src={ prefixLink(iconFacebook) }/>
                            <span className='mainmenu__link-name'>facebook</span>
                            <Ink />
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
