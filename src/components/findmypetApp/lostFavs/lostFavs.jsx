import React, { Component } from 'react'
import { auth } from 'firebase';
import ReactTimeAgo from 'react-time-ago'
import dbUser from '../../../services/db-user';
import dbLostPets from '../../../services/db-lostPets'
import Loading from '../../loading/Loading'




export default class lostFavs extends Component {
  constructor() {
    super()
    this.state = {
      userEmail: '',
      lostPetsFavs: [],
      lostPetsFavsIds: [],
      ifReady: true,
      favsPets: []
    }
    this.isAuthThisUser = this.isAuthThisUser.bind(this)
    this.getLostPetsFavIds = this.getLostPetsFavIds.bind(this)
  }

  isAuthThisUser() {
    auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ userEmail: user.email });
        this.getLostPetsFavIds();
      } else {
        console.log("No Auth");
      }
    });
  }

  async getLostPetsFavIds() {
    try {
      const docs = await dbUser.doc(this.state.userEmail).collection('favorites').get();
      const list = [];
      docs.forEach(doc => {
        list.push(doc.id)
      });

      this.setState({
        lostPetsFavsIds: list
      })

      this.getLostPetsFav();
    }
    catch (err) {
      console.log(err)
    }
  }

  async getLostPetsFav() {

    const list = [];
    this.state.lostPetsFavsIds.forEach(lostPetsFavId => {

      dbLostPets.doc(lostPetsFavId).get()
        .then((doc) => {
          if (doc.exists) {
            const lostPet = {
              title: doc.data().title,
              text: doc.data().text,
              imageUrl: doc.data().imageUrl,
              author: doc.data().author,
              id: doc.id,
              date: doc.data().date,
            }

            list.push(lostPet);
            this.setState({
              favsPets: list,
              ifReady: false
            });


          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch(err => console.log(err))
    });

  }

  async componentDidMount() {
    await this.isAuthThisUser()
  }

  render() {
    return (
      <div>
        {this.state.ifReady ? <Loading /> :

          <div>

            <div className="row d-flex justify-content-center mt-5">
              <div className="card col-md-6">
                <h4 className="card-title mt-2 text-center" onClick={this.revealPetForm}>Favorites Pets :)</h4>
              </div>
            </div>


            {this.state.favsPets.map(favPet => {
              return (
                <div key={favPet.id} className="row d-flex justify-content-center mt-5">
                  <div className="card card-cascade col-md-6 ">

                    <div className="view view-cascade overlay p-1">
                      <img className="card-img-top" src={favPet.imageUrl} alt="Card  cap" />

                    </div>
                    <div className="card-body card-body-cascade text-center">
                      <h4 className="card-title"><strong>{favPet.title}</strong></h4>
                      <h6 className="font-weight-bold indigo-text py-2">{favPet.author}</h6>
                      <p className="card-text">{favPet.text}</p>
                      <hr />
                    </div>
                    <div className="card-footer text-muted text-center"><ReactTimeAgo date={favPet.date} /></div>
                  </div>
                </div>
              )
            })}
          </div>

        }
      </div>
    )
  }
}

