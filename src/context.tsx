import React from 'react';

const Context = React.createContext({})

class ProductContext extends React.Component {
    constructor(props: {}) {
        super(props);
        this.state = {
            data: [],
            filterTerm: '',
            getData: () => {
                fetch('https://demo7242716.mockable.io/products')
                    .then(response => response.json())
                    .then(data => {
                        // console.log(data)
                        this.setState({
                            data: data.products
                        })
                    })
            },
            changeFilterTerm: (term: string) => {
                this.setState({
                    filterTerm: term
                })
            }
        }
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

const ContextHOC = (SomeComponent: any, props?: any) => {
    return(
        <Context.Consumer>
            {(val) => <SomeComponent {...val} {...props} />}
        </Context.Consumer>
    )
}

export {Context, ProductContext, ContextHOC}