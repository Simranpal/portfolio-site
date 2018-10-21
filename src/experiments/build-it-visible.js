class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility : false,
      myText     : 'Some random text here. Alternatively you can disable ESLint for the workspace folder REACTAPP by executing the  command '
    };
  } 
  handleToggleVisibility(){
    this.setState((prevState) => {
      return {
        visibility : !prevState.visibility,
      }
    });
  }

  render(){
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick = { this.handleToggleVisibility}>
        {this.state.visibility ? 'Hide details':'Show details' }
        </button>
        <p>{this.state.visibility && this.state.myText}</p>
    </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle/>,document.getElementById('app'));

//jsx version
/* let visibility = false;

const myText = (
<div>
  <p>Some random text here. Alternatively you can disable ESLint for the workspace folder REACTAPP by executing the 'Disable ESLint' command.</p>
</div>
);
const handleToggleVisibility = () => {
  visibility = !visibility;
 
  renderApp();
};

const renderApp = () => {

  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick = { handleToggleVisibility}>
      {visibility ? 'Hide details':'Show details' }
      </button>
      {visibility && myText}
    </div>
  )
  ReactDOM.render(template,appRoot);
};
const appRoot  = document.getElementById('app');


renderApp(); */