import React, { useRef } from 'react'
import './calculator.css'
import Button from './components/Button'

function Calculator() {
    const inputRef = useRef(null)

    function clearNumbers() {
        inputRef.current.value = ''
    }

    function setOperation(operation) {
        const correctedOperation = operation === 'x' ? '*' : operation === '÷' ? '/' : operation
        inputRef.current.value += correctedOperation
    }

    function addNumber(n) {
        inputRef.current.value += n
    }

    function doCalc() {
        try {
            const result = eval(inputRef.current.value);
            inputRef.current.value = result;
        } catch (error) {
            inputRef.current.value = 'NaN';
        }
    }

    return (
        <div>
            <main className="calculator">
                <div className="input">
                    <input ref={inputRef} type="text" className="calc-input" readOnly />
                </div>
                <section className="buttons">
                    <Button number="1" click={() => addNumber('1')} />
                    <Button number="2" click={() => addNumber('2')} />
                    <Button number="3" click={() => addNumber('3')} />
                    <Button number="4" click={() => addNumber('4')} />
                    <Button number="5" click={() => addNumber('5')} />
                    <Button number="6" click={() => addNumber('6')} />
                    <Button number="7" click={() => addNumber('7')} />
                    <Button number="8" click={() => addNumber('8')} />
                    <Button number="9" click={() => addNumber('9')} />
                    <Button number="0" click={() => addNumber('0')} />
                    <Button number="+" click={() => setOperation('+')} />
                    <Button number="-" click={() => setOperation('-')} />
                    <Button number="x" click={() => setOperation('x')} />
                    <Button number="÷" click={() => setOperation('÷')} />
                    <Button number="C" click={clearNumbers} />
                    <Button number="=" click={doCalc} />
                </section>
            </main>
        </div>
    )
}

export default Calculator
