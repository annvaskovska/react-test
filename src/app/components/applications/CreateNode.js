import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';

//import {Link} from 'react-router-dom';

class CreateNode extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      newNodeName: ''
    };
    this.onChange = this.onChange.bind(this);
    this.save = this.save.bind(this);
  }

  onChange(event) {
    this.setState({
      newNodeName: event.target.value
    });
  }

  save(event) {
    event.preventDefault();
    this.props.onSave(this.state.newNodeName);
    this.props.history.goBack();
  }

  cancel(event) {
    event.preventDefault();
    this.props.history.goBack();
  }

  render() {
    return (
      <form>
        <div>
          <p>{`You are creating ${this.props.nodeType} for ${this.props.nodeInfo.name}`}</p>
          <TextInput
            name="nodeName"
            title="Name"
            label="Name"
            value={this.state.newNodeName}
            onChange={this.onChange}
          />
        </div>

        <button className="btn btn-sm btn-success" onClick={this.save}>Save</button>
        <button className="btn btn-sm btn-warning" onClick={this.cancel}>Cancel</button>
      </form>
    );
  }
}


CreateNode.propTypes = {
  history: PropTypes.object,
  nodeInfo: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  nodeType: PropTypes.string.isRequired
};

export default CreateNode;
