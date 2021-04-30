import React from 'react';
import Product from '../Product/Product'
import './List.css'

type Prop = {
    data: Array<{}>
    filterTerm: string
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
                    if(gender.includes(props.filterTerm.toUpperCase()) || 
                       brand.includes(props.filterTerm.toUpperCase()) || 
                       category.includes(props.filterTerm.toUpperCase())) {
                        return <Product item={eachItem} key={i}/>
                    }
                })
            }
        </div>
    )
}

export default List;