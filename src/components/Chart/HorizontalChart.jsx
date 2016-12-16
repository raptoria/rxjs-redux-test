import React, {Component} from 'react';
import ChartistGraph from 'react-chartist';
//import styles from './chartist.css'; //how you would load with CSS modules
import '!style!css!./chartist.css'; //use Global CSS since this is a third party component

export default class HorizontalChart extends Component {

  static propTypes = {
    data: React.PropTypes.object,
  }

  render() {

    let { data } = this.props;
    let options = {
      seriesBarDistance: 10,
      reverseData: true,
      high:20,
      low:0,
      horizontalBars: true,
      axisX: {
        labelInterpolationFnc: function(value, index) {
          return index % 2 === 0 ? value : null;
        }
      },
      axisY: {
        offset: 70
      }
    };
    let type = 'Bar';

    return (
      <div> 
      <ChartistGraph data={data} options={options} type={type} />
      </div>
    )
  }
}