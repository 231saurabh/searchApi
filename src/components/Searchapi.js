import React, { Component } from 'react';

class Searchapi extends Component {
    constructor() {
        super()
        this.state = {
            searchData: null
        }
    }
    search(key) {
        console.warn(key)
        fetch("https://www.googleapis.com/books/v1/volumes?q=" + key).then((data) => {
            data.json().then((resp) => {
                console.warn("resp", resp)
                this.setState({searchData:resp})
            })
        })
    }
    render() {
        return (
            <div>
                <h1>Search API</h1>
                <input type="text" onChange={(event) => this.search(event.target.value)} />
                <div>
                    {
                        this.state.searchData?
                        <div>
                            {
                                this.state.searchData.map((item) =>
                                <div>{item.name}</div>
                                )
                            }
                        </div>
                        :""
                        
                    }

                </div>
            </div>
        )
    }
}

export default Searchapi;