import billede from "../assets/birdphoto.jpg"
export default function Hej(props){


    return(
        <>
        <h2>Hej med dig, {props.navn}. Du er {props.alder} år.  </h2>
        <img src={billede} alt="billede af en fugl." />
        </>
    )
}