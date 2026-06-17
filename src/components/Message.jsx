export default function Message({text}) {
    return(
        <p>{text ? text : "Я не знаю навіть що тобі сказати..."}</p>
    );
}