const starCountRef = firebase.database().ref('react/event');
starCountRef.once('value', (snapshot)=>{
    this.setState({temp: snapshot.val()});
    // console.log('val',this.state.temp);
    
});

var vplaces = Object.values(this.state.temp).map((data, i) => {
  
// return (<div>
//         <h2 key={i}> {data.event} </h2>
//         <p> {data.description}</p></div>)
});

