import React from 'react';
import './Filter.css';

type Props = {
    changeFilterTerm: Function,
    filterTerm: string,
    data: Array<{
        gender: string,
        brand: string,
        category: string
    }>
}

const Filter = (props: Props) => {
    const [genderOps, setGenderOps] = React.useState<any>([])
    const [brandOps, setBrandOps] = React.useState<any>([])
    const [productCat, setProductCat] = React.useState<any>([])

    React.useEffect(() => {
        let genderOption = props.data.filter((thing, index, self) =>
            index === self.findIndex((t) => (
                t.gender === thing.gender
            ))
        )

        let brandOption = props.data.filter((thing, index, self) =>
            index === self.findIndex((t) => (
                t.brand === thing.brand
            ))
        )

        let prodCat = props.data.filter((thing, index, self) =>
            index === self.findIndex((t) => (
                t.category === thing.category
            ))
        )
        setGenderOps(genderOption)
        setBrandOps(brandOption)
        setProductCat(prodCat)
    }, [props.data])

    return (
        <div className="filter-conatiner">
            <select name="gender" id="gender" onChange={e => props.changeFilterTerm(e.target.name, e.target.value)}>
            <option value="">none</option>
                {genderOps.map((e: any, i:number) => {
                    return <option value={e.gender} key={i}>{e.gender}</option>
                })}
            </select>
            <select name="brand" id="brand" onChange={e => props.changeFilterTerm(e.target.name, e.target.value)}>
                <option value="">none</option>
                {brandOps.map((e: any, i:number) => {
                    return <option value={e.brand} key={i}>{e.brand}</option>
                })}
            </select>
            <select name="category" id="category" onChange={e => props.changeFilterTerm(e.target.name, e.target.value)}>
                <option value="">none</option>
                {productCat.map((e: any, i:number) => {
                    return <option value={e.category} key={i}>{e.category}</option>
                })}
            </select>
        </div>
    )
}

export default Filter;