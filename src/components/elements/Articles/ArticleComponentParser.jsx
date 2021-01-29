import React from 'react';
import { randomID } from '../../../helpers/utils'

// import blocks components
import Paragraph from './blocks/paragraph/paragraph.component'
import Heading from './blocks/heading/heading.component'
import SingleImage from './blocks/single-image/single-image.component'
import VideoBlock from './blocks/video/video.component'
import Freeform from './blocks/freeform/freeform.component'
import Spacer from './blocks/spacer/spacer.component'
import Gallery from './blocks/gallery/gallery.component'
import Carousel from './blocks/carousel/carousel.component'
// import MediaText from '../organisms/projects/media-text/media-text.component'

const components = {
    "core/paragraph": Paragraph,
    "core/image": SingleImage,
    "core/video": VideoBlock,
    "core/gallery": Gallery,
    "core/freeform": Freeform,
    "core/spacer": Spacer,
    // "core/media-text": MediaText,
    "core/heading": Heading,
    "eedee/block-gutenslider": Carousel,
}

const isEmpty = obj => {
    return Object.entries(obj).length === 0 && obj.constructor === Object
}

const ComponentParser = props => {
    let { content } = props
    // console.log("Props:")
    // console.log(props)

    if(!content) return null
    // console.log("Contenuto:")
    // console.log(typeof content)
    const filteredComponents = content.filter(component => component.name !== null)

    if (filteredComponents && filteredComponents.length > 0) {
        const pageComponents = filteredComponents.map((component, index) => {
            if (isEmpty(component)) return null
            if (!component) return null

            const Component = components[component.name]
            // console.log("Block:")
            // console.log(component.name)

            if (!Component) return null

            return (
                <Component
                    index={index}
                    key={`component-${randomID()}`}
                    {...component}
                />
            )
        })

        if (pageComponents) {
            return pageComponents
        }
    }

    return null
}

export default ComponentParser