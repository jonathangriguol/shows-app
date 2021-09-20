import React from 'react'
import ShowList from './ShowList'
import { action } from '@storybook/addon-actions'
import demoData from './testModel.json'

export default {
    title: 'ShowList',
    component: ShowList
}

export const ShowListExample = () => <ShowList showList={demoData.map(item => item.show)} onClickShow={action('Show clicked')} loading={false} />