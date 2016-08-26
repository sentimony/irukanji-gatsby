import React from 'react'
import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'
import Ink from 'react-ink'

import './style.scss'

class MixinList extends React.Component {
    render() {
        const pageLinks = []

        const sortedPages = sortBy(this.props.route.pages, (page) => access(page, 'data.id')).reverse()
        sortedPages.forEach((page) => {
            if (access(page, 'file.ext') === 'md' && access(page, 'data.category') === 'discography') {
                const id = access(page, 'data.id') || page.path
                const key = access(page, 'data.key') || page.path
                const title = access(page, 'data.title') || page.path

                pageLinks.push(
                    <li key={ key }>
                        <Link to={ prefixLink(page.path) } className='release-list__link' activeClassName='is-selected' >
                            <img className='release-list__cover' src={ prefixLink(`../..${ page.path }cover.jpg`) } />
                            { title }
                            <Ink />
                        </Link>
                    </li>
                )
            }
        })

        return (
            <ul className='release-list'>
                { pageLinks }
            </ul>
        );
    }
}

MixinList.propTypes = {
    route: React.PropTypes.object,
}

export default MixinList
