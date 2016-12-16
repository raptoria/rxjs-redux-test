import React, {Component, PropTypes} from 'react';
import styles from './RadioGroup.css'; //how you would load with CSS modules
import { Form, Radio, Container} from 'semantic-ui-react'


export default class RadioGroup extends Component {

static propTypes = {
  selectedVote: React.PropTypes.string,
  handleVote: React.PropTypes.func
}

  render(){
    let { selectedVote, handleVote } = this.props;

    return (
         <div className={styles.leftAlign}>
          <Form>
            <Form.Field>
            <Radio
                label='The Dominion'
                name='radioGroup'
                value='dominion'
                checked={selectedVote === 'dominion'} 
                onChange={handleVote}
              /> </Form.Field>
             <Form.Field>
             <Radio
                label='The Borg'
                name='radioGroup'
                value='borg'
                checked={selectedVote === 'borg'} 
                onChange={handleVote}
              />
            </Form.Field>
             <Form.Field>
             <Radio
                label='Species 8472'
                name='radioGroup'
                value='8472'
                checked={selectedVote === '8472'} 
                onChange={handleVote}
              />
            </Form.Field>
            <Form.Field>
             <Radio
                label='The Q Continuum'
                name='radioGroup'
                value='theq'
                checked={selectedVote === 'theq'} 
                onChange={handleVote}
              />
            </Form.Field>
       </Form>
     </div>

   )}
}
