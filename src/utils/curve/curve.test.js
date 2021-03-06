import * as api from '../../exports/api'
import * as network from '../network'

network.retrieveData = jest.fn()

api.config({
  stage: 'staging'
})

describe('retrieve', () => {
  beforeAll(() => {
    network.retrieveData.mockImplementation(() =>
      Promise.resolve('curve')
    )
  })
  test('with promise', () => {
    let promise = api.Curve.retrieve({ 
      AMId: 88,
      assetIds: '358.HK',
      businessDate: '2016-01-01',
    })
    expect(promise).toBeInstanceOf(Promise)
  })
  it('calls retrieveData with correct params', done => {
    api.Curve.retrieve(
      { 
        AMId: 88,
        assetIds: '358.HK',
        businessDate: '2016-01-01',
      },
      (error, result) => {
        expect(network.retrieveData).toHaveBeenCalledWith({
          AMaaSClass: "curve",
          AMId: 88,
          resourceId: "2016-01-01/358.HK" 
          })
        done()
      }
    )
  })
})
