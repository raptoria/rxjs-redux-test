import React, { Component } from 'react'
import { Button, Header, Icon, Modal, Container } from 'semantic-ui-react'
import styles from './ModalPopup.css';
import WaveForm from '../WaveForm/WaveForm';
import WaveTable from '../WaveTable/WaveTable';

export default class ModalPopup extends Component {
  state = { modalOpen: false }

  handleOpen = (e) => this.setState({
    modalOpen: true,
  })

  handleClose = (e) => this.setState({
    modalOpen: false,
  })

  render() {
    return (
      <Modal
        trigger={<Button className="newWaveButton" onClick={this.handleOpen}>New Wave</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        size='small'
      >
        <Header icon='file' content='Create New Wave' />
        <Modal.Content>
          <Container text className={styles.modalSummary}>
            <WaveTable />
            <p />
            <WaveForm />
          </Container>
        </Modal.Content>
        <Modal.Actions>
        <p />
          <div className="ui buttons">
            <button className="ui button cancelNewWave" onClick={this.handleClose}>Cancel</button>
            <div className="or"></div>
            <button className="ui positive button active submitNewWave" onClick={this.handleClose}>Save</button>
          </div>
        </Modal.Actions>
      </Modal>
    )
  }
}