/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint no-unused-vars:0 */
import 'babel-polyfill';
import React from 'react';
import PropTypes from 'prop-types';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ReactHtmlParser from 'react-html-parser';
import VariableManager from '../VariableManager';
import Icon from '../../../src/components/Icon';
import Button from '../../../src/components/Button';
import Input from '../../../src/components/Input';
import Row from '../../../src/components/Row';
import Column from '../../../src/components/Column';
import * as scope from '../../../src/components/index';
import './style.css';

const tabs = [
  { key: 'code', icon: 'code', title: 'Code' },
  { key: 'css', icon: 'css3', title: 'CSS variables' },
  { key: 'props', icon: 'sliders', title: 'Props' }
];

class PropsManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textCode: props.children,
      external: true,
      active: props.active,
      scopied: false,
      initialpropsDescription: null,
      propsDescription: null
    };
    this.handleCodeChange = this.handleCodeChange.bind(this);
    this.handleActive = this.handleActive.bind(this);
    this.showOrHideCodeAndIcon = this.showOrHideCodeAndIcon.bind(this);
    this.showCopyButton = this.showCopyButton.bind(this);
    this.copyToClipboard = this.copyToClipboard.bind(this);
    this.filterList = this.filterList.bind(this);
    this.renderTableDocs = this.renderTableDocs.bind(this);
  }

  componentDidMount() {
    const { propsDescription } = this.props;
    this.setState({ propsDescription, initialpropsDescription: propsDescription });
  }

  handleCodeChange(textCode) {
    this.setState({
      textCode,
      external: false,
      scopied: false
    });
  }

  handleActive(activeTab) {
    const { active } = this.state;
    if (active.indexOf(activeTab) !== -1) active.splice(active.indexOf(activeTab), 1);
    else active.push(activeTab);
    this.setState({ active });
  }

  copyToClipboard() {
    this.setState({ scopied: true });
  }

  showCopyButton() {
    const { textCode, scopied } = this.state;
    return (
      <div className="text-white d-inline">
        <span className="playgroundHeader__icon">
          <CopyToClipboard text={textCode} onCopy={this.copyToClipboard}>
            <span className="font-weight-light fs-10 text-uppercase" onClick={this.copyToClipboard}>
              <span>{scopied ? 'Copied' : 'Copy Code'}</span>
              <Icon
                title="Copy code"
                icon="fa fa-clone"
                className="p-2 playgroundHeader__icon fs-12"
                role="link"
              />
            </span>
          </CopyToClipboard>
        </span>
      </div>
    );
  }

  showOrHideCodeAndIcon(tab, active) {
    return (
      <div className="text-white d-inline">
        <span className="playgroundHeader__icon">
          <span
            className="font-weight-light fs-10 text-uppercase"
            onClick={() => this.handleActive(tab.key)}
          >
            <span>
              {active.indexOf(tab.key) !== -1 ? 'HIDE' : tab.key === 'props' ? '' : 'EDIT'}{' '}
              {tab.title}
            </span>
            <Icon
              key={tab.key}
              title={tab.title}
              icon={`fa fa-${tab.icon}`}
              className="p-2 playgroundHeader__icon fs-12"
            />
          </span>
        </span>
      </div>
    );
  }

  filterList({ value }) {
    const { initialpropsDescription } = this.state;
    const propsDesc = {};
    Object.keys(initialpropsDescription).filter(item => {
      if (item.toLowerCase().search(value.toLowerCase()) !== -1) {
        propsDesc[item] = initialpropsDescription[item];
      }
    });
    this.setState({ propsDescription: propsDesc });
  }

  renderTableDocs() {
    const { propsDescription, active } = this.state;
    return (
      <React.Fragment>
        <div className="filter-list">
          <Input
            icon="fa fa-search"
            size="sm"
            placeholder="Filter props"
            onChange={this.filterList}
          />
        </div>
        <div className="table-props">
          <table
            className={`table table-striped table-fixed m-0 table-sm ${
              active.indexOf('readme') === -1 ? 'playgroundProperties--rounded' : ''
              }`}
          >
            <thead>
              <tr>
                <th scope="row">Name</th>
                <th scope="col">Type</th>
                <th scope="col">Summary</th>
                <th scope="col">Default</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(propsDescription).map(prop => (
                <tr key={prop}>
                  <td>
                    <span className="propName">{prop}</span>
                  </td>
                  <td>
                    {' '}
                    <span className="propType">{propsDescription[prop].type.name}</span>
                  </td>
                  <td>{ReactHtmlParser(propsDescription[prop].description)}</td>
                  <td>
                    <code>
                      {propsDescription[prop].defaultValue
                        ? propsDescription[prop].defaultValue.value
                        : ReactHtmlParser('<span class="text-required">* required </span>')}
                    </code>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }

  render() {
    const { external, expandedCode, textCode, active } = this.state;
    const { readme, cssVariables, columnSize, propsDescription, columnAlign } = this.props;
    return (
      <LiveProvider code={textCode} scope={{ ...scope, React }}>
        <Row>
          <Column>
            <div className="border-preview">
              <Column className={`${columnSize} column-align-${columnAlign}`}>
                <LivePreview />
              </Column>
            </div>
          </Column>
          <Column className="col-12 mt--4p">
            <div
              className={`text-right playgroundHeader ${
                active.indexOf('code') === -1 &&
                  active.indexOf('css') === -1 &&
                  active.indexOf('props') === -1
                  ? `rounded`
                  : 'rounded-top'
                }`}
            >
              {tabs.map(
                tab =>
                  tab.key === 'code' ||
                    (tab.key === 'props' && propsDescription) ||
                    (tab.key === 'css' && cssVariables.length) ||
                    (tab.key === 'readme' && readme) ? (
                      <React.Fragment key={tab.key}>
                        {this.showOrHideCodeAndIcon(tab, active)}
                      </React.Fragment>
                    ) : null
              )}
              {this.showCopyButton()}
            </div>
            {active.indexOf('code') !== -1 && (
              <div
                className={
                  active.indexOf('css') === -1 &&
                    active.indexOf('props') === -1 &&
                    active.indexOf('readme') === -1
                    ? `playgroundEditor--rounded`
                    : ''
                }
              >
                <LiveEditor style={null} onChange={this.handleCodeChange} />
                <LiveError />
              </div>
            )}
            {active.indexOf('css') !== -1 && (
              <div
                className={`playgroundVariables ${
                  active.indexOf('props') === -1 && active.indexOf('readme') === -1
                    ? `playgroundVariables--rounded`
                    : ''
                  }`}
              >
                <VariableManager variables={cssVariables} />
              </div>
            )}
            {active.indexOf('props') !== -1 && (
              <div className="playgroundProperties p-0">{this.renderTableDocs()}</div>
            )}
          </Column>
        </Row>
      </LiveProvider>
    );
  }
}

PropsManager.propTypes = {
  children: PropTypes.string.isRequired,
  readme: PropTypes.string,
  cssVariables: PropTypes.arrayOf(PropTypes.string),
  propsDescription: PropTypes.objectOf(PropTypes.any),
  columnSize: PropTypes.string,
  columnAlign: PropTypes.string,
  active: PropTypes.arrayOf(PropTypes.string)
};

PropsManager.defaultProps = {
  readme: '',
  cssVariables: [],
  propsDescription: null,
  columnSize: 'col-12',
  columnAlign: 'left',
  active: ['code']
};

export default PropsManager;
