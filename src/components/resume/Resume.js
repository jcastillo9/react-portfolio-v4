import github from '../../assets/images/github.png'
import linkedin from '../../assets/images/linkedin.png'
import resume from '../../assets/images/resume.png'
export default function Contact() {
    return(
            <footer className="footer" id="footer">
                <div className="header">
                <h2>Resume</h2>
            </div>
                 <h3>Get In Touch</h3>
            <br/>
                <a target="_blank" href="https://github.com/jcastillo9">
                            <img src={github} id="icon"/>
                            </a>
                        <a target="_blank" href="https://www.linkedin.com/in/janette-castillo-65874b226/">
                            <img src={linkedin} id="icon"/>
                            </a>
                        <a target="_blank" href="resume.pdf">
                            <img src={resume} id="icon"/>
                            </a>
                            <p>Email:
                <a href="mailto:janette.castillo91@yahoo.com"><strong>janette.castillo91@yahoo.com</strong></a> Phone:
                <strong>(312) 543-2191</strong>
            </p>
                <p>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a
                    href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
        </footer>
        )
    }