import React from 'react';



class Index extends React.Component {
    render() {
        return (
            <div>
                <h1>Index</h1>
                <a href="/">Home</a>
                <a href="/blog">Blog</a>
                <a href="/about">About</a>
                <a href="/cv">CV</a>
                <a href="/portfolio">Portfolio</a>
            </div>
        )
    }
}

export default Index;