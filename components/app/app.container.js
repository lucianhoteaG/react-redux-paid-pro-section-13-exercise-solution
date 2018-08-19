import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import App from './app';

export default withRouter(connect(() => ({}))(App));