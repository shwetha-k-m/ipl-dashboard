// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {TeamCardDetails} = props
  const {name, teamImageUrl} = TeamCardDetails

  return (
    <Link to="/" className="logo-link">
      <li className="team-card-item">
        <img src={teamImageUrl} alt={name} className="team-image" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
