import React from 'react';
import '../App.css';
//import { setAddon, storiesOf } from '@storybook/react';
import { SearchBox, 
  InstantSearch, 
  HierarchicalMenu,
  Hits, 
  Highlight, 
  Stats,
  Menu
} from 'react-instantsearch/dom';

//import { displayName, filterProps, WrapWithHits } from './util';
//import logo from './instant_search_logo@2x.png';



const Hit = ({hit}) =>
<div className="hit">
<div className="col-md-12 recentevents">
  <div className="hit-image col-md-2">
    <img src={hit.image} height="250px" width="170px"/>
  </div>
  <div className="col-md-10">
  
  <div className="hit-content">
    <div className="hit-name">
      <h1>{hit.movie}</h1>
      
      <Highlight attribute="movie" hit={hit}/>
      
    </div>
    <div className="hit-description">
      {hit.description}
      <Highlight attribute="description" hit={hit}/>
    </div>
  </div>
  </div>
  </div>
</div>


// const stories = storiesOf('HierarchicalMenu', module);

// stories
//   .addWithJSX(
//     'default',
//     () => (
//       <WrapWithHits hasPlayground={true} linkedStoryGroup="HierarchicalMenu">
//         <HierarchicalMenu
//           attributes={['show1', 'show2', 'show3']}
//         />
//       </WrapWithHits>
//     ),
//     {
//       displayName,
//       filterProps,
//     }
//   )


// const Sidebar = ()=>
// <div className="sidebar">
// <h5>Category</h5>
// <RefinementList attributeName="categories"/>
// <h5>Brand</h5>
// <RefinementList attributeName="brand" withSearchBox/>
// <h5>Type</h5>
// <Menu attributeName="type"/>
//   </div>


const Content = () =>
<div className="content">
  <div className="info">
    <Stats/>
    </div>
<Hits hitComponent = {Hit}/>

  </div>  

// const Sidebar = ()=>
// <div className="sidebar">

// <h5>Hall Names</h5>
// <RefinementList attributeName="halls" withSearchBox/>
// <h5>Type</h5>
// <Menu attributeName="type"/>
//   </div>  




export default function ev() {
  return (
    <InstantSearch
      appId="R1PWZZM1S9"
      apiKey="10c407d77162cf18ca1e54fe9347d3aa"
      indexName="books"
    >

<div className="col-md-12">
<div className="col-md-2"></div>
<div className="col-md-10">
    <header className="header search ">
      <SearchBox translations={{placeholder:'Search for events'}}/>
    </header>
    </div>
    </div>
    <div className="col-md-12">
    <div className="sidebar col-md-2">
        <ul>
          <li>Colombo</li>
          <li>Gampaha</li>
          <li>Anuradhapura</li>
          <li>Rathnapura</li>
          <li>Kurunegala</li>
          <li>Galle</li>
        </ul>
      </div>

      <main className="col-md-10">
       
        <Content/>
       
      </main>
      </div>
    </InstantSearch>
  );
}