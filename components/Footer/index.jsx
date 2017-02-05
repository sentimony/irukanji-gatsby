import React from 'react'
import { prefixLink } from 'gatsby-helpers'

import './style.scss'
import iconEagle from '../../static/img/svg-icons/native-american-eagle.svg'

class Footer extends React.Component {
    render() {
        return (
            <div className='footer'>
                <div className='footer__copyright'>2008 - 2017 © Irukanji</div>
                <div className='footer__powered'>
                    <span className='footer__powered-development'>Web development by</span>
                    <a href='https://ihororlovskyi.com' className='footer__powered-link' target='_blank'>
                        <img className='footer__powered-link-svg' src={ prefixLink(iconEagle) }/>
                        <span className='footer__powered-link-text'>Ihor Orlovskyi</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default Footer
