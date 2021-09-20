import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import ShowList from './ShowList'
import demoData from './testModel.json'


describe('Show List', () => {
    test("Skeleton is shown while list loading", async () => {
        const fnClickOnItem = jest.fn()
        const defaultSkeletonItems = 6
    
        const { findAllByRole } = render(<ShowList showList={demoData.map(item => item.show)} onClickShow={fnClickOnItem} loading={true} />)
    
        const items = await findAllByRole('progressbar')
    
        expect(items).toHaveLength(defaultSkeletonItems)
    })
    
    test("is rendered happy", async () => {
        const fnClickOnItem = jest.fn()
        
        const { findAllByRole } = render(<ShowList showList={demoData.map(item => item.show)} onClickShow={fnClickOnItem} loading={false} />)
    
        const items = await findAllByRole('listitem')
    
        expect(items).toHaveLength(3)
    })
    
    test('on click item', async () => {    
        const fnClickOnItem = jest.fn()
    
        const { findAllByRole } = render(<ShowList showList={demoData.map(item => item.show)} onClickShow={fnClickOnItem} loading={false} />)
    
        const items = await findAllByRole('listitem')
 
        fireEvent.click(items[0])

        expect(fnClickOnItem).toHaveBeenCalledTimes(1)
    })    
})