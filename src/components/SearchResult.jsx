import './searchResult.scss'


function SearchResult({name, domain, img}) {

    return (
        <div className="container__result">
            <img src={img} alt="" />
            <div className='container__title'>
                <h4>{name}</h4>
                <p>{domain}</p>
            </div>
        </div>
    )
}

export default SearchResult