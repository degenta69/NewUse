import React from 'react'
import 'E:/course/webD/React/news-app/src/index.css'

const Newsitems=(props)=>{
      let {title, description, imgUrl, newsUrl, time, author, source}= props;
    return (
        <div>

          <div className={`card bg-${props.mode==='dark'?'dark':'light'}`} style={{boxShadow: props.mode==='light'?'-10px 8px 20px -9px rgb(36 36 36 / 56%)':'-10px 8px 20px -9px rgb(255 0 0 / 56%)'}}>
          <span className="position-absolute source top-0 translate-middle badge rounded-pill bg-warning" style={{zIndex:'1', left:'50%'}}>{source}</span>
            <img src={imgUrl} className='card-img-top' alt='...' />
            <div className='card-body'>
              <h5 className={`card-title text-${props.mode==='dark'?'danger':'dark'}`}>{title}</h5>
              <p className={`card-text text-${props.mode==='dark'?'danger':'dark'}`}>
                {description}
              </p>
              <p className={`card-text`}><small className={`text-muted text-${props.mode==='dark'?'danger':'dark'}`}>Published By {author} on {new Date(time).toGMTString()}</small></p>
              <a href={newsUrl} rel="noreferrer" target="_blank" className={`btn btn-outline-${props.mode==='dark'?'warning':'dark'}`}  >Read more</a>
            </div>
          </div>
        </div>
    )
  
}

export default Newsitems
