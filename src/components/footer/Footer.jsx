import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="container-fluid page-footer font-small orange lighten-1">
                    <div className="container text-center text-md-left py-5">
                        <div className="row">
                            <div className="col-md-6 mt-md-0 mt-3">
                                <h5 className="text-uppercase font-weight-bold">Find My Pet</h5>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita sapiente sint, nulla, nihil repudiandae commodi voluptatibus corrupti animi sequi aliquid magnam debitis, maxime quam recusandae harum esse fugiat. Itaque, culpa?</p>

                                <div className="row d-flex justify-content-center py-5">
                                    <div className="col"><i className="fab fa-facebook fa-3x"></i></div>
                                    <div className="col"><i className="fab fa-twitter-square fa-3x"></i></div>
                                    <div className="col"><i className="fab fa-instagram fa-3x"></i></div>
                                    <div className="col"><i className="fab fa-google fa-3x"></i></div>
                                </div>

                            </div>
                            <hr className="clearfix w-100 d-md-none pb-3" />
                            <div className="col-md-6 mb-md-0 mb-3">
                                <h5 className="text-uppercase font-weight-bold">Gaston Graciani | Frontend Developer</h5>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio deserunt fuga perferendis modi earum commodi aperiam temporibus quod nulla nesciunt aliquid debitis ullam omnis quos ipsam, aspernatur id excepturi hic.</p>
                                <div className="row d-flex justify-content-center py-5">
                                    <div className="col"><i className="fab fa-github fa-3x"></i></div>
                                    <div className="col"><i className="fab fa-twitter-square fa-3x"></i></div>
                                    <div className="col"><i className="fab fa-linkedin fa-3x"></i></div>
                                    <div className="col"><i className="fab fa-google fa-3x"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright text-center py-3 orange darken-1">© 2019 Find My Pet:
                        <a href="https://mdbootstrap.com/education/bootstrap/"> findmypet.gastongraciani.me</a>
                    </div>
                </footer>
            </div >
        )
    }

}
