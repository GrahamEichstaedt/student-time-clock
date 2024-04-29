import { useState } from 'react';
import './SignIn.css';

const SignIn = () => {

        const [ punchInfo, setPunchInfo ] = useState({ 
                firstName: '',
                lastName: '',
                punchType: '',
                punchFor: '',
                time: ''
        });

        const handleChange = (e) => {
                const { name, value } = e; // Destructured event

                setPunchInfo((prevState) => ({
                        ...prevState,   // Spread existing state
                        [name]: value   // Update specific property
                }));
        }


        const handleSubmit = (e) => {
                e.preventDefault();
                const now = new Date();
                let currentTime = `${(now.getMonth() + 1).toString().padStart(2, 0)}:${(now.getDate()).toString().padStart(2, 0)}`;         
                setPunchInfo((prevState) => ({  // TODO Fix redudant code
                        ...prevState,
                        time: currentTime
                }
                ))  

                // Send data to end point     
                fetch("https://www.placeholder.com", {
                        method: "POST",
                        body: {
                                data: punchInfo
                        }
                })
        }

        return (
                <section className='form-container'>
                        <form id='sign-in' onSubmit={handleSubmit}>
                        <h2>Time Clock</h2>
                                <div className='form-content'>
                                <div className="name">
                                        <input 
                                                type="text"
                                                placeholder="First Name"
                                                onChange={handleChange}
                                        />
                                        <input 
                                                type="text" 
                                                placeholder="Last Name" 
                                        />
                                </div>
                                <label htmlFor="punch-type">Clock In / Clock Out</label>
                                <select id="punch-type">
                                        <option value="in">Clock In</option>
                                        <option value="out">Clock Out</option>
                                </select>   
                                <label htmlFor="punch-time">Punching In / Out For:</label>
                                <select name="punch-time" id="punch-time">
                                        <option value="start">Beginning of Day</option>
                                        <option value="lunch">Lunch</option>
                                        <option value="end">End of Day</option>
                                </select>
                                <button type='submit'>Submit</button>
                        </div>
                 </form>
                </section>
        );
}

export default SignIn;