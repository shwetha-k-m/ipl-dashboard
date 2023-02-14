// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

// const TeamCardList = [
//   {
//     name: 'Royal Challengers Bangalore',
//     id: 'RCB',
//     teamImageUrl: 'https://assets.ccbp.in/frontend/react-js/rcb-logo-img.png',
//   },
//   {
//     name: 'Royal Challengers Bangalore',
//     id: 'RCB',
//     teamImageUrl: 'https://assets.ccbp.in/frontend/react-js/rcb-logo-img.png',
//   },
// ]

class Home extends Component {
  state = {
    TeamCardList: [],
    isLoading: true,
  }

  componentDidMount = () => {
    this.getTeamData()
  }

  getTeamData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const datalist = data.teams
    console.log(datalist)

    const updatedData = datalist.map(eachData => ({
      name: eachData.name,
      id: eachData.id,
      teamImageUrl: eachData.team_image_url,
    }))
    console.log(updatedData)
    this.setState({
      TeamCardList: updatedData,
      isLoading: false,
    })
  }

  render() {
    const {TeamCardList, isLoading} = this.state

    return (
      <div className="app-container">
        <div className="ipl-home-container">
          <div className="logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              className="ipl-logo"
              alt="ipl logo"
            />
            <h1 className="dashboard-heading">IPL Dashboard</h1>
          </div>
          {isLoading ? (
            <div>
              {' '}
              <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
            </div>
          ) : (
            <ul className="team-card-container">
              {TeamCardList.map(eachCard => (
                <TeamCard TeamCardDetails={eachCard} key={eachCard.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}
export default Home
