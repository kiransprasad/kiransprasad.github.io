
import "./AboutMe.css";

function AboutMe() {

    const langDiv = -1;

    return (
    <>
        <h2>About Me</h2>
        <p>
            I'm a first-year student currently studying Computer Science at the University of Waterloo! 
            I plan to take a specialization in Artifical Intelligence, and minor in Biology, with a focus on Neurobiology. 
            The languages I'm familiar with are:
        </p>
        <div id="Large" className="Languages">
            <ul className="buttons">
                <li><button onClick={}>C</button></li>
                <li><button>C++</button></li>
                <li><button>C#</button></li>
                <li><button>Java</button></li>
                <li><button>Python</button></li>
                <li><button>Racket</button></li>
                <li><button>HTML & CSS</button></li>
                <li><button>JavaScript</button></li>
                <li><button>React</button></li>
                <li><button>SQL</button></li>
            </ul>
        </div>
        <div id="Medium" className="Languages">
            <ul className="buttons">
                <li><button>C</button></li>
                <li><button>C++</button></li>
                <li><button>C#</button></li>
                <li><button>Java</button></li>
                <li><button>Python</button></li>
            </ul>
            <ul className="buttons">
                <li><button>Racket</button></li>
                <li><button>HTML & CSS</button></li>
                <li><button>JavaScript</button></li>
                <li><button>React</button></li>
                <li><button>SQL</button></li>
            </ul>
        </div>
        <div id="Small" className="Languages">
            <ul className="buttons">
                <li><button>C</button></li>
                <li><button>C++</button></li>
                <li><button>C#</button></li>
                <li><button>Java</button></li>
            </ul>
            <ul className="buttons">
                <li><button>Python</button></li>
                <li><button>Racket</button></li>
                <li><button>HTML & CSS</button></li>
            </ul>
            <ul className="buttons">
                <li><button>JavaScript</button></li>
                <li><button>React</button></li>
                <li><button>SQL</button></li>
            </ul>
        </div>
    </>
    )
}

export default AboutMe
