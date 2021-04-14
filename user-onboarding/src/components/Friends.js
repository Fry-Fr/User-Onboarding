import React from 'react'

export default function Friends(props) {
    const { users } = props
    
    return (
        <div>
            {users.map( user => {
                return(
                    <div className="fr-wrapper" key={user.id}>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                        <p>{user.password}</p>
                        <p>TermsofService~<span>{user.termsOfService.toString()}</span></p>
                    </div>
                )
            })}
        </div>
    )
}