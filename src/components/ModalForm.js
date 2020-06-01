import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';

export default class App extends React.Component {
    state = {
        open: false,
    };

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
        const { open } = this.state;
        return (
            <div>
                <button className='waves-light btnwaves-light btn' onClick={this.onOpenModal} >Donate Now</button>
                <Modal open={open} onClose={this.onCloseModal} center>
                    <form>
                    <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="inputFirstname4">First Name</label>
                                <input type="text" className="form-control" id="inputFirstname4" />
                            </div>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="inputLastname4">Last Name</label>
                                <input type="text" className="form-control" id="inputLastname4" />
                            </div>
                        <div className="form-group">
                            <label for="momoNumber">Mobile Number</label>
                            <input type="text" className="form-control" id="inputZipode" placeholder="input momo no." />
                        </div>                        
                          <div className="form-group col-md-2">
                                <label for="inputAmount">Amount</label>
                                <input type="text" className="form-control" id="inputAmout" />
                    
                        </div>
                        <div className="form-group">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck" />
                                <label className="form-check-label" for="gridCheck">Donate Now</label>
                            </div>
                        </div>
                        <button type="submi" class="btn btn-primary">Donate</button>
                    </form>
                </Modal>             
            </div>
        );
    }
}

