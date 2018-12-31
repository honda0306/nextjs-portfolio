import React from 'react';



class About extends React.Component {
    render() {
        return (
            <div>
                <h1>About</h1>
                <a href="/">Home</a>
                <a href="/blog">Blog</a>
                <a href="/about">About</a>
                <a href="/cv">CV</a>
                <a href="/portfolio">Portfolio</a>
            </div>
        )
    }
}

export default About;