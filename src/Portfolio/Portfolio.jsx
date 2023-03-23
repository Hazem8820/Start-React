import React, { Component } from 'react'
import logo1 from '../images/cabin.png'
import logo2 from '../images/cake.png'
import logo3 from '../images/circus.png'
import logo4 from '../images/game.png'
import logo5 from '../images/safe.png'
import logo6 from '../images/submarine.png'
export default class Portfolio extends Component {
    render() {
        return <>
            <section className='py-5'>
                <div className="container">
                    <div>
                        <h2 className='textblue fa-4x fw-bolder text-center'>Portfolio</h2>
                        <div className='textblue d-flex justify-content-center align-items-center gap-3 my-2'>
                            <div className='line navbg'></div>
                            <div className='fa-2x'><i className="fa-solid fa-star"></i></div>
                            <div className='line navbg'></div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className='col-md-6 col-lg-4 mt-5'>
                            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <div className='position-relative portimage'>
                                    <div className='w-100 h-100 rounded-3'><img src={logo1} className="w-100 rounded-3" alt="" /></div>
                                    <div className='w-100 portbg position-absolute top-0 h-100 rounded-3 d-flex justify-content-center align-items-center'><i className="fa-solid fa-plus text-light fa-5x"></i></div>
                                </div>
                            </button>
                            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <button type="button" className="btn-close ms-auto m-2" data-bs-dismiss="modal" aria-label="Close"></button>
                                        <div className="modal-header d-flex justify-content-center align-items-center">
                                            <div>
                                                <h2 className='textblue fa-3x fw-bolder text-center'>LOG CABIN</h2>
                                                <div className='textblue d-flex justify-content-center align-items-center gap-3 my-2'>
                                                    <div className='line navbg'></div>
                                                    <div className='fa-2x'><i className="fa-solid fa-star"></i></div>
                                                    <div className='line navbg'></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-body">
                                            <div className='w-100 h-100 rounded-3'><img src={logo1} className="w-100 rounded-3" alt="" /></div>
                                        </div>
                                        <div className='modal-body'>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique cumque amet vel! Ex, nemo! Quas eius dicta rem ea harum, unde sint illo alias? Ipsa earum similique reprehenderit corporis et?</p></div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-primary headerbg" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-4 mt-5'>
                            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#cake">
                                <div className='position-relative portimage'>
                                    <div className='w-100 h-100 rounded-3'><img src={logo2} className="w-100 rounded-3" alt="" /></div>
                                    <div className='w-100 portbg position-absolute top-0 h-100 rounded-3 d-flex justify-content-center align-items-center'><i className="fa-solid fa-plus text-light fa-5x"></i></div>
                                </div>
                            </button>
                            <div className="modal fade" id="cake" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <button type="button" className="btn-close ms-auto m-2" data-bs-dismiss="modal" aria-label="Close"></button>
                                        <div className="modal-header d-flex justify-content-center align-items-center">
                                            <div>
                                                <h2 className='textblue fa-3x fw-bolder text-center'>TASTY CAKE</h2>
                                                <div className='textblue d-flex justify-content-center align-items-center gap-3 my-2'>
                                                    <div className='line navbg'></div>
                                                    <div className='fa-2x'><i className="fa-solid fa-star"></i></div>
                                                    <div className='line navbg'></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-body">
                                            <div className='w-100 h-100 rounded-3'><img src={logo2} className="w-100 rounded-3" alt="" /></div>
                                        </div>
                                        <div className='modal-body'>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique cumque amet vel! Ex, nemo! Quas eius dicta rem ea harum, unde sint illo alias? Ipsa earum similique reprehenderit corporis et?</p></div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-primary headerbg" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-4 mt-5'>
                            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#CIRCUS">
                                <div className='position-relative portimage'>
                                    <div className='w-100 h-100 rounded-3'><img src={logo3} className="w-100 rounded-3" alt="" /></div>
                                    <div className='w-100 portbg position-absolute top-0 h-100 rounded-3 d-flex justify-content-center align-items-center'><i className="fa-solid fa-plus text-light fa-5x"></i></div>
                                </div>
                            </button>
                            <div className="modal fade" id="CIRCUS" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <button type="button" className="btn-close ms-auto m-2" data-bs-dismiss="modal" aria-label="Close"></button>
                                        <div className="modal-header d-flex justify-content-center align-items-center">
                                            <div>
                                                <h2 className='textblue fa-3x fw-bolder text-center'>CIRCUS TENT</h2>
                                                <div className='textblue d-flex justify-content-center align-items-center gap-3 my-2'>
                                                    <div className='line navbg'></div>
                                                    <div className='fa-2x'><i className="fa-solid fa-star"></i></div>
                                                    <div className='line navbg'></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-body">
                                            <div className='w-100 h-100 rounded-3'><img src={logo3} className="w-100 rounded-3" alt="" /></div>
                                        </div>
                                        <div className='modal-body'>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique cumque amet vel! Ex, nemo! Quas eius dicta rem ea harum, unde sint illo alias? Ipsa earum similique reprehenderit corporis et?</p></div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-primary headerbg" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-4 mt-5'>
                            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#game">
                                <div className='position-relative portimage'>
                                    <div className='w-100 h-100 rounded-3'><img src={logo4} className="w-100 rounded-3" alt="" /></div>
                                    <div className='w-100 portbg position-absolute top-0 h-100 rounded-3 d-flex justify-content-center align-items-center'><i className="fa-solid fa-plus text-light fa-5x"></i></div>
                                </div>
                            </button>
                            <div className="modal fade" id="game" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <button type="button" className="btn-close ms-auto m-2" data-bs-dismiss="modal" aria-label="Close"></button>
                                        <div className="modal-header d-flex justify-content-center align-items-center">
                                            <div>
                                                <h2 className='textblue fa-3x fw-bolder text-center'>CONTROLLER</h2>
                                                <div className='textblue d-flex justify-content-center align-items-center gap-3 my-2'>
                                                    <div className='line navbg'></div>
                                                    <div className='fa-2x'><i className="fa-solid fa-star"></i></div>
                                                    <div className='line navbg'></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-body">
                                            <div className='w-100 h-100 rounded-3'><img src={logo4} className="w-100 rounded-3" alt="" /></div>
                                        </div>
                                        <div className='modal-body'>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique cumque amet vel! Ex, nemo! Quas eius dicta rem ea harum, unde sint illo alias? Ipsa earum similique reprehenderit corporis et?</p></div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-primary headerbg" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-4 mt-5'>
                            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#save">
                                <div className='position-relative portimage'>
                                    <div className='w-100 h-100 rounded-3'><img src={logo5} className="w-100 rounded-3" alt="" /></div>
                                    <div className='w-100 portbg position-absolute top-0 h-100 rounded-3 d-flex justify-content-center align-items-center'><i className="fa-solid fa-plus text-light fa-5x"></i></div>
                                </div>
                            </button>
                            <div className="modal fade" id="save" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <button type="button" className="btn-close ms-auto m-2" data-bs-dismiss="modal" aria-label="Close"></button>
                                        <div className="modal-header d-flex justify-content-center align-items-center">
                                            <div>
                                                <h2 className='textblue fa-3x fw-bolder text-center'>LOCKED SAFE</h2>
                                                <div className='textblue d-flex justify-content-center align-items-center gap-3 my-2'>
                                                    <div className='line navbg'></div>
                                                    <div className='fa-2x'><i className="fa-solid fa-star"></i></div>
                                                    <div className='line navbg'></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-body">
                                            <div className='w-100 h-100 rounded-3'><img src={logo5} className="w-100 rounded-3" alt="" /></div>
                                        </div>
                                        <div className='modal-body'>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique cumque amet vel! Ex, nemo! Quas eius dicta rem ea harum, unde sint illo alias? Ipsa earum similique reprehenderit corporis et?</p></div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-primary headerbg" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-4 mt-5'>
                            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#submarine">
                                <div className='position-relative portimage'>
                                    <div className='w-100 h-100 rounded-3'><img src={logo6} className="w-100 rounded-3" alt="" /></div>
                                    <div className='w-100 portbg position-absolute top-0 h-100 rounded-3 d-flex justify-content-center align-items-center'><i className="fa-solid fa-plus text-light fa-5x"></i></div>
                                </div>
                            </button>
                            <div className="modal fade" id="submarine" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <button type="button" className="btn-close ms-auto m-2" data-bs-dismiss="modal" aria-label="Close"></button>
                                        <div className="modal-header d-flex justify-content-center align-items-center">
                                            <div>
                                                <h2 className='textblue fa-3x fw-bolder text-center'>SUBMARINE</h2>
                                                <div className='textblue d-flex justify-content-center align-items-center gap-3 my-2'>
                                                    <div className='line navbg'></div>
                                                    <div className='fa-2x'><i className="fa-solid fa-star"></i></div>
                                                    <div className='line navbg'></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-body">
                                            <div className='w-100 h-100 rounded-3'><img src={logo6} className="w-100 rounded-3" alt="" /></div>
                                        </div>
                                        <div className='modal-body'>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique cumque amet vel! Ex, nemo! Quas eius dicta rem ea harum, unde sint illo alias? Ipsa earum similique reprehenderit corporis et?</p></div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-primary headerbg" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    }
}
