import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"

function Ministries() {
    return (
        <div>
            <br/>
            <Container>
            <Link to={"/kids"}>
                    <div className="fadein">
                        <img className="fphimg clock" src="Images/kids.png" />
                        <div className="text">
                            <center>
                                <h1>Kids!</h1>
                            </center>
                        </div>
                    </div>
                </Link>
                <Link to={"/youth"}>
                    <div className="fadein">
                        <img className="fphimg" src="Images/youth.png" />
                        <div className="text">
                            <center>
                                <h1>Youth!</h1>
                            </center>
                        </div>
                    </div>
                </Link>
                <Link to={"/youngadults"}>
                    <div className="fadein">
                        <img className="fphimg" src="Images/youngadults.png" />
                        <div className="text">
                            <center>
                                <h1>Young Adults!</h1>
                            </center>
                        </div>
                    </div>
                </Link>
                <Link to={"/foodpantry"}>
                    <div className="fadein">
                        <img wclassName="fphimg" src="Images/foodpantry.png" />
                        <div className="text">
                            <center>
                                <h1>Food Pantry!</h1>
                            </center>
                        </div>
                    </div>
                </Link>
            </Container>
        </div>
    )
}
export default Ministries