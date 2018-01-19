import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SelectInput from '../common/SelectInput';
import * as dictionaryActions from '../../../redux/actions/dictionariesActions';

class BucketSettings extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.props.actions.loadFrequencyDictionary();

    this.state = {
      nodeInfo: Object.assign({}, this.props.nodeInfo),
      nodeInfoCopy: Object.assign({}, this.props.nodeInfo)
    };

    this.onChange = this.onChange.bind(this);
    this.save = this.save.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  save(event) {
    event.preventDefault();
    this.props.onSave(this.state.nodeInfo);
    this.props.history.goBack();
  }

  onChange(event) {
    event.preventDefault();
    const fieldId = event.target.name;
    let nodeInfo = this.state.nodeInfo;
    nodeInfo[fieldId] = event.target.value;
    return this.setState({nodeInfo});
  }

  cancel(event) {
    event.preventDefault();
    this.setState({
      nodeInfo: this.state.nodeInfoCopy
    });
  }

  render() {
    return (
      <form>
        <SelectInput
          name="frequencyId"
          title="Backuo Frequency"
          label="Backuo Frequency"
          value={this.state.nodeInfo.frequencyId}
          defaultOption={this.state.nodeInfo.frequencyName}
          options={this.props.frequencyList}
          onChange={this.onChange}/>

        <button className="btn btn-sm btn-success" onClick={this.save}>Save</button>
        <button className="btn btn-sm btn-warning" onClick={this.cancel}>Cancel</button>
      </form>
    );
  }
}


BucketSettings.propTypes = {
  actions: PropTypes.object.isRequired,
  history: PropTypes.object,
  nodeInfo: PropTypes.object,
  nodeInfoCopy: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  frequencyList: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  const nodeInfo = ownProps.nodeInfo;

  if (state.dictionaries.frequencyList.length > 0) {
    nodeInfo.frequencyName = _.find(state.dictionaries.frequencyList, {id: nodeInfo.frequencyId}).name;
  }

  return {
    nodeInfo,
    frequencyList: state.dictionaries.frequencyList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(dictionaryActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BucketSettings);