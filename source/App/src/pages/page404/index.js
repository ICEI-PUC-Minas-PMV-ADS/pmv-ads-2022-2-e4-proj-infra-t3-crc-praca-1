import React, { useEffect, useState, useRef } from "react";
import { Container } from "../../styles/GlobalStyles";
// importei o services de history para controlar a navegacao no front-end
// logo apos isso fica disponivel para ser utilizado 
import { useNavigate } from "react-router-dom";

export default function Page404() {
    // esses contextos sao utilizando 

    const [time, setTime] = useState(3);
    // ele  comeca em 3
    const timeout = useRef(0);
    //  depois eles pegam o timeout courrent 
    //  setTime(3 => 3-1);
    // time 
    const navigate = useNavigate();
    // uma funcao que toda vez que um state for atualizado ele renderiza um novo componente

    useEffect(

        () => {
            clearTimeout(timeout.current);

            timeout.current = setTimeout(
                () => {
                    setTime((t) => t - 1);
                }, 1000
            );
            if (time <= 0) {
                navigate('/');
            }
        }, [time]

    );

    return (
        <Container>
            <h1>
                {time}
            </h1>
        </Container>
    );
}