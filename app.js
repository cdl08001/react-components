// // TODO
// var Tomatoes = () => (
//   <li>
//       Tomatoes
//   </li>
// );

// var FetaCheese = () => (
//   <li>
//       FetaCheese
//   </li>
// );

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    var style = {
        textDecoration: this.state.done ? 'line-through' : 'none'
    }
    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.items}</li>
    )
  }
}

var GroceryList = (props) => (
    <ul>
      My Grocery List Items:
      {console.log('Inside Grocery List: ', props)}
      {props.items.map(item => 
        <GroceryListItem items={item}/>
      )}
    </ul>
);


ReactDOM.render(<GroceryList items={['Pickles', 'Apples', 'Eggs']} />, document.getElementById("app"));