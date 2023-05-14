
import Carousel, { CarouselItem } from '../components/Carousel.jsx'

function Projects() {

    return (
    <>
        <h2>My Projects</h2>
        <h3>Websites</h3>
        <Carousel>
            <CarouselItem>Item 1</CarouselItem>
            <CarouselItem>Item 2</CarouselItem>
            <CarouselItem>Item 3</CarouselItem>
        </Carousel>
        <h3>Game Jams</h3>
        <Carousel>
            <CarouselItem>Item A</CarouselItem>
            <CarouselItem>Item B</CarouselItem>
            <CarouselItem>Item C</CarouselItem>
        </Carousel>
    </>
    )
}

export default Projects
