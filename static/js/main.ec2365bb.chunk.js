(this["webpackJsonpnba-trivia"]=this["webpackJsonpnba-trivia"]||[]).push([[0],{14:function(t,e,a){},15:function(t,e,a){},16:function(t,e,a){"use strict";a.r(e);var s=a(0),r=a(2),i=a.n(r),o=a(4),n=a.n(o),l=(a(14),a(15),a(5)),d=a(6),h=a(1),m=a(8),c=a(7),b=a.p+"static/media/heart2.6ca1547b.png",p=a.p+"static/media/nba3.497d6747.png",u=function(t){Object(m.a)(a,t);var e=Object(c.a)(a);function a(){var t;return Object(l.a)(this,a),(t=e.call(this)).getQuestion=function(){do{var e=Math.floor(Math.random()*t.state.topPlayers.length)}while(t.state.pastPlayerPhotoQuestion.includes(e));do{var a=Math.floor(Math.random()*t.state.topPlayers.length)}while(a===e);do{var s=Math.floor(Math.random()*t.state.topPlayers.length)}while(s===e||s===a);do{var r=Math.floor(Math.random()*t.state.topPlayers.length)}while(r===e||r===a||r===s);t.setState({question:{question:"Name the player.",questionImg:t.state.topPlayers[e].athlete.headshot.href,correctAnswer:t.state.topPlayers[e].athlete.displayName,wrongAnswer1:t.state.topPlayers[a].athlete.displayName,wrongAnswer2:t.state.topPlayers[s].athlete.displayName,wrongAnswer3:t.state.topPlayers[r].athlete.displayName}});for(var i,o,n=[t.state.question.correctAnswer,t.state.question.wrongAnswer1,t.state.question.wrongAnswer2,t.state.question.wrongAnswer3],l=n.length;l>0;)o=Math.floor(Math.random()*l),i=n[--l],n[l]=n[o],n[o]=i;t.setState({randomAnswers:n}),t.setState({time:100}),t.setState({notClicked:!0});var d=t.state.pastPlayerPhotoQuestion.concat(e);t.setState({pastPlayerPhotoQuestion:d})},t.state={lives:3,questionNum:1,totalScore:0,question:{question:"loading...",questionImg:"",correctAnswer:"loading...",correctAnswerData:0,wrongAnswer1:"loading...",wrongAnswer1Data:0,wrongAnswer2:"loading...",wrongAnswer2Data:0,wrongAnswer3:"loading...",wrongAnswer3Data:0},currentQuestionId:0,notClicked:!0,randomAnswers:[],time:100,gameOver:!1,gameStarted:!1,name:"",leaderboard:[{name:"loading...",score:"n/a"},{name:"loading...",score:"n/a"},{name:"loading...",score:"n/a"},{name:"loading...",score:"n/a"},{name:"loading...",score:"n/a"},{name:"loading...",score:"n/a"},{name:"loading...",score:"n/a"},{name:"loading...",score:"n/a"},{name:"loading...",score:"n/a"},{name:"loading...",score:"n/a"}],teamCode:["Atlanta Hawks","Boston Celtics","New Orleans Pelicans","Chicago Bulls","Cleveland Cavaliers","Dallas Mavericks","Denver Nuggets","Detroit Pistons","Golden State Warriors","Houston Rockets","Indiana Pacers","Los Angeles Clippers","Los Angeles Lakers","Miami Heat","Milwaukee Bucks","Minnesota Timberwolves","Brooklyn Nets","New York Knicks","Orlando  Magic","Philadelphia 76ers","Phoenix Suns","Portland Trail Blazers","Sacramento Kings","San Antonio Spurs","Oklahoma City Thunder","Utah Jazz","Washington Wizards","Toronto Raptors","Memphis Grizzlies","Charlotte Hornets"],statsCode:["points per game","rebounds per game","assists per game"],data:[{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."},{fullName:"loading..."}],loadedQuestion:[],loadedRandomAnswers:[],pastQuestions:[],topPlayers:[],Ready:!1,pastPlayerPhotoQuestion:[],StatsQuestions:[],pictureQuestions:[],questions:[{question:"loading...",questionImg:"",correctAnswer:"loading...",correctAnswerData:0,wrongAnswer1:"loading...",wrongAnswer1Data:0,wrongAnswer2:"loading...",wrongAnswer2Data:0,wrongAnswer3:"loading...",wrongAnswer3Data:0}]},t.getQuestions=t.getQuestions.bind(Object(h.a)(t)),t.handleClick=t.handleClick.bind(Object(h.a)(t)),t.handleStart=t.handleStart.bind(Object(h.a)(t)),t.handleNameChange=t.handleNameChange.bind(Object(h.a)(t)),t.handleEndGame=t.handleEndGame.bind(Object(h.a)(t)),t.handleNewGame=t.handleNewGame.bind(Object(h.a)(t)),t}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getTopPlayers(),this.getStatsQuestions()}},{key:"getQuestions",value:function(){var t=this,e=this.state.StatsQuestions.concat(this.state.pictureQuestions);this.setState({questions:e}),setTimeout((function(){for(var e,a,s=t.state.questions,r=s.length;r>0;)a=Math.floor(Math.random()*r),e=s[--r],s[r]=s[a],s[a]=e;t.setState({questions:s});var i=[t.state.questions[t.state.currentQuestionId].correctAnswer,t.state.questions[t.state.currentQuestionId].wrongAnswer1,t.state.questions[t.state.currentQuestionId].wrongAnswer2,t.state.questions[t.state.currentQuestionId].wrongAnswer3];for(r=i.length;r>0;)a=Math.floor(Math.random()*r),e=i[--r],i[r]=i[a],i[a]=e;t.setState({randomAnswers:i}),t.setState({Ready:!0}),console.log(t.state.questions)}),1e3)}},{key:"getStatsQuestionsHelp",value:function(t){var e,a=[];return fetch("https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/"+t).then((function(t){return t.json()})).then((function(t){a.push(t.team.logos[0].href)})),fetch("https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/"+t+"/roster").then((function(t){return t.json()})).then((function(t){for(e=0;e<t.athletes.length;e++)0!==t.athletes[e].experience.years&&fetch("https://site.web.api.espn.com/apis/common/v3/sports/basketball/nba/athletes/"+t.athletes[e].id).then((function(t){return t.json()})).then((function(t){a.push(t)}))})),a}},{key:"getStatsQuestionsHelp2",value:function(t,e,a){var s,r={name:"",data:0},i={name:"",data:0},o={name:"",data:0},n={name:"",data:0};for(s=1;s<t.length;s++)"2020-21 season stats"===t[s].athlete.statsSummary.displayName&&(t[s].athlete.statsSummary.statistics[e].value>=r.data?(n={name:o.name,data:o.data},o={name:i.name,data:i.data},i={name:r.name,data:r.data},r={name:t[s].athlete.displayName,data:t[s].athlete.statsSummary.statistics[e].value}):t[s].athlete.statsSummary.statistics[e].value>=i.data?(n={name:o.name,data:o.data},o={name:i.name,data:i.data},i={name:t[s].athlete.displayName,data:t[s].athlete.statsSummary.statistics[e].value}):t[s].athlete.statsSummary.statistics[e].value>=o.data?(n={name:o.name,data:o.data},o={name:t[s].athlete.displayName,data:t[s].athlete.statsSummary.statistics[e].value}):t[s].athlete.statsSummary.statistics[e].value>=n.data&&(n={name:t[s].athlete.displayName,data:t[s].athlete.statsSummary.statistics[e].value}));return{question:"Who leads "+this.state.teamCode[a]+" in "+this.state.statsCode[e]+"?",questionImg:t[0],correctAnswer:r.name,wrongAnswer1:i.name,wrongAnswer2:o.name,wrongAnswer3:n.name}}},{key:"getStatsQuestions",value:function(){var t,e,a=this,s=[],r=[];for(t=1;t<31;t++)s.push(this.getStatsQuestionsHelp(t));setTimeout((function(){for(t=0;t<s.length;t++)for(e=0;e<3;e++)r.push(a.getStatsQuestionsHelp2(s[t],e,t));console.log(r),a.setState({StatsQuestions:r})}),7e3)}},{key:"getTopPlayers",value:function(){var t,e,a=this,s=[];for(t=1;t<31;t++)fetch("https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/"+t+"/roster").then((function(t){return t.json()})).then((function(t){for(e=0;e<t.athletes.length;e++)0!==t.athletes[e].experience.years&&fetch("https://site.web.api.espn.com/apis/common/v3/sports/basketball/nba/athletes/"+t.athletes[e].id).then((function(t){return t.json()})).then((function(t){(t.athlete.statsSummary.statistics[0].value>=15||t.athlete.statsSummary.statistics[1].value>=10||t.athlete.statsSummary.statistics[2].value>=6)&&s.push(t)}))}));setTimeout((function(){console.log(s),a.setState({topPlayers:s}),setTimeout((function(){a.getPictureQuestions()}),1e3)}),3e3)}},{key:"getPictureQuestions",value:function(){var t,e=this,a=[];for(t=0;t<this.state.topPlayers.length;t++){do{var s=Math.floor(Math.random()*this.state.topPlayers.length)}while(s===t);do{var r=Math.floor(Math.random()*this.state.topPlayers.length)}while(r===t||r===s);do{var i=Math.floor(Math.random()*this.state.topPlayers.length)}while(i===t||i===s||i===r);a.push({question:"Name the player.",questionImg:this.state.topPlayers[t].athlete.headshot.href,correctAnswer:this.state.topPlayers[t].athlete.displayName,wrongAnswer1:this.state.topPlayers[s].athlete.displayName,wrongAnswer2:this.state.topPlayers[r].athlete.displayName,wrongAnswer3:this.state.topPlayers[i].athlete.displayName})}setTimeout((function(){console.log(a),e.setState({pictureQuestions:a}),setTimeout((function(){e.getQuestions()}),1e3)}),5e3)}},{key:"handleNameChange",value:function(t){this.setState({name:t.target.value})}},{key:"enterPressed",value:function(t){13===(t.keyCode||t.which)&&this.handleStart()}},{key:"handleStart",value:function(){var t=this;this.state.name.length>0&&this.state.Ready&&(this.setState({gameStarted:!0}),this.setState({time:100}),clearInterval(this.myInterval),this.myInterval=setInterval((function(){t.state.time>-10&&t.setState((function(t){return{time:t.time-1}})),0===t.state.time&&t.handleTimesUp()}),200))}},{key:"handleClick",value:function(t){var e=this;clearInterval(this.myInterval),t.target.textContent.trim()===this.state.questions[this.state.currentQuestionId].correctAnswer.trim()?(t.target.style.backgroundColor="#79ff4d",this.setState((function(t){return{totalScore:t.totalScore+e.state.time}}))):(t.target.style.backgroundColor="#ff4000",this.setState((function(t){return{lives:t.lives-1}}))),this.setState({notClicked:!1}),setTimeout((function(){0===e.state.lives||e.state.questionNum===e.state.questions.length?e.handleEndGame():e.nextQuestion()}),3e3)}},{key:"handleTimesUp",value:function(){var t=this;clearInterval(this.myInterval),this.setState((function(t){return{lives:t.lives-1}})),setTimeout((function(){0===t.state.lives||t.state.questionNum===t.state.questions.length?t.handleEndGame():t.nextQuestion()}),2e3)}},{key:"nextQuestion",value:function(){var t=this;this.setState({notClicked:!0}),this.setState((function(t){return{questionNum:t.questionNum+1}})),this.setState((function(t){return{currentQuestionId:t.currentQuestionId+1}}));for(var e,a,s=[this.state.questions[this.state.currentQuestionId].correctAnswer,this.state.questions[this.state.currentQuestionId].wrongAnswer1,this.state.questions[this.state.currentQuestionId].wrongAnswer2,this.state.questions[this.state.currentQuestionId].wrongAnswer3],r=s.length;r>0;)a=Math.floor(Math.random()*r),e=s[--r],s[r]=s[a],s[a]=e;this.setState({randomAnswers:s}),this.setState({time:100}),this.myInterval=setInterval((function(){t.state.time>-10&&t.setState((function(t){return{time:t.time-1}})),-10===t.state.time&&t.handleTimesUp()}),200)}},{key:"handleEndGame",value:function(){var t=this;this.setState({gameOver:!0}),fetch("https://tlmy7kec05.execute-api.us-east-2.amazonaws.com/Prod/nbaleaderboard").then((function(t){return t.json()})).then((function(e){e.length>9&&e[9].score>t.state.totalScore?t.setState({leaderboard:e}):(fetch("https://tlmy7kec05.execute-api.us-east-2.amazonaws.com/Prod/addnbascore?name=".concat(t.state.name.toUpperCase().trim(),"&score=").concat(t.state.totalScore)),setTimeout((function(){fetch("https://tlmy7kec05.execute-api.us-east-2.amazonaws.com/Prod/nbaleaderboard").then((function(t){return t.json()})).then((function(e){return t.setState({leaderboard:e})})),fetch("https://tlmy7kec05.execute-api.us-east-2.amazonaws.com/Prod/deletenbascore")}),1e3))}))}},{key:"handleNewGame",value:function(){var t=this;this.setState({lives:3,questionNum:1,totalScore:0,currentQuestionId:0,notClicked:!0,randomAnswers:[],time:100,gameOver:!1,gameStarted:!1,name:"",leaderboard:[{name:"loading...",score:"n/a"},{name:"loading...",score:"n/a"},{name:"loading...",score:"n/a"},{name:"loading...",score:"n/a"},{name:"loading...",score:"n/a"},{name:"loading...",score:"n/a"},{name:"loading...",score:"n/a"},{name:"loading...",score:"n/a"},{name:"loading...",score:"n/a"},{name:"loading...",score:"n/a"}]}),setTimeout((function(){for(var e,a,s=t.state.questions,r=s.length;r>0;)a=Math.floor(Math.random()*r),e=s[--r],s[r]=s[a],s[a]=e;t.setState({questions:s});var i=[t.state.questions[t.state.currentQuestionId].correctAnswer,t.state.questions[t.state.currentQuestionId].wrongAnswer1,t.state.questions[t.state.currentQuestionId].wrongAnswer2,t.state.questions[t.state.currentQuestionId].wrongAnswer3];for(r=i.length;r>0;)a=Math.floor(Math.random()*r),e=i[--r],i[r]=i[a],i[a]=e;t.setState({randomAnswers:i})}),1e3)}},{key:"displayLives",value:function(){var t;for(t=0;t<this.state.lives;t++)return Object(s.jsx)("div",{style:{display:"inline-block"},children:Object(s.jsx)("img",{src:b,width:"40px",alt:"error"})})}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"game",children:[Object(s.jsxs)("div",{style:{display:this.state.gameStarted?"none":"block",marginTop:"7vh"},children:[Object(s.jsx)("img",{src:p,height:"88vh"}),Object(s.jsx)("h1",{className:"headline-njit",children:"NBA"}),Object(s.jsx)("h1",{className:"headline",children:"Trivia Game"}),Object(s.jsx)("input",{className:"name-input",type:"text",minLength:"1",maxLength:"10",placeholder:"Enter your name",value:this.state.name,onChange:this.handleNameChange,onSubmit:this.handleStart,onKeyPress:this.enterPressed.bind(this),style:{width:200,margin:"1rem auto",fontWeight:"bold"}}),Object(s.jsx)("div",{className:"start-button",onClick:this.handleStart,children:this.state.Ready?"start!":"Loading..."})]}),Object(s.jsxs)("div",{style:{display:!this.state.gameOver&&this.state.gameStarted?"block":"none"},children:[Object(s.jsx)("table",{style:{display:this.state.questions&&this.state.gameStarted?"block":"none"},className:"table-bar",children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"td-bar",children:this.state.totalScore}),Object(s.jsxs)("td",{className:"td-bar",children:["#",this.state.questionNum]}),Object(s.jsx)("td",{className:"td-bar",children:this.state.time>0?this.state.time/5+.8|0:"Time's up!"}),Object(s.jsx)("td",{className:"td-bar",children:Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{style:{display:this.state.lives>0?"inline-block":"none"},children:Object(s.jsx)("img",{src:b,width:"25rem",alt:"error"})}),Object(s.jsx)("div",{style:{display:this.state.lives>1?"inline-block":"none"},children:Object(s.jsx)("img",{src:b,width:"25rem",alt:"error"})}),Object(s.jsx)("div",{style:{display:this.state.lives>2?"inline-block":"none"},children:Object(s.jsx)("img",{src:b,width:(window.innerWidth,"25rem"),alt:"error"})})]})})]})}),Object(s.jsx)("br",{style:{display:this.state.questions&&this.state.time>-10?"block":"none"}}),Object(s.jsxs)("div",{className:"question",style:{display:this.state.questions&&this.state.time>-10?"block":"none"},children:[Object(s.jsx)("img",{src:this.state.questions&&this.state.questions[this.state.currentQuestionId].questionImg,height:"120vh"}),Object(s.jsx)("br",{height:"10vh"}),this.state.questions&&this.state.questions[this.state.currentQuestionId].question]}),"                    ",Object(s.jsx)("div",{className:"div-answer",onClick:this.state.notClicked&&this.state.time>0&&this.handleClick,style:{display:this.state.questions&&this.state.time>-10?"block":"none",backgroundColor:100===this.state.time&&""},children:this.state.questions&&this.state.randomAnswers[0]}),Object(s.jsx)("div",{className:"div-answer",onClick:this.state.notClicked&&this.state.time>0&&this.handleClick,style:{display:this.state.questions&&this.state.time>-10?"block":"none",backgroundColor:100===this.state.time&&""},children:this.state.questions&&this.state.randomAnswers[1]}),Object(s.jsx)("div",{className:"div-answer",onClick:this.state.notClicked&&this.state.time>0&&this.handleClick,style:{display:this.state.questions&&this.state.time>-10?"block":"none",backgroundColor:100===this.state.time&&""},children:this.state.questions&&this.state.randomAnswers[2]}),Object(s.jsx)("div",{className:"div-answer",onClick:this.state.notClicked&&this.state.time>0&&this.handleClick,style:{display:this.state.questions&&this.state.time>-10?"block":"none",backgroundColor:100===this.state.time&&""},children:this.state.questions&&this.state.randomAnswers[3]})]}),Object(s.jsxs)("div",{style:{display:this.state.gameOver&&this.state.gameStarted?"block":"none"},children:[Object(s.jsxs)("h1",{className:"final-score",style:{display:this.state.gameOver?"block":"none"},children:["Final Score: ",this.state.totalScore]}),Object(s.jsx)("h1",{className:"leaderboard-headline",children:"Top 10 leaderboard"}),Object(s.jsxs)("table",{className:"leaderboard-table",style:{display:this.state.leaderboard?"block":"none",backgroundColor:"#e6e6e6",width:"19rem",margin:"1rem auto",border:"1px solid black",borderRadius:25,padding:"1rem"},children:[Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{style:{width:"2rem"},children:"#"}),Object(s.jsx)("td",{style:{width:"10rem"},children:"name"}),Object(s.jsx)("td",{style:{width:"5rem"},children:"score"})]}),Object(s.jsxs)("tr",{style:{display:this.state.leaderboard.length>0?"block":"none"},children:[Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>0&&this.state.name.toUpperCase().trim()===this.state.leaderboard[0].name.toUpperCase().trim()&&"red",fontWeight:this.state.leaderboard.length>0&&this.state.name.toUpperCase().trim()===this.state.leaderboard[0].name.toUpperCase().trim()&&this.state.leaderboard[0].score===this.state.totalScore&&"bold",width:"2rem"},children:"1"}),Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>0&&this.state.name.toUpperCase().trim()===this.state.leaderboard[0].name.toUpperCase().trim()&&"red",fontWeight:this.state.leaderboard.length>0&&this.state.name.toUpperCase().trim()===this.state.leaderboard[0].name.toUpperCase().trim()&&this.state.leaderboard[0].score===this.state.totalScore&&"bold",width:"10rem"},children:this.state.leaderboard.length>0&&this.state.leaderboard[0].name}),Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>0&&this.state.name.toUpperCase().trim()===this.state.leaderboard[0].name.toUpperCase().trim()&&"red",fontWeight:this.state.leaderboard.length>0&&this.state.name.toUpperCase().trim()===this.state.leaderboard[0].name.toUpperCase().trim()&&this.state.leaderboard[0].score===this.state.totalScore&&"bold",width:"5rem"},children:this.state.leaderboard.length>0&&this.state.leaderboard[0].score})]}),Object(s.jsxs)("tr",{style:{display:this.state.leaderboard.length>1?"block":"none"},children:[Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>1&&this.state.name.toUpperCase().trim()===this.state.leaderboard[1].name.toUpperCase().trim()&&"red",fontWeight:this.state.leaderboard.length>1&&this.state.name.toUpperCase().trim()===this.state.leaderboard[1].name.toUpperCase().trim()&&this.state.leaderboard[1].score===this.state.totalScore&&"bold",width:"2rem"},children:"2"}),Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>1&&this.state.name.toUpperCase().trim()===this.state.leaderboard[1].name.toUpperCase().trim()&&"red",fontWeight:this.state.leaderboard.length>1&&this.state.name.toUpperCase().trim()===this.state.leaderboard[1].name.toUpperCase().trim()&&this.state.leaderboard[1].score===this.state.totalScore&&"bold",width:"10rem"},children:this.state.leaderboard.length>1&&this.state.leaderboard[1].name}),Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>1&&this.state.name.toUpperCase().trim()===this.state.leaderboard[1].name.toUpperCase().trim()&&"red",fontWeight:this.state.leaderboard.length>1&&this.state.name.toUpperCase().trim()===this.state.leaderboard[1].name.toUpperCase().trim()&&this.state.leaderboard[1].score===this.state.totalScore&&"bold",width:"5rem"},children:this.state.leaderboard.length>1&&this.state.leaderboard[1].score})]}),Object(s.jsxs)("tr",{style:{display:this.state.leaderboard.length>2?"block":"none"},children:[Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>2&&this.state.name.toUpperCase().trim()===this.state.leaderboard[2].name.toUpperCase().trim()&&"red",fontWeight:this.state.leaderboard.length>2&&this.state.name.toUpperCase().trim()===this.state.leaderboard[2].name.toUpperCase().trim()&&this.state.leaderboard[2].score===this.state.totalScore&&"bold",width:"2rem"},children:"3"}),Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>2&&this.state.name.toUpperCase().trim()===this.state.leaderboard[2].name.toUpperCase().trim()&&"red",fontWeight:this.state.leaderboard.length>2&&this.state.name.toUpperCase().trim()===this.state.leaderboard[2].name.toUpperCase().trim()&&this.state.leaderboard[2].score===this.state.totalScore&&"bold",width:"10rem"},children:this.state.leaderboard.length>2&&this.state.leaderboard[2].name}),Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>2&&this.state.name.toUpperCase().trim()===this.state.leaderboard[2].name.toUpperCase().trim()&&"red",fontWeight:this.state.leaderboard.length>2&&this.state.name.toUpperCase().trim()===this.state.leaderboard[2].name.toUpperCase().trim()&&this.state.leaderboard[2].score===this.state.totalScore&&"bold",width:"5rem"},children:this.state.leaderboard.length>2&&this.state.leaderboard[2].score})]}),Object(s.jsxs)("tr",{style:{display:this.state.leaderboard.length>3?"block":"none"},children:[Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>3&&this.state.name.toUpperCase().trim()===this.state.leaderboard[3].name.toUpperCase().trim()&&"red",fontWeight:this.state.leaderboard.length>3&&this.state.name.toUpperCase().trim()===this.state.leaderboard[3].name.toUpperCase().trim()&&this.state.leaderboard[3].score===this.state.totalScore&&"bold",width:"2rem"},children:"4"}),Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>3&&this.state.name.toUpperCase().trim()===this.state.leaderboard[3].name.toUpperCase().trim()&&"red",fontWeight:this.state.leaderboard.length>3&&this.state.name.toUpperCase().trim()===this.state.leaderboard[3].name.toUpperCase().trim()&&this.state.leaderboard[3].score===this.state.totalScore&&"bold",width:"10rem"},children:this.state.leaderboard.length>3&&this.state.leaderboard[3].name}),Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>3&&this.state.name.toUpperCase().trim()===this.state.leaderboard[3].name.toUpperCase().trim()&&"red",fontWeight:this.state.leaderboard.length>3&&this.state.name.toUpperCase().trim()===this.state.leaderboard[3].name.toUpperCase().trim()&&this.state.leaderboard[3].score===this.state.totalScore&&"bold",width:"5rem"},children:this.state.leaderboard.length>3&&this.state.leaderboard[3].score})]}),Object(s.jsxs)("tr",{style:{display:this.state.leaderboard.length>4?"block":"none"},children:[Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>4&&this.state.name.toUpperCase().trim()===this.state.leaderboard[4].name.toUpperCase().trim()&&"red",fontWeight:this.state.leaderboard.length>4&&this.state.name.toUpperCase().trim()===this.state.leaderboard[4].name.toUpperCase().trim()&&this.state.leaderboard[4].score===this.state.totalScore&&"bold",width:"2rem"},children:"5"}),Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>4&&this.state.name.toUpperCase().trim()===this.state.leaderboard[4].name.toUpperCase().trim()&&"red",fontWeight:this.state.leaderboard.length>4&&this.state.name.toUpperCase().trim()===this.state.leaderboard[4].name.toUpperCase().trim()&&this.state.leaderboard[4].score===this.state.totalScore&&"bold",width:"10rem"},children:this.state.leaderboard.length>4&&this.state.leaderboard[4].name}),Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>4&&this.state.name.toUpperCase().trim()===this.state.leaderboard[4].name.toUpperCase().trim()&&"red",fontWeight:this.state.leaderboard.length>4&&this.state.name.toUpperCase().trim()===this.state.leaderboard[4].name.toUpperCase().trim()&&this.state.leaderboard[4].score===this.state.totalScore&&"bold",width:"5rem"},children:this.state.leaderboard.length>4&&this.state.leaderboard[4].score})]}),Object(s.jsxs)("tr",{style:{display:this.state.leaderboard.length>5?"block":"none"},children:[Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>5&&this.state.name.toUpperCase().trim()===this.state.leaderboard[5].name.toUpperCase().trim()&&"red",fontWeight:this.state.leaderboard.length>5&&this.state.name.toUpperCase().trim()===this.state.leaderboard[5].name.toUpperCase().trim()&&this.state.leaderboard[5].score===this.state.totalScore&&"bold",width:"2rem"},children:"6"}),Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>5&&this.state.name.toUpperCase().trim()===this.state.leaderboard[5].name.toUpperCase().trim()&&"red",fontWeight:this.state.leaderboard.length>5&&this.state.name.toUpperCase().trim()===this.state.leaderboard[5].name.toUpperCase().trim()&&this.state.leaderboard[5].score===this.state.totalScore&&"bold",width:"10rem"},children:this.state.leaderboard.length>5&&this.state.leaderboard[5].name}),Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>5&&this.state.name.toUpperCase().trim()===this.state.leaderboard[5].name.toUpperCase().trim()&&"red",fontWeight:this.state.leaderboard.length>5&&this.state.name.toUpperCase().trim()===this.state.leaderboard[5].name.toUpperCase().trim()&&this.state.leaderboard[5].score===this.state.totalScore&&"bold",width:"5rem"},children:this.state.leaderboard.length>5&&this.state.leaderboard[5].score})]}),Object(s.jsxs)("tr",{style:{display:this.state.leaderboard.length>6?"block":"none"},children:[Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>6&&this.state.name.toUpperCase().trim()===this.state.leaderboard[6].name.toUpperCase().trim()&&"red",fontWeight:this.state.leaderboard.length>6&&this.state.name.toUpperCase().trim()===this.state.leaderboard[6].name.toUpperCase().trim()&&this.state.leaderboard[6].score===this.state.totalScore&&"bold",width:"2rem"},children:"7"}),Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>6&&this.state.name.toUpperCase().trim()===this.state.leaderboard[6].name.toUpperCase().trim()&&"red",fontWeight:this.state.leaderboard.length>6&&this.state.name.toUpperCase().trim()===this.state.leaderboard[6].name.toUpperCase().trim()&&this.state.leaderboard[6].score===this.state.totalScore&&"bold",width:"10rem"},children:this.state.leaderboard.length>6&&this.state.leaderboard[6].name}),Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>6&&this.state.name.toUpperCase().trim()===this.state.leaderboard[6].name.toUpperCase().trim()&&"red",fontWeight:this.state.leaderboard.length>6&&this.state.name.toUpperCase().trim()===this.state.leaderboard[6].name.toUpperCase().trim()&&this.state.leaderboard[6].score===this.state.totalScore&&"bold",width:"5rem"},children:this.state.leaderboard.length>6&&this.state.leaderboard[6].score})]}),Object(s.jsxs)("tr",{style:{display:this.state.leaderboard.length>7?"block":"none"},children:[Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>7&&this.state.name.toUpperCase().trim()===this.state.leaderboard[7].name.toUpperCase().trim()&&"red",fontWeight:this.state.leaderboard.length>7&&this.state.name.toUpperCase().trim()===this.state.leaderboard[7].name.toUpperCase().trim()&&this.state.leaderboard[7].score===this.state.totalScore&&"bold",width:"2rem"},children:"8"}),Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>7&&this.state.name.toUpperCase().trim()===this.state.leaderboard[7].name.toUpperCase().trim()&&"red",fontWeight:this.state.leaderboard.length>7&&this.state.name.toUpperCase().trim()===this.state.leaderboard[7].name.toUpperCase().trim()&&this.state.leaderboard[7].score===this.state.totalScore&&"bold",width:"10rem"},children:this.state.leaderboard.length>7&&this.state.leaderboard[7].name}),Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>7&&this.state.name.toUpperCase().trim()===this.state.leaderboard[7].name.toUpperCase().trim()&&"red",fontWeight:this.state.leaderboard.length>7&&this.state.name.toUpperCase().trim()===this.state.leaderboard[7].name.toUpperCase().trim()&&this.state.leaderboard[7].score===this.state.totalScore&&"bold",width:"5rem"},children:this.state.leaderboard.length>7&&this.state.leaderboard[7].score})]}),Object(s.jsxs)("tr",{style:{display:this.state.leaderboard.length>8?"block":"none"},children:[Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>8&&this.state.name.toUpperCase().trim()===this.state.leaderboard[8].name.toUpperCase().trim()&&"red",fontWeight:this.state.leaderboard.length>8&&this.state.name.toUpperCase().trim()===this.state.leaderboard[8].name.toUpperCase().trim()&&this.state.leaderboard[8].score===this.state.totalScore&&"bold",width:"2rem"},children:"9"}),Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>8&&this.state.name.toUpperCase().trim()===this.state.leaderboard[8].name.toUpperCase().trim()&&"red",fontWeight:this.state.leaderboard.length>8&&this.state.name.toUpperCase().trim()===this.state.leaderboard[8].name.toUpperCase().trim()&&this.state.leaderboard[8].score===this.state.totalScore&&"bold",width:"10rem"},children:this.state.leaderboard.length>8&&this.state.leaderboard[8].name}),Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>8&&this.state.name.toUpperCase().trim()===this.state.leaderboard[8].name.toUpperCase().trim()&&"red",fontWeight:this.state.leaderboard.length>8&&this.state.name.toUpperCase().trim()===this.state.leaderboard[8].name.toUpperCase().trim()&&this.state.leaderboard[8].score===this.state.totalScore&&"bold",width:"5rem"},children:this.state.leaderboard.length>8&&this.state.leaderboard[8].score})]}),Object(s.jsxs)("tr",{style:{display:this.state.leaderboard.length>9?"block":"none"},children:[Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>9&&this.state.name.toUpperCase().trim()===this.state.leaderboard[9].name.toUpperCase().trim()&&"red",fontWeight:this.state.leaderboard.length>9&&this.state.name.toUpperCase().trim()===this.state.leaderboard[9].name.toUpperCase().trim()&&this.state.leaderboard[9].score===this.state.totalScore&&"bold",width:"2rem"},children:"10"}),Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>9&&this.state.name.toUpperCase().trim()===this.state.leaderboard[9].name.toUpperCase().trim()&&"red",fontWeight:this.state.leaderboard.length>9&&this.state.name.toUpperCase().trim()===this.state.leaderboard[9].name.toUpperCase().trim()&&this.state.leaderboard[9].score===this.state.totalScore&&"bold",width:"10rem"},children:this.state.leaderboard.length>9&&this.state.leaderboard[9].name}),Object(s.jsx)("td",{style:{color:this.state.leaderboard.length>9&&this.state.name.toUpperCase().trim()===this.state.leaderboard[9].name.toUpperCase().trim()&&"red",fontWeight:this.state.leaderboard.length>9&&this.state.name.toUpperCase().trim()===this.state.leaderboard[9].name.toUpperCase().trim()&&this.state.leaderboard[9].score===this.state.totalScore&&"bold",width:"5rem"},children:this.state.leaderboard.length>9&&this.state.leaderboard[9].score})]})]}),Object(s.jsx)("div",{className:"start-button",onClick:this.handleNewGame,children:"play agian!"})]})]})}}]),a}(i.a.Component);var g=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(u,{})})},j=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(e){var a=e.getCLS,s=e.getFID,r=e.getFCP,i=e.getLCP,o=e.getTTFB;a(t),s(t),r(t),i(t),o(t)}))};n.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(g,{})}),document.getElementById("root")),j()}},[[16,1,2]]]);
//# sourceMappingURL=main.ec2365bb.chunk.js.map