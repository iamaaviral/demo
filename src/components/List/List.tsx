import React from 'react';
import Product from '../Product/Product'
import './List.css'

type Prop = {
    data: Array<{}>
    filterTerm: {
        gender: string,
        brand: string,
        category: string
    }
}

const List = (props: Prop) => {
    return(
        <div className="each-item-wrapper">
            {
                props.data
                .map((eachItem: any, i:number) => {
                    let gender = eachItem.gender.toUpperCase();
                    let brand = eachItem.brand.toUpperCase();
                    let category = eachItem.category.toUpperCase();
                    if(gender.includes(props.filterTerm.gender.toUpperCase()) && 
                       brand.includes(props.filterTerm.brand.toUpperCase()) &&
                       category.includes(props.filterTerm.category.toUpperCase())) {
                        return <Product item={eachItem} key={i}/>
                    }
                })
            }
        </div>
    )
}

export default List;