import React from 'react'

export default function Form(props) {
    return (
        <form onSubmit={props.getWeather}>

            <input type='text' placeholder=" City ..." name="city"></input>
            <input type='text' placeholder=" Country ..." name="country"></input>

            <button type='submit'> Get Weather</button>



        </form>
    )
}
