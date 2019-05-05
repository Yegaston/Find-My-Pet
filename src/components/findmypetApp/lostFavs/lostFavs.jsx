import React, { Component } from 'react'
import { auth } from 'firebase';
import dbUser from '../../../services/db-user';
import dbLostPets from '../../../services/db-lostPets'
import CardFeed from '../cardFeed/CardFeed'


export default class lostFavs extends Component {
  constructor() {
    super()
    this.state = {
      userEmail: '',
      lostPetsFavs: [],
      ifReady: false,
      favsPets: []
    }
    this.isAuthThisUser = this.isAuthThisUser.bind(this)
    this.getLostPetsFavIds = this.getLostPetsFavIds.bind(this)
  }

  isAuthThisUser() {
    auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ userEmail: user.email, ifReady: true });
        this.getLostPetsFavIds();
      } else {
        console.log("No Auth");
      }
    });
  }

  async getLostPetsFavIds() {
    try {
      const doc = await dbUser.doc(this.state.userEmail).get();
      this.setState({
        lostPetsFavs: doc.data().userFavsPets
      })
      console.log(this.state.lostPetsFavs)
    }
    catch (err) {
      console.log(err)
    }
  }

  async getLostPetsFav(id){
    
    this.state.lostPetsFavs.map((lostPet) => {
      console.log("Print Function" + lostPet.id);
      
    })
    
    // try{
    //   const doc = dbLostPets.doc(id).get()
      
    // }
  }

  async componentDidMount() {
    await this.isAuthThisUser()
  }

  render() {
    return (
      <div>
        {this.state.ifReady ? <MapPets lostPetsFavs={this.state.lostPetsFavs} /> : <div>Loading</div>}
      </div>
    )
  }
}


function MapPets(props) {
  return (
    <div>
      {props.lostPetsFavs.map((petFav) => {
        
      })}
    </div>
  )
}