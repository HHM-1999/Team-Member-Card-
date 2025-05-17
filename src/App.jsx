import React from 'react'
import './App.css'
import TeamMemberCard from './Components/TeamMemberCard'

const App = () => {
  const MemberList = [
    { id: 1, name: "Alex", email: "alex123@gmail.com", address: "Uttar Kafrul , Dhaka" },
    { id: 2, name: "Mick", email: "mick12345@gmail.com", address: "Cumilla" },
    { id: 3, name: "Huma", email: "huma993@gmail.com", address: "Uttara , Dhaka" },
  ]
  return (
    <div className='container'>
      <div className='row'>
        {MemberList.map((team => {
          // console.log(team.id);
          return (
            <div className="col-lg-4 col-sm-12">
              <div className="team-area pb-3 mt-5">
                <TeamMemberCard key={team.id} name={team.name} email={team.email} address={team.address} />
              </div>
            </div>

          )
        }

        ))}
      </div>
    </div>
  )
}

export default App
