const parent = React.createElement(
    "div",
    {id:"parent"},
    [
        React.createElement(
            "div",{id:"child1"},
            [
                React.createElement("h1",{id:"heading11"},"Child1 - heading 1"),
                React.createElement("h2",{id:"child12"},"Child1 - heading 2")
            ]
        ),
        React.createElement(
            "div",{id:"child2"},
            [
                React.createElement("h1",{id:"heading21"},"Child2 - heading 1"),
                React.createElement("h2",{id:"heading22"},"Child2 - heading 2")
            ]
        )
    ]
)
//const heading = React.createElement("h1",{id:"heading"},"Hello, Namaste React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);