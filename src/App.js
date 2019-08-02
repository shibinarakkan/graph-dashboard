import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import pcman from './images/pacman.jpg';
import lal from './images/lal.jpg';
import pull from './images/pull.png'

class Dashboard extends Component {
  render() {
    let tabs = [
      { label: 'Commits', icon: 'fas fa-history', bgIcon: 'fas fa-history', count: 2589 },
      { label: 'branches', icon: 'fas fa-code-branch', bgIcon: 'fas fa-code-branch', count: 34 },
      { label: 'releases', icon: 'fas fa-tag', bgIcon: 'fas fa-tag', count: 52 },
      { label: 'Contributors', icon: 'far fa-user', bgIcon: 'far fa-user', count: 136 }
    ];
    let folderList = [
      { icon: 'far fa-folder', name: 'Codio', desc: 'blah blah blah', upTime: '2 years ago' },
      { icon: 'far fa-folder', name: 'Codio', desc: 'blah blah blah', upTime: '2 years ago' },
      { icon: 'far fa-folder', name: 'Codio', desc: 'blah blah blah', upTime: '2 years ago' },
      { icon: 'far fa-folder', name: 'Codio', desc: 'blah blah blah', upTime: '2 years ago' },
      { icon: 'far fa-folder', name: 'Codio', desc: 'blah blah blah', upTime: '2 years ago' },
      { icon: 'far fa-folder', name: 'Codio', desc: 'blah blah blah', upTime: '2 years ago' },
      { icon: 'far fa-file-alt', name: 'Codio', desc: 'blah blah blah', upTime: '2 years ago' },
      { icon: 'far fa-file-alt', name: 'Codio', desc: 'blah blah blah', upTime: '2 years ago' },
      { icon: 'far fa-file-alt', name: 'Codio', desc: 'blah blah blah', upTime: '2 years ago' },
      { icon: 'far fa-file-alt', name: 'Codio', desc: 'blah blah blah', upTime: '2 years ago' },
      { icon: 'far fa-file-alt', name: 'Codio', desc: 'blah blah blah', upTime: '2 years ago' },
    ]
    return (
      <div className="container">
        <div className="sidebar">

          <div className="side-header">
            <img src={logo} ></img>
            <h4>Codio</h4>
          </div>
          <hr id="hr"></hr>

          <div className="side-nav">
            <h6>PROJECT</h6>
            <ul>
              <li><a href="#"><i className="fas fa-link"></i>Code</a></li>
              <li><a href="#"><i className="fas fa-exclamation-circle"></i>Issues</a></li>
              <li><a href="#"><i className="fab fa-git"></i>Pull Requests</a></li>
              <li><a href="#"><i className="far fa-folder"></i>Projects</a></li>
              <li><a href="#"><i className="fas fa-book-open"></i>Wiki</a></li>
              <li><a href="#"><i className="fas fa-signal"></i>Insights</a></li>
            </ul>
            <h6>CODIO HOME</h6>
            <ul>
              <li><a href="#">Features</a></li>
              <li><a href="#">Business</a></li>
              <li><a href="#">Explore</a></li>
              <li><a href="#">Marketplace</a></li>
              <li><a href="#">Pricing</a></li>
              <hr />
              <li><a href="#">signin</a></li>
              <li><a href="#">register</a></li>
              <li><a href="#">blaah</a></li>
            </ul>
          </div>

        </div>
        <div className="main-page">
          <div className="main-header">
            <img src={pcman} className="pcman"></img>
            <h5>PacEater Game</h5>
            <div className="profile">
              <div className="notification"> <a href="#"> <i className="far fa-bell"><i className="fas fa-circle"></i><span className="notinum">5</span></i> </a></div>
              <div className="pro-pic">
                <img src={lal} className="lal"></img>
              </div>
            </div>
          </div>
          <hr id="mainhr" />
          <div className="header2">
            <span >pacman Artificial Intelligence Python project for Duke's intro to AI Course</span>
            <div className="tags">
              <button className="tagbtn">game</button>
              <button className="tagbtn">python</button>
              <button className="tagbtn">game-api</button>
              <i className="fas fa-ellipsis-h"></i>
            </div>
          </div>
          <hr />
          <div className="main-content">
            <div className="master-content">
              <div className="main-tabs">
                {tabs.map((t, i) => {
                  return (
                    <div className="tab1" key={i}>
                      <a href="#">

                        <div className="icon">
                          <i id="left-i" className={t.icon}></i>
                        </div>
                        <div className="count-label">
                          <span className="head-num">{t.count}</span>
                          <span className="tab-heading">{t.label}</span>
                        </div>

                        <div className="bgIcon">
                          <i id="right-i" className={t.bgIcon}></i>
                        </div>


                      </a>
                    </div>
                  )
                })}
              </div>
              <hr />

              <div className="masterbtn">
                <div className="mbtndiv">
                  < a href="#" className="mbtn"><img src={pull}></img>Master</a>
                </div>
                <div className="downloadbtn">
                  <i id="history" className="fas fa-history"></i>
                  <span><i className="far fa-eye"></i>Watch  <span id="watchno">39</span></span>

                  <a href="#" className="download"><i className="fas fa-cloud-download-alt"></i>Clone or Download</a>
                  <a href="#" className="settings"> <i className="fas fa-cog"></i> </a>
                </div>
              </div>
              <hr />
              <div className="pull-head">
                <div className="pull-lal">
                  <img className="img-lal" src={lal}></img>
                </div>
                <span className="user-name">ShibinArakkan28</span> <span className="pull-name">Merge pull request<strong className="req-count">#43</strong> from paceeater/Master</span> <span className="commit-count">last commit 43456 </span><span className="commit-time">32 minutes ago</span>
              </div>
              <hr />
              <div className="folders">

                {folderList.map((f, i) => {
                  return (
                    <ul className="flist" key={i}>
                      <li >
                        <a href="#">
                          <i className={f.icon}></i>
                          <span className="f-name">{f.name}</span>
                          <span className="desc">{f.desc}</span>
                          <span className="upload-time">{f.upTime}</span>
                        </a>
                      </li>
                    </ul>

                  )
                })}

              </div>
            </div>
            <div className="readme-content">
              <div className="readme-head">
                <i className="fas fa-book-open"></i> <h5>README.md</h5  >
              </div>
              <div className="content-head">
                <h4>PacEater Game</h4>
                <span>pacman Artificial Intelligence Python project for Duke's intro to AI Course</span>
                <hr />
                <p> Pac-Man, a single-player arcade video game released by Namco in 1980. In the game, a yellow, circular character navigates a maze, eating pellets and fruit, avoiding ghosts and occasionally eating them. </p>

              </div>
            </div>

          </div>

        </div>
      </div>
    );
  }
}
export default Dashboard;

