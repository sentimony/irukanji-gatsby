import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import Ink from 'react-ink'

import './style.scss'
import iconGithub from './iconGithub.svg'
import irukanjiLogo from '../../static/img/logo/deer.svg'

class MainMenu extends React.Component {
    render() {
        const {location} = this.props
        const {route} = this.props
        const page = route.page.data

        return (
            <div className='mainmenu'>
                    <div className='mainmenu__container'>

                        <Link to={ prefixLink('/')} className='mainmenu__link' activeClassName='is-selected' onlyActiveOnIndex>
                            <img className='mainmenu__svglogo' src={ prefixLink(irukanjiLogo) }/>
                            { config.siteTitle }
                            <Ink />
                        </Link>

                        <Link to={ prefixLink('/discography/')} className={`mainmenu__link ${ location.pathname.indexOf(prefixLink('/discography/')) == 0 ? 'is-selected' : '' }`}>
                            Discography
                            <Ink />
                        </Link> 

                        <a className='mainmenu__link mainmenu__link--social' href={ config.siteGithubUrl } target='_blank'>
                            <img className='mainmenu__svgicon' src={ prefixLink(iconGithub) }/>
                            <Ink />
                        </a>

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
