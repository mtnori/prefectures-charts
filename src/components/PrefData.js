import React, { Component } from 'react';

import PrefCheckboxes from './PrefCheckboxes';
import PrefCharts from './PrefCharts';
import styles from '../../styles/style.css';

class PrefData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkboxes: [],
      series: []
    };
  }

  componentDidMount() {
    const fetchData = async () => {
      const URL = 'https://opendata.resas-portal.go.jp/api/v1/prefectures';
      const res = await fetch(URL, {
        headers: {
          'X-API-KEY': process.env.API_TOKEN
        }
      });
      const data = await res.json();

      const initialCheckboxes = data.result.map(pref => ({
        label: pref.prefName,
        value: pref.prefCode,
        checked: false
      }));

      this.setState({
        checkboxes: initialCheckboxes
      });
    };
    fetchData();
  }

  toggleCheckbox = index => () => {
    const { checkboxes, series } = this.state;
    const newCheckboxes = checkboxes.slice();
    newCheckboxes[index].checked = !newCheckboxes[index].checked;

    const fetchData = async checkbox => {
      const URL = `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${checkbox.value}`;
      const res = await fetch(URL, {
        headers: {
          'X-API-KEY': process.env.API_TOKEN
        }
      });
      const data = await res.json();
      this.setState({
        checkboxes: newCheckboxes,
        series: series.concat({
          name: checkbox.label,
          data: data.result.data.find(v => v.label === '総人口').data
        })
      });
    };

    if (newCheckboxes[index].checked) {
      fetchData(newCheckboxes[index]);
    } else {
      this.setState({
        checkboxes: newCheckboxes,
        series: series.filter(s => s.name !== checkboxes[index].label)
      });
    }
  };

  render() {
    const { checkboxes, series } = this.state;
    return (
      <div>
        <div className={styles.prefectures}>
          <PrefCheckboxes
            checkboxes={checkboxes}
            toggleCheckbox={this.toggleCheckbox}
          />
        </div>
        {series.length > 0 && <PrefCharts series={series} />}
      </div>
    );
  }
}

export default PrefData;
