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
import { Link, Redirect, withRouter } from 'react-router-dom'

//import { displayName, filterProps, WrapWithHits } from './util';
//import logo from './instant_search_logo@2x.png';



const Hit = ({hit}) =>
<div className="hit">
<div className="col-md-12 recentevents">
  <div className="hit-image col-md-2">
  <div className="col-md-2"></div>
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
    <div className="hit-description">
    <Link className="btn btn-default" to={`/Eventdetails/${hit.eventID}`}>More Details</Link>
     
      <Highlight attribute="eventID" hit={hit}/>
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


    <header className="header search">
    
    <SearchBox 
    submitComponent={<span><img src="https://d30y9cdsu7xlg0.cloudfront.net/png/105498-200.png" height="35px" width="35px" alt="Mountain View"/></span>}
     resetComponent={<span>❌</span> } 
    submitTitle={'Submit your search query.'}
    resetTitle= {'Clear your search query.'}
    placeholder= 'Search Events....'
    />
    </header>
    
    </div>
    <div className="col-md-12">
    

      <main>
       
        <Content/>
       
      </main>
      </div>
    </InstantSearch>
  );
}