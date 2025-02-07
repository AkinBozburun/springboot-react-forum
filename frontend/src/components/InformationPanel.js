import React from 'react'

function InformationPanel() {
  return (
    <div className='general-information'>
    <div className='random-posts-container'>
      <div className='random-posts-header'>Random Posts</div>
      <div className='random-posts-card'>
        <div className='random-posts-avatar'>
          <img src="https://picsum.photos/200/100" alt="JaneSmith" className="profile-img" />
        </div>
        <div className='random-posts-content'>
          <div className='random-posts-title'>Best programming languages to learn in 2025</div>
          <div className='random-posts-author'>John</div>
          <div className='random-posts-date'>13 Mart 2020</div>
        </div>
      </div>
      <div className='random-posts-card'>
        <div className='random-posts-avatar'>
          <img src="https://picsum.photos/200/200" alt="JaneSmith" className="profile-img" />
        </div>
        <div className='random-posts-content'>
          <div className='random-posts-title'>Best programming languages to learn in 2025</div>
          <div className='random-posts-author'>Tech</div>
          <div className='random-posts-date'>13 Mart 2020</div>
        </div>
      </div>
      <div className='random-posts-card'>
        <div className='random-posts-avatar'>
          <img src="https://picsum.photos/200/300" alt="JaneSmith" className="profile-img" />
        </div>
        <div className='random-posts-content'>
          <div className='random-posts-title'>Best programming languages to learn in 2025</div>
          <div className='random-posts-author'>Jane</div>
          <div className='random-posts-date'>13 Mart 2020</div>
        </div>
      </div>
    </div>
    <div className='informations-container'>
      <div className='informations-header'>Informations</div>
      <div className='informations-content'>
        <div className='informations-item'>
          <div className='informations-name'>Posts:</div>
          <div className='informations-data'>222.222.222</div>
        </div>
        <div className='informations-item'>
          <div className='informations-name'>Comments:</div>
          <div className='informations-data'>123.345.456</div>
        </div>
        <div className='informations-item'>
          <div className='informations-name'>Users:</div>
          <div className='informations-data'>345.987</div>
        </div>
      </div>
    </div>
    <div className='online-admins-container'>
      <div className='online-admins-header'>Online Admins</div>
      <div className='online-admins-content'>
        <img src="https://picsum.photos/200/100" alt="JohnDoe" className="profile-img" />
        <div className="online-admin-data">JohnDoe</div>
      </div>
    </div>
    <div className='online-users-container'>
      <div className='online-users-header'>Online Users</div>
      <div className='online-users-data'>
        AAA, SSS, DDD, FFF, GGG, HHH, JJJ, KKK, LLL, ZZZ, XXX, CCC, VVV, BBB, NNN, MMM
      </div>
    </div>
  </div>
  )
}

export default InformationPanel;
