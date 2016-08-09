import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import { MorphReplace, MorphReplaceResize } from 'react-svg-morph';
import Deer1 from '../SVG/Deer1';
import Deer2 from '../SVG/Deer2';
import Kokopelli from '../SVG/Kokopelli';
import Eagle from '../SVG/Eagle';

import './style.scss'
import logoIrkNew from '../../static/img/svg-icons/deer2.svg'
import logoIrkOld from '../../static/img/svg-icons/deer1.svg'

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.increment = 0;
        this.swap();
    }
    swap() {
        setInterval(() => {
            this.increment++
            this.forceUpdate();
        }, 4000)
    }
    render() {
        const {route} = this.props
        const page = route.page.data

        let icon

        if (this.increment % 4 === 1) {
            icon = <Deer1 key="Deer1" />
        } else if (this.increment % 4 === 2) {
            icon = <Eagle key="Eagle" />
        } else if (this.increment % 4 === 3) {
            icon = <Kokopelli key="Kokopelli" />
        } else {
            icon = <Deer2 key="Deer2" />
        }

        return (
            <div className='homepage'>
                <MorphReplaceResize className='homepage__logo' width={280} height={280} rotation={'clockwise'}>
                    {icon}
                </MorphReplaceResize>

                <h1 className='homepage__title'>{ config.siteTitle }</h1>
                <h2 className='homepage__description'>{ config.siteDescr }</h2>

                <img className='homepage__logo' style={{display:'none'}} src={ prefixLink(logoIrkNew) } alt='{ config.siteTitle } Logo' />
                <img className='homepage__logo' style={{display:'none'}} src={ prefixLink(logoIrkOld) } alt='{ config.siteTitle } Logo' />

                <div dangerouslySetInnerHTML={{ __html: page.body}} />
            </div>
        );
    }
}

HomePage.propTypes = {
    page: React.PropTypes.object,
}

export default HomePage
