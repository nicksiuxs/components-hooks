import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import RecibirProps from './RecibirProps'

const MiPrimerComponente = () => {
    const [num1, setNum1] = useState("")
    const [num2, setNum2] = useState("")
    const [total, setTotal] = useState("")

    const handleNume1 = (e) => setNum1(e.currentTarget.value)
    const handleNume2 = (e) => setNum2(e.currentTarget.value)
    const handleSumar = (e) => {
        e.preventDefault();
        if (num1 !== "" && num2 !== "") {
            setTotal((parseInt(num1) + parseInt(num2)))
        } else {
            console.log("los campos estan vacíos")
        }
    }

    useEffect(() => {
        console.log("Hola")
    }, [])

    return (
        <>
            <h1>Formulario Calculadora</h1>
            <Form onSubmit={handleSumar}>

                <Form.Control type="number" value={num1} onChange={handleNume1} placeholder="ingrese el primer número" />
                <Form.Control type="number" value={num2} onChange={handleNume2} placeholder="ingrese el segundo número" />
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            {total !== "" ? <RecibirProps resultado={total}/> : null}

        </>
    )
}

export default MiPrimerComponente
