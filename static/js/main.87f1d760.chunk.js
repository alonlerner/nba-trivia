(this["webpackJsonpnba-trivia"]=this["webpackJsonpnba-trivia"]||[]).push([[0],{14:function(t,e,a){},15:function(t,e,a){},16:function(t,e,a){"use strict";a.r(e);var s=a(0),r=a(2),o=a.n(r),i=a(4),n=a.n(i),d=(a(14),a(15),a(5)),l=a(6),h=a(1),c=a(8),m=a(7),b=a.p+"static/media/heart2.6ca1547b.png",p=a.p+"static/media/nba3.497d6747.png",g=function(t){Object(c.a)(a,t);var e=Object(m.a)(a);function a(){var t;return Object(d.a)(this,a),(t=e.call(this)).getQuestion=function(){var e,a=Math.floor(30*Math.random())+1,s=Math.floor(3*Math.random()),r=!0;do{for(r=!0,o=0;o<t.state.pastQuestions.length;o++)if(t.state.pastQuestions[o].team===a&&t.state.pastQuestions[o].stat===s){a=Math.floor(30*Math.random())+1,s=Math.floor(3*Math.random()),r=!1;break}}while(!r);fetch("https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/"+a).then((function(t){return t.json()})).then((function(t){e=t.team.logos[0].href}));var o,i={name:"",data:0},n={name:"",data:0},d={name:"",data:0},l={name:"",data:0},h=[];fetch("https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/"+a+"/roster").then((function(t){return t.json()})).then((function(e){for(t.setState({data:e.athletes}),o=0;o<e.athletes.length;o++)0!==e.athletes[o].experience.years&&fetch("https://site.web.api.espn.com/apis/common/v3/sports/basketball/nba/athletes/"+e.athletes[o].id).then((function(t){return t.json()})).then((function(t){h.push(t)}))})).then((function(){console.log(h),t.setState({data:h}),setTimeout((function(){for(o=0;o<h.length;o++)"2020-21 season stats"===h[o].athlete.statsSummary.displayName&&(h[o].athlete.statsSummary.statistics[s].value>=i.data?(l={name:d.name,data:d.data},d={name:n.name,data:n.data},n={name:i.name,data:i.data},i={name:h[o].athlete.displayName,data:h[o].athlete.statsSummary.statistics[s].value}):h[o].athlete.statsSummary.statistics[s].value>=n.data?(l={name:d.name,data:d.data},d={name:n.name,data:n.data},n={name:h[o].athlete.displayName,data:h[o].athlete.statsSummary.statistics[s].value}):h[o].athlete.statsSummary.statistics[s].value>=d.data?(l={name:d.name,data:d.data},d={name:h[o].athlete.displayName,data:h[o].athlete.statsSummary.statistics[s].value}):h[o].athlete.statsSummary.statistics[s].value>=l.data&&(l={name:h[o].athlete.displayName,data:h[o].athlete.statsSummary.statistics[s].value}));t.setState({question:{question:"Who leads "+t.state.teamCode[a-1]+" in "+t.state.statsCode[s]+"?",questionImg:e,correctAnswer:i.name,wrongAnswer1:n.name,wrongAnswer2:d.name,wrongAnswer3:l.name}});for(var r,c,m=[t.state.question.correctAnswer,t.state.question.wrongAnswer1,t.state.question.wrongAnswer2,t.state.question.wrongAnswer3],b=m.length;b>0;)c=Math.floor(Math.random()*b),r=m[--b],m[b]=m[c],m[c]=r;t.setState({randomAnswers:m}),t.setState({seconds:2e3}),t.setState({notClicked:!0});var p=t.state.pastQuestions.concat({team:a,stat:s});t.setState({pastQuestions:p})}),1e3),console.log(t.state.pastQuestions)}))},t.state={lives:3,questionNum:1,totalScore:0,question:{question:"loading...",questionImg:"",correctAnswer:"loading...",correctAnswerData:0,wrongAnswer1:"loading...",wrongAnswer1Data:0,wrongAnswer2:"loading...",wrongAnswer2Data:0,wrongAnswer3:"loading...",wrongAnswer3Data:0},currentQuestionId:0,notClicked:!0,randomAnswers:[],seconds:2e3,gameOver:!1,gameStarted:!1,name:"",leaderboard:[{name:"loading...",score:"n/a"},{name:"loading...",score:"n/a"},{name:"loading...",score:"n/a"},{name:"loading...",score:"n/a"},{name:"loading...",score:"n/a"},{name:"loading...",score:"n/a"},{name:"loading...",score:"n/a"},{name:"loading...",score:"n/a"},{name:"loading...",score:"n/a"},{name:"loading...",score:"n/a"}],teamCode:["Atlanta Hawks","Boston Celtics","New Orleans Pelicans","Chicago Bulls","Cleveland Cavaliers","Dallas Mavericks","Denver Nuggets","Detroit Pistons","Golden State Warriors","Houston Rockets","Indiana Pacers","Los Angeles Clippers","Los Angeles Lakers","Miami Heat","Milwaukee Bucks","Minnesota Timberwolves","Brooklyn Nets","New York Knicks","Orlando  Magic","Philadelphia 76ers","Phoenix Suns","Portland Trail Blazers","Sacramento Kings","San Antonio Spurs","Oklahoma City Thunder","Utah Jazz","Washington Wizards","Toronto Raptors","Memphis Grizzlies","Charlotte Hornets"],statsCode:["points per game","rebounds per game","assists per game"],data:[{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."}],loadedQuestion:[],loadedRandomAnswers:[],pastQuestions:[]},t.getQuestion=t.getQuestion.bind(Object(h.a)(t)),t.handleClick=t.handleClick.bind(Object(h.a)(t)),t.handleStart=t.handleStart.bind(Object(h.a)(t)),t.handleNameChange=t.handleNameChange.bind(Object(h.a)(t)),t.handleEndGame=t.handleEndGame.bind(Object(h.a)(t)),t.handleNewGame=t.handleNewGame.bind(Object(h.a)(t)),t}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getQuestion()}},{key:"pipi",value:function(){var t,e=this,a=Math.floor(30*Math.random())+1,s=(Math.floor(3*Math.random()),[1]);fetch("https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/"+a+"/roster").then((function(t){return t.json()})).then((function(a){for(e.setState({data:a.athletes}),t=0;t<e.state.data.length-1;t++)0!==e.state.data[t].experience.years&&fetch("https://site.web.api.espn.com/apis/common/v3/sports/basketball/nba/athletes/"+e.state.data[t].id+"/splits").then((function(t){return t.json()})).then((function(a){s.push({name:e.state.data[t].fullName,data:a.splitCategories[0].splits[0].stats[16]})}))})),console.log(s)}},{key:"handleNameChange",value:function(t){this.setState({name:t.target.value})}},{key:"enterPressed",value:function(t){13===(t.keyCode||t.which)&&this.handleStart()}},{key:"handleStart",value:function(){var t=this;this.state.name.length>0&&(this.setState({gameStarted:!0}),this.setState({seconds:2e3}),clearInterval(this.myInterval),this.myInterval=setInterval((function(){t.state.seconds>-150&&t.setState((function(t){return{seconds:t.seconds-1}})),0===t.state.seconds&&t.handleTimesUp()}),10))}},{key:"handleClick",value:function(t){var e=this;clearInterval(this.myInterval),t.target.textContent.trim()===this.state.question.correctAnswer.trim()?(t.target.style.backgroundColor="#79ff4d",this.setState((function(t){return{totalScore:t.totalScore+Math.floor(e.state.seconds/20)}}))):(t.target.style.backgroundColor="#ff4000",this.setState((function(t){return{lives:t.lives-1}}))),this.setState({notClicked:!1}),setTimeout((function(){0===e.state.lives||e.state.questionNum===e.state.teamCode*e.state.statsCode?e.handleEndGame():e.nextQuestion()}),1500)}},{key:"handleTimesUp",value:function(){var t=this;clearInterval(this.myInterval),this.setState((function(t){return{lives:t.lives-1}})),setTimeout((function(){0===t.state.lives||t.state.questionNum===t.state.teamCode*t.state.statsCode?t.handleEndGame():t.nextQuestion()}),1500)}},{key:"nextQuestion",value:function(){var t=this;this.getQuestion(),setTimeout((function(){t.setState((function(t){return{questionNum:t.questionNum+1}})),t.setState((function(t){return{currentQuestionId:t.currentQuestionId+1}})),t.setState({seconds:2e3}),t.myInterval=setInterval((function(){t.state.seconds>-150&&t.setState((function(t){return{seconds:t.seconds-1}})),-150===t.state.seconds&&t.handleTimesUp()}),10)}),1e3)}},{key:"handleEndGame",value:function(){var t=this;this.setState({question:null,gameOver:!0}),fetch("https://tlmy7kec05.execute-api.us-east-2.amazonaws.com/Prod/nbaleaderboard").then((function(t){return t.json()})).then((function(e){e.length>9&&e[9].score>t.state.totalScore?t.setState({leaderboard:e}):(fetch("https://tlmy7kec05.execute-api.us-east-2.amazonaws.com/Prod/addnbascore?name=".concat(t.state.name.toUpperCase().trim(),"&score=").concat(t.state.totalScore)),setTimeout((function(){fetch("https://tlmy7kec05.execute-api.us-east-2.amazonaws.com/Prod/nbaleaderboard").then((function(t){return t.json()})).then((function(e){return t.setState({leaderboard:e})})),fetch("https://tlmy7kec05.execute-api.us-east-2.amazonaws.com/Prod/deletenbascore")}),1e3))}))}},{key:"handleNewGame",value:function(){this.setState({lives:3,questionNum:1,totalScore:0,question:{question:"loading...",correctAnswer:"loading...",wrongAnswer1:"loading...",wrongAnswer2:"loading...",wrongAnswer3:"loading..."},currentQuestionId:0,notClicked:!0,randomAnswers:[],seconds:2e3,gameOver:!1,gameStarted:!1,name:"",leaderboard:[{name:"loading...",score:"n/a"},{name:"loading...",score:"n/a"},{name:"loading...",score:"n/a"},{name:"loading...",score:"n/a"},{name:"loading...",score:"n/a"},{name:"loading...",score:"n/a"},{name:"loading...",score:"n/a"},{name:"loading...",score:"n/a"},{name:"loading...",score:"n/a"},{name:"loading...",score:"n/a"}]}),this.getQuestion()}},{key:"displayLives",value:function(){var t;for(t=0;t<this.state.lives;t++)return Object(s.jsx)("div",{style:{display:"inline-block"},children:Object(s.jsx)("img",{src:b,width:"40px",alt:"error"})})}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"game",children:[Object(s.jsxs)("div",{style:{display:this.state.gameStarted?"none":"block",marginTop:"7vh"},children:[Object(s.jsx)("img",{src:p,height:"88vh"}),Object(s.jsx)("h1",{className:"headline-njit",children:"NBA"}),Object(s.jsx)("h1",{className:"headline",children:"Trivia Game"}),Object(s.jsx)("input",{className:"name-input",type:"text",minLength:"1",maxLength:"10",placeholder:"Enter your name",value:this.state.name,onChange:this.handleNameChange,onSubmit:this.handleStart,onKeyPress:this.enterPressed.bind(this),style:{width:200,margin:"1rem auto",fontWeight:"bold"}}),Object(s.jsx)("div",{className:"start-button",onClick:this.handleStart,children:"start!"})]}),Object(s.jsxs)("div",{style:{display:this.state.question&&this.state.gameStarted?"block":"none"},children:[Object(s.jsx)("table",{style:{display:this.state.question&&this.state.gameStarted?"block":"none"},className:"table-bar",children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"td-bar",children:this.state.totalScore}),Object(s.jsxs)("td",{className:"td-bar",children:["#",this.state.questionNum]}),Object(s.jsx)("td",{className:"td-bar",children:this.state.seconds>0?1+(this.state.seconds/100|0):"Time's up!"}),Object(s.jsx)("td",{className:"td-bar",children:Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{style:{display:this.state.lives>0?"inline-block":"none"},children:Object(s.jsx)("img",{src:b,width:"25rem",alt:"error"})}),Object(s.jsx)("div",{style:{display:this.state.lives>1?"inline-block":"none"},children:Object(s.jsx)("img",{src:b,width:"25rem",alt:"error"})}),Object(s.jsx)("div",{style:{display:this.state.lives>2?"inline-block":"none"},children:Object(s.jsx)("img",{src:b,width:(window.innerWidth,"25rem"),alt:"error"})})]})})]})}),Object(s.jsx)("br",{style:{display:this.state.question&&this.state.seconds>-150?"block":"none"}}),Object(s.jsxs)("div",{className:"question",style:{display:this.state.question&&this.state.seconds>-150?"block":"none"},children:[Object(s.jsx)("img",{src:this.state.question&&this.state.question.questionImg,height:"120vh"}),Object(s.jsx)("br",{height:"10vh"}),this.state.question&&this.state.question.question]}),Object(s.jsx)("div",{className:"div-answer",onClick:this.state.notClicked&&this.state.seconds>0&&this.handleClick,style:{display:this.state.question&&this.state.seconds>-150?"block":"none",backgroundColor:2e3===this.state.seconds&&""},children:this.state.question&&this.state.randomAnswers[0]}),Object(s.jsx)("div",{className:"div-answer",onClick:this.state.notClicked&&this.state.seconds>0&&this.handleClick,style:{display:this.state.question&&this.state.seconds>-150?"block":"none",backgroundColor:2e3===this.state.seconds&&""},children:this.state.question&&this.state.randomAnswers[1]}),Object(s.jsx)("div",{className:"div-answer",onClick:this.state.notClicked&&this.state.seconds>0&&this.handleClick,style:{display:this.state.question&&this.state.seconds>-150?"block":"none",backgroundColor:2e3===this.state.seconds&&""},children:this.state.question&&this.state.randomAnswers[2]}),Object(s.jsx)("div",{className:"div-answer",onClick:this.state.notClicked&&this.state.seconds>0&&this.handleClick,style:{display:this.state.question&&this.state.seconds>-150?"block":"none",backgroundColor:2e3===this.state.seconds&&""},children:this.state.question&&this.state.randomAnswers[3]})]}),Object(s.jsxs)("div",{style:{display:this.state.gameOver&&this.state.gameStarted&&!this.state.question?"block":"none"},children:[Object(s.jsxs)("h1",{className:"final-score",style:{display:this.state.gameOver?"block":"none"},children:["Final Score: ",this.state.totalScore]}),Object(s.jsx)("h1",{className:"leaderboard-headline",children:"Top 10 leaderboard"}),Object(s.jsxs)("table",{className:"leaderboard-table",style:{display:this.state.leaderboard?"block":"none",backgroundColor:"#e6e6e6",width:"19rem",margin:"1rem auto",border:"1px solid black",borderRadius:25,padding:"1rem"},children:[Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{style:{width:"2rem"},children:"#"}),Object(s.jsx)("td",{style:{width:"10rem"},children:"name"}),Object(s.jsx)("td",{style:{width:"5rem"},children:"score"})]}),Object(s.jsxs)("tr",{style:{display:this.state.leaderboard.length>0?"block":"none"},children:[Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>0&&this.state.name.toUpperCase().trim()===this.state.leaderboard[0].name.toUpperCase().trim()&&"red",fontWeight:this.state.leaderboard.length>0&&this.state.name.toUpperCase().trim()===this.state.leaderboard[0].name.toUpperCase().trim()&&this.state.leaderboard[0].score===this.state.totalScore&&"bold",width:"2rem"},children:"1"}),Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>0&&this.state.name.toUpperCase().trim()===this.state.leaderboard[0].name.toUpperCase().trim()&&"red",fontWeight:this.state.leaderboard.length>0&&this.state.name.toUpperCase().trim()===this.state.leaderboard[0].name.toUpperCase().trim()&&this.state.leaderboard[0].score===this.state.totalScore&&"bold",width:"10rem"},children:this.state.leaderboard.length>0&&this.state.leaderboard[0].name}),Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>0&&this.state.name.toUpperCase().trim()===this.state.leaderboard[0].name.toUpperCase().trim()&&"red",fontWeight:this.state.leaderboard.length>0&&this.state.name.toUpperCase().trim()===this.state.leaderboard[0].name.toUpperCase().trim()&&this.state.leaderboard[0].score===this.state.totalScore&&"bold",width:"5rem"},children:this.state.leaderboard.length>0&&this.state.leaderboard[0].score})]}),Object(s.jsxs)("tr",{style:{display:this.state.leaderboard.length>1?"block":"none"},children:[Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>1&&this.state.name.toUpperCase().trim()===this.state.leaderboard[1].name.toUpperCase().trim()&&"red",fontWeight:this.state.leaderboard.length>1&&this.state.name.toUpperCase().trim()===this.state.leaderboard[1].name.toUpperCase().trim()&&this.state.leaderboard[1].score===this.state.totalScore&&"bold",width:"2rem"},children:"2"}),Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>1&&this.state.name.toUpperCase().trim()===this.state.leaderboard[1].name.toUpperCase().trim()&&"red",fontWeight:this.state.leaderboard.length>1&&this.state.name.toUpperCase().trim()===this.state.leaderboard[1].name.toUpperCase().trim()&&this.state.leaderboard[1].score===this.state.totalScore&&"bold",width:"10rem"},children:this.state.leaderboard.length>1&&this.state.leaderboard[1].name}),Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>1&&this.state.name.toUpperCase().trim()===this.state.leaderboard[1].name.toUpperCase().trim()&&"red",fontWeight:this.state.leaderboard.length>1&&this.state.name.toUpperCase().trim()===this.state.leaderboard[1].name.toUpperCase().trim()&&this.state.leaderboard[1].score===this.state.totalScore&&"bold",width:"5rem"},children:this.state.leaderboard.length>1&&this.state.leaderboard[1].score})]}),Object(s.jsxs)("tr",{style:{display:this.state.leaderboard.length>2?"block":"none"},children:[Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>2&&this.state.name.toUpperCase().trim()===this.state.leaderboard[2].name.toUpperCase().trim()&&"red",fontWeight:this.state.leaderboard.length>2&&this.state.name.toUpperCase().trim()===this.state.leaderboard[2].name.toUpperCase().trim()&&this.state.leaderboard[2].score===this.state.totalScore&&"bold",width:"2rem"},children:"3"}),Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>2&&this.state.name.toUpperCase().trim()===this.state.leaderboard[2].name.toUpperCase().trim()&&"red",fontWeight:this.state.leaderboard.length>2&&this.state.name.toUpperCase().trim()===this.state.leaderboard[2].name.toUpperCase().trim()&&this.state.leaderboard[2].score===this.state.totalScore&&"bold",width:"10rem"},children:this.state.leaderboard.length>2&&this.state.leaderboard[2].name}),Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>2&&this.state.name.toUpperCase().trim()===this.state.leaderboard[2].name.toUpperCase().trim()&&"red",fontWeight:this.state.leaderboard.length>2&&this.state.name.toUpperCase().trim()===this.state.leaderboard[2].name.toUpperCase().trim()&&this.state.leaderboard[2].score===this.state.totalScore&&"bold",width:"5rem"},children:this.state.leaderboard.length>2&&this.state.leaderboard[2].score})]}),Object(s.jsxs)("tr",{style:{display:this.state.leaderboard.length>3?"block":"none"},children:[Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>3&&this.state.name.toUpperCase().trim()===this.state.leaderboard[3].name.toUpperCase().trim()&&"red",fontWeight:this.state.leaderboard.length>3&&this.state.name.toUpperCase().trim()===this.state.leaderboard[3].name.toUpperCase().trim()&&this.state.leaderboard[3].score===this.state.totalScore&&"bold",width:"2rem"},children:"4"}),Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>3&&this.state.name.toUpperCase().trim()===this.state.leaderboard[3].name.toUpperCase().trim()&&"red",fontWeight:this.state.leaderboard.length>3&&this.state.name.toUpperCase().trim()===this.state.leaderboard[3].name.toUpperCase().trim()&&this.state.leaderboard[3].score===this.state.totalScore&&"bold",width:"10rem"},children:this.state.leaderboard.length>3&&this.state.leaderboard[3].name}),Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>3&&this.state.name.toUpperCase().trim()===this.state.leaderboard[3].name.toUpperCase().trim()&&"red",fontWeight:this.state.leaderboard.length>3&&this.state.name.toUpperCase().trim()===this.state.leaderboard[3].name.toUpperCase().trim()&&this.state.leaderboard[3].score===this.state.totalScore&&"bold",width:"5rem"},children:this.state.leaderboard.length>3&&this.state.leaderboard[3].score})]}),Object(s.jsxs)("tr",{style:{display:this.state.leaderboard.length>4?"block":"none"},children:[Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>4&&this.state.name.toUpperCase().trim()===this.state.leaderboard[4].name.toUpperCase().trim()&&"red",fontWeight:this.state.leaderboard.length>4&&this.state.name.toUpperCase().trim()===this.state.leaderboard[4].name.toUpperCase().trim()&&this.state.leaderboard[4].score===this.state.totalScore&&"bold",width:"2rem"},children:"5"}),Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>4&&this.state.name.toUpperCase().trim()===this.state.leaderboard[4].name.toUpperCase().trim()&&"red",fontWeight:this.state.leaderboard.length>4&&this.state.name.toUpperCase().trim()===this.state.leaderboard[4].name.toUpperCase().trim()&&this.state.leaderboard[4].score===this.state.totalScore&&"bold",width:"10rem"},children:this.state.leaderboard.length>4&&this.state.leaderboard[4].name}),Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>4&&this.state.name.toUpperCase().trim()===this.state.leaderboard[4].name.toUpperCase().trim()&&"red",fontWeight:this.state.leaderboard.length>4&&this.state.name.toUpperCase().trim()===this.state.leaderboard[4].name.toUpperCase().trim()&&this.state.leaderboard[4].score===this.state.totalScore&&"bold",width:"5rem"},children:this.state.leaderboard.length>4&&this.state.leaderboard[4].score})]}),Object(s.jsxs)("tr",{style:{display:this.state.leaderboard.length>5?"block":"none"},children:[Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>5&&this.state.name.toUpperCase().trim()===this.state.leaderboard[5].name.toUpperCase().trim()&&"red",fontWeight:this.state.leaderboard.length>5&&this.state.name.toUpperCase().trim()===this.state.leaderboard[5].name.toUpperCase().trim()&&this.state.leaderboard[5].score===this.state.totalScore&&"bold",width:"2rem"},children:"6"}),Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>5&&this.state.name.toUpperCase().trim()===this.state.leaderboard[5].name.toUpperCase().trim()&&"red",fontWeight:this.state.leaderboard.length>5&&this.state.name.toUpperCase().trim()===this.state.leaderboard[5].name.toUpperCase().trim()&&this.state.leaderboard[5].score===this.state.totalScore&&"bold",width:"10rem"},children:this.state.leaderboard.length>5&&this.state.leaderboard[5].name}),Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>5&&this.state.name.toUpperCase().trim()===this.state.leaderboard[5].name.toUpperCase().trim()&&"red",fontWeight:this.state.leaderboard.length>5&&this.state.name.toUpperCase().trim()===this.state.leaderboard[5].name.toUpperCase().trim()&&this.state.leaderboard[5].score===this.state.totalScore&&"bold",width:"5rem"},children:this.state.leaderboard.length>5&&this.state.leaderboard[5].score})]}),Object(s.jsxs)("tr",{style:{display:this.state.leaderboard.length>6?"block":"none"},children:[Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>6&&this.state.name.toUpperCase().trim()===this.state.leaderboard[6].name.toUpperCase().trim()&&"red",fontWeight:this.state.leaderboard.length>6&&this.state.name.toUpperCase().trim()===this.state.leaderboard[6].name.toUpperCase().trim()&&this.state.leaderboard[6].score===this.state.totalScore&&"bold",width:"2rem"},children:"7"}),Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>6&&this.state.name.toUpperCase().trim()===this.state.leaderboard[6].name.toUpperCase().trim()&&"red",fontWeight:this.state.leaderboard.length>6&&this.state.name.toUpperCase().trim()===this.state.leaderboard[6].name.toUpperCase().trim()&&this.state.leaderboard[6].score===this.state.totalScore&&"bold",width:"10rem"},children:this.state.leaderboard.length>6&&this.state.leaderboard[6].name}),Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>6&&this.state.name.toUpperCase().trim()===this.state.leaderboard[6].name.toUpperCase().trim()&&"red",fontWeight:this.state.leaderboard.length>6&&this.state.name.toUpperCase().trim()===this.state.leaderboard[6].name.toUpperCase().trim()&&this.state.leaderboard[6].score===this.state.totalScore&&"bold",width:"5rem"},children:this.state.leaderboard.length>6&&this.state.leaderboard[6].score})]}),Object(s.jsxs)("tr",{style:{display:this.state.leaderboard.length>7?"block":"none"},children:[Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>7&&this.state.name.toUpperCase().trim()===this.state.leaderboard[7].name.toUpperCase().trim()&&"red",fontWeight:this.state.leaderboard.length>7&&this.state.name.toUpperCase().trim()===this.state.leaderboard[7].name.toUpperCase().trim()&&this.state.leaderboard[7].score===this.state.totalScore&&"bold",width:"2rem"},children:"8"}),Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>7&&this.state.name.toUpperCase().trim()===this.state.leaderboard[7].name.toUpperCase().trim()&&"red",fontWeight:this.state.leaderboard.length>7&&this.state.name.toUpperCase().trim()===this.state.leaderboard[7].name.toUpperCase().trim()&&this.state.leaderboard[7].score===this.state.totalScore&&"bold",width:"10rem"},children:this.state.leaderboard.length>7&&this.state.leaderboard[7].name}),Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>7&&this.state.name.toUpperCase().trim()===this.state.leaderboard[7].name.toUpperCase().trim()&&"red",fontWeight:this.state.leaderboard.length>7&&this.state.name.toUpperCase().trim()===this.state.leaderboard[7].name.toUpperCase().trim()&&this.state.leaderboard[7].score===this.state.totalScore&&"bold",width:"5rem"},children:this.state.leaderboard.length>7&&this.state.leaderboard[7].score})]}),Object(s.jsxs)("tr",{style:{display:this.state.leaderboard.length>8?"block":"none"},children:[Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>8&&this.state.name.toUpperCase().trim()===this.state.leaderboard[8].name.toUpperCase().trim()&&"red",fontWeight:this.state.leaderboard.length>8&&this.state.name.toUpperCase().trim()===this.state.leaderboard[8].name.toUpperCase().trim()&&this.state.leaderboard[8].score===this.state.totalScore&&"bold",width:"2rem"},children:"9"}),Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>8&&this.state.name.toUpperCase().trim()===this.state.leaderboard[8].name.toUpperCase().trim()&&"red",fontWeight:this.state.leaderboard.length>8&&this.state.name.toUpperCase().trim()===this.state.leaderboard[8].name.toUpperCase().trim()&&this.state.leaderboard[8].score===this.state.totalScore&&"bold",width:"10rem"},children:this.state.leaderboard.length>8&&this.state.leaderboard[8].name}),Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>8&&this.state.name.toUpperCase().trim()===this.state.leaderboard[8].name.toUpperCase().trim()&&"red",fontWeight:this.state.leaderboard.length>8&&this.state.name.toUpperCase().trim()===this.state.leaderboard[8].name.toUpperCase().trim()&&this.state.leaderboard[8].score===this.state.totalScore&&"bold",width:"5rem"},children:this.state.leaderboard.length>8&&this.state.leaderboard[8].score})]}),Object(s.jsxs)("tr",{style:{display:this.state.leaderboard.length>9?"block":"none"},children:[Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>9&&this.state.name.toUpperCase().trim()===this.state.leaderboard[9].name.toUpperCase().trim()&&"red",fontWeight:this.state.leaderboard.length>9&&this.state.name.toUpperCase().trim()===this.state.leaderboard[9].name.toUpperCase().trim()&&this.state.leaderboard[9].score===this.state.totalScore&&"bold",width:"2rem"},children:"10"}),Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>9&&this.state.name.toUpperCase().trim()===this.state.leaderboard[9].name.toUpperCase().trim()&&"red",fontWeight:this.state.leaderboard.length>9&&this.state.name.toUpperCase().trim()===this.state.leaderboard[9].name.toUpperCase().trim()&&this.state.leaderboard[9].score===this.state.totalScore&&"bold",width:"10rem"},children:this.state.leaderboard.length>9&&this.state.leaderboard[9].name}),Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>9&&this.state.name.toUpperCase().trim()===this.state.leaderboard[9].name.toUpperCase().trim()&&"red",fontWeight:this.state.leaderboard.length>9&&this.state.name.toUpperCase().trim()===this.state.leaderboard[9].name.toUpperCase().trim()&&this.state.leaderboard[9].score===this.state.totalScore&&"bold",width:"5rem"},children:this.state.leaderboard.length>9&&this.state.leaderboard[9].score})]})]}),Object(s.jsx)("div",{className:"start-button",onClick:this.handleNewGame,children:"play agian!"})]})]})}}]),a}(o.a.Component);var u=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(g,{})})},j=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(e){var a=e.getCLS,s=e.getFID,r=e.getFCP,o=e.getLCP,i=e.getTTFB;a(t),s(t),r(t),o(t),i(t)}))};n.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(u,{})}),document.getElementById("root")),j()}},[[16,1,2]]]);
//# sourceMappingURL=main.87f1d760.chunk.js.map