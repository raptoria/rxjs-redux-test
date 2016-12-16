import _ from 'lodash'
import faker from 'faker'
import React from 'react'
import { Accordion } from 'semantic-ui-react'
import styles from './AccordionWidget.css'; 

const panels = _.times(3, () => ({
  title: faker.lorem.sentence(),
  content: faker.lorem.paragraphs(),
}))

const AccordionWidget = () => (
  <Accordion panels={panels} styled className={styles.accordionTheme} />
)

export default AccordionWidget
