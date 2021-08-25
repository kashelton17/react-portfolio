const projectData = [
    {id: 1, title: 'About Me', html: (
        <section className='content one' id='about-me'>
            <h2>About Me</h2>
            <p className='subcontent'>I graduated from Bucknell University with a Bachelor of Science in Chemistry and Bachelor of Arts in German.
                I am currently working for a small tech company in New Hampshire as well as completing a web development certificate program part-time.
                I am passionate about learning new skills and problem solving as well as running, spending time with family and being outdoors.
            </p>
        </section>
    ), route: ''},
    {id: 2, title: 'Work', html: (
        <section className='content two' id='work'>
            <h2>Work</h2>
            <div className='workcontent subcontent workone'>
                <div>
                    <a className='worktitle' href="https://northwestern-bootcamp.github.io/recipeNetwork/" target='_blank' rel="noreferrer">Recipe Network</a>
                    <a className='github-link' href="https://github.com/Northwestern-Bootcamp/recipeNetwork" target="_blank" rel="noreferrer">Repository</a>
                </div>
            </div>
            <div className='workcontent subcontent worktwo'>
                <div>
                    <a className='worktitle' href=" https://tech-blog-hw-14.herokuapp.com/" target='_blank' rel="noreferrer">Tech Blog</a>
                    <a className='github-link' href="https://github.com/kashelton17/13-hw-tech-blog/" target="_blank" rel="noreferrer">Repository</a>
                </div>
            </div>
            <div className='workcontent subcontent workthree'>
                <div>
                    <a className='worktitle' href="https://kashelton17.github.io/06-hw-weather-dashboard/" target='_blank' rel="noreferrer">Weather Dasboard</a>
                    <a className='github-link' href="https://github.com/kashelton17/06-hw-weather-dashboard" target="_blank" rel="noreferrer">Repository</a>
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
                    <input type='text' id='name-input' placeholder='Name' />
                    
                    <label htmlFor='email-input'>Email: </label>
                    <input type='text' id='email-input' placeholder='Email'/>
                    
                    <label htmlFor='message-input'>Mesage: </label>
                    <input type='text' id='message-input' placeholder='Message' size='200'/>
                    <input id='submit-form' type='submit' />
                </form>
            </div>
            <ul className='subcontent contact-div'>
                <li className='contact email'>
                    <a href="mailto: kashelton17@gmail.com" target="_blank" rel="noreferrer"> kashelton17@gmail.com</a>
                </li>
                <li className='contact tel' >
                    <a href="tel:2245653235"> Phone</a>
                </li>
                <li className='contact git'>
                    <a href="github.com/kashelton17" target='_blank' rel="noreferrer">GitHub</a>
                    <a href='https://www.linkedin.com/in/katie-shelton-67115365/' target="_blank" rel="noreferrer">LinkedIn</a>
                </li>
            </ul>
        </section>
    ), route: 'contact-me'},
]

export default projectData