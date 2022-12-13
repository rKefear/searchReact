import './input.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'
import SearchResult from './SearchResult'


function Input() {

    const [res, setRes] = useState([])

    const [name, setName] = useState('')

    const url = `https://autocomplete.clearbit.com/v1/companies/suggest?query=${name.trim()}`

    const inputHandler = () => {
        return event => setName(event.target.value)
    }

    useEffect(() => {
        if (name !== '') {
            axios.get(url).then(data => setRes(data.data))
        }
    }, [name])

    return (
        <div className="container">
            <form>
                <p>Компания</p>
                <input type="text" placeholder="search" onChange={inputHandler()} />
            </form>
            <div className='dropdown'>
                {res.map((el, index) => {
                    return <SearchResult name={el.name} domain={el.domain} img={el.logo} key={index} />
                })}
            </div>
        </div>
    )
}

export default Input