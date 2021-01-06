import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"

import LanguageSelector from '../LanguageSelector'

const MenuIta = ({lang}) => {
    const data = useStaticQuery(graphql`
        query GET_MENU_BY_NAME {
            wordpress {
                menus {
                    nodes {
                        count
                        name
                        menuItems {
                            nodes {
                                id
                                databaseId
                                title
                                url
                                cssClasses
                                description
                                label
                                linkRelationship
                                target
                                parentId
                                path
                            }
                        }
                    }
                }
            }
        }
    `)

    return (
        <div>
            {console.log(data)}
            <ul>
                {
                    lang === "it" ?
                    data.wordpress.menus.nodes.find(node => node.name === "Menu ita").menuItems.nodes.map(item => (
                        <li key={item.id}>
                            <Link to={item.path.replace("/dev/wau/wp", "")}>{item.label}</Link>
                        </li>
                    )) :
                    data.wordpress.menus.nodes.find(node => node.name === "Menu eng").menuItems.nodes.map(item => (
                        <li key={item.id}>
                            <Link to={item.path.replace("/dev/wau/wp", "")}>{item.label}</Link>
                        </li>
                    ))
                }
            </ul>

            <LanguageSelector />
        </div>
    )
}

export default MenuIta