import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {

    state={
        images: []
    }

    onSearchSubmit=(term)=>{
        axios
            .get(`https://pixabay.com/api/?key=15088349-075164d8dfcb8fd7ed5080ac1&q=${term}&image_type=photo&pretty=true`)
            .then(response=>{
                // console.log(response.data.hits)
                this.setState({
                    images: response.data.hits
                })
            })

    }

    
    render(){
        return (
            <div>
                <SearchBar submit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        )
    }
    
}

export default App;