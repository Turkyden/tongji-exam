import React, { Component } from 'react';
import logo from './logo.svg';
import GBK from 'gbk.js';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      url: 'http://aqjy.tongji.edu.cn/exam/studenttest/studentTestAction!gotoSearchTheme.do',
      knowid: '453731',
      searchword: '电'
    }
  };
  handleChange(e) {
    this.setState({ knowid: e.target.value }); // 将外面的绑到组件内部
  };
  handleSearch(e) {
    this.setState({ searchword: e.target.value }); // 将外面的绑到组件内部
  };
  renderURL(knowid) {
    let url = `${this.state.url}?knowid=${knowid}&deptId=0&searchword=${this.state.searchword}&themelx=0&TimeStemp=0.17667615422665484`;
    return GBK.URI.encodeURI(url);
  };
  renderCurrentURL() {
    let url = `${this.state.url}?knowid=${this.state.knowid}&deptId=0&searchword=${this.state.searchword}&themelx=0&TimeStemp=0.17667615422665484`;
    return GBK.URI.encodeURI(url);
  };
  render() {
    const knowidArr = [
      { id: 2, name: '实验室安全', value: '453699' },
      { id: 3, name: '新生安全', value: '453731' },
      { id: 8, name: '用电安全', value: '453691' },
      { id: 5, name: '治安防范', value: '455595' },
      { id: 6, name: '消防安全', value: '453694' },
      { id: 4, name: '机械类', value: '454681' },
      { id: 7, name: '生物医学', value: '453737' },
      { id: 9, name: '辐射防护', value: '453739' },
      { id: 0, name: '化学危险品', value: '453697' },
      { id: 1, name: '土木工程', value: '455335' },
    ]
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <select name="knowid" id="knowid" value={this.state.knowid} onChange={e => this.handleChange(e)}>
          {
            knowidArr.map(item => {
              return <option key={item.id} value={item.value}>{item.name}</option>
            })
          }
        </select>
        <br/>
        <input name="search" value={this.state.searchword} onChange={e => this.handleSearch(e)}/>
        <table>
          <tbody>
            {
              knowidArr.map(item => {
                return <tr><td>{item.name}</td><td><a href={this.renderURL(item.value)}>{this.renderURL(item.value)}</a></td></tr>
              })
            }
          </tbody>
        </table>
        <p className="App-intro">
          <a href={this.renderCurrentURL()}>
            {this.renderCurrentURL()}
          </a>
        </p>
      </div>
    );
  }
}

export default App;
