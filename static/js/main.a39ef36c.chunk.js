(this["webpackJsonpnba-trivia"]=this["webpackJsonpnba-trivia"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var s=a(0),r=a(2),n=a.n(r),i=a(4),o=a.n(i),l=(a(14),a(15),a(5)),d=a(6),h=a(1),c=a(8),m=a(7),b=a.p+"static/media/heart2.6ca1547b.png",u=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).getQuestion=function(){var t=Math.floor(30*Math.random())+1,a=Math.floor(3*Math.random()),s=!0;do{for(s=!0,r=0;r<e.state.pastQuestions.length;r++)if(e.state.pastQuestions[r].team===t&&e.state.pastQuestions[r].stat===a){t=Math.floor(30*Math.random())+1,a=Math.floor(3*Math.random()),s=!1;break}}while(!s);var r,n={name:"",data:0},i={name:"",data:0},o={name:"",data:0},l={name:"",data:0},d=[];fetch("https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/"+t+"/roster").then((function(e){return e.json()})).then((function(t){for(e.setState({data:t.athletes}),r=0;r<t.athletes.length;r++)0!==t.athletes[r].experience.years&&fetch("https://site.web.api.espn.com/apis/common/v3/sports/basketball/nba/athletes/"+t.athletes[r].id).then((function(e){return e.json()})).then((function(e){d.push(e)}))})).then((function(){console.log(d),e.setState({data:d}),setTimeout((function(){for(r=0;r<d.length;r++)"2020-21 season stats"===d[r].athlete.statsSummary.displayName&&(d[r].athlete.statsSummary.statistics[a].value>=n.data?(l={name:o.name,data:o.data},o={name:i.name,data:i.data},i={name:n.name,data:n.data},n={name:d[r].athlete.displayName,data:d[r].athlete.statsSummary.statistics[a].value}):d[r].athlete.statsSummary.statistics[a].value>=i.data?(l={name:o.name,data:o.data},o={name:i.name,data:i.data},i={name:d[r].athlete.displayName,data:d[r].athlete.statsSummary.statistics[a].value}):d[r].athlete.statsSummary.statistics[a].value>=o.data?(l={name:o.name,data:o.data},o={name:d[r].athlete.displayName,data:d[r].athlete.statsSummary.statistics[a].value}):d[r].athlete.statsSummary.statistics[a].value>=l.data&&(l={name:d[r].athlete.displayName,data:d[r].athlete.statsSummary.statistics[a].value}));e.setState({question:{question:"Who leads "+e.state.teamCode[t-1]+" in "+e.state.statsCode[a]+"?",correctAnswer:n.name,wrongAnswer1:i.name,wrongAnswer2:o.name,wrongAnswer3:l.name}});for(var s,h,c=[e.state.question.correctAnswer,e.state.question.wrongAnswer1,e.state.question.wrongAnswer2,e.state.question.wrongAnswer3],m=c.length;m>0;)h=Math.floor(Math.random()*m),s=c[--m],c[m]=c[h],c[h]=s;e.setState({randomAnswers:c}),e.setState({seconds:2e3}),e.setState({notClicked:!0});var b=e.state.pastQuestions.concat({team:t,stat:a});e.setState({pastQuestions:b})}),1e3),console.log(e.state.pastQuestions)}))},e.state={lives:3,questionNum:1,totalScore:0,question:{question:"loading...",correctAnswer:"loading...",correctAnswerData:0,wrongAnswer1:"loading...",wrongAnswer1Data:0,wrongAnswer2:"loading...",wrongAnswer2Data:0,wrongAnswer3:"loading...",wrongAnswer3Data:0},currentQuestionId:0,notClicked:!0,randomAnswers:[],seconds:2e3,gameOver:!1,gameStarted:!1,name:"",leaderboard:[{name:"loading...",score:"n/a"},{name:"loading...",score:"n/a"},{name:"loading...",score:"n/a"},{name:"loading...",score:"n/a"},{name:"loading...",score:"n/a"},{name:"loading...",score:"n/a"},{name:"loading...",score:"n/a"},{name:"loading...",score:"n/a"},{name:"loading...",score:"n/a"},{name:"loading...",score:"n/a"}],teamCode:["Atlanta Hawks","Boston Celtics","New Orleans Pelicans","Chicago Bulls","Cleveland Cavaliers","Dallas Mavericks","Denver Nuggets","Detroit Pistons","Golden State Warriors","Houston Rockets","Indiana Pacers","Los Angeles Clippers","Los Angeles Lakers","Miami Heat","Milwaukee Bucks","Minnesota Timberwolves","Brooklyn Nets","New York Knicks","Orlando  Magic","Philadelphia 76ers","Phoenix Suns","Portland Trail Blazers","Sacramento Kings","San Antonio Spurs","Oklahoma City Thunder","Utah Jazz","Washington Wizards","Toronto Raptors","Memphis Grizzlies","Charlotte Hornets"],statsCode:["points per game","rebounds per game","assists per game"],data:[{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."}],loadedQuestion:[],loadedRandomAnswers:[],pastQuestions:[]},e.getQuestion=e.getQuestion.bind(Object(h.a)(e)),e.handleClick=e.handleClick.bind(Object(h.a)(e)),e.handleStart=e.handleStart.bind(Object(h.a)(e)),e.handleNameChange=e.handleNameChange.bind(Object(h.a)(e)),e.handleEndGame=e.handleEndGame.bind(Object(h.a)(e)),e.handleNewGame=e.handleNewGame.bind(Object(h.a)(e)),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getQuestion()}},{key:"pipi",value:function(){var e,t=this,a=Math.floor(30*Math.random())+1,s=(Math.floor(3*Math.random()),[1]);fetch("https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/"+a+"/roster").then((function(e){return e.json()})).then((function(a){for(t.setState({data:a.athletes}),e=0;e<t.state.data.length-1;e++)0!==t.state.data[e].experience.years&&fetch("https://site.web.api.espn.com/apis/common/v3/sports/basketball/nba/athletes/"+t.state.data[e].id+"/splits").then((function(e){return e.json()})).then((function(a){s.push({name:t.state.data[e].fullName,data:a.splitCategories[0].splits[0].stats[16]})}))})),console.log(s)}},{key:"handleNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"enterPressed",value:function(e){13===(e.keyCode||e.which)&&this.handleStart()}},{key:"handleStart",value:function(){var e=this;this.state.name.length>0&&(this.setState({gameStarted:!0}),this.setState({seconds:2e3}),clearInterval(this.myInterval),this.myInterval=setInterval((function(){e.state.seconds>-150&&e.setState((function(e){return{seconds:e.seconds-1}})),0===e.state.seconds&&e.handleTimesUp()}),10))}},{key:"handleClick",value:function(e){var t=this;clearInterval(this.myInterval),e.target.textContent.substring(3).trim()===this.state.question.correctAnswer.trim()?(e.target.style.backgroundColor="#79ff4d",this.setState((function(e){return{totalScore:e.totalScore+Math.floor(t.state.seconds/20)}}))):(e.target.style.backgroundColor="#ff4000",this.setState((function(e){return{lives:e.lives-1}}))),this.setState({notClicked:!1}),setTimeout((function(){0===t.state.lives||t.state.questionNum===t.state.teamCode*t.state.statsCode?t.handleEndGame():t.nextQuestion()}),1500)}},{key:"handleTimesUp",value:function(){var e=this;clearInterval(this.myInterval),this.setState((function(e){return{lives:e.lives-1}})),setTimeout((function(){0===e.state.lives||e.state.questionNum===e.state.teamCode*e.state.statsCode?e.handleEndGame():e.nextQuestion()}),3e3)}},{key:"nextQuestion",value:function(){var e=this;this.getQuestion(),setTimeout((function(){e.setState((function(e){return{questionNum:e.questionNum+1}})),e.setState((function(e){return{currentQuestionId:e.currentQuestionId+1}})),e.myInterval=setInterval((function(){e.state.seconds>-150&&e.setState((function(e){return{seconds:e.seconds-1}})),-150===e.state.seconds&&e.handleTimesUp()}),10)}),1e3)}},{key:"handleEndGame",value:function(){var e=this;this.setState({question:null,gameOver:!0}),fetch("https://tlmy7kec05.execute-api.us-east-2.amazonaws.com/Prod/nbaleaderboard").then((function(e){return e.json()})).then((function(t){t.length>9&&t[9].score>e.state.totalScore?e.setState({leaderboard:t}):(fetch("https://tlmy7kec05.execute-api.us-east-2.amazonaws.com/Prod/addnbascore?name=".concat(e.state.name.toUpperCase().trim(),"&score=").concat(e.state.totalScore)),setTimeout((function(){fetch("https://tlmy7kec05.execute-api.us-east-2.amazonaws.com/Prod/nbaleaderboard").then((function(e){return e.json()})).then((function(t){return e.setState({leaderboard:t})})),fetch("https://tlmy7kec05.execute-api.us-east-2.amazonaws.com/Prod/deletenbascore")}),1e3))}))}},{key:"handleNewGame",value:function(){this.setState({lives:3,questionNum:1,totalScore:0,question:{question:"loading...",correctAnswer:"loading...",wrongAnswer1:"loading...",wrongAnswer2:"loading...",wrongAnswer3:"loading..."},currentQuestionId:0,notClicked:!0,randomAnswers:[],seconds:2e3,gameOver:!1,gameStarted:!1,name:"",leaderboard:[{name:"loading...",score:"n/a"},{name:"loading...",score:"n/a"},{name:"loading...",score:"n/a"},{name:"loading...",score:"n/a"},{name:"loading...",score:"n/a"},{name:"loading...",score:"n/a"},{name:"loading...",score:"n/a"},{name:"loading...",score:"n/a"},{name:"loading...",score:"n/a"},{name:"loading...",score:"n/a"}]}),this.getQuestion()}},{key:"displayLives",value:function(){var e;for(e=0;e<this.state.lives;e++)return Object(s.jsx)("div",{style:{display:"inline-block"},children:Object(s.jsx)("img",{src:b,width:"40px",alt:"error"})})}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"game",children:[Object(s.jsxs)("div",{style:{display:this.state.gameStarted?"none":"block"},children:[Object(s.jsx)("h1",{className:"headline-njit",children:"NBA"}),Object(s.jsx)("h1",{className:"headline-snd",children:"Statistics"}),Object(s.jsx)("h1",{className:"headline",children:"Trivia Game"}),Object(s.jsx)("input",{className:"name-input",type:"text",minLength:"1",maxLength:"10",placeholder:"Enter your name",value:this.state.name,onChange:this.handleNameChange,onSubmit:this.handleStart,onKeyPress:this.enterPressed.bind(this),style:{width:200,margin:"1rem auto",fontWeight:"bold"}}),Object(s.jsx)("div",{className:"start-button",onClick:this.handleStart,children:"start!"})]}),Object(s.jsxs)("div",{style:{display:this.state.question&&this.state.gameStarted?"block":"none"},children:[Object(s.jsx)("table",{style:{display:this.state.question&&this.state.gameStarted?"block":"none"},className:"table-bar",children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"td-bar",children:this.state.totalScore}),Object(s.jsxs)("td",{className:"td-bar",children:["Question ",this.state.questionNum]}),Object(s.jsx)("td",{className:"td-bar",children:this.state.seconds>0?1+(this.state.seconds/100|0):"Time's up!"}),Object(s.jsx)("td",{className:"td-bar",children:Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{style:{display:this.state.lives>0?"inline-block":"none"},children:Object(s.jsx)("img",{src:b,width:"25rem",alt:"error"})}),Object(s.jsx)("div",{style:{display:this.state.lives>1?"inline-block":"none"},children:Object(s.jsx)("img",{src:b,width:"25rem",alt:"error"})}),Object(s.jsx)("div",{style:{display:this.state.lives>2?"inline-block":"none"},children:Object(s.jsx)("img",{src:b,width:(window.innerWidth,"25rem"),alt:"error"})})]})})]})}),Object(s.jsx)("br",{style:{display:this.state.question&&this.state.seconds>-150?"block":"none"}}),Object(s.jsx)("div",{className:"question",style:{display:this.state.question&&this.state.seconds>-150?"block":"none"},children:this.state.question&&this.state.question.question}),Object(s.jsx)("br",{style:{display:this.state.question&&this.state.seconds>-150?"block":"none"}}),Object(s.jsxs)("div",{className:"div-answer",onClick:this.state.notClicked&&this.state.seconds>0&&this.handleClick,style:{display:this.state.question&&this.state.seconds>-150?"block":"none",backgroundColor:2e3===this.state.seconds&&""},children:[" A: ",this.state.question&&this.state.randomAnswers[0]]}),Object(s.jsx)("br",{style:{display:this.state.question&&this.state.seconds>-150?"block":"none"}}),Object(s.jsxs)("div",{className:"div-answer",onClick:this.state.notClicked&&this.state.seconds>0&&this.handleClick,style:{display:this.state.question&&this.state.seconds>-150?"block":"none",backgroundColor:2e3===this.state.seconds&&""},children:["B: ",this.state.question&&this.state.randomAnswers[1]]}),Object(s.jsx)("br",{style:{display:this.state.question&&this.state.seconds>-150?"block":"none"}}),Object(s.jsxs)("div",{className:"div-answer",onClick:this.state.notClicked&&this.state.seconds>0&&this.handleClick,style:{display:this.state.question&&this.state.seconds>-150?"block":"none",backgroundColor:2e3===this.state.seconds&&""},children:["C: ",this.state.question&&this.state.randomAnswers[2]]}),Object(s.jsx)("br",{style:{display:this.state.question&&this.state.seconds>-150?"block":"none"}}),Object(s.jsxs)("div",{className:"div-answer",onClick:this.state.notClicked&&this.state.seconds>0&&this.handleClick,style:{display:this.state.question&&this.state.seconds>-150?"block":"none",backgroundColor:2e3===this.state.seconds&&""},children:["D: ",this.state.question&&this.state.randomAnswers[3]]}),Object(s.jsx)("br",{style:{display:this.state.question&&this.state.seconds>-150?"block":"none"}})]}),Object(s.jsxs)("div",{style:{display:this.state.gameOver&&this.state.gameStarted&&!this.state.question?"block":"none"},children:[Object(s.jsxs)("h1",{className:"final-score",style:{display:this.state.gameOver?"block":"none"},children:["Final Score: ",this.state.totalScore]}),Object(s.jsx)("h1",{className:"leaderboard-headline",children:"Top 10 leaderboard"}),Object(s.jsxs)("table",{className:"leaderboard-table",style:{display:this.state.leaderboard?"block":"none",backgroundColor:"#e6e6e6",width:"19rem",margin:"1rem auto",border:"1px solid black",borderRadius:25,padding:"1rem"},children:[Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{style:{width:"2rem"},children:"#"}),Object(s.jsx)("td",{style:{width:"10rem"},children:"name"}),Object(s.jsx)("td",{style:{width:"5rem"},children:"score"})]}),Object(s.jsxs)("tr",{style:{display:this.state.leaderboard.length>0?"block":"none"},children:[Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>0&&this.state.name.toUpperCase().trim()===this.state.leaderboard[0].name.toUpperCase().trim()&&"red",width:"2rem"},children:"1"}),Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>0&&this.state.name.toUpperCase().trim()===this.state.leaderboard[0].name.toUpperCase().trim()&&"red",width:"10rem"},children:this.state.leaderboard.length>0&&this.state.leaderboard[0].name}),Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>0&&this.state.name.toUpperCase().trim()===this.state.leaderboard[0].name.toUpperCase().trim()&&"red",width:"5rem"},children:this.state.leaderboard.length>0&&this.state.leaderboard[0].score})]}),Object(s.jsxs)("tr",{style:{display:this.state.leaderboard.length>1?"block":"none"},children:[Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>1&&this.state.name.toUpperCase().trim()===this.state.leaderboard[1].name.toUpperCase().trim()&&"red",width:"2rem"},children:"2"}),Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>1&&this.state.name.toUpperCase().trim()===this.state.leaderboard[1].name.toUpperCase().trim()&&"red",width:"10rem"},children:this.state.leaderboard.length>1&&this.state.leaderboard[1].name}),Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>1&&this.state.name.toUpperCase().trim()===this.state.leaderboard[1].name.toUpperCase().trim()&&"red",width:"5rem"},children:this.state.leaderboard.length>1&&this.state.leaderboard[1].score})]}),Object(s.jsxs)("tr",{style:{display:this.state.leaderboard.length>2?"block":"none"},children:[Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>2&&this.state.name.toUpperCase().trim()===this.state.leaderboard[2].name.toUpperCase().trim()&&"red",width:"2rem"},children:"3"}),Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>2&&this.state.name.toUpperCase().trim()===this.state.leaderboard[2].name.toUpperCase().trim()&&"red",width:"10rem"},children:this.state.leaderboard.length>2&&this.state.leaderboard[2].name}),Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>2&&this.state.name.toUpperCase().trim()===this.state.leaderboard[2].name.toUpperCase().trim()&&"red",width:"5rem"},children:this.state.leaderboard.length>2&&this.state.leaderboard[2].score})]}),Object(s.jsxs)("tr",{style:{display:this.state.leaderboard.length>3?"block":"none"},children:[Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>3&&this.state.name.toUpperCase().trim()===this.state.leaderboard[3].name.toUpperCase().trim()&&"red",width:"2rem"},children:"4"}),Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>3&&this.state.name.toUpperCase().trim()===this.state.leaderboard[3].name.toUpperCase().trim()&&"red",width:"10rem"},children:this.state.leaderboard.length>3&&this.state.leaderboard[3].name}),Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>3&&this.state.name.toUpperCase().trim()===this.state.leaderboard[3].name.toUpperCase().trim()&&"red",width:"5rem"},children:this.state.leaderboard.length>3&&this.state.leaderboard[3].score})]}),Object(s.jsxs)("tr",{style:{display:this.state.leaderboard.length>4?"block":"none"},children:[Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>4&&this.state.name.toUpperCase().trim()===this.state.leaderboard[4].name.toUpperCase().trim()&&"red",width:"2rem"},children:"5"}),Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>4&&this.state.name.toUpperCase().trim()===this.state.leaderboard[4].name.toUpperCase().trim()&&"red",width:"10rem"},children:this.state.leaderboard.length>4&&this.state.leaderboard[4].name}),Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>4&&this.state.name.toUpperCase().trim()===this.state.leaderboard[4].name.toUpperCase().trim()&&"red",width:"5rem"},children:this.state.leaderboard.length>4&&this.state.leaderboard[4].score})]}),Object(s.jsxs)("tr",{style:{display:this.state.leaderboard.length>5?"block":"none"},children:[Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>5&&this.state.name.toUpperCase().trim()===this.state.leaderboard[5].name.toUpperCase().trim()&&"red",width:"2rem"},children:"6"}),Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>5&&this.state.name.toUpperCase().trim()===this.state.leaderboard[5].name.toUpperCase().trim()&&"red",width:"10rem"},children:this.state.leaderboard.length>5&&this.state.leaderboard[5].name}),Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>5&&this.state.name.toUpperCase().trim()===this.state.leaderboard[5].name.toUpperCase().trim()&&"red",width:"5rem"},children:this.state.leaderboard.length>5&&this.state.leaderboard[5].score})]}),Object(s.jsxs)("tr",{style:{display:this.state.leaderboard.length>6?"block":"none"},children:[Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>6&&this.state.name.toUpperCase().trim()===this.state.leaderboard[6].name.toUpperCase().trim()&&"red",width:"2rem"},children:"7"}),Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>6&&this.state.name.toUpperCase().trim()===this.state.leaderboard[6].name.toUpperCase().trim()&&"red",width:"10rem"},children:this.state.leaderboard.length>6&&this.state.leaderboard[6].name}),Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>6&&this.state.name.toUpperCase().trim()===this.state.leaderboard[6].name.toUpperCase().trim()&&"red",width:"5rem"},children:this.state.leaderboard.length>6&&this.state.leaderboard[6].score})]}),Object(s.jsxs)("tr",{style:{display:this.state.leaderboard.length>7?"block":"none"},children:[Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>7&&this.state.name.toUpperCase().trim()===this.state.leaderboard[7].name.toUpperCase().trim()&&"red",width:"2rem"},children:"8"}),Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>7&&this.state.name.toUpperCase().trim()===this.state.leaderboard[7].name.toUpperCase().trim()&&"red",width:"10rem"},children:this.state.leaderboard.length>7&&this.state.leaderboard[7].name}),Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>7&&this.state.name.toUpperCase().trim()===this.state.leaderboard[7].name.toUpperCase().trim()&&"red",width:"5rem"},children:this.state.leaderboard.length>7&&this.state.leaderboard[7].score})]}),Object(s.jsxs)("tr",{style:{display:this.state.leaderboard.length>8?"block":"none"},children:[Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>8&&this.state.name.toUpperCase().trim()===this.state.leaderboard[8].name.toUpperCase().trim()&&"red",width:"2rem"},children:"9"}),Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>8&&this.state.name.toUpperCase().trim()===this.state.leaderboard[8].name.toUpperCase().trim()&&"red",width:"10rem"},children:this.state.leaderboard.length>8&&this.state.leaderboard[8].name}),Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>8&&this.state.name.toUpperCase().trim()===this.state.leaderboard[8].name.toUpperCase().trim()&&"red",width:"5rem"},children:this.state.leaderboard.length>8&&this.state.leaderboard[8].score})]}),Object(s.jsxs)("tr",{style:{display:this.state.leaderboard.length>9?"block":"none"},children:[Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>9&&this.state.name.toUpperCase().trim()===this.state.leaderboard[9].name.toUpperCase().trim()&&"red",width:"2rem"},children:"10"}),Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>9&&this.state.name.toUpperCase().trim()===this.state.leaderboard[9].name.toUpperCase().trim()&&"red",width:"10rem"},children:this.state.leaderboard.length>9&&this.state.leaderboard[9].name}),Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>9&&this.state.name.toUpperCase().trim()===this.state.leaderboard[9].name.toUpperCase().trim()&&"red",width:"5rem"},children:this.state.leaderboard.length>9&&this.state.leaderboard[9].score})]})]}),Object(s.jsx)("div",{className:"start-button",onClick:this.handleNewGame,children:"play agian!"})]})]})}}]),a}(n.a.Component);var p=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(u,{})})},g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,s=t.getFID,r=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),s(e),r(e),n(e),i(e)}))};o.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(p,{})}),document.getElementById("root")),g()}},[[16,1,2]]]);
//# sourceMappingURL=main.a39ef36c.chunk.js.map