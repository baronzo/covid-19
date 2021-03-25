import React from 'react'

const totalKeyArray = ['confirmed', 'recovered', 'deaths']
function ListView(props) {
    const { locationArray } = props;

    const totalElements = totalKeyArray.map(key => {
        const sum = locationArray.reduce((sum, location) => {
            return sum + location.latest[key]
        }, 0)
        return (
            <div key={key} className="columns">
                <div className="column">
                    <h6 className='title is-6'>{key}</h6>
                </div>
                <div className="column">
                    <p className='is-6 has-text-right'>{sum}</p>
                </div>
            </div>
        )
    })

    const locationElements = locationArray.map(location => {
        const {
            id, country_code,
            country, province,
            latest: { confirmed }
        } = location

        let title = country
        if (province !== '' && province !== country) {
            title = `${province}, ${country}`
        }

        return (
            <div key={`${id}-${country_code}`} className="list-view-location">
                <div className="columns">
                    <div className="column">
                        <h6 className='title is-6'>{title}</h6>
                    </div>
                    <div className="column">
                        <p className='is-6 has-text-right'>{confirmed}</p>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className='list-view'>
            <div className="list-view-brand">
                <h2 className='title is-4'>COVID-19 Tracker</h2>
            </div>
            <div className="list-view-total">
                <h2 className='title is-4'>Total</h2>
                {totalElements}
            </div>
            <div className="list-view-locations">
                {locationElements}
            </div>
        </div>
    )
}

export default ListView
