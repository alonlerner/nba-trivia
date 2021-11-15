import React from "react"
import heart2 from "./heart2.png"
import nba from "./nba3.png"

class Game extends React.Component {
    constructor() {
        super()
        this.state = {
            lives: 3,
            questionNum: 1,
            totalScore: 0,
            question: {"question": "loading...", "questionImg":"", "correctAnswer": "loading...", "correctAnswerData":0, "wrongAnswer1": "loading...", "wrongAnswer1Data":0, "wrongAnswer2": "loading...", "wrongAnswer2Data":0, "wrongAnswer3": "loading...", "wrongAnswer3Data":0 },
            currentQuestionId: 0,
            notClicked: true,
            randomAnswers: [],
            time: 100,
            gameOver: false,
            gameStarted: false,
            name: '',
            leaderboard: [{ "name": "loading...", "score": "n/a" }, { "name": "loading...", "score": "n/a" }, { "name": "loading...", "score": "n/a" }, { "name": "loading...", "score": "n/a" }, { "name": "loading...", "score": "n/a" }, { "name": "loading...", "score": "n/a" }, { "name": "loading...", "score": "n/a" }, { "name": "loading...", "score": "n/a" }, { "name": "loading...", "score": "n/a" }, { "name": "loading...", "score": "n/a" }],
            teamCode: ["Atlanta Hawks", "Boston Celtics", "New Orleans Pelicans", "Chicago Bulls", "Cleveland Cavaliers", "Dallas Mavericks", "Denver Nuggets", "Detroit Pistons", "Golden State Warriors", "Houston Rockets", "Indiana Pacers", "Los Angeles Clippers", "Los Angeles Lakers", "Miami Heat", "Milwaukee Bucks", "Minnesota Timberwolves", "Brooklyn Nets", "New York Knicks", "Orlando  Magic", "Philadelphia 76ers", "Phoenix Suns", "Portland Trail Blazers", "Sacramento Kings", "San Antonio Spurs", "Oklahoma City Thunder", "Utah Jazz", "Washington Wizards", "Toronto Raptors", "Memphis Grizzlies", "Charlotte Hornets"],
            statsCode: ["points per game", "rebounds per game", "assists per game"],
            data: [{ "fullName": "loading..." }, { "fullName": "loading..." }, { "fullName": "loading..." }, { "fullName": "loading..." }, { "fullName": "loading..." }, { "fullName": "loading..." }, { "fullName": "loading..." }, { "fullName": "loading..." }, { "fullName": "loading..." }, { "fullName": "loading..." }, { "fullName": "loading..." }, { "fullName": "loading..." }, { "fullName": "loading..." }, { "fullName": "loading..." }, { "fullName": "loading..." }, { "fullName": "loading..." }, { "fullName": "loading..." }, { "fullName": "loading..." }, { "fullName": "loading..." }, { "fullName": "loading..." }, { "fullName": "loading..." }, { "fullName": "loading..." }, { "fullName": "loading..." }, { "fullName": "loading..." }, { "fullName": "loading..." }],
            loadedQuestion:[],
            loadedRandomAnswers: [],
            pastQuestions: [],
            topPlayers: [],
            teams:[],
            Ready: false,
            pastPlayerPhotoQuestion: [],
            StatsQuestions: [],
            pictureQuestions: [],
            collegeQuestions: [],
            recordQuestions: [],
            questions: [{ "question": "loading...", "questionImg": "", "correctAnswer": "loading...", "correctAnswerData": 0, "wrongAnswer1": "loading...", "wrongAnswer1Data": 0, "wrongAnswer2": "loading...", "wrongAnswer2Data": 0, "wrongAnswer3": "loading...", "wrongAnswer3Data": 0 }]
        }
        this.getQuestions = this.getQuestions.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleStart = this.handleStart.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleEndGame = this.handleEndGame.bind(this)
        this.handleNewGame = this.handleNewGame.bind(this)
    }

    componentDidMount() {
        this.getTeams()
        this.getTopPlayers()
        this.getStatsQuestions()


    }

    getQuestions() {
        var tempA = this.state.StatsQuestions.concat(this.state.pictureQuestions.concat(this.state.collegeQuestions.concat(this.state.recordQuestions)))
        this.setState({ questions: tempA })
        setTimeout(() => {
            const a = this.state.questions
            var ctr = a.length, temp, index
            while (ctr > 0) {
                index = Math.floor(Math.random() * ctr)
                ctr--
                temp = a[ctr]
                a[ctr] = a[index]
                a[index] = temp
            }
            this.setState({ questions: a })
            const array = [this.state.questions[this.state.currentQuestionId].correctAnswer, this.state.questions[this.state.currentQuestionId].wrongAnswer1, this.state.questions[this.state.currentQuestionId].wrongAnswer2, this.state.questions[this.state.currentQuestionId].wrongAnswer3]
            ctr = array.length
            while (ctr > 0) {
                index = Math.floor(Math.random() * ctr)
                ctr--
                temp = array[ctr]
                array[ctr] = array[index]
                array[index] = temp
            }
            this.setState({ randomAnswers: array })
            this.setState({ Ready: true })
        },1000)
    }

    getTeams() {
        var a = [], i
        for (i = 1; i < 31; i++) {
            fetch('https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/' + i)
                .then(response => response.json())
                .then(response => {
                    a.push(response)
                })            
        }
        setTimeout(() => {
            this.setState({ teams: a })
            setTimeout(() => {
                this.getRecordQuestions()
            },1000)
        },5000)
    }

    getRecordQuestionsHelp(t, n, a) {
        var i, j
        for (i = n; i < n + 3; i++) {
            for (j = n; j < n + 3 ; j++) {
                if (a[j].team.record.items[t].stats[3].value >= a[j + 1].team.record.items[t].stats[3].value) {
                    var temp = a[j];
                    a[j] = a[j + 1];
                    a[j + 1] = temp;
                }
            }
        }
        return { "question": "What team has a better " + a[n].team.record.items[t].description.toLowerCase() + "?", "questionImg": nba, "correctAnswer": a[n + 3].team.displayName, "wrongAnswer1": a[n + 2].team.displayName, "wrongAnswer2": a[n + 1].team.displayName, "wrongAnswer3": a[n].team.displayName }

    }

    getRecordQuestions() {
        var a = this.state.teams, i, j, aq=[]
        for (i = 0; i < 3; i++) {
            var ctr = a.length, temp, index
            while (ctr > 0) {
                index = Math.floor(Math.random() * ctr)
                ctr--
                temp = a[ctr]
                a[ctr] = a[index]
                a[index] = temp
            }
            for (j = 0; j < a.length-4; j = j + 4) {
                aq.push(this.getRecordQuestionsHelp(i,j,a))
            }
        }
        setTimeout(() => {
            this.setState({ recordQuestions: aq })
        },1000)
        
    }

    getStatsQuestionsHelp(n) {
        var a = [], j
        fetch('https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/' + n)
            .then(response => response.json())
            .then(response => {
                a.push(response.team.logos[0].href)
            })
        fetch('https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/' + n + '/roster')
            .then(response => response.json())
            .then(result => {
                for (j = 0; j < result.athletes.length; j++) {
                    if (result.athletes[j].experience.years !== 0) {
                        fetch('https://site.web.api.espn.com/apis/common/v3/sports/basketball/nba/athletes/' + result.athletes[j].id)
                            .then(response => response.json())
                            .then(response => {
                                a.push(response)

                            })
                    }
                }
            })
        return a
    }

    getStatsQuestionsHelp2(a, j, i) {
        var k, leader1 = { "name": "", "data": 0 }, leader2 = { "name": "", "data": 0 }, leader3 = { "name": "", "data": 0 }, leader4 = { "name": "", "data": 0 }
        for (k = 1; k < a.length; k++) {
            if (a[k].athlete.statsSummary.displayName === "2021-22 season stats") {
                if (a[k].athlete.statsSummary.statistics[j].value >= leader1.data) {
                    leader4 = { "name": leader3.name, "data": leader3.data }
                    leader3 = { "name": leader2.name, "data": leader2.data }
                    leader2 = { "name": leader1.name, "data": leader1.data }
                    leader1 = { "name": a[k].athlete.displayName, "data": a[k].athlete.statsSummary.statistics[j].value }
                }
                else if (a[k].athlete.statsSummary.statistics[j].value >= leader2.data) {
                    leader4 = { "name": leader3.name, "data": leader3.data }
                    leader3 = { "name": leader2.name, "data": leader2.data }
                    leader2 = { "name": a[k].athlete.displayName, "data": a[k].athlete.statsSummary.statistics[j].value }
                }
                else if (a[k].athlete.statsSummary.statistics[j].value >= leader3.data) {
                    leader4 = { "name": leader3.name, "data": leader3.data }
                    leader3 = { "name": a[k].athlete.displayName, "data": a[k].athlete.statsSummary.statistics[j].value }
                }
                else if (a[k].athlete.statsSummary.statistics[j].value >= leader4.data) {
                    leader4 = { "name": a[k].athlete.displayName, "data": a[k].athlete.statsSummary.statistics[j].value }
                }
            }

        }
        return { "question": "Who leads " + this.state.teamCode[i] + " in " + this.state.statsCode[j] + "?", "questionImg": a[0], "correctAnswer": leader1.name, "wrongAnswer1": leader2.name, "wrongAnswer2": leader3.name, "wrongAnswer3": leader4.name }
    }

    getStatsQuestions() {
        var i, j, a = [],a2=[]
        for (i = 1; i < 31; i++) {

            a.push(this.getStatsQuestionsHelp(i))
        }
        setTimeout(() => {
            for (i = 0; i < a.length; i++) {
                for (j = 0; j < 3; j++) {
                    a2.push(this.getStatsQuestionsHelp2(a[i],j,i))
                }
            }
            this.setState({ StatsQuestions: a2 })
        }, 11000)

    }

    getTopPlayers() {
        var i, j, a = []
        for (i = 1; i < 31; i++) {
            fetch('https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/' + i + '/roster')
                .then(response => response.json())
                .then(result => {
                    for (j = 0; j < result.athletes.length; j++) {
                        if (result.athletes[j].experience.years !== 0) {
                            fetch('https://site.web.api.espn.com/apis/common/v3/sports/basketball/nba/athletes/' + result.athletes[j].id)
                                .then(response => response.json())
                                .then(response => {
                                    if (response.athlete.statsSummary.statistics[0].value >= 15 || response.athlete.statsSummary.statistics[1].value >= 10 || response.athlete.statsSummary.statistics[2].value >= 6)
                                        a.push(response)

                                })
                        }
                    }
                })
        }
        setTimeout(() => {
            this.setState({ topPlayers: a })
            setTimeout(() => {
                this.getPictureQuestions()
                this.getCollegeQuestion()
            },1000)
        }, 5000)
    }

    getPictureQuestions() {
        var a = [], i
        for (i = 0 ; i < this.state.topPlayers.length; i++) {
            do {
                var wrong1 = Math.floor(Math.random() * this.state.topPlayers.length)
            } while (wrong1 === i)
            do {
                var wrong2 = Math.floor(Math.random() * this.state.topPlayers.length)
            } while (wrong2 === i || wrong2 === wrong1)
            do {
                var wrong3 = Math.floor(Math.random() * this.state.topPlayers.length)
            } while (wrong3 === i || wrong3 === wrong1 || wrong3 === wrong2)
            a.push({ "question": "Name the player.", "questionImg": this.state.topPlayers[i].athlete.headshot.href, "correctAnswer": this.state.topPlayers[i].athlete.displayName, "wrongAnswer1": this.state.topPlayers[wrong1].athlete.displayName, "wrongAnswer2": this.state.topPlayers[wrong2].athlete.displayName, "wrongAnswer3": this.state.topPlayers[wrong3].athlete.displayName })
        }
        setTimeout(() => {
            this.setState({ pictureQuestions: a })
        },5000)
    }

    getCollegeQuestion() {
        var a = [], i
        for (i = 0; i < this.state.topPlayers.length; i++) {
            if (this.state.topPlayers[i].athlete.hasOwnProperty('collegeTeam') && (this.state.topPlayers[i].athlete.statsSummary.statistics[0].rank <= 30 || this.state.topPlayers[i].athlete.statsSummary.statistics[1].rank <= 10 || this.state.topPlayers[i].athlete.statsSummary.statistics[2].rank <= 10)) {
                do {
                    var wrong1 = Math.floor(Math.random() * this.state.topPlayers.length)
                } while (!this.state.topPlayers[wrong1].athlete.hasOwnProperty('collegeTeam') || this.state.topPlayers[wrong1].athlete.collegeTeam.displayName === this.state.topPlayers[i].athlete.collegeTeam.displayName)
                do {
                    var wrong2 = Math.floor(Math.random() * this.state.topPlayers.length)
                } while (!this.state.topPlayers[wrong2].athlete.hasOwnProperty('collegeTeam') || this.state.topPlayers[wrong2].athlete.collegeTeam.displayName === this.state.topPlayers[i].athlete.collegeTeam.displayName || this.state.topPlayers[wrong2].athlete.collegeTeam.displayName === this.state.topPlayers[wrong1].athlete.collegeTeam.displayName)
                do {
                    var wrong3 = Math.floor(Math.random() * this.state.topPlayers.length)
                } while (!this.state.topPlayers[wrong3].athlete.hasOwnProperty('collegeTeam') || this.state.topPlayers[wrong3].athlete.collegeTeam.displayName === this.state.topPlayers[i].athlete.collegeTeam.displayName || this.state.topPlayers[wrong3].athlete.collegeTeam.displayName === this.state.topPlayers[wrong1].athlete.collegeTeam.displayName || this.state.topPlayers[wrong3].athlete.collegeTeam.displayName === this.state.topPlayers[wrong2].athlete.collegeTeam.displayName)
                a.push({ "question": "Where " + this.state.topPlayers[i].athlete.fullName+" played in college?", "questionImg": this.state.topPlayers[i].athlete.headshot.href, "correctAnswer": this.state.topPlayers[i].athlete.collegeTeam.displayName, "wrongAnswer1": this.state.topPlayers[wrong1].athlete.collegeTeam.displayName, "wrongAnswer2": this.state.topPlayers[wrong2].athlete.collegeTeam.displayName, "wrongAnswer3": this.state.topPlayers[wrong3].athlete.collegeTeam.displayName })
            }
            
        }
        setTimeout(() => {
            this.setState({ collegeQuestions: a })
            setTimeout(() => {
                this.getQuestions()
            }, 1000)
        }, 5000)
    }

    getQuestion = () => {
        if (1 === 1) {
            do {
                var player = Math.floor(Math.random() * this.state.topPlayers.length)
            } while (this.state.pastPlayerPhotoQuestion.includes(player))
            do {
                var wrong1 = Math.floor(Math.random() * this.state.topPlayers.length)
            } while (wrong1 === player)
            do {
                var wrong2 = Math.floor(Math.random() * this.state.topPlayers.length)
            } while (wrong2 === player || wrong2 === wrong1)
            do {
                var wrong3 = Math.floor(Math.random() * this.state.topPlayers.length)
            } while (wrong3 === player || wrong3 === wrong1 || wrong3 === wrong2)
            this.setState({
                question: { "question": "Name the player.", "questionImg": this.state.topPlayers[player].athlete.headshot.href, "correctAnswer": this.state.topPlayers[player].athlete.displayName, "wrongAnswer1": this.state.topPlayers[wrong1].athlete.displayName, "wrongAnswer2": this.state.topPlayers[wrong2].athlete.displayName, "wrongAnswer3": this.state.topPlayers[wrong3].athlete.displayName }
            })
            const array = [this.state.question.correctAnswer, this.state.question.wrongAnswer1, this.state.question.wrongAnswer2, this.state.question.wrongAnswer3]
            let ctr = array.length, temp, index
            while (ctr > 0) {
                index = Math.floor(Math.random() * ctr)
                ctr--
                temp = array[ctr]
                array[ctr] = array[index]
                array[index] = temp
            }
            this.setState({ randomAnswers: array })
            this.setState({ time: 100 })
            this.setState({ notClicked: true })
            var tempA = this.state.pastPlayerPhotoQuestion.concat(player)
            this.setState({ pastPlayerPhotoQuestion: tempA })
        }

        else {
            let randomTeam = Math.floor(Math.random() * 30) + 1;
            let randomStats = Math.floor(Math.random() * 3);
            var newQuestion = true, i
            do {
                newQuestion = true
                for (i = 0; i < this.state.pastQuestions.length; i++) {
                    if (this.state.pastQuestions[i].team === randomTeam && this.state.pastQuestions[i].stat === randomStats) {
                        randomTeam = Math.floor(Math.random() * 30) + 1
                        randomStats = Math.floor(Math.random() * 3);
                        newQuestion = false
                        break
                    }
                }
            } while (!newQuestion)
            var imgUrl
            fetch('https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/' + randomTeam)
                .then(response => response.json())
                .then(response => {
                    imgUrl = response.team.logos[0].href
                })


            var leader1 = { "name": "", "data": 0 }, leader2 = { "name": "", "data": 0 }, leader3 = { "name": "", "data": 0 }, leader4 = { "name": "", "data": 0 }, a = []
            fetch('https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/' + randomTeam + '/roster')
                .then(response => response.json())
                .then(result => {
                    this.setState({ data: result.athletes })
                    for (i = 0; i < result.athletes.length; i++) {
                        if (result.athletes[i].experience.years !== 0) {
                            fetch('https://site.web.api.espn.com/apis/common/v3/sports/basketball/nba/athletes/' + result.athletes[i].id)
                                .then(response => response.json())
                                .then(response => {
                                    a.push(response)

                                })
                        }
                    }
                })
                .then(() => {
                    this.setState({ data: a })
                    setTimeout(() => {
                        for (i = 0; i < a.length; i++) {
                            if (a[i].athlete.statsSummary.displayName === "2020-21 season stats") {
                                if (a[i].athlete.statsSummary.statistics[randomStats].value >= leader1.data) {

                                    leader4 = { "name": leader3.name, "data": leader3.data }
                                    leader3 = { "name": leader2.name, "data": leader2.data }
                                    leader2 = { "name": leader1.name, "data": leader1.data }
                                    leader1 = { "name": a[i].athlete.displayName, "data": a[i].athlete.statsSummary.statistics[randomStats].value }
                                }
                                else if (a[i].athlete.statsSummary.statistics[randomStats].value >= leader2.data) {
                                    leader4 = { "name": leader3.name, "data": leader3.data }
                                    leader3 = { "name": leader2.name, "data": leader2.data }
                                    leader2 = { "name": a[i].athlete.displayName, "data": a[i].athlete.statsSummary.statistics[randomStats].value }
                                }
                                else if (a[i].athlete.statsSummary.statistics[randomStats].value >= leader3.data) {
                                    leader4 = { "name": leader3.name, "data": leader3.data }
                                    leader3 = { "name": a[i].athlete.displayName, "data": a[i].athlete.statsSummary.statistics[randomStats].value }
                                }
                                else if (a[i].athlete.statsSummary.statistics[randomStats].value >= leader4.data) {
                                    leader4 = { "name": a[i].athlete.displayName, "data": a[i].athlete.statsSummary.statistics[randomStats].value }
                                }
                            }
                        }
                        this.setState({
                            question: { "question": "Who leads " + this.state.teamCode[randomTeam - 1] + " in " + this.state.statsCode[randomStats] + "?", "questionImg": imgUrl, "correctAnswer": leader1.name, "wrongAnswer1": leader2.name, "wrongAnswer2": leader3.name, "wrongAnswer3": leader4.name }
                        })
                        const array = [this.state.question.correctAnswer, this.state.question.wrongAnswer1, this.state.question.wrongAnswer2, this.state.question.wrongAnswer3]
                        let ctr = array.length, temp, index
                        while (ctr > 0) {
                            index = Math.floor(Math.random() * ctr)
                            ctr--
                            temp = array[ctr]
                            array[ctr] = array[index]
                            array[index] = temp
                        }
                        this.setState({ randomAnswers: array })
                        this.setState({ time: 100 })
                        this.setState({ notClicked: true })
                        var tempA = this.state.pastQuestions.concat({ "team": randomTeam, "stat": randomStats })
                        this.setState({ pastQuestions: tempA })
                    }, 1000)

                })
        }
    }


    handleNameChange(event) {
        this.setState({ name: event.target.value })
    }

    enterPressed(event) {
        var code = event.keyCode || event.which
        if (code === 13)
            this.handleStart()
    }

    handleStart() {
        if (this.state.name.length > 0 && this.state.Ready) {
            this.setState({ gameStarted: true })
            this.setState({ time: 100 })
            clearInterval(this.myInterval)
            this.myInterval = setInterval(() => {
                if (this.state.time > -10) {
                    this.setState(({ time }) => ({ time: time - 1 }))
                }
                if (this.state.time === 0) {
                    this.handleTimesUp()
                }
            }, 200)
        }
    }

    handleClick(event) {
        clearInterval(this.myInterval)
        if (event.target.textContent.trim() === this.state.questions[this.state.currentQuestionId].correctAnswer.trim()) {
            event.target.style.backgroundColor = '#79ff4d'
            this.setState(({ totalScore }) => ({ totalScore: totalScore + this.state.time }))
        }

        else {
            event.target.style.backgroundColor = '#ff4000'
            this.setState((prevState) => {
                return { lives: prevState.lives - 1 }
            })
        }
        this.setState({ notClicked: false })
        
        setTimeout(() => {

            if (this.state.lives === 0 || this.state.questionNum === this.state.questions.length) {
                this.handleEndGame()
            }
            else {
                this.nextQuestion()
            }
        }, 2000)


    }

    handleTimesUp() {
        clearInterval(this.myInterval)
        this.setState(({ lives }) => ({ lives: lives - 1 }))
        setTimeout(() => {
            if (this.state.lives === 0 || this.state.questionNum === this.state.questions.length) {
                this.handleEndGame()
            }
            else {
                this.nextQuestion()
            }
        }, 2000)
    }

    nextQuestion() {
        this.setState({ notClicked: true })
        this.setState(({ questionNum }) => ({ questionNum: questionNum + 1 }))
        this.setState(({ currentQuestionId }) => ({ currentQuestionId: currentQuestionId + 1 }))
        const array = [this.state.questions[this.state.currentQuestionId].correctAnswer, this.state.questions[this.state.currentQuestionId].wrongAnswer1, this.state.questions[this.state.currentQuestionId].wrongAnswer2, this.state.questions[this.state.currentQuestionId].wrongAnswer3]
        let ctr = array.length, temp, index
        while (ctr > 0) {
            index = Math.floor(Math.random() * ctr)
            ctr--
            temp = array[ctr]
            array[ctr] = array[index]
            array[index] = temp
        }
        this.setState({ randomAnswers: array })
        this.setState({ time: 100 })
        this.myInterval = setInterval(() => {
            if (this.state.time > -10) {
                this.setState(({ time }) => ({ time: time - 1 }))
            }
            if (this.state.time === -10) {
                this.handleTimesUp()
            }
            }, 200)
    }

    handleEndGame() {
        this.setState({ gameOver: true})
        fetch('https://tlmy7kec05.execute-api.us-east-2.amazonaws.com/Prod/nbaleaderboard')
            .then(response => response.json())
            .then(response => {
                if (response.length > 9 && response[9].score > this.state.totalScore)
                    this.setState({ leaderboard: response })
                else {
                    fetch(`https://tlmy7kec05.execute-api.us-east-2.amazonaws.com/Prod/addnbascore?name=${this.state.name.toUpperCase().trim()}&score=${this.state.totalScore}`)
                    setTimeout(() => {
                        fetch('https://tlmy7kec05.execute-api.us-east-2.amazonaws.com/Prod/nbaleaderboard')
                            .then(response => response.json())
                            .then(response => this.setState({ leaderboard: response }))
                        fetch('https://tlmy7kec05.execute-api.us-east-2.amazonaws.com/Prod/deletenbascore')
                    },1000)
                }
            })
    }

    

    handleNewGame() {
        this.setState({
            lives: 3,
            questionNum: 1,
            totalScore: 0,
            currentQuestionId: 0,
            notClicked: true,
            randomAnswers: [],
            time: 100,
            gameOver: false,
            gameStarted: false,
            name: '',
            leaderboard: [{ "name": "loading...", "score": "n/a" }, { "name": "loading...", "score": "n/a" }, { "name": "loading...", "score": "n/a" }, { "name": "loading...", "score": "n/a" }, { "name": "loading...", "score": "n/a" }, { "name": "loading...", "score": "n/a" }, { "name": "loading...", "score": "n/a" }, { "name": "loading...", "score": "n/a" }, { "name": "loading...", "score": "n/a" }, { "name": "loading...", "score": "n/a" }]
        })
        setTimeout(() => {
            const a = this.state.questions
            var ctr = a.length, temp, index
            while (ctr > 0) {
                index = Math.floor(Math.random() * ctr)
                ctr--
                temp = a[ctr]
                a[ctr] = a[index]
                a[index] = temp
            }
            this.setState({ questions: a })
            const array = [this.state.questions[this.state.currentQuestionId].correctAnswer, this.state.questions[this.state.currentQuestionId].wrongAnswer1, this.state.questions[this.state.currentQuestionId].wrongAnswer2, this.state.questions[this.state.currentQuestionId].wrongAnswer3]
            ctr = array.length
            while (ctr > 0) {
                index = Math.floor(Math.random() * ctr)
                ctr--
                temp = array[ctr]
                array[ctr] = array[index]
                array[index] = temp
            }
            this.setState({ randomAnswers: array })
        },1000)
    }

    displayLives() {
        let i
        for (i = 0; i < this.state.lives; i++) {
            return (<div style={{ display: "inline-block" }}><img src={heart2} width="40px" alt="error" /></div>)
        }
    }

    render() {
        return (
            <div className="game">
                <div style={{ display: this.state.gameStarted ? "none" : "block", marginTop: "7vh" }}>
                    <img src={nba} height="88vh" /><h1 className="headline-njit" >NBA</h1>
                    {/*<h1 className="headline-snd" >Statistics</h1>*/}
                    <h1 className="headline" >Trivia Game</h1>
                    <input className="name-input" type="text" minLength="1" maxLength="10" placeholder="Enter your name" value={this.state.name} onChange={this.handleNameChange} onSubmit={this.handleStart} onKeyPress={this.enterPressed.bind(this)} style={{ width: 200, margin: "1rem auto", fontWeight: "bold" }} />
                    <div className="start-button" onClick={this.handleStart}>{!this.state.Ready ? "Loading..." : "start!"}</div>
                </div>
                <div style={{ display: !this.state.gameOver && this.state.gameStarted ? "block" : "none" }}>
                    <table style={{ display: this.state.questions && this.state.gameStarted ? "block" : "none" }} className="table-bar" >
                        <tr>
                            <td className="td-bar">{this.state.totalScore}</td>
                            <td className="td-bar">#{this.state.questionNum}</td>
                            <td className="td-bar">{this.state.time > 0 ? (this.state.time / 5 + 0.8 | 0) : "Time's up!"}</td>
                            <td className="td-bar">
                                <div>
                                    <div style={{ display: this.state.lives > 0 ? "inline-block" : "none" }}><img src={heart2} width="25rem" alt="error" /></div>
                                    <div style={{ display: this.state.lives > 1 ? "inline-block" : "none" }}><img src={heart2} width="25rem" alt="error" /></div>
                                    <div style={{ display: this.state.lives > 2 ? "inline-block" : "none" }}><img src={heart2} width={window.innerWidth > 900 ? "25rem" : "25rem"} alt="error" /></div>
                                </div>
                            </td>
                        </tr>
                    </table>
                    <br style={{ display: this.state.questions && this.state.time > -10 ? "block" : "none" }} />
                    <div className="question" style={{ display: this.state.questions && this.state.time > -10 ? "block" : "none" }}><img src={this.state.questions && this.state.questions[this.state.currentQuestionId].questionImg} height="120vh" /><br height="10vh" />{this.state.questions && this.state.questions[this.state.currentQuestionId].question}</div>                    <div className="div-answer" onClick={this.state.notClicked && this.state.time > 0 && this.handleClick} style={{ display: this.state.questions && this.state.time > -10 ? "block" : "none", backgroundColor: this.state.time === 100 && '' }}>{this.state.questions && this.state.randomAnswers[0]}</div>
                    <div className="div-answer" onClick={this.state.notClicked && this.state.time > 0 && this.handleClick} style={{ display: this.state.questions && this.state.time > -10 ? "block" : "none", backgroundColor: this.state.time === 100 && '' }}>{this.state.questions && this.state.randomAnswers[1]}</div>
                    <div className="div-answer" onClick={this.state.notClicked && this.state.time > 0 && this.handleClick} style={{ display: this.state.questions && this.state.time > -10 ? "block" : "none", backgroundColor: this.state.time === 100 && '' }}>{this.state.questions && this.state.randomAnswers[2]}</div>
                    <div className="div-answer" onClick={this.state.notClicked && this.state.time > 0 && this.handleClick} style={{ display: this.state.questions && this.state.time > -10 ? "block" : "none", backgroundColor: this.state.time === 100 && '' }}>{this.state.questions && this.state.randomAnswers[3]}</div>
                </div>
                <div style={{ display: this.state.gameOver && this.state.gameStarted ? "block" : "none" }}>
                    <h1 className="final-score" style={{ display: this.state.gameOver ? "block" : "none" }}>Final Score: {this.state.totalScore}</h1>
                    <h1 className="leaderboard-headline">Top 10 leaderboard</h1>
                    <table className="leaderboard-table" style={{ display: this.state.leaderboard ? "block" : "none", backgroundColor: "#e6e6e6", width: "19rem", margin: "1rem auto", border: "1px solid black", borderRadius: 25, padding: "1rem" }}>
                        <tr>
                            <td style={{ width: "2rem" }}>#</td>
                            <td style={{ width: "10rem" }}>name</td>
                            <td style={{ width: "5rem" }}>score</td>
                        </tr>
                        <tr style={{ display: this.state.leaderboard.length > 0 ? "block" : "none" }}>
                            <td style={{ color: this.state.leaderboard.length > 0 && this.state.name.toUpperCase().trim() === this.state.leaderboard[0].name.toUpperCase().trim() && "red", fontWeight: this.state.leaderboard.length > 0 && this.state.name.toUpperCase().trim() === this.state.leaderboard[0].name.toUpperCase().trim() && this.state.leaderboard[0].score === this.state.totalScore && "bold", width: "2rem" }}>1</td>
                            <td style={{ color: this.state.leaderboard.length > 0 && this.state.name.toUpperCase().trim() === this.state.leaderboard[0].name.toUpperCase().trim() && "red", fontWeight: this.state.leaderboard.length > 0 && this.state.name.toUpperCase().trim() === this.state.leaderboard[0].name.toUpperCase().trim() && this.state.leaderboard[0].score === this.state.totalScore && "bold", width: "10rem" }}>{this.state.leaderboard.length > 0 && this.state.leaderboard[0].name}</td>
                            <td style={{ color: this.state.leaderboard.length > 0 && this.state.name.toUpperCase().trim() === this.state.leaderboard[0].name.toUpperCase().trim() && "red", fontWeight: this.state.leaderboard.length > 0 && this.state.name.toUpperCase().trim() === this.state.leaderboard[0].name.toUpperCase().trim() && this.state.leaderboard[0].score === this.state.totalScore && "bold", width: "5rem" }}>{this.state.leaderboard.length > 0 && this.state.leaderboard[0].score}</td>
                        </tr>
                        <tr style={{ display: this.state.leaderboard.length > 1 ? "block" : "none" }}>
                            <td style={{ color: this.state.leaderboard.length > 1 && this.state.name.toUpperCase().trim() === this.state.leaderboard[1].name.toUpperCase().trim() && "red", fontWeight: this.state.leaderboard.length > 1 && this.state.name.toUpperCase().trim() === this.state.leaderboard[1].name.toUpperCase().trim() && this.state.leaderboard[1].score === this.state.totalScore && "bold", width: "2rem" }}>2</td>
                            <td style={{ color: this.state.leaderboard.length > 1 && this.state.name.toUpperCase().trim() === this.state.leaderboard[1].name.toUpperCase().trim() && "red", fontWeight: this.state.leaderboard.length > 1 && this.state.name.toUpperCase().trim() === this.state.leaderboard[1].name.toUpperCase().trim() && this.state.leaderboard[1].score === this.state.totalScore && "bold", width: "10rem" }}>{this.state.leaderboard.length > 1 && this.state.leaderboard[1].name}</td>
                            <td style={{ color: this.state.leaderboard.length > 1 && this.state.name.toUpperCase().trim() === this.state.leaderboard[1].name.toUpperCase().trim() && "red", fontWeight: this.state.leaderboard.length > 1 && this.state.name.toUpperCase().trim() === this.state.leaderboard[1].name.toUpperCase().trim() && this.state.leaderboard[1].score === this.state.totalScore && "bold", width: "5rem" }}>{this.state.leaderboard.length > 1 && this.state.leaderboard[1].score}</td>
                        </tr>
                        <tr style={{ display: this.state.leaderboard.length > 2 ? "block" : "none" }}>
                            <td style={{ color: this.state.leaderboard.length > 2 && this.state.name.toUpperCase().trim() === this.state.leaderboard[2].name.toUpperCase().trim() && "red", fontWeight: this.state.leaderboard.length > 2 && this.state.name.toUpperCase().trim() === this.state.leaderboard[2].name.toUpperCase().trim() && this.state.leaderboard[2].score === this.state.totalScore && "bold", width: "2rem" }}>3</td>
                            <td style={{ color: this.state.leaderboard.length > 2 && this.state.name.toUpperCase().trim() === this.state.leaderboard[2].name.toUpperCase().trim() && "red", fontWeight: this.state.leaderboard.length > 2 && this.state.name.toUpperCase().trim() === this.state.leaderboard[2].name.toUpperCase().trim() && this.state.leaderboard[2].score === this.state.totalScore && "bold", width: "10rem" }}>{this.state.leaderboard.length > 2 && this.state.leaderboard[2].name}</td>
                            <td style={{ color: this.state.leaderboard.length > 2 && this.state.name.toUpperCase().trim() === this.state.leaderboard[2].name.toUpperCase().trim() && "red", fontWeight: this.state.leaderboard.length > 2 && this.state.name.toUpperCase().trim() === this.state.leaderboard[2].name.toUpperCase().trim() && this.state.leaderboard[2].score === this.state.totalScore && "bold", width: "5rem" }}>{this.state.leaderboard.length > 2 && this.state.leaderboard[2].score}</td>
                        </tr>
                        <tr style={{ display: this.state.leaderboard.length > 3 ? "block" : "none" }}>
                            <td style={{ color: this.state.leaderboard.length > 3 && this.state.name.toUpperCase().trim() === this.state.leaderboard[3].name.toUpperCase().trim() && "red", fontWeight: this.state.leaderboard.length > 3 && this.state.name.toUpperCase().trim() === this.state.leaderboard[3].name.toUpperCase().trim() && this.state.leaderboard[3].score === this.state.totalScore && "bold", width: "2rem" }}>4</td>
                            <td style={{ color: this.state.leaderboard.length > 3 && this.state.name.toUpperCase().trim() === this.state.leaderboard[3].name.toUpperCase().trim() && "red", fontWeight: this.state.leaderboard.length > 3 && this.state.name.toUpperCase().trim() === this.state.leaderboard[3].name.toUpperCase().trim() && this.state.leaderboard[3].score === this.state.totalScore && "bold", width: "10rem" }}>{this.state.leaderboard.length > 3 && this.state.leaderboard[3].name}</td>
                            <td style={{ color: this.state.leaderboard.length > 3 && this.state.name.toUpperCase().trim() === this.state.leaderboard[3].name.toUpperCase().trim() && "red", fontWeight: this.state.leaderboard.length > 3 && this.state.name.toUpperCase().trim() === this.state.leaderboard[3].name.toUpperCase().trim() && this.state.leaderboard[3].score === this.state.totalScore && "bold", width: "5rem" }}>{this.state.leaderboard.length > 3 && this.state.leaderboard[3].score}</td>
                        </tr>
                        <tr style={{ display: this.state.leaderboard.length > 4 ? "block" : "none" }}>
                            <td style={{ color: this.state.leaderboard.length > 4 && this.state.name.toUpperCase().trim() === this.state.leaderboard[4].name.toUpperCase().trim() && "red", fontWeight: this.state.leaderboard.length > 4 && this.state.name.toUpperCase().trim() === this.state.leaderboard[4].name.toUpperCase().trim() && this.state.leaderboard[4].score === this.state.totalScore && "bold", width: "2rem" }}>5</td>
                            <td style={{ color: this.state.leaderboard.length > 4 && this.state.name.toUpperCase().trim() === this.state.leaderboard[4].name.toUpperCase().trim() && "red", fontWeight: this.state.leaderboard.length > 4 && this.state.name.toUpperCase().trim() === this.state.leaderboard[4].name.toUpperCase().trim() && this.state.leaderboard[4].score === this.state.totalScore && "bold", width: "10rem" }}>{this.state.leaderboard.length > 4 && this.state.leaderboard[4].name}</td>
                            <td style={{ color: this.state.leaderboard.length > 4 && this.state.name.toUpperCase().trim() === this.state.leaderboard[4].name.toUpperCase().trim() && "red", fontWeight: this.state.leaderboard.length > 4 && this.state.name.toUpperCase().trim() === this.state.leaderboard[4].name.toUpperCase().trim() && this.state.leaderboard[4].score === this.state.totalScore && "bold", width: "5rem" }}>{this.state.leaderboard.length > 4 && this.state.leaderboard[4].score}</td>
                        </tr>
                        <tr style={{ display: this.state.leaderboard.length > 5 ? "block" : "none" }}>
                            <td style={{ color: this.state.leaderboard.length > 5 && this.state.name.toUpperCase().trim() === this.state.leaderboard[5].name.toUpperCase().trim() && "red", fontWeight: this.state.leaderboard.length > 5 && this.state.name.toUpperCase().trim() === this.state.leaderboard[5].name.toUpperCase().trim() && this.state.leaderboard[5].score === this.state.totalScore && "bold", width: "2rem" }}>6</td>
                            <td style={{ color: this.state.leaderboard.length > 5 && this.state.name.toUpperCase().trim() === this.state.leaderboard[5].name.toUpperCase().trim() && "red", fontWeight: this.state.leaderboard.length > 5 && this.state.name.toUpperCase().trim() === this.state.leaderboard[5].name.toUpperCase().trim() && this.state.leaderboard[5].score === this.state.totalScore && "bold", width: "10rem" }}>{this.state.leaderboard.length > 5 && this.state.leaderboard[5].name}</td>
                            <td style={{ color: this.state.leaderboard.length > 5 && this.state.name.toUpperCase().trim() === this.state.leaderboard[5].name.toUpperCase().trim() && "red", fontWeight: this.state.leaderboard.length > 5 && this.state.name.toUpperCase().trim() === this.state.leaderboard[5].name.toUpperCase().trim() && this.state.leaderboard[5].score === this.state.totalScore && "bold", width: "5rem" }}>{this.state.leaderboard.length > 5 && this.state.leaderboard[5].score}</td>
                        </tr>
                        <tr style={{ display: this.state.leaderboard.length > 6 ? "block" : "none" }}>
                            <td style={{ color: this.state.leaderboard.length > 6 && this.state.name.toUpperCase().trim() === this.state.leaderboard[6].name.toUpperCase().trim() && "red", fontWeight: this.state.leaderboard.length > 6 && this.state.name.toUpperCase().trim() === this.state.leaderboard[6].name.toUpperCase().trim() && this.state.leaderboard[6].score === this.state.totalScore && "bold", width: "2rem" }}>7</td>
                            <td style={{ color: this.state.leaderboard.length > 6 && this.state.name.toUpperCase().trim() === this.state.leaderboard[6].name.toUpperCase().trim() && "red", fontWeight: this.state.leaderboard.length > 6 && this.state.name.toUpperCase().trim() === this.state.leaderboard[6].name.toUpperCase().trim() && this.state.leaderboard[6].score === this.state.totalScore && "bold", width: "10rem" }}>{this.state.leaderboard.length > 6 && this.state.leaderboard[6].name}</td>
                            <td style={{ color: this.state.leaderboard.length > 6 && this.state.name.toUpperCase().trim() === this.state.leaderboard[6].name.toUpperCase().trim() && "red", fontWeight: this.state.leaderboard.length > 6 && this.state.name.toUpperCase().trim() === this.state.leaderboard[6].name.toUpperCase().trim() && this.state.leaderboard[6].score === this.state.totalScore && "bold", width: "5rem" }}>{this.state.leaderboard.length > 6 && this.state.leaderboard[6].score}</td>
                        </tr>
                        <tr style={{ display: this.state.leaderboard.length > 7 ? "block" : "none" }}>
                            <td style={{ color: this.state.leaderboard.length > 7 && this.state.name.toUpperCase().trim() === this.state.leaderboard[7].name.toUpperCase().trim() && "red", fontWeight: this.state.leaderboard.length > 7 && this.state.name.toUpperCase().trim() === this.state.leaderboard[7].name.toUpperCase().trim() && this.state.leaderboard[7].score === this.state.totalScore && "bold", width: "2rem" }}>8</td>
                            <td style={{ color: this.state.leaderboard.length > 7 && this.state.name.toUpperCase().trim() === this.state.leaderboard[7].name.toUpperCase().trim() && "red", fontWeight: this.state.leaderboard.length > 7 && this.state.name.toUpperCase().trim() === this.state.leaderboard[7].name.toUpperCase().trim() && this.state.leaderboard[7].score === this.state.totalScore && "bold", width: "10rem" }}>{this.state.leaderboard.length > 7 && this.state.leaderboard[7].name}</td>
                            <td style={{ color: this.state.leaderboard.length > 7 && this.state.name.toUpperCase().trim() === this.state.leaderboard[7].name.toUpperCase().trim() && "red", fontWeight: this.state.leaderboard.length > 7 && this.state.name.toUpperCase().trim() === this.state.leaderboard[7].name.toUpperCase().trim() && this.state.leaderboard[7].score === this.state.totalScore && "bold", width: "5rem" }}>{this.state.leaderboard.length > 7 && this.state.leaderboard[7].score}</td>
                        </tr>
                        <tr style={{ display: this.state.leaderboard.length > 8 ? "block" : "none" }}>
                            <td style={{ color: this.state.leaderboard.length > 8 && this.state.name.toUpperCase().trim() === this.state.leaderboard[8].name.toUpperCase().trim() && "red", fontWeight: this.state.leaderboard.length > 8 && this.state.name.toUpperCase().trim() === this.state.leaderboard[8].name.toUpperCase().trim() && this.state.leaderboard[8].score === this.state.totalScore && "bold", width: "2rem" }}>9</td>
                            <td style={{ color: this.state.leaderboard.length > 8 && this.state.name.toUpperCase().trim() === this.state.leaderboard[8].name.toUpperCase().trim() && "red", fontWeight: this.state.leaderboard.length > 8 && this.state.name.toUpperCase().trim() === this.state.leaderboard[8].name.toUpperCase().trim() && this.state.leaderboard[8].score === this.state.totalScore && "bold", width: "10rem" }}>{this.state.leaderboard.length > 8 && this.state.leaderboard[8].name}</td>
                            <td style={{ color: this.state.leaderboard.length > 8 && this.state.name.toUpperCase().trim() === this.state.leaderboard[8].name.toUpperCase().trim() && "red", fontWeight: this.state.leaderboard.length > 8 && this.state.name.toUpperCase().trim() === this.state.leaderboard[8].name.toUpperCase().trim() && this.state.leaderboard[8].score === this.state.totalScore && "bold", width: "5rem" }}>{this.state.leaderboard.length > 8 && this.state.leaderboard[8].score}</td>
                        </tr>
                        <tr style={{ display: this.state.leaderboard.length > 9 ? "block" : "none" }}>
                            <td style={{ color: this.state.leaderboard.length > 9 && this.state.name.toUpperCase().trim() === this.state.leaderboard[9].name.toUpperCase().trim() && "red", fontWeight: this.state.leaderboard.length > 9 && this.state.name.toUpperCase().trim() === this.state.leaderboard[9].name.toUpperCase().trim() && this.state.leaderboard[9].score === this.state.totalScore && "bold", width: "2rem" }}>10</td>
                            <td style={{ color: this.state.leaderboard.length > 9 && this.state.name.toUpperCase().trim() === this.state.leaderboard[9].name.toUpperCase().trim() && "red", fontWeight: this.state.leaderboard.length > 9 && this.state.name.toUpperCase().trim() === this.state.leaderboard[9].name.toUpperCase().trim() && this.state.leaderboard[9].score === this.state.totalScore && "bold", width: "10rem" }}>{this.state.leaderboard.length > 9 && this.state.leaderboard[9].name}</td>
                            <td style={{ color: this.state.leaderboard.length > 9 && this.state.name.toUpperCase().trim() === this.state.leaderboard[9].name.toUpperCase().trim() && "red", fontWeight: this.state.leaderboard.length > 9 && this.state.name.toUpperCase().trim() === this.state.leaderboard[9].name.toUpperCase().trim() && this.state.leaderboard[9].score === this.state.totalScore && "bold", width: "5rem" }}>{this.state.leaderboard.length > 9 && this.state.leaderboard[9].score}</td>
                        </tr>
                    </table>
                    <div className="start-button" onClick={this.handleNewGame}>play agian!</div>
                </div>
            </div>
        )
    }
}

export default Game