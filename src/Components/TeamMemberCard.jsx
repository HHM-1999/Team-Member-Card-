import React from 'react'
const TeamMemberCard = ({key,name,email,address}) => {
  return (

          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Name : {name}</h5>
              <p className="card-text">ID No: {key}</p>
              <p className="card-text">Role: {email}</p>
              <p className="card-text">Role: {address}</p>
            </div>
          </div>

  )
}
export default TeamMemberCard