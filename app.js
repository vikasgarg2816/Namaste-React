/**
    <div id = "parent">
        <div id = "child">
            <h1> Hey I am in child div </h1>
            <h2> Hey I am sibling of h1 </h2>
        </div>
          <div id = "child 2">
            <h1> Hey I am in child div </h1>
            <h2> Hey I am sibling of h1 </h2>
        </div>
    </div>
 */
const heading = React.createElement(
    "div",
    {"id":"parent"} , 
    [React.createElement(
        'div', 
        {"id":"child"},
        [React.createElement(
            "h1",
            {},
            "Hey I am in child div"
        ),
        React.createElement(
            "h2",
            {'id':"abc"},
            "Hey I am sibling of h1"
        )]
    ),
    React.createElement(
        'div', 
        {"id":"child2"},
        [React.createElement(
            "h1",
            {},
            "Hey I am in child div"
        ),
        React.createElement(
            "h2",
            {},
            "Hey I am sibling of h1"
        )]
    )]
);

const Root = ReactDOM.createRoot(document.getElementById('root'));

Root.render(heading);