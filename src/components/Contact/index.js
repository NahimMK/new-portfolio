import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <div className="container contact-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                    I am an UMBC graduate currently looking for internship and career opportunities. If you are looking for someone with my skillset, please don't hesitate to reach out to me below.
                </p>
                <div className="contact-form">
                    <form>
                        <ul>
                            <li className="half">
                                <input placeholder="Name" type="text" name="name" required />
                            </li>
                            <li className="half">
                                <input
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                                    required
                                />
                            </li>
                            <li>
                                <input
                                    placeholder="Subject"
                                    type="text"
                                    name="subject"
                                    required
                                />
                            </li>
                            <li>
                                <textarea
                                    placeholder="Message"
                                    name="message"
                                    required
                                ></textarea>
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact