export default function Greeting({name}) {
    return(
        <h1>Привіт, {name ? name : "незнайомцю"}!</h1>
    );
}