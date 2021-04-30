import React from 'react';
import './Filter.css';

type Props = {
    changeFilterTerm: Function,
    filterTerm: string
}

const Filter = (props: Props) => {
    return (
        <div className="filter-conatiner">
            <input
                type="text"
                className="form-control"
                placeholder="Search for Category, brand or gender"
                id="local-filter"
                value={props.filterTerm}
                onChange={event => {
                    event.stopPropagation();
                    props.changeFilterTerm(event.target.value)
                }}
                />
        </div>
    )
}

export default Filter;