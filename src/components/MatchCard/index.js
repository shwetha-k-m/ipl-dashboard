// Write your code here
// umpires: 'RK Illingworth, K Srinivasan',
//         result: 'Royal Challengers Bangalore Won by 82 runs',
//         manOfTheMatch: 'AB de Villiers',
//         id: '1216540',
//         date: '2020-10-12',
//         venue: 'At Sharjah Cricket Stadium, Sharjah',
//         competingTeam: 'Royal Challengers Bangalore',
//         competingTeamLogo:
//           'https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/1200px-Royal_Challengers_Bangalore_2020.svg.png',
//         // use value of the key 'competing_team' for alt as `competing team ${competing_team}`
//         firstInnings: 'Royal Challengers Bangalore',
//         secondInnings: 'Kolkata Knight Riders',
//         matchStatus: 'Lost',
import './index.css'

const MatchCard = props => {
  const {eachmatch} = props
  const {umpires, result, id, date, venue} = eachmatch
  const manOfTheMatch = eachmatch.man_of_the_match
  const competingTeam = eachmatch.competing_team
  const competingTeamLogo = eachmatch.competing_team_logo
  const firstInnings = eachmatch.first_innings
  const secondInnings = eachmatch.second_innings
  const matchStatus = eachmatch.match_status
  return (
    <li className="match-card-bg-style">
      <img
        alt={`competing team ${competingTeam}`}
        className="Match-card-logo-style"
        src={competingTeamLogo}
      />
      <p className="match-card-heading">{competingTeam}</p>
      <p className="match-card-style ">{result}</p>
      <p
        className={matchStatus === 'Won' ? 'win-font-color' : 'lose-font-color'}
      >
        {matchStatus}
      </p>
    </li>
  )
}

export default MatchCard
