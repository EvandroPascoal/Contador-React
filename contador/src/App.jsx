
import Patrick333 from '../src/assets/fundo.jpg'
import Bob333 from '../src/assets/5438748.jpg'
import "./App.css"

import { useState } from "react"

export default function App() {

    const [numero , setNumero] = useState (0)

    function aumentar(){
        setNumero(numero + 1)
    }
    function diminuir(){
        setNumero(numero - 1)
    }

    return (
        <section>
            <img className='foto' src={Bob333} alt="" srcset="" />
            <div className="caixa">
            {/* <img src={Patrick333} alt="" srcset="" /> */}
            <h1>CONTADOR</h1>
            <p id="result">{numero}</p>
            <button className="menos" onClick={diminuir}>MENOS</button>
            <button className="mais" onClick={aumentar}>MAIS</button>
            </div>
        </section>
    )


}
