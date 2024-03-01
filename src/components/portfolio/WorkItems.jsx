import React from 'react'

const WorkItems = ({item, demoLink}) => {

  const redirectToDemo = () => {
    if(demoLink) {
      window.open(demoLink, "_blank");

    } else {
      window.scroll({top: 0, behavior: 'smooth'});
    }
  }


  return (
    <div className="work__card" key={item.id}>
        <img src={item.image} alt="work" className="work__img" />
        <h3 className="work__title">{item.title}</h3>
        <button onClick={redirectToDemo} className="work__button">
            Demo <i className="bx bx-right-arrow-alt work__button-icon"></i> 
        </button>
    </div>
  )
}

export default WorkItems