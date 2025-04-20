import React from 'react'
import ReactDom from 'react-dom/client'


function MyApp() {
    return (
        <h1>Custom App</h1>
    )

}
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: "Click me to visit google"

    const anotherElement = <a href="https://google.com" target='_blank'>Visit google</a>
}

const reactElement = React.createElement(
    'a' { href: 'https://googel map', target: '_blank' },
    "click me to visit google" 
)

ReactDom.createRoot(document.getElementById('root')).
    render(
   reactElement
    )