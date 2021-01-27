import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
    const githubContext = useContext(GithubContext);

    const { getUser,user,loading,repos,getUserRepos } = githubContext;

    //in place of componentDidMount
    useEffect(()=>{
        getUser(match.params.login) // to get it from url
        getUserRepos(match.params.login)
        // eslint-disable-next-line             
        //use the above comment to get rid of warnings to add dependencies in the sqaure bracket
    },[]);//add [] to run once

    

        const {
            name,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            company,
            website,
            hirable
        } = user;
 

        if(loading) return <Spinner />

        return (
            <Fragment>
              <Link to='/' className='btn btn-light'>Back to Search</Link>
              Hirable: {' '}
              {hirable ? <i className='fas fa-check text-success' />:<i className='fas fa-times-circle text-danger' />}

              <div className='card grid-2' >
                  <div className='all-center'>
                     <img src={avatar_url} className='round-img' alt='' style={{width: '150px'}} />
                     <h1>{name}</h1>
                     <p>Loaction: {location}</p>
                  </div>
                  <div>
                      {bio && <Fragment>
                          <h3>Bio</h3>
                          <p>{bio}</p>
                          </Fragment>}
                       <a href={html_url} className='btn btn-dark my-1'>Visit Github Profile</a>
                       <ul>
                           <li>
                               {login && <Fragment>
                                    <strong>Username: {login}</strong>
                                   </Fragment>}
                           </li>
                           <li>
                               {company && <Fragment>
                                    <strong>Company: {company}</strong>
                                   </Fragment>}
                           </li>
                           <li>
                               {website && <Fragment>
                                    <strong>Website: {website}</strong>
                                   </Fragment>}
                           </li>
                       </ul>
                  </div>
              </div>
              <div className='card text-center'>
                 <div className='badge badge-primary'>Followers: {followers}</div>
                 <div className='badge badge-success'>Following: {following}</div>
                 <div className='badge badge-light'>Public Repos: {public_repos}</div>
                 <div className='badge badge-dark'>Public Gists: {public_gists}</div>
              </div>
              <Repos repos={repos} />
            </Fragment>

        )
}



export default User;
