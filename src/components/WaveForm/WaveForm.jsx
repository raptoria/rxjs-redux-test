import React from 'react'
import { Button, Checkbox, Form} from 'semantic-ui-react'
import styles from './WaveForm.css';

const WaveForm = () => (
  <Form className={styles.waveFormContainer}>
    <Form.Field>
      <label>Quantity</label>
      <input placeholder='Quantity' />
    </Form.Field>
    <Form.Field>
      <label>Notional</label>
      <input placeholder='Notional' />
    </Form.Field>
    <Form.Field>
      <Checkbox label='VWAP' />
    </Form.Field>
  </Form>
)

export default WaveForm