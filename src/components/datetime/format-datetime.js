import React from 'react';
import moment from 'moment';

function formatDateTime(Component) {
  return class extends React.Component {
    state = {
      date: ''
    }

    format(date) {
      const currentDate = moment();
      if (currentDate.diff(date, 'hours') < 1) {
        return '12 минут назад';
      }
      if (currentDate.diff(date, 'days') < 1) {
        return '5 часов назад';
      }
      return `${currentDate.diff(date, 'days')} дней назад`;
    }

    componentDidMount() {
      const date = moment(this.props.date);
      this.setState({ date: this.format(date) })
    }

    render() {
      return <Component {...this.state} />;
    }
  }
}

export default formatDateTime;