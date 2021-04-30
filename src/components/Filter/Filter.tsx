import React from 'react';
import './Filter.css';

type Props = {
    changeFilterTerm: Function,
    filterTerm: string,
    data: Array<{
        gender: string
    }>
}

const Filter = (props: Props) => {
    // let genderOption: any =  [];
    // genderOption.push(props.data.map(e => e.gender))
    // console.log(genderOption)
    // // @ts-ignore: TypeScript only supports iterables on Arrays at the moment.
    // console.log(genderOption.filter((item, index) => genderOption.indexOf(item) === index))

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
            <select name="gender" id="gender" onChange={e => props.changeFilterTerm(e.target.value)}>
                <option value="">none</option>
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="unisex">unisex</option>
            </select>
        </div>
    )
}

export default Filter;