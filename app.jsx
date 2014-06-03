/** @jsx React.DOM */

var appComponent = React.createClass({
	render: function() {
		return (
			<div>
			<personListComponent personList={this.props.model} />
			<addPersonComponent model={this.props.model}/>
			</div>
			);
	}
});

var addPersonComponent = React.createClass({
	buttonAddClicked : function(){
		this.props.model.addPerson({name:this.refs.personNameInput.getDOMNode().value});
		this.refs.personNameInput.getDOMNode().value = "";
		return false;
	},
	render: function() {
		return <div>
		<label>Name</label>
		<input ref="personNameInput" type="text"  placeholder="Name" />
		<button onClick={this.buttonAddClicked} className="btn">Add</button>
		</div>

	}
});

var personItemComponent = React.createClass({
	buttonRemoveClicked : function(){
		this.props.onRemove();
	},
	render:function(){
		return <div className="alert alert-info">
			{this.props.person.name}
			<button className="btn pull-right" onClick={this.buttonRemoveClicked} >Remove</button>
		</div>
	}
});

var personListComponent = React.createClass({
	removeCallback : function(id){
		this.props.personList.removePerson(id);
	},
	render: function() {
		return <div>
		{
			this.props.personList.getPersonList().map(function(p) {
				return <personItemComponent key={p.id} person={p} onRemove={this.removeCallback.bind(this,p.id)}/>
			},this)
		}
		</div>

	}
});

function render(){

	React.renderComponent(
		<appComponent model={model}/>,
		document.getElementById('mainDiv')
		);	
}


var model = new personModel(render);
var nico = {name:'nico',id:0};
var marie = {name:'marie',id:1};

model.addPerson(nico);
model.addPerson(marie);

render();
