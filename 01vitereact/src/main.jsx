import React from 'react'
import ReactDom from 'react-dom/client'


function MyApp() {
    return (
        <div>
            <h1>Custom App</h1>
        </div>
    )

}
/*const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: "Click me to visit google"
}
    */

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)


const anotherUser = "Chai aur react"

const reactElement = React.createElement(
    'a',
    {
        href: "https://google.com",
        target: '_blank' 
    },
    'click me to visit google.com',
    anotherElement
)

ReactDom.createRoot(document.getElementById('root')).
    render(
       reactElement
    )