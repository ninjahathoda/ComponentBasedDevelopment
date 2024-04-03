function NavBar() {
    return (
        <div>
            <nav className="navbar">
                <div className="maindiv-navbar">
                    <div className="Company Logo">
                        <img src="./React-Symbol.png" width="200px" />
                    </div>
                    <div className="unordered-list">
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </nav>
            <h1>Let's Discover about REACT!</h1>
            <h2>What is React?</h2>
            <p>React is a JavaScript library created by Facebook. React is a User Interface (UI) library. React is a tool for building UI components</p>
            <h2>What is Babel?</h2>
            <p>Babel is a JavaScript compiler that can translate markup or programming languages into JavaScript. Babel is available for different conversions. React uses Babel to convert JSX into JavaScript.</p>
            <h2>What is JSX?</h2>
            <p>JSX stands for JavaScript XML. JSX is an XML/HTML like extension to JavaScript. Note that JSX does not use quotes around the HTML text string. JSX is a XML syntax extension to JavaScript </p>
            <h2>What is React DOM Render?</h2>
            <p>The method ReactDom.render() is used to render (display) HTML elements</p>
            <h2>What are JSX Expressions?</h2>
            <p>Expressions can be used in JSX by wrapping them in curly { } braces.</p>
            <h2>What are React Elements?</h2>
            <p>React applications are usually built around a single HTML element. React developers often call this the root node (root element).</p>
            <p>Elements are rendered (displayed) with the ReactDOM.render() method. React elements are immutable. They cannot be changed.</p>
            <h2>What are React Components?</h2>
            <p>React components are JavaScript functions. React can also use ES6 classes to create components.</p>
        </div>

    )
}


function ContactPage() {
    return (
        <div>
            <h2>Contact Us</h2>
            <br />
            <input type="text" placeholder="Enter your Name" />
            <br />
            <br />
            <input type="text" placeholder="Enter your E-Mail Adderess" />
            <br />
            <br />
            <input type="text" placeholder="Enter your Mobile Number" />
            <br />
            <br />
            <textarea name="" id="" cols="30" rows="10" placeholder="Write your review"></textarea>
            <br />
            <br />
            <input type="button" value="Submit"></input>
        </div>
    )
}

function MainContent() {
    return (
        <div>
            <h1>About Me</h1>
            <div>
            <div>
                <img src="./React_Logo_SVG.svg" width = "300px" />
            </div>
            <div>
                <p>React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies</p>
                <p>React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js. Because React is only concerned with the user interface and rendering components to the DOM, React applications often rely on libraries for routing and other client-side functionality. A key advantage of React is that it only rerenders those parts of the page that have changed, avoiding unnecessary rerendering of unchanged DOM elements.</p>
            </div>
            </div>
            <div>
                <table>
                    <tr>
                        <td><b>Original Author(s)</b></td>
                        <td>Jordan Walke</td>
                    </tr>
                    <tr>
                        <td><b>Developer(s)</b></td>
                        <td>Meta and community</td>
                    </tr>
                    <tr>
                        <td><b>Initial Release</b></td>
                        <td>May 29, 2023</td>
                    </tr>
                    <tr>
                        <td><b>Stable Release</b></td>
                        <td>18.2.0 / 14 June 2022</td>
                    </tr>
                    <tr>
                        <td><b>Repository</b></td>
                        <td><a href="github.com/facebook/react">github.com/facebook/react</a></td>
                    </tr>
                    <tr>
                        <td><b>Written in</b></td>
                        <td>JavaScript</td>
                    </tr>
                    <tr>
                        <td><b>Platform</b></td>
                        <td>Web platform</td>
                    </tr>
                    <tr>
                        <td><b>Type</b></td>
                        <td>JavaScript library</td>
                    </tr>
                    <tr>
                        <td><b>License</b></td>
                        <td>MIT License</td>
                    </tr>
                    <tr>
                        <td><b>Website</b></td>
                        <td><a href="react.dev">react.dev</a></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

ReactDOM.render(
    <MainContent/>,
    document.getElementById("root")
)
