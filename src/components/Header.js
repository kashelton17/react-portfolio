import Navigation from './Navigation'

export default function Header() {
    return (
      <div>
        <header>
            <div className='row justify-content-between'>
                <h1>SHELTON</h1>
                <Navigation /> 
            </div>
        </header>
        <div className="card mb-3" >
        <div className="row g-0 img-card">
          <div className="col-lg-4 md-5 img-card">
            <img className="image" src="./images/IMG_3206.jpg" alt="katie looking over water" />
          </div>
          <div className="col-md-8 img-card">
            <div className="card-body img-content">
              <h5 className="card-title">Northwestern University Bootcamp Work</h5>
              <p className="card-text">This page contains Katie's work from Northwestern Bootcamp attended from March 31, 2021 until graduation on September 19, 2021. 
                  The works displays knowledge of Javascript, HTML, CSS and many of the libraries and other material covered. 
              </p>
              <p className="card-text"><small className="text-muted">Last updated 8/26/2021</small></p>
            </div>
          </div>
        </div>
      </div>
      </div>  
    )
}