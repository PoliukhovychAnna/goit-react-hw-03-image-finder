import { Component } from "react"
import { Searchbar } from "./Searchbar/Searchbar"
import { ImageGallery } from "./ImageGallery/ImageGallery"


export class App extends Component {
  state = {
  searchValue:'',
  };

  
  handleSearch = (value) => {
  this.setState({searchValue:value})
}


 
 

  
   

  // getPictures = async(value) => {
  //   const response = await axios.get(refs.URL, {
  //     params: {
  //       key: refs.API_KEY,
  //           q: value,
  //           image_type: 'photo',
  //           orientation: 'horizontal',
  //           safesearch: true,
  //           page: this.state.page,
  //           per_page: this.state.per_page,
  //     },
  //   })
  //   console.log(response);
  // return response
  //   }

    render() {
  
    return (
      <>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery valueToSearch={this.state.searchValue} />
      </>
    );
  }
}

// async function getPictures() {
//   try {
//     const response = await axios.get(URL, {
//       params: {
//         key: this.API_KEY,
//         q: value,
//         image_type: 'photo',
//         orientation: 'horizontal',
//         safesearch: true,
//         page: this.page,
//         per_page: this.per_page,
//       },
//     });
//   } catch (error) {
//     console.error(error);
//   }
// }

