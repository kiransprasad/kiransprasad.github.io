import Carousel, { CarouselItem } from '../components/Carousel.jsx'
import "./Projects.css";

function Projects() {

    return (
    <>
        <h2>My Projects</h2>
        <h3>Websites</h3>
        <hr />
        <Carousel>
            <CarouselItem>
                <h4>BIASL Website</h4>
                <iframe src="https://sarniabiasl.ca" title="BIASL Website"></iframe>
                <p>
                    I am the current Website Administrator of the Brain Injury Association of Sarnia Lambton in 2021. <br />
                    I learned to work with website-building software such as WordPress and WPBakery. <br />
                    Through regular updates to the site content, I have gained experience adjusting products to a client's needs. <br />
                    I learned to manage different WPBakery frameworks and plugins. <br />
                </p>
                <a href="https://sarniabiasl.ca/" target="_blank">
                    <button>Link to Website</button>
                </a>
            </CarouselItem>
            <CarouselItem>
                <h4>This Portfolio</h4>
                <iframe src="../index.html" title="Recursion"></iframe>
                <p>
                    I used ReactJS in order to create my portfolio from scratch. <br />
                    I learned about DNS configuration and hosting services in order to secure a .com domain for it. <br />
                    I also gained experience with tools such as npm, Vite, and Github Pages in order to deploy the site. <br />
                </p>
                <a href="https://github.com/kiransprasad/kiransprasad.github.io" target="_blank">
                    <button>Link to Repository</button>
                </a>
            </CarouselItem>
            <CarouselItem>
                <h4>Grey(t)Water</h4>
                <p>
                    This was my first experience working collaboratively over github, where I designed a website along with one of <br />
                    my design team members following the specifications the entire team had come up with. This showed me how it feels <br />
                    to collaboratively design an application under time pressure, and was a great experience overall! <br />
                </p>
                <a href="https://github.com/kiransprasad/EcoBlue" target="_blank">
                    <button>Link to Repository</button>
                </a>
            </CarouselItem>
        </Carousel>
        <hr />
        <h3>Game Jams</h3>
        <Carousel>
            <CarouselItem>
                <h4>Wormholes</h4>
                <iframe height="167" frameborder="0" src="https://itch.io/embed/724989" width="552"><a href="https://zephyr7.itch.io/wormholes">Wormholes by Zephyr7</a></iframe>
                <p>
                    This was my first Game Jam submission. It was made over 7 days, and although I messed up in the <br />
                    submission process (which led to it never being rated), it remains one of my proudest creations. <br />
                </p>
            </CarouselItem>
            <CarouselItem>
                <h4>Power Cord</h4>
                <iframe height="167" frameborder="0" src="https://itch.io/embed/1087442" width="552"><a href="https://zephyr7.itch.io/power-cord">Power Cord by Zephyr7</a></iframe>
                <p>
                    This was my first time attempting a 48-hour Game Jam, and though I definitely over-scoped for the <br />
                    time limit, I ended with a playable project, and a better understanding of developing scope when working <br />
                    with an extremely tight deadline.<br />
                </p>
            </CarouselItem>
            <CarouselItem>
                <h4>Supermarket Scramble</h4>
                <iframe height="167" frameborder="0" src="https://itch.io/embed/1177999" width="552"><a href="https://zephyr7.itch.io/supermarket-scramble">Supermarket Scramble by Zephyr7</a></iframe>
                <p>
                    This was my second 7-day Game Jam, and my proudest submission. Although there were some bugs in it, <br />
                    specifically with the speed relative to screen size when it transferred from Unity to itch.io, it placed <br />
                    very well for an individual developer, and felt the most complete of any of my submissions. <br />
                </p>
            </CarouselItem>
            <CarouselItem>
                <h4>Of Dice and Hens</h4>
                <iframe height="167" frameborder="0" src="https://itch.io/embed/1624845" width="552"><a href="https://zephyr7.itch.io/of-dice-and-hens">Of Dice and Hens by Zephyr7</a></iframe>
                <p>
                    My most recent submission, made in 48 hours. I decided to go outside of my comfort zone and try my hand <br />
                    at a 3D game with models and infinite maze generation, and local multiplayer. Although I knew without <br />
                    a doubt that I was overscoping, I enjoyed learning a lot about different tools and implementations that I <br />
                    had never used before, and took it in stride as a great learning experience. <br />
                </p>
            </CarouselItem>
        </Carousel>
    </>
    )
}

export default Projects
