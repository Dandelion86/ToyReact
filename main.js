import {createElement, Component, render} from './toy-react'

class MyComponent extends Component {
    render () {
        return (<div>
            <h1>my component</h1>
            {this.children}
        </div>);
    }
}

render(<MyComponent id='a' class='c'>
    <div>asss</div>
    <div>bbb</div>
    <div>cccc</div>
</MyComponent>, document.body);