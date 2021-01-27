import React from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


const UserItem = ({user:{ login, avatar_url, html_url}}) => {  // do destructure in the props section
    
        //const {login,avtar_url,html_url} = props.user;   instead of writing this

        return (
            <div className='card text-center'>
               <img 
                src={avatar_url}
                alt=''
                className='round-img'
                style={{width: '60px'}}
               />
               <h3>{login}</h3>

               <div>
                  <Link to={`/users/${login}`} className='btn btn-dark btn-sm my-1'>More</Link>    
               </div> 
            </div>
        );
};

UserItem.propTypes = {
    user: PropTypes.object.isRequired    // type ptor then enter
};

export default UserItem;
