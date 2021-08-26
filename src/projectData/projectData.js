const projectData = [
    {id: 1, title: 'About Me', html: (
        <section className='content one' id='about-me'>
            <h2>About Me</h2>
            <p className='aboutmecontent'>I graduated from Bucknell University with a Bachelor of Science in Chemistry and Bachelor of Arts in German.
                I am currently working for a small tech company in New Hampshire as well as completing a web development certificate program part-time.
                I am passionate about learning new skills and problem solving as well as running, spending time with family and being outdoors.
            </p>
        </section>
    ), route: ''},
    {id: 2, title: 'Work', html: (
        <section className='content two' id='work'>
            <h1 className='workHeader'>Work</h1>
            <div className='work'> 
                <div className='workcontent'>
                    <div className='subcontent workone'>
                        <div>
                            <a className='worktitle' href="https://northwestern-bootcamp.github.io/recipeNetwork/" target='_blank' rel="noreferrer">Recipe Network</a>
                            <a className='github-link' href="https://github.com/Northwestern-Bootcamp/recipeNetwork" target="_blank" rel="noreferrer">Repository</a>
                        </div>
                    </div>
                    <div className='subcontent worktwo'>
                        <div>
                            <a className='worktitle' href=" https://tech-blog-hw-14.herokuapp.com/" target='_blank' rel="noreferrer">Tech Blog</a>
                            <a className='github-link' href="https://github.com/kashelton17/13-hw-tech-blog/" target="_blank" rel="noreferrer">Repository</a>
                        </div>
                    </div>
                    <div className='subcontent workthree'>
                        <div>
                            <a className='worktitle' href="https://kashelton17.github.io/06-hw-weather-dashboard/" target='_blank' rel="noreferrer">Weather Dasboard</a>
                            <a className='github-link' href="https://github.com/kashelton17/06-hw-weather-dashboard" target="_blank" rel="noreferrer">Repository</a>
                        </div>
                    </div>
                    <div className='subcontent workfour'>
                        <div>
                            <a className='worktitle' href="https://budget-tracker-hw-16.herokuapp.com/" target='_blank' rel="noreferrer">Budget Tracker</a>
                            <a className='github-link' href="https://github.com/kashelton17/16-hw-progressive-budget" target="_blank" rel="noreferrer">Repository</a>
                        </div>
                    </div>
                    <div className='subcontent workfive'>
                        <div>
                            <a className='worktitle' href="https://grooming-scheduler.herokuapp.com/" target='_blank' rel="noreferrer">Grooming Scheduler</a>
                            <a className='github-link' href="https://github.com/Project-2-grooming-app/groomingScheduler" target="_blank" rel="noreferrer">Repository</a>
                        </div>
                    </div>
                    <div className='subcontent worksix'>
                        <div>
                            <a className='worktitle' href="https://secure-lake-33180.herokuapp.com/" target='_blank' rel="noreferrer">Note Taker</a>
                            <a className='github-link' href="https://github.com/kashelton17/10-hw-note-taker" target="_blank" rel="noreferrer">Repository</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    ), route: 'work'},
    {id: 3, title: 'Contact Me', html: (
        <section className='content three' id='contact-me'>
            <h2>Contact Me</h2>
            <div className='message-form'>
                <form >
                    <label htmlFor='name-input'>Name: </label>
                    <input type='text' id='name-input' placeholder='Name' required/>
                    
                    <label htmlFor='email-input'>Email: </label>
                    <input type='email' id='email-input' placeholder='Email' required/>
                    
                    <label htmlFor='message-input'>Message: </label>
                    <input type='text' id='message-input' placeholder='Message' size='200' required/>
                    <input id='submit-form' type='submit' />
                </form>
            </div>
            <div className='subcontent contact-div'>
            <ul >
                <li className='contact email'>
                    <a href="mailto: kashelton17@gmail.com" target="_blank" rel="noreferrer"> kashelton17@gmail.com</a>
                </li>
                <li className='contact tel' >
                    <a href="tel:2245653235"> Phone</a>
                </li>
            </ul>
            </div>
        </section>
    ), route: 'contact-me'},
    {id: 4, title: 'Resume', html: (
        <section className='content one' id='about-me'>
            <h2>Proficiencies</h2>
            <ul className='profList'>
                <a href="../images/KatieSheltonResume.pdf" target='_blank'><h4>Download Resume</h4></a>  
                <li>
                    <h4>Frontend:</h4>
                </li>
                <li>HTML</li>    
                <li>CSS</li>
                <li>Javascript</li>
                <li>JQuery</li>
                <li>React</li>
                <li>HTML</li>
                <li>
                    <h4>Backend:</h4>
                </li>
                <li>Nodejs</li>
                <li>Express</li>
                <li>APIs</li>
                <li>MySql</li>
                <li>NoSql</li>
            </ul>
        </section>
    ), route: ''}
]

export default projectData