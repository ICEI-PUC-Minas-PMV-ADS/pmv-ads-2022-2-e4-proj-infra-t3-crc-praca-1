// esse daqui vai ser para as requisicoes http
// criando o componente pre configurado do axios
import axios from 'axios';
// criando uma config do axios onde se trata o baseURL
// Axios

export default axios.create({
    baseURL: "http://localhost:8080"
}); 