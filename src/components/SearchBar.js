import React from 'react';

import searchBar from '../css/search-bar.module.css';

class SearchBar extends React.Component {

        state={
            term: ''
        }

        onFormSubmit=(e)=>{
            e.preventDefault()
            const term=e.target.value
            this.props.submit(this.state.term)
        }

        onInputChange=(e)=>{
            console.log(e.target.value)
            this.setState({
                term: e.target.value
            })
        }

        render(){
            return (
                <div className={searchBar.form_wrap}>
                    <form onSubmit={this.onFormSubmit}>
                        <div className="searchBar.form_group">
                            <label htmlFor="bar">IMAGE SEARCH</label>
                            <input 
                                type="text" 
                                id="bar"
                                value={this.state.term}
                                className={searchBar.inputSearch}
                                onChange={this.onInputChange} />
                        </div>
                    </form>
                    <h1>{this.state.term}</h1>
                </div>
                
                
            )
        }
        
}

export default SearchBar;