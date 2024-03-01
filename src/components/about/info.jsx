import React from 'react'

const info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i class='bx bx-briefcase about__icon' ></i>
            <h3 className="about__title"> Experience</h3>
            <span className="about__subtitle"> Remote & Corporate</span>
        </div>
        <div className="about__box">
        <i class='bx bx-award about__icon'></i>
            <h3 className="about__title"> Education</h3>
            <span className="about__subtitle"> Bachelor Of Science Software Engineering
            </span>
        </div>
        <div className="about__box">
        <i class='bx bx-certification about__icon' ></i>
            <h3 className="about__title">Supplemental</h3>
            <span className="about__subtitle"> Certifications</span>
      
            
        </div>
    </div>
  )
}

export default info