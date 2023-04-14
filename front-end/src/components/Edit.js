import React , {Component} from 'react';
class Edit extends Component {

render(){

let elem;
try {

    elem = this.props.location.state.elem;

}
catch (e) {
    elem = undefined;

}
console.log (elem)
return <div>Edit</div>


}

}
export {Edit};