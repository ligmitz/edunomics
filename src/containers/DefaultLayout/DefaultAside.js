import React, { Component } from 'react';
import { Nav, NavItem, NavLink, Progress, TabContent, TabPane, ListGroup, ListGroupItem } from 'reactstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { AppSwitch } from '@coreui/react'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultAside extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <Nav tabs>
          <NavItem>
            <NavLink className={classNames({ active: this.state.activeTab === '1' })}
                     onClick={() => {
                       this.toggle('1');
                     }}>
              <i className="icon-list"></i>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <ListGroup className="list-group-accent" tag={'div'}>
              <ListGroupItem className="list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small">Edunomics @ Today</ListGroupItem>
              <ListGroupItem action tag="a" href="#" className="list-group-item-accent-warning list-group-item-divider">
                <div className="avatar float-right">
                  <img className="img-avatar" src="assets/img/avatars/7.jpg" alt="admin@bootstrapmaster.com"></img>
                </div>
                <div> New Course <strong>in Physics</strong> </div>
                <small className="text-muted mr-3">
                  <i className="icon-calendar"></i>&nbsp; 09/06/2020
                </small>
                <small className="text-muted">
                  <i className="icon-location-pin"></i> New Delhi
                </small>
              </ListGroupItem>
            
              <ListGroupItem className="list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small">Edunomics @ Tomorrow</ListGroupItem>
              <ListGroupItem action tag="a" href="#" className="list-group-item-accent-danger list-group-item-divider">
                <div>New UI Project - <strong>deadline</strong></div>
                <small className="text-muted mr-3"><i className="icon-calendar"></i>&nbsp; 8 a.m.</small>
                <small className="text-muted"><i className="icon-home"></i>&nbsp; Edunomics</small>
                <div className="avatars-stack mt-2">
                  <div className="avatar avatar-xs">
                    <img src={'assets/img/avatars/2.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </div>
                  <div className="avatar avatar-xs">
                    <img src={'assets/img/avatars/3.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </div>
                  <div className="avatar avatar-xs">
                    <img src={'assets/img/avatars/4.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </div>
                  <div className="avatar avatar-xs">
                    <img src={'assets/img/avatars/5.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </div>
                  <div className="avatar avatar-xs">
                    <img src={'assets/img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </div>
                </div>
              </ListGroupItem>
            </ListGroup>
          </TabPane>
        </TabContent>
      </React.Fragment>
    );
  }
}

DefaultAside.propTypes = propTypes;
DefaultAside.defaultProps = defaultProps;

export default DefaultAside;
