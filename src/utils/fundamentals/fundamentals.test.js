import * as fundamentals from './fundamentals'
import * as network from '../network'

network.searchData = jest.fn()

let mockCountry = {
    countryCode: 'SG'
}
let mockBizDate = {
    date: '2017-6-30',
    codes: 'SG',
    offset: 1
}
let mockDateInfo = {
    date: '2017-7-03',
    codes: 'SG'
}
let mockHoliday = {
    codes: 'SG,CHN', 
    years: '2017'
}

describe('utils/fundamentals', () => {
    describe('countries', () => {
        beforeAll(() => {
          network.searchData.mockImplementation(() => Promise.resolve(mockCountry))
        })
        test('with promise', () => {
            let promise = fundamentals.countries({countryCode: 'SG'})
            expect(promise).toBeInstanceOf(Promise)
        })           
        it('calls searchData with the correct parameters', done => {
              fundamentals.countries( {code: 'SG'}, (error, result) => {
              expect(network.searchData).toHaveBeenCalledWith({ AMaaSClass: 'fundamentalCountries', query: { countryCode: [ 'SG' ]} })
              done()
            })
        })
    })

    describe('calcBusinessDate', () => {
        beforeAll(() => {
          network.searchData.mockImplementation(() => Promise.resolve(mockBizDate))
        })
        test('with promise', () => {
            let promise = fundamentals.calcBusinessDate({date: '2017-6-30', codes: 'SG', offset: 1})
            expect(promise).toBeInstanceOf(Promise)
        })           
        it('calls searchData with the correct parameters', done => {
              fundamentals.calcBusinessDate( {date: '2017-6-30', codes: 'SG', offset: 1}, (error, result) => {
              expect(network.searchData).toHaveBeenCalledWith({ AMaaSClass: 'fundamentalBusinessDate', query: {stratDate: ['2017-6-30'], countryCode: ['SG'], offset: [1]} })
              done()
            })
        })
        it('calls searchData with the correct parameters', done => {
              fundamentals.calcBusinessDate( {date: '2017-6-30', codes: ['SG', 'CHN'], offset: 1}, (error, result) => {
              expect(network.searchData).toHaveBeenCalledWith({ AMaaSClass: 'fundamentalBusinessDate', query: {stratDate: ['2017-6-30'], countryCode: ['SG,CHN'], offset: [1]} })
              done()
            })
        })
        it('calls searchData with the correct parameters', done => {
              fundamentals.calcBusinessDate( {date: '2017-6-30', codes: 'SG', offset: 1, invalidDates: '2017-7-01'}, (error, result) => {
              expect(network.searchData).toHaveBeenCalledWith({ AMaaSClass: 'fundamentalBusinessDate', query: {stratDate: ['2017-6-30'], countryCode: ['SG'], offset: [1], invalidDate: ['2017-7-01']} })
              done()
            })
        })
        it('calls searchData with the correct parameters', done => {
              fundamentals.calcBusinessDate( {date: '2017-6-30', codes: 'SG', offset: 1, invalidDates: ['2017-7-01', '2017-7-02']}, (error, result) => {
              expect(network.searchData).toHaveBeenCalledWith({ AMaaSClass: 'fundamentalBusinessDate', query: {stratDate: ['2017-6-30'], countryCode: ['SG'], offset: [1], invalidDate: ['2017-7-01,2017-7-02']} })
              done()
            })
        })
    })

     describe('processDateInfo', () => {
        beforeAll(() => {
          network.searchData.mockImplementation(() => Promise.resolve(mockDateInfo))
        })
        test('with promise', () => {
            let promise = fundamentals.processDateInfo({date: '2017-7-03', codes: 'SG'})
            expect(promise).toBeInstanceOf(Promise)
        })           
        it('calls searchData with the correct parameters', done => {
              fundamentals.processDateInfo( {date: '2017-7-03', codes: 'SG'}, (error, result) => {
              expect(network.searchData).toHaveBeenCalledWith({ AMaaSClass: 'fundamentalDateInfo', query: {stratDate: ['2017-7-03'], countryCode: ['SG']} })
              done()
            })
        })
        it('calls searchData with the correct parameters', done => {
              fundamentals.processDateInfo( {date: '2017-7-03', codes: ['SG', 'CHN']}, (error, result) => {
              expect(network.searchData).toHaveBeenCalledWith({ AMaaSClass: 'fundamentalDateInfo', query: {stratDate: ['2017-7-03'], countryCode: ['SG,CHN']} })
              done()
            })
        })
    })

         describe('holidays', () => {
        beforeAll(() => {
          network.searchData.mockImplementation(() => Promise.resolve(mockHoliday))
        })
        test('with promise', () => {
            let promise = fundamentals.holidays({codes: 'SG', years: 2017})
            expect(promise).toBeInstanceOf(Promise)
        })
        it('calls searchData with the correct parameters', done => {
              fundamentals.holidays( {codes: ['SG'], years: 2017}, (error, result) => {
              expect(network.searchData).toHaveBeenCalledWith({ AMaaSClass: 'fundamentalHoliday', query: {countryCode: ['SG'], year: [2017]} })
              done()
            })
        })           
        it('calls searchData with the correct parameters', done => {
              fundamentals.holidays( {codes: ['SG','CHN'], years: 2017}, (error, result) => {
              expect(network.searchData).toHaveBeenCalledWith({ AMaaSClass: 'fundamentalHoliday', query: {countryCode: ['SG,CHN'], year: [2017]} })
              done()
            })
        })       
        it('calls searchData with the correct parameters', done => {
              fundamentals.holidays( {codes: ['SG'], years: [2017, 2018]}, (error, result) => {
              expect(network.searchData).toHaveBeenCalledWith({ AMaaSClass: 'fundamentalHoliday', query: {countryCode: ['SG'], year: ['2017,2018']} })
              done()
            })
        })
    })
})

