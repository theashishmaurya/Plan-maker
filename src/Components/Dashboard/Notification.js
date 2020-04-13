import React from 'react';
import moment from 'moment';

const Notification=({notification})=>{
    
    return(
        <div className="section">
        <div className="card grey lighten-2">
            <div className="card-content">
                <div className="card-title">Notification</div>
                <ul>
                    {notification && notification.map(item =>{
                        return <li key={item.id}>
                            <span className="black-text">{item.user} </span>
                            <span className = "grey-text darken-4">{item.content}</span>
                            <div className="note-date grey-text darken-3">
                            {moment(item.time.toDate()).fromNow()}

                            </div>
                        </li>
                    })}

                </ul>
            </div>
        </div>
          
        </div>
        
    )
}
export default Notification