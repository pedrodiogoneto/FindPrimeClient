import React, { Component } from 'react';

import { list } from './numbers'

class Test extends Component {

    findPrime = () => {
        let numberToFind = '196'

        let numberToFindArray = numberToFind.split('')

        return list.find(number => {
            if( number.length < 3 ) return

            const numberString = number.toString()

            if(numberString.includes(numberToFindArray[0])) {
                if(numberString.includes(numberToFindArray[1]) && numberString.indexOf(numberToFindArray[1]) > numberString.indexOf(numberToFindArray[0])) {
                    if(numberString.includes(numberToFindArray[2]) && numberString.indexOf(numberToFindArray[2]) > numberString.indexOf(numberToFindArray[1])) {
                        return numberString
                    }
                }
            }
        })

    }
    

    render() {
        return (
            <div>

                <h1>!!!!!!!!!!!!!!!!!!!!!!! </h1>

                <h1>{ list.pop() }</h1>

                <h1>{ this.findPrime() }</h1>
            </div>
        );
    }
}

export default Test;
